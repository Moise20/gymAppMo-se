import { Component } from '@angular/core';
import { Equipment, EquipmentCard } from '../equipment-card/equipment-card';
import { NgFor } from '@angular/common';


@Component({
  selector: 'app-equipment-list',
   standalone: true,
  imports: [NgFor, EquipmentCard],
  templateUrl: './equipment-list.html',
  styleUrl: './equipment-list.css'
})
export class EquipmentList {
data: Equipment[] = [
    { title:'Haltères & racks', img:'/assets/eq1.png' },
    { title:'Cardio & vélos', img:'/assets/eq2.png' },
    { title:'Machines guidées', img:'/assets/eq3.png' },
    { title:'Box CrossFit', img:'/assets/eq4.png' },
    { title:'Zone stretching', img:'/assets/eq5.png' },
    { title:'Poids libres', img:'/assets/eq6.png' },
  ];
}
