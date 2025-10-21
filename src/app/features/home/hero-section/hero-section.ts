import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Button } from '../../../shared/ui/button/button';
import heroImage from '../../../assets/hero.png';



@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [RouterLink, Button],
  templateUrl: './hero-section.html',
  styleUrl: './hero-section.css'
})
export class HeroSection {
 heroImage = heroImage;
}
