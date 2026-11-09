import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { QuizService } from '../../services/quiz';

@Component({
  imports: [RouterLink],
  selector: 'app-result',
  styleUrl: './result.css',
  templateUrl: './result.html',
})
export class Result {
  quiz = inject(QuizService);
  private router = inject(Router);

  jogarNovamente(){
    this.quiz.iniciarOuReiniciarJogo();
    this.router.navigate(['/'])
  }
}
