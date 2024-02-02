import { Injectable, inject, signal } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, shareReplay } from 'rxjs';
import { Word } from '../../interfaces/word.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  #url = signal(environment.apiDict)
  #http = inject(HttpClient)

  public getWord(word: string): Observable<Word[]> {
    return this.#http.get<Word[]>(`${this.#url()}${word}`).pipe(
      shareReplay()
    )
  }
}
