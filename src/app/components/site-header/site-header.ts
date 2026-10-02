import { ChangeDetectionStrategy, Component, HostListener, signal } from '@angular/core';

@Component({
  selector: 'app-site-header',
  templateUrl: './site-header.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiteHeader {
  readonly isScrolled = signal(false);
  readonly menuOpen = signal(false);

  toggleMenu(): void {
    this.menuOpen.update((isOpen) => !isOpen);
  }

  closeMenu(): void {
    this.menuOpen.set(false);
  }

  @HostListener('window:scroll')
  onWindowScroll(): void {
    this.isScrolled.set(window.scrollY > 24);
  }
}
