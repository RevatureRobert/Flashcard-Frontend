import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuestionComponent } from './components/question/question.component';
import { AnswerComponent } from './components/answer/answer.component';
import { HeaderComponent } from './components/header/header.component';
import { ParticipantLoginComponent } from './components/participant-login/participant-login.component';

@NgModule({
  declarations: [
    AppComponent,
    QuestionComponent,
    AnswerComponent,
    HeaderComponent,
    ParticipantLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
