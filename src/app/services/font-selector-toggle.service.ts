import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FontSelectorToggleService {
  #setFontSelectToggle = signal<boolean>(false);
  public getFontSelectToggle = this.#setFontSelectToggle.asReadonly()

  public toggleFontSelect() {
    this.#setFontSelectToggle.set(!this.#setFontSelectToggle())
  }

}
