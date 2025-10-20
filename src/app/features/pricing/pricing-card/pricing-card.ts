import { Component, Input } from '@angular/core';
import { Button } from '../../../shared/ui/button/button';
import { NgFor } from '@angular/common';
export interface Plan { name:string; price:number; features:string[]; negatives?:string[]; }

@Component({
  selector: 'app-pricing-card',
  standalone: true,
  imports: [NgFor, Button],
  templateUrl: './pricing-card.html',
  styleUrl: './pricing-card.css'
})
export class PricingCard {
 @Input() plan?: Plan;
}
