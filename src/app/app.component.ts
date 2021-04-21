import { Component } from '@angular/core';
import { QuestionAndAnswer } from './models/QuestionAndAnswer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'flashcard-frontend';

   question: QuestionAndAnswer = JSON.parse(`{
    "id": 145,
    "question": "What is the Collections class?",
    "answer": "Java collection class is used exclusively with static methods that operate on or return collections.",
    "referenceLink": {
        "id": 21,
        "address": "https://www.javatpoint.com/java-collections-class"
    },
    "responsible": {
        "id": 9,
        "name": "Joey Elmblad"
    },
    "topic": {
        "id": 2,
        "topic": "Java"
    }
}`);
}
