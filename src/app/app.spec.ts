import { TestBed } from '@angular/core/testing';
import { provideRouter, Router } from '@angular/router';
import { App } from './app';
import { routes } from './app.routes';
import { collections } from './storefront-data';
import { StorefrontState } from './storefront-state';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
      providers: [provideRouter(routes)],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render the brand title', async () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    await TestBed.inject(Router).navigateByUrl('/');
    fixture.detectChanges();
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('[aria-label="Accueil Jeynamandaa"]')).toBeTruthy();
  });

  it('should include customer and cart details in the WhatsApp order link', () => {
    const storefront = TestBed.inject(StorefrontState);
    const collection = collections.find((item) => item.name === 'MOSANE')!;
    storefront.addToCart(collection, 'M');

    const orderLink = new URL(
      storefront.whatsappCartLink({
        name: 'Awa Fall',
        phone: '771234567',
        address: 'Dakar',
      }),
    );
    const message = orderLink.searchParams.get('text') ?? '';

    expect(orderLink.pathname).toBe('/221778690909');
    expect(message).toContain('Awa Fall');
    expect(message).toContain('771234567');
    expect(message).toContain('MOSANE — taille M × 1');
  });
});
