import { ChangeDetectionStrategy, Component, computed, ElementRef, inject, input, signal, ViewChild } from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons';
import { faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons';
import { RouterLink } from '@angular/router';
import { FashionCollection } from '../../storefront-data';
import { StorefrontState } from '../../storefront-state';

@Component({
  selector: 'app-collection-catalog',
  imports: [FaIconComponent, RouterLink],
  templateUrl: './collection-catalog.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CollectionCatalog {
  private readonly storefront = inject(StorefrontState);

  readonly heartRegular = faHeartRegular;
  readonly heartSolid = faHeartSolid;
  readonly collections = input.required<readonly FashionCollection[]>();
  readonly title = input('La capsule Héritage');
  readonly showMore = input(false);
  readonly sizes = ['XS', 'S', 'M', 'L', 'XL'];
  readonly selectedCollection = signal<FashionCollection | null>(null);
  readonly selectedSize = signal('');
  readonly currentImageIndex = signal(0);
  readonly selectedImage = computed(() => {
    const collection = this.selectedCollection();

    return collection?.galleryImages[this.currentImageIndex()] ?? collection?.image ?? '';
  });

  @ViewChild('productDialog') private productDialog?: ElementRef<HTMLDialogElement>;

  openDetails(collection: FashionCollection): void {
    this.selectedCollection.set(collection);
    this.selectedSize.set('');
    this.currentImageIndex.set(0);
    this.productDialog?.nativeElement.showModal();
  }

  showPreviousImage(): void {
    const count = this.selectedCollection()?.galleryImages.length ?? 0;

    if (count > 1) {
      this.currentImageIndex.update((index) => (index - 1 + count) % count);
    }
  }

  showNextImage(): void {
    const count = this.selectedCollection()?.galleryImages.length ?? 0;

    if (count > 1) {
      this.currentImageIndex.update((index) => (index + 1) % count);
    }
  }

  closeDetails(): void {
    this.productDialog?.nativeElement.close();
  }

  closeOnBackdrop(event: MouseEvent): void {
    if (event.target === event.currentTarget) {
      this.closeDetails();
    }
  }

  resetDetails(): void {
    this.selectedCollection.set(null);
    this.selectedSize.set('');
    this.currentImageIndex.set(0);
  }

  isFavorite(collection: FashionCollection): boolean {
    return this.storefront.isFavorite(collection.name);
  }

  toggleFavorite(collection: FashionCollection): void {
    this.storefront.toggleFavorite(collection.name);
  }

  addToCart(collection: FashionCollection): void {
    const size = this.selectedSize();

    if (!size) {
      return;
    }

    this.storefront.addToCart(collection, size);
    this.closeDetails();
    this.storefront.activePanel.set('cart');
  }

  orderLink(collection: FashionCollection, size: string): string {
    const subject = encodeURIComponent(`Commande ${collection.name}`);
    const body = encodeURIComponent(
      `Bonjour, je souhaite commander la collection ${collection.name}, taille ${size}.`,
    );

    return `mailto:contact@jeynamandaa.sn?subject=${subject}&body=${body}`;
  }
}
