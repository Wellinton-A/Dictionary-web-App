import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalFontService {
  #setFont = signal<string>('inter')
  public getFont = this.#setFont.asReadonly()

  public setGlobalFont(font: string) {
    this.#setFont.set(font)
  }
}
