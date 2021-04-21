import { Component, Input, OnInit } from '@angular/core';
import { QuestionAndAnswer } from '../../models/QuestionAndAnswer';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  // question could potentially be undefined. The exclamation mark
  //    will mark it as a mandatory field
  @Input() question!: QuestionAndAnswer;
  constructor(){}
  
  ngOnInit(): void {
  }

}
