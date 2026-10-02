import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { whatsappNumber } from '../../storefront-state';

@Component({
  selector: 'app-whatsapp-button',
  imports: [FaIconComponent],
  templateUrl: './whatsapp-button.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WhatsAppButton {
  readonly whatsappIcon = faWhatsapp;
  readonly href = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Bonjour, je souhaite obtenir des informations sur vos collections.')}`;
}