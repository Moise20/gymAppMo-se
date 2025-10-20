import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Button } from '../../../shared/ui/button/button';

@Component({
  selector: 'app-cta-buttons',
    standalone: true,
  imports: [Button, RouterLink],
  templateUrl: './cta-buttons.html',
  styleUrl: './cta-buttons.css'
})
export class CtaButtons {

}
