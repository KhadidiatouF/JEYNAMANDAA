import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CategoryFeature } from './components/category-feature/category-feature';
import { HeroSection } from './components/hero-section/hero-section';
import { CollectionCatalog } from './components/collection-catalog/collection-catalog';
import { PromoBanner } from './components/promo-banner/promo-banner';
import { ServiceGrid } from './components/service-grid/service-grid';
import { SiteFooter } from './components/site-footer/site-footer';
import { SiteHeader } from './components/site-header/site-header';
import { SocialLinks } from './components/social-links/social-links';
import { collections, menCategories, services, womenCategories } from './storefront-data';

@Component({
  selector: 'app-root',
  imports: [
    CategoryFeature,
    HeroSection,
    CollectionCatalog,
    PromoBanner,
    ServiceGrid,
    SiteFooter,
    SiteHeader,
    SocialLinks,
  ],
  templateUrl: './app.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {
  readonly womenCategories = womenCategories;
  readonly menCategories = menCategories;
  readonly collections = collections;
  readonly services = services;
  readonly editorialCollections = [
    {
      id: 'mosaika-gallery',
      name: 'Mosaïka',
      images: [
        '/assets/MOSAIKA/MOSAIKA — BAAXANTAL ✨Une silhouette sculptée comme un jeu de lignes et de lumière, sublimée par .jpg',
        '/assets/MOSAIKA/MOSAIKA — BAAXANTAL ✨Une silhouette sculptée comme un jeu de lignes et de lumière, sublimée par (1).jpg',
        '/assets/MOSAIKA/MOSAIKA — BAAXANTAL ✨Une silhouette sculptée comme un jeu de lignes et de lumière, sublimée par (2).jpg',
        '/assets/MOSAIKA/MOSAIKA — BAAXANTAL ✨Une silhouette sculptée comme un jeu de lignes et de lumière, sublimée par (3).jpg',
        '/assets/MOSAIKA/MOSAIKA — BAAXANTAL ✨Une silhouette sculptée comme un jeu de lignes et de lumière, sublimée par (4).jpg',
        '/assets/MOSAIKA/MOSAIKA — BAAXANTAL ✨Une silhouette sculptée comme un jeu de lignes et de lumière, sublimée par (5).jpg',
        '/assets/MOSAIKA/MOSAIKA — BAAXANTAL ✨Une silhouette sculptée comme un jeu de lignes et de lumière, sublimée par (6).jpg',
        '/assets/MOSAIKA/MOSAIKA — BAAXANTAL ✨Une silhouette sculptée comme un jeu de lignes et de lumière, sublimée par (7).jpg',
        '/assets/MOSAIKA/MOSAIKA — BAAXANTAL ✨Une silhouette sculptée comme un jeu de lignes et de lumière, sublimée par (8).jpg',
      ],
    },
    {
      id: 'johayna-gallery',
      name: 'Johayna',
      images: [
        '/assets/JOHAYNA/JOHAYNA — BAAXANTAL ✨Une silhouette solaire aux lignes majestueuses, où la fluidité des matières.jpg',
        '/assets/JOHAYNA/JOHAYNA — BAAXANTAL ✨Une silhouette solaire aux lignes majestueuses, où la fluidité des matières(1).jpg',
        '/assets/JOHAYNA/JOHAYNA — BAAXANTAL ✨Une silhouette solaire aux lignes majestueuses, où la fluidité des matières(2).jpg',
        '/assets/JOHAYNA/JOHAYNA — BAAXANTAL ✨Une silhouette solaire aux lignes majestueuses, où la fluidité des matières(3).jpg',
        '/assets/JOHAYNA/JOHAYNA — BAAXANTAL ✨Une silhouette solaire aux lignes majestueuses, où la fluidité des matières(4).jpg',
        '/assets/JOHAYNA/JOHAYNA — BAAXANTAL ✨Une silhouette solaire aux lignes majestueuses, où la fluidité des matières(5).jpg',
        '/assets/JOHAYNA/JOHAYNA — BAAXANTAL ✨Une silhouette solaire aux lignes majestueuses, où la fluidité des matières(6).jpg',
        '/assets/JOHAYNA/JOHAYNA — BAAXANTAL ✨Une silhouette solaire aux lignes majestueuses, où la fluidité des matières(7).jpg',
        '/assets/JOHAYNA/JOHAYNA — BAAXANTAL ✨Une silhouette solaire aux lignes majestueuses, où la fluidité des matières(8).jpg',
        '/assets/JOHAYNA/JOHAYNA — BAAXANTAL ✨Une silhouette solaire aux lignes majestueuses, où la fluidité des matières(9).jpg',
      ],
    },
  ] as const;

  scrollGallery(galleryId: string, direction: -1 | 1): void {
    const gallery = document.getElementById(galleryId);
    const firstPhoto = gallery?.firstElementChild;

    if (!gallery || !firstPhoto) {
      return;
    }

    const gap = Number.parseFloat(getComputedStyle(gallery).columnGap) || 0;

    gallery.scrollBy({
      left: direction * (firstPhoto.getBoundingClientRect().width + gap),
      behavior: 'smooth',
    });
  }
}
