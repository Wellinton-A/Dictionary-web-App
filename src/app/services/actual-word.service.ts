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
    console.log(this.#setWord())
    setTimeout(() => {
      this.#setIsLoading.set(false)
    }, 2000)
  }

  public handleAudio() {
    for(let i = 0; this.getWord()?.phonetics.length! > i; i++ ) {
      console.log(this.#setAudio())
      if(this.getWord()?.phonetics[i].audio.length! > 1) {
        return this.#setAudio.set(this.getWord()?.phonetics[i].audio!)
      }
    }
    this.#setAudio.set(null)
  }
}
