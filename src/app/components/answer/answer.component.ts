import { Component, Input, OnInit } from '@angular/core';
import { QuestionAndAnswer } from '../../models/QuestionAndAnswer';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})
export class AnswerComponent implements OnInit {

  @Input() answer!: QuestionAndAnswer;
  constructor() { }

  ngOnInit(): void {
  }

}
