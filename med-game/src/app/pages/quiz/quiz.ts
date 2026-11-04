import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { QuizService } from '../../services/quiz';

@Component({
  imports: [RouterLink],
  selector: 'app-quiz',
  styleUrl: './quiz.css',
  templateUrl: './quiz.html',
})
export class Quiz {
  quiz = inject(QuizService);
  private router = inject(Router);

  escolherResposta(indice: number){
    this.quiz.responder(indice);
    if(this.quiz.statusJogo()=== 'finalizado'){
      this.router.navigate(['/result']);
    }
  }
}
