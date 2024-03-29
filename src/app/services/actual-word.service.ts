import { Injectable, signal } from '@angular/core';
import { Word } from '../../interfaces/word.interface';
import { ErrorMessage } from '../../interfaces/error.interface';

@Injectable({
  providedIn: 'root'
})
export class ActualWordService {
  #setWord = signal<null | Word>(null)
  #setError = signal<null | ErrorMessage>(null)
  #setAudio = signal<null | string>(null)
  #setIsLoading = signal<boolean>(false)

  public getWord = this.#setWord.asReadonly()
  public getError = this.#setError.asReadonly()
  public getAudio = this.#setAudio.asReadonly()
  public getIsLoading = this.#setIsLoading.asReadonly()

  public handleWord(word: Word | null, error: ErrorMessage | null) {
    this.#setIsLoading.set(true)
    this.#setWord.set(word)
    this.#setError.set(error)
    setTimeout(() => {
      this.#setIsLoading.set(false)
    }, 1300)
  }

  public handleAudio() {
    for(let i = 0; this.getWord()?.phonetics.length! > i; i++ ) {
      if(this.getWord()?.phonetics[i].audio.length! > 1) {
        return this.#setAudio.set(this.getWord()?.phonetics[i].audio!)
      }
    }
    this.#setAudio.set(null)
  }
}
