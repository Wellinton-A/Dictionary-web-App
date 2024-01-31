import { animate, state, style, transition, trigger } from '@angular/animations';
import { NgOptimizedImage } from '@angular/common';
import { Component, inject } from '@angular/core';
import { DarkModeService } from '../../services/dark-mode.service';

@Component({
  selector: 'search-bar',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.scss',
  animations: [
    trigger('darkModeSearchBarBg', [
      state('true', style({
        backgroundColor: '#1F1F1F',
      })),
      state('false', style({
        backgroundColor: '#F4F4F4',
      })),
      transition('false <=> true', animate('0.5s'))
    ]),
    trigger('darkModeSearchBarTxt', [
      state('true', style({
        color: '#FFFFFF'
      })),
      state('false', style({
        color: '#2D2D2D'
      })),
      transition('false <=> true', animate('0.5s'))
    ]),
  ]
})
export class SearchBarComponent {
  #darkModeService = inject(DarkModeService)

  public darkMode = this.#darkModeService.getDarkMode
}
