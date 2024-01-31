import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { animate, animateChild, group, query, state, style, transition, trigger } from '@angular/animations';
import { DarkModeService } from './services/dark-mode.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  animations: [
    trigger('darkModeToggle', [
      state('true', style({
        backgroundColor: '#050505'
      })),
      state('false', style({
        backgroundColor: '#FFFFFF'
      })),
      transition('false <=> true', animate('0.5s'))
    ]),
    trigger('darkModeToggleGroup', [
      transition('false <=> true', [
        group([
          query('@darkModeToggleTextHeader', animateChild(), { optional: true }),
          query('@darkModeSearchBarTxt', animateChild(), { optional: true }),
          query('@darkModeSearchBarBg', animateChild(), { optional: true }),
          query('@darkModeToggleRect', animateChild(), { optional: true }),
          query('@darkModeMoonIcon', animateChild(), { optional: true }),
          query('@darkModeToggle', animateChild(), { optional: true }),
        ])
      ])
    ]),
  ]
})
export class AppComponent {
  title = 'dictionary-web-app';

  #darkModeService = inject(DarkModeService)

  public darkMode = this.#darkModeService.getDarkMode
}
