import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { QuestionAndAnswer } from '../models/QuestionAndAnswer';
import { Topic } from '../models/Topic';
import { environment } from '../../environments/environment';

@Injectable()
export class FlashcardService {
  // a list of topics, lazily loaded
  private _topics!: Topic[];
  // a list of question and answers, lazily loaded
  private _questions!: QuestionAndAnswer[];
  // the current index of the list of questions, we keep track of the questions in the flashcards
  private currentIndex: number = 0;
  // the current page of the questions
  private currentPage: number = 0;

  private _flashcardQuestions: QuestionAndAnswer[] = [];

  constructor(private apiClient: HttpClient) {
    console.log("constructed");
    this.questions().then(q => this._flashcardQuestions=q.filter(i => i.answer))
  }

  // get the list of topics, initialize if undefined
  get topics(): Topic[] {
    if (!this._topics) {
      this.apiClient
        .get<Topic[]>(environment.apiUrl + 'topics')
        .toPromise()
        .then((t) => (this._topics = t));
    }
    return this._topics;
  }

  // get a list of all questions, uses the state of the current page and offset is unimplemented, 25 by default
  async questions(): Promise<QuestionAndAnswer[]> {
    if (!this._questions) {
      const qs = await this.apiClient
        .get<QuestionAndAnswer[]>(environment.apiUrl + 'question', {
          params: { page: this.currentPage.toString(), offset: '25' },
        })
        .toPromise();
      this.currentIndex = 0;
      this._questions = qs;
      return qs;
    }
    return new Promise<QuestionAndAnswer[]>((res, rej) => res(this._questions));
  }

  // returns the question at the current index, given by state, of the question array
  get currentQuestion(): QuestionAndAnswer {
    return this._flashcardQuestions[this.currentIndex];
  }

  // increments the current index if necessary and returns the new question
  nextQuestion(): QuestionAndAnswer {
    return this._flashcardQuestions[
      this.currentIndex == this._flashcardQuestions.length - 1
        ? this.currentIndex
        : ++this.currentIndex
    ];
  }

  // decrements the current index if necessary and returns the new question
  previousQuestion(): QuestionAndAnswer {
    return this._flashcardQuestions[
      this.currentIndex == 0 ? this.currentIndex : --this.currentIndex
    ];
  }

  // increments the page and fetches new information
  //  TODO: check for page count, needs api update
  async nextPage(): Promise<QuestionAndAnswer[]> {
    this.currentPage++;
   return this.questions();
  }

  // decrements the page index and fetches new information
  async previousPage(): Promise<QuestionAndAnswer[]> {
    if (this.currentPage == 0) {
      return this._questions;
    }
    this.currentPage--;
    return this.questions();
  }

  // gathers the topic name and fetches the questions according to it
  getQuestionsByTopic(topic: string): QuestionAndAnswer[] {
    this.apiClient
      .get<QuestionAndAnswer[]>(environment.apiUrl + `/question/${topic}`, {
        params: { page: (this.currentPage = 0).toString(), offset: '25' },
      })
      .toPromise()
      .then((q) => (this._questions = q));
    return this._questions;
  }

}
