import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CollectionCatalog } from '../collection-catalog/collection-catalog';
import { SiteFooter } from '../site-footer/site-footer';
import { SiteHeader } from '../site-header/site-header';
import { otherCollections } from '../../storefront-data';

@Component({
  selector: 'app-collections-page',
  imports: [CollectionCatalog, RouterLink, SiteFooter, SiteHeader],
  templateUrl: './collections-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CollectionsPage {
  readonly collections = otherCollections;
}