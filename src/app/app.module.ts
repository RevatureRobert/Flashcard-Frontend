import { LayoutModule } from '@angular/cdk/layout';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnswerComponent } from './components/answer/answer.component';
import { FlashNavComponent } from './components/flash-nav/flash-nav.component';
import { FlashcardListDataSource } from './components/flashcard-list/flashcard-list-datasource';
import { FlashcardListComponent } from './components/flashcard-list/flashcard-list.component';
import { QuestionAnswerCardComponent } from './components/question-answer-card/question-answer-card.component';
import { QuestionComponent } from './components/question/question.component';
import { CacheInterceptor } from './interceptors/cache.interceptor';
import { DomainPipe } from './pipes/domain/domain.pipe';
import { FlashcardService } from './services/flashcard.service';

@NgModule({
  declarations: [
    AppComponent,
    QuestionComponent,
    AnswerComponent,
    DomainPipe,
    QuestionAnswerCardComponent,
    FlashNavComponent,
    FlashcardListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    LayoutModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    HttpClientModule
  ],
  providers: [FlashcardService, FlashcardListDataSource, {provide: HTTP_INTERCEPTORS, useClass: CacheInterceptor, multi: true}],
  bootstrap: [AppComponent],
})
export class AppModule {
  // to force eager loading
  constructor(private flashcard: FlashcardService, private dataSource: FlashcardListDataSource){
    
  }
}
