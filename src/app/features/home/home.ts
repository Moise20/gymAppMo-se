import { Component } from '@angular/core';
import { CtaButtons } from './cta-buttons/cta-buttons';
import { IntroSection } from './intro-section/intro-section';
import { HeroSection } from './hero-section/hero-section';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroSection, IntroSection, CtaButtons],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
