import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Quiz } from '../../services/quiz';

@Component({
  imports: [RouterLink],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home {
  quiz = inject(Quiz)
}
