import { computed, Injectable, signal } from '@angular/core';
import { collections, featuredCollections, FashionCollection } from './storefront-data';

export type HeaderPanel = 'search' | 'favorites' | 'cart' | null;
export const whatsappNumber = '221778690909';

export interface CartLine {
  readonly collection: FashionCollection;
  readonly size: string;
  readonly quantity: number;
}

export interface CustomerDetails {
  readonly name: string;
  readonly phone: string;
  readonly address: string;
}

@Injectable({ providedIn: 'root' })
export class StorefrontState {
  readonly activePanel = signal<HeaderPanel>(null);
  readonly searchQuery = signal('');
  readonly favorites = signal<ReadonlySet<string>>(new Set());
  private readonly cartState = signal<readonly CartLine[]>([]);

  readonly cartItems = computed(() => this.cartState());
  readonly cartCount = computed(() =>
    this.cartState().reduce((count, line) => count + line.quantity, 0),
  );
  readonly favoriteCollections = computed(() =>
    collections.filter((collection) => this.favorites().has(collection.name)),
  );
  readonly searchResults = computed(() => {
    const query = this.searchQuery().trim().toLocaleLowerCase();

    return query
      ? collections.filter((collection) => collection.name.toLocaleLowerCase().includes(query))
      : [];
  });

  isFeatured(collection: FashionCollection): boolean {
    return featuredCollections.includes(collection);
  }

  isFavorite(name: string): boolean {
    return this.favorites().has(name);
  }

  toggleFavorite(name: string): void {
    const nextFavorites = new Set(this.favorites());

    if (nextFavorites.has(name)) {
      nextFavorites.delete(name);
    } else {
      nextFavorites.add(name);
    }

    this.favorites.set(nextFavorites);
  }

  addToCart(collection: FashionCollection, size: string): void {
    this.cartState.update((lines) => {
      const existingLine = lines.find(
        (line) => line.collection.name === collection.name && line.size === size,
      );

      if (!existingLine) {
        return [...lines, { collection, size, quantity: 1 }];
      }

      return lines.map((line) =>
        line === existingLine ? { ...line, quantity: line.quantity + 1 } : line,
      );
    });
  }

  changeQuantity(collectionName: string, size: string, change: -1 | 1): void {
    this.cartState.update((lines) =>
      lines
        .map((line) =>
          line.collection.name === collectionName && line.size === size
            ? { ...line, quantity: line.quantity + change }
            : line,
        )
        .filter((line) => line.quantity > 0),
    );
  }

  removeFromCart(collectionName: string, size: string): void {
    this.cartState.update((lines) =>
      lines.filter((line) => line.collection.name !== collectionName || line.size !== size),
    );
  }

  whatsappCartLink(customer: CustomerDetails): string {
    const orderSummary = this.cartState()
      .map((line) => `${line.collection.name} — taille ${line.size} × ${line.quantity}`)
      .join('\n');
    const message = encodeURIComponent(
      `Bonjour, je souhaite confirmer cette commande.\n\nNom : ${customer.name}\nTéléphone : ${customer.phone}\nAdresse : ${customer.address}\n\nArticles :\n${orderSummary}`,
    );

    return `https://wa.me/${whatsappNumber}?text=${message}`;
  }
}