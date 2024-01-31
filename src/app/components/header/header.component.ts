import { animate, animateChild, group, query, state, style, transition, trigger } from '@angular/animations';
import { NgOptimizedImage } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { DarkModeService } from '../../services/dark-mode.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  animations: [
    trigger('darkModeToggle', [
      state('true', style({
        transform: 'translateX(140%)'
      })),
      state('false', style({
        transform: 'translateX(0)'
      })),
      transition('false <=> true', animate('0.5s'))
    ]),
    trigger('darkModeToggleRect', [
      state('true', style({
        backgroundColor: '#A445ED'
      })),
      state('false', style({
        backgroundColor: '#979797'
      })),
      transition('false <=> true', animate('0.5s'))
    ]),
    trigger('darkModeToggleTextHeader', [
      state('true', style({
        color: '#FFFFFF'
      })),
      state('false', style({
        color: '#2D2D2D'
      })),
      transition('false <=> true', animate('0.5s'))
    ])
  ]
})
export class HeaderComponent {
  #darkModeService = inject(DarkModeService)

  public darkMode = this.#darkModeService.getDarkMode

  public darkModeToggle() {
    this.#darkModeService.toggleDarkMode()
  }
}
