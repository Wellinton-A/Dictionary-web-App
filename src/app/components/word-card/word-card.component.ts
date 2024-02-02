import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, inject } from '@angular/core';
import { DarkModeService } from '../../services/dark-mode.service';
import { NgOptimizedImage } from '@angular/common';
import { ActualWordService } from '../../services/actual-word.service';
import { Word } from '../../../interfaces/word.interface';

@Component({
  selector: 'word-card',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './word-card.component.html',
  styleUrl: './word-card.component.scss',
  animations: [
    trigger('darkModeText', [
      state('true', style({
        color: '#FFFFFF'
      })),
      state('false', style({
        color: '#2D2D2D'
      })),
      transition('false <=> true', animate('0.5s'))
    ]),
    trigger('darkModeLine', [
      state('true', style({
        borderColor: '#3A3A3A'
      })),
      state('false', style({
        borderColor: '#E9E9E9'
      })),
      transition('false <=> true', animate('0.5s')),
    ])
  ]
})
export class WordCardComponent {
  #darkModeService = inject(DarkModeService)
  #wordService = inject(ActualWordService)

  public darkMode = this.#darkModeService.getDarkMode
  public errorMessage = this.#wordService.getError
  public word = this.#wordService.getWord
  public audio = this.#wordService.getAudio

  async playAudio() {
    this.#wordService.handleAudio()
    const newAudio = new Audio();
    newAudio.src = this.audio()!
    newAudio.load()
    await newAudio.play()
  }
}
