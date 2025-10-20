import { Component } from '@angular/core';
import { EquipmentList } from './equipment-list/equipment-list';

@Component({
  selector: 'app-equipment',
   standalone: true,
  imports: [EquipmentList],
  templateUrl: './equipment.html',
  styleUrl: './equipment.css'
})
export class Equipment {

}
