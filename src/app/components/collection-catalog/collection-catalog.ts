import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { FashionCollection } from '../../storefront-data';

@Component({
  selector: 'app-collection-catalog',
  templateUrl: './collection-catalog.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CollectionCatalog {
  readonly collections = input.required<readonly FashionCollection[]>();
}
