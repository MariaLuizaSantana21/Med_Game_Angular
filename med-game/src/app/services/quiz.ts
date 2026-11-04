import { Service, signal, computed } from '@angular/core';
import { Pergunta } from '../models/pergunta.model';

@Service()
export class QuizService {
    perguntas = signal<Pergunta[]>(
        [{id: 1, pergunta: 'Quantos ossos o corpo humano tem?', alternativas: ['a) 207', 'b) 200', 'c) 198', 'd)206'], resposta: 3, explicacao: 'O corpo humano adulto possui 206 ossos.' },
         {id: 2, pergunta: 'Qual é o instrumento usado pelos cirurgiões para fazer incisões?', alternativas: ['a) Seringa', 'b) Bisturi', 'c) Gase', 'd)Agulha'], resposta: 1, explicacao: 'O instrumento usado pelos cirurgiões para fazer incisões é o bisturi.' }
        ]
    );

    indiceAtual = signal(0);
    pontuacao = signal(0);
    statusJogo = signal('inicio')
    perguntaAtual = computed(() => this.perguntas()[this.indiceAtual()]);

    iniciarOuReiniciarJogo(){
        this.pontuacao.set(0);
        this.indiceAtual.set(0);
        this.statusJogo.set('jogando');
    }

    responder(indice: number){
        let pergunta = this.perguntaAtual();
        const totalPerguntas = this.perguntas().length;
        if(indice === pergunta.resposta && this.indiceAtual()){
            this.pontuacao.update(pont => pont + 1);
            this.indiceAtual.update(ind => ind + 1);
        } else{
            this.indiceAtual.update(ind => ind + 1);
        }
        if(this.indiceAtual() === totalPerguntas){
            this.statusJogo.set('finalizado');
        }
    }
}
