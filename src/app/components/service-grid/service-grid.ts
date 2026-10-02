import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { StoreService } from '../../storefront-data';

@Component({
  selector: 'app-service-grid',
  templateUrl: './service-grid.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServiceGrid {
  readonly services = input.required<readonly StoreService[]>();
}
