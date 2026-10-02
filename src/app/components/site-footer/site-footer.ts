import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-site-footer',
  templateUrl: './site-footer.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiteFooter {}
