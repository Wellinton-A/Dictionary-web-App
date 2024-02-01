import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, ElementRef, QueryList, ViewChild, ViewChildren, inject } from '@angular/core';
import { DarkModeService } from '../../services/dark-mode.service';
import { FontSelectorToggleService } from '../../services/font-selector-toggle.service';
import { GlobalFontService } from '../../services/global-font.service';

@Component({
  selector: 'font-selector',
  standalone: true,
  imports: [],
  templateUrl: './font-selector.component.html',
  styleUrl: './font-selector.component.scss',
  animations: [
    trigger('darkModeSelect', [
      state('true', style({
        backgroundColor: '#050505'
      })),
      state('false', style({
        backgroundColor: '#FFFFFF'
      })),
      transition('false <=> true', animate('0.5s'))
    ]),
    trigger('darkModeText', [
      state('true', style({
        color: '#FFFFFF'
      })),
      state('false', style({
        color: '#2D2D2D'
      })),
      transition('false <=> true', animate('0.5s'))
    ]),
    trigger('darkModeShadow', [
      state('true', style({
        boxShadow: '5px 0 30px rgba(164,69,237)'
      })),
      state('false', style({
        boxShadow: '5px 0 30px rgba(0,0,0,0.1)'
      })),
      transition('false <=> true', animate('0.5s'))
    ]),
    trigger('fontSelector', [
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
export class FontSelectorComponent {
  @ViewChildren('fontElement') fontElement?: QueryList<ElementRef>

  #darkModeService = inject(DarkModeService)
  #fontSelectorService = inject(FontSelectorToggleService)
  #fontService = inject(GlobalFontService)

  public darkMode = this.#darkModeService.getDarkMode
  public fontSelector = this.#fontSelectorService.getFontSelectToggle
  public font = this.#fontService.getFont

  public selectFont(event: MouseEvent) {
    const element = event.target as HTMLElement
    const fontClass = element.getAttribute('class')
    if (fontClass) {
      this.#fontService.setGlobalFont(fontClass)
    }

    this.#fontSelectorService.toggleFontSelect()
  }
}
