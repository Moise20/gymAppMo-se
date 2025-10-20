import { Component } from '@angular/core';
import { Card } from '../../../shared/ui/card/card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-intro-section',
  standalone: true,
  imports: [Card,CommonModule],
  templateUrl: './intro-section.html',
  styleUrl: './intro-section.css'
})
export class IntroSection {

}
