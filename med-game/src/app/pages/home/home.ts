import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { QuizService } from '../../services/quiz';

@Component({
  imports: [RouterLink],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home {
  quiz = inject(QuizService)
  private router = inject(Router);

  iniciarQuiz(){
    this.quiz.iniciarOuReiniciarJogo();
    this.router.navigate(['/quiz'])
  }
}
