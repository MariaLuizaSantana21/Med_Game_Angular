import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { QuizService } from '../../services/quiz';

@Component({
  imports: [RouterLink],
  selector: 'app-quiz',
  styleUrl: './quiz.css',
  templateUrl: './quiz.html',
})
export class Quiz {
  quiz = inject(QuizService);
}
