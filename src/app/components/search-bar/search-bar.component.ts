import { animate, state, style, transition, trigger } from '@angular/animations';
import { NgOptimizedImage } from '@angular/common';
import { Component, inject } from '@angular/core';
import { DarkModeService } from '../../services/dark-mode.service';
import { ApiService } from '../../services/api.service';
import { ActualWordService } from '../../services/actual-word.service';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'search-bar',
  standalone: true,
  imports: [
    NgOptimizedImage,
    ReactiveFormsModule
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
  #apiService = inject(ApiService)
  #wordService = inject(ActualWordService)

  public darkMode = this.#darkModeService.getDarkMode
  public word = new FormControl<string>('')

  public searchWord() {
    this.#apiService.getWord(this.word.value!).subscribe({
      next: next => this.#wordService.handleWord(next[0], null),
      error: error => this.#wordService.handleWord(null, error.error)
    })
  }
}
