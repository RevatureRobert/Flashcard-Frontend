import { Component, Input, OnInit, Output } from '@angular/core';
import { QuestionAndAnswer } from '../../models/QuestionAndAnswer';

@Component({
  selector: 'app-question-answer-card',
  templateUrl: './question-answer-card.component.html',
  styleUrls: ['./question-answer-card.component.css'],
})
export class QuestionAnswerCardComponent implements OnInit {
  @Input() questionAnswer!: QuestionAndAnswer;
  @Input('index') selection!: number;
  // @Output() move: number;
  showAnswer: 'question' | 'answer' = 'question';

  constructor() {}

  ngOnInit(): void {}

  toggle() {
    this.showAnswer = this.showAnswer === 'question' ? 'answer' : 'question';
  }
}
