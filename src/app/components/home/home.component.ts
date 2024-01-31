import { Component, inject } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { DarkModeService } from '../../services/dark-mode.service';
import { SearchBarComponent } from '../search-bar/search-bar.component';
import { WordCardComponent } from '../word-card/word-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    SearchBarComponent,
    WordCardComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
