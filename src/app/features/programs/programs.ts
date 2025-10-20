import { Component } from '@angular/core';
import { ProgramList } from './program-list/program-list';

@Component({
  selector: 'app-programs',
  imports: [ProgramList],
  standalone: true,
  templateUrl: './programs.html',
  styleUrl: './programs.css'
})
export class Programs {

}
