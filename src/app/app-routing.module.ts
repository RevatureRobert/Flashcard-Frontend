import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlashcardListComponent } from './components/flashcard-list/flashcard-list.component';
import { QuestionAnswerCardComponent } from './components/question-answer-card/question-answer-card.component';

const routes: Routes = [
  { path: 'flashcard', component: QuestionAnswerCardComponent},
  { path: 'list', component: FlashcardListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
