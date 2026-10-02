import { ChangeDetectionStrategy, Component, HostListener, inject, signal } from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import {
  faBagShopping,
  faHeart,
  faMagnifyingGlass,
  faMinus,
  faPlus,
  faTrashCan,
  faXmark,
} from '@fortawesome/free-solid-svg-icons';
import { RouterLink } from '@angular/router';
import { HeaderPanel, StorefrontState } from '../../storefront-state';

@Component({
  selector: 'app-site-header',
  imports: [FaIconComponent, RouterLink],
  templateUrl: './site-header.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiteHeader {
  readonly storefront = inject(StorefrontState);
  readonly isScrolled = signal(false);
  readonly menuOpen = signal(false);
  readonly faBagShopping = faBagShopping;
  readonly faHeart = faHeart;
  readonly faMagnifyingGlass = faMagnifyingGlass;
  readonly faMinus = faMinus;
  readonly faPlus = faPlus;
  readonly faTrashCan = faTrashCan;
  readonly faXmark = faXmark;

  openPanel(panel: Exclude<HeaderPanel, null>): void {
    this.storefront.activePanel.update((activePanel) => activePanel === panel ? null : panel);
  }

  closePanel(): void {
    this.storefront.activePanel.set(null);
  }

  setSearchQuery(event: Event): void {
    this.storefront.searchQuery.set((event.target as HTMLInputElement).value);
  }

  toggleMenu(): void {
    this.menuOpen.update((isOpen) => !isOpen);
  }

  closeMenu(): void {
    this.menuOpen.set(false);
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    this.closePanel();
    this.closeMenu();
  }

  @HostListener('window:scroll')
  onWindowScroll(): void {
    this.isScrolled.set(window.scrollY > 24);
  }
}
