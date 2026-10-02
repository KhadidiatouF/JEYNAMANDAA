import { ChangeDetectionStrategy, Component, computed, HostListener, inject, signal } from '@angular/core';
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
import { CustomerDetails, HeaderPanel, StorefrontState } from '../../storefront-state';

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
  readonly checkoutOpen = signal(false);
  readonly customerName = signal('');
  readonly customerPhone = signal('');
  readonly customerAddress = signal('');
  readonly checkoutSubmitted = signal(false);
  readonly nameError = computed(() => {
    if (!this.checkoutSubmitted()) {
      return '';
    }

    const name = this.customerName().trim();

    return !name ? 'Veuillez saisir votre nom.' : name.length < 2 ? 'Le nom doit contenir au moins deux caractères.' : '';
  });
  readonly phoneError = computed(() => {
    if (!this.checkoutSubmitted()) {
      return '';
    }

    const digits = this.customerPhone().replace(/\D/g, '');

    return !digits ? 'Veuillez renseigner votre numéro.' : digits.length < 9 || digits.length > 15 ? 'Saisissez un numéro valide.' : '';
  });
  readonly addressError = computed(() => {
    if (!this.checkoutSubmitted()) {
      return '';
    }

    const address = this.customerAddress().trim();

    return !address ? 'Veuillez renseigner votre adresse.' : address.length < 5 ? 'Ajoutez une adresse plus précise.' : '';
  });
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
    this.checkoutOpen.set(false);
    this.checkoutSubmitted.set(false);
  }

  startCheckout(): void {
    this.checkoutOpen.set(true);
    this.checkoutSubmitted.set(false);
  }

  confirmOrder(event: Event): void {
    event.preventDefault();

    const customer: CustomerDetails = {
      name: this.customerName().trim(),
      phone: this.customerPhone().trim(),
      address: this.customerAddress().trim(),
    };

    this.checkoutSubmitted.set(true);

    if (this.nameError() || this.phoneError() || this.addressError() || !this.storefront.cartCount()) {
      return;
    }

    window.location.assign(this.storefront.whatsappCartLink(customer));
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
