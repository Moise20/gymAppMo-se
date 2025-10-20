import { Component, Input } from '@angular/core';
import { Card } from '../../../shared/ui/card/card';
export interface Equipment { title:string; img:string; }
@Component({
  selector: 'app-equipment-card',
  standalone: true,
  imports: [Card],
  templateUrl: './equipment-card.html',
  styleUrl: './equipment-card.css'
})
export class EquipmentCard {
 @Input({ required: true }) item!: Equipment; 
}
