import { Component } from '@angular/core';
import { PricingSection } from './pricing-section/pricing-section';

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [PricingSection],
  templateUrl: './pricing.html',
  styleUrl: './pricing.css'
})
export class Pricing {

}
