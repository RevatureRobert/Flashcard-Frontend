import { Component, Input, OnInit, Output } from '@angular/core';
import { QuestionAndAnswer } from '../../models/QuestionAndAnswer';
import { FlashcardService } from '../../services/flashcard.service';

@Component({
  selector: 'app-question-answer-card',
  templateUrl: './question-answer-card.component.html',
  styleUrls: ['./question-answer-card.component.css'],
})
export class QuestionAnswerCardComponent implements OnInit {
  showAnswer: 'question' | 'answer' = 'question';

  constructor(private service: FlashcardService) {}
  questionAnswer: QuestionAndAnswer = this.service.currentQuestion
  ngOnInit(): void {}

  toggle() {
    this.showAnswer = this.showAnswer === 'question' ? 'answer' : 'question';
  }
}
