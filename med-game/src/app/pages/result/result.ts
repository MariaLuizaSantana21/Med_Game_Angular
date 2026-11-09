import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  imports: [RouterLink],
  selector: 'app-result',
  styleUrl: './result.css',
  templateUrl: './result.html',
})
export class Result {
  private router = inject(Router);
}
