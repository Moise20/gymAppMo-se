import { Component, Input } from '@angular/core';
import { Button } from '../../../shared/ui/button/button';
import { Card } from '../../../shared/ui/card/card';
export interface Program {
  id:number; title:string; desc:string; img:string;
}
@Component({
  selector: 'app-program-card',
   standalone: true,
  imports: [Card, Button],
  templateUrl: './program-card.html',
  styleUrl: './program-card.css'
})
export class ProgramCard {
  @Input() program?: Program;
}
