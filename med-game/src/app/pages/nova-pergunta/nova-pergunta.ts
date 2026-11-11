import { inject, Component, signal } from '@angular/core';
import { form, FormField } from '@angular/forms/signals';
import { QuizService } from '../../services/quiz';
import { Pergunta } from '../../models/pergunta.model';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormField, FormsModule],
  selector: 'app-nova-pergunta',
  styleUrl: './nova-pergunta.css',
  templateUrl: './nova-pergunta.html',
})
export class NovaPergunta {
  quiz = inject(QuizService);

  

  novaPergunta = signal<Pergunta>({
    id: 0, 
    pergunta: '', 
    alternativas:[], 
    resposta: 0, 
    explicacao: '' 
  });
  meuForm = form(this.novaPergunta);


}
