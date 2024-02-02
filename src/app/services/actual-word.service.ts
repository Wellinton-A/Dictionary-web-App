import { Injectable, signal } from '@angular/core';
import { Word } from '../../interfaces/word.interface';
import { ErrorMessage } from '../../interfaces/error.interface';

@Injectable({
  providedIn: 'root'
})
export class ActualWordService {
  #setWord = signal<null | Word>(null)
  #setError = signal<null | ErrorMessage>(null)

  public getWord = this.#setWord.asReadonly()
  public getError = this.#setError.asReadonly()

  public handleWord(word: Word | null, error: ErrorMessage | null) {
    this.#setWord.set(word)
    this.#setError.set(error)
    console.log(this.#setWord())
    console.log(this.#setError())
  }
}
