import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuestionComponent } from './components/question/question.component';
import { AnswerComponent } from './components/answer/answer.component';
import { HeaderComponent } from './components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import { DomainPipe } from './pipes/domain/domain.pipe';
import { QuestionAnswerCardComponent } from './components/question-answer-card/question-answer-card.component'
@NgModule({
  declarations: [
    AppComponent,
    QuestionComponent,
    AnswerComponent,
    HeaderComponent,
    DomainPipe,
    QuestionAnswerCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
