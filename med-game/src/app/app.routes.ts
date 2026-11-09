import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { NovaPergunta } from './pages/nova-pergunta/nova-pergunta';
import { Quiz } from './pages/quiz/quiz';
import { Result } from './pages/result/result';


export const routes: Routes = [
    { path: '', component: Home, title: 'Inicio'},
    { path: 'quiz', component: Quiz, title: 'Quiz'},
    { path: 'result', component: Result, title: 'Resultados'},
    { path: 'nova-pergunta', component: NovaPergunta, title: 'Nova pergunta'},
];
