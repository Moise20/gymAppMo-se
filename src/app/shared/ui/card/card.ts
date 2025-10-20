import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [],
   standalone: true,
  templateUrl: './card.html',
  styleUrl: './card.css'
})
export class Card {
  @Input() title = '';
  @Input() desc = '';
  @Input() img = '';
}
