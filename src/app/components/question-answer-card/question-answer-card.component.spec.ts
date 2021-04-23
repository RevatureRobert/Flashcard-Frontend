import { componentFactoryName } from '@angular/compiler';
import { Component, Input } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCardModule } from '@angular/material/card';
import { By } from '@angular/platform-browser';
import { QuestionAndAnswer } from '../../models/QuestionAndAnswer';
import { FlashcardService } from '../../services/flashcard.service';

import { QuestionAnswerCardComponent } from './question-answer-card.component';

describe('QuestionAnswerCardComponent', () => {
  let component: QuestionAnswerCardComponent;
  let fixture: ComponentFixture<QuestionAnswerCardComponent>;

  let FlashcardServiceMock: Partial<FlashcardService> = {
    currentQuestion: {
      id: 0,
      question: 'testing question',
      answer: 'testing answer',
      topic: {
        id: 0,
        topic: '',
      },
      responsible: {
        id: 0,
        name: '',
      },
      referenceLink: {
        address: '',
        id: 0,
      },
    },
  };
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        QuestionAnswerCardComponent,
        AppQuestionMockComponent,
        AppAnswerMockComponent,
      ],
      providers: [
        { provide: FlashcardService, useValue: FlashcardServiceMock },
      ],
      imports: [MatCardModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionAnswerCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should render the question when rendered', () => {
    expect(
      fixture.debugElement.query(By.css('#question')).nativeElement['innerText']
    ).toContain('testing question');
  });
  it('should show answer when button is clicked', async () => {
    fixture.debugElement
      .query(By.css('button'))
      .triggerEventHandler('click', undefined);
    fixture.whenStable().then(() => {
      expect(
        fixture.debugElement.query(By.css('#answer')).nativeNode['innerText']
      ).toContain('testing answer');
      expect(fixture.debugElement.query(By.css('#question'))).toBeFalse();
    });
  });
});  

@Component({
  selector: 'app-question',
  template: ` <p id="question">{{ question.question }}</p> `,
})
class AppQuestionMockComponent {
  @Input() question!: QuestionAndAnswer;
}

@Component({
  selector: 'app-answer',
  template: ` <p id="answer">{{ answer.answer }}</p> `,
})
class AppAnswerMockComponent {
  @Input() answer!: QuestionAndAnswer;
}
