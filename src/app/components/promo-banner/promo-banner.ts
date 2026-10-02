import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-promo-banner',
  templateUrl: './promo-banner.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PromoBanner {}
