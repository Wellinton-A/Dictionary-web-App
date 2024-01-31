import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DarkModeService {

  #setDarkMode = signal<boolean>(false)
  public getDarkMode = this.#setDarkMode.asReadonly()

  public toggleDarkMode() {
    this.#setDarkMode.set(!this.#setDarkMode());
  }
}
