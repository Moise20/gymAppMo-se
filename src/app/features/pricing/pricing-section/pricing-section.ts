import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { Plan, PricingCard } from '../pricing-card/pricing-card';

@Component({
  selector: 'app-pricing-section',
   standalone: true,
  imports: [NgFor, PricingCard],
  templateUrl: './pricing-section.html',
  styleUrl: './pricing-section.css'
})
export class PricingSection {
plans: Plan[] = [
    { name:'BASIQUE', price:20, features:['Salle libre','24h/24'], negatives:['Coach','CrossFit','Massage'] },
    { name:'COMPLET', price:40, features:['Salle libre','24h/24','Coach','CrossFit'], negatives:['Massage'] },
    { name:'PRO', price:60, features:['Salle libre','24h/24','Coach','CrossFit','Massage'] },
  ];
}
