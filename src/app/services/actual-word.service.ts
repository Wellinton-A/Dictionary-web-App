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

  public getWord = this.#setWord.asReadonly()
  public getError = this.#setError.asReadonly()
  public getAudio = this.#setAudio.asReadonly()

  public handleWord(word: Word | null, error: ErrorMessage | null) {
    this.#setWord.set(word)
    this.#setError.set(error)
    console.log(this.#setWord())
    console.log(this.#setError())
  }

  public handleAudio() {
    for(let i = 0; this.getWord()?.phonetics.length! > i; i++ ) {
      if(this.getWord()?.phonetics[i].audio.length! > 1) {
        this.#setAudio.set(this.getWord()?.phonetics[i].audio!)
      }
    }
  }
}
