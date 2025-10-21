import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { Program, ProgramCard } from '../program-card/program-card';

@Component({
  selector: 'app-program-list',
  standalone: true,
  imports: [NgFor, ProgramCard],
  templateUrl: './program-list.html',
  styleUrl: './program-list.css'
})
export class ProgramList {
programs: Program[] = [
    { id:1, title:'Salle libre', desc:'Accès illimité au plateau', img:'assets/prog1.png' },
    { id:2, title:'CrossFit', desc:'WOD & coaching', img:'assets/prog2.png' },
    { id:3, title:'Cardio/HIIT', desc:'Sessions intenses', img:'assets/prog3.png' },
  ];
}
