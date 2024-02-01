import { Component, inject } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { DarkModeService } from '../../services/dark-mode.service';
import { SearchBarComponent } from '../search-bar/search-bar.component';
import { WordCardComponent } from '../word-card/word-card.component';
import { FontSelectorToggleService } from '../../services/font-selector-toggle.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    SearchBarComponent,
    WordCardComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  animations: [
    trigger('modal', [
      state('true', style({
        display: 'flex'
      })),
      state('false', style({
        display: 'none'
      })),
      transition('false <=> true', animate('0s'))
    ]),
  ]
})
export class HomeComponent {
  #fontSelectorService = inject(FontSelectorToggleService)

  public fontSelector = this.#fontSelectorService.getFontSelectToggle

  public selectFont() {
    this.#fontSelectorService.toggleFontSelect()
  }
}
