export interface FashionCollection {
  readonly name: string;
  readonly image: string;
  readonly imageAlt: string;
}

export interface StoreService {
  readonly title: string;
  readonly detail: string;
}

export const womenCategories = ['Chemises', 'Tailleurs', 'Blazers', 'Pantalons'];
export const menCategories = ['Chemises', 'Costumes', 'Ensembles'];

export const collections: readonly FashionCollection[] = [
  {
    name: 'Aïssatou',
    image: '/assets/collections/aissatou.jpg',
    imageAlt: 'Tenue de la collection Aïssatou',
  },
  {
    name: 'Amina',
    image: '/assets/collections/amina.jpg',
    imageAlt: 'Tenue de la collection Amina',
  },
  {
    name: 'Dalanda',
    image: '/assets/collections/dalanda.jpg',
    imageAlt: 'Tenue de la collection Dalanda',
  },
  {
    name: 'Gnilane',
    image: '/assets/collections/gnilane.jpg',
    imageAlt: 'Tenue de la collection Gnilane',
  },
  {
    name: 'Guiniane',
    image: '/assets/collections/guiniane.jpg',
    imageAlt: 'Tenue de la collection Guiniane',
  },
  {
    name: 'Johayna',
    image: '/assets/collections/johayna.jpg',
    imageAlt: 'Tenue de la collection Johayna',
  },
  {
    name: 'Marie Diop',
    image: '/assets/collections/marie.jpg',
    imageAlt: 'Tenue de la collection Marie Diop',
  },
  {
    name: 'Mosaïka',
    image: '/assets/collections/mosaika.jpg',
    imageAlt: 'Tenue de la collection Mosaïka',
  },
  {
    name: 'Ndèye Ousseynou',
    image: '/assets/collections/ndeye.jpg',
    imageAlt: 'Tenue de la collection Ndèye Ousseynou',
  },
  {
    name: 'Tening',
    image: '/assets/collections/tening.jpg',
    imageAlt: 'Tenue de la collection Tening',
  },
  {
    name: 'Wedding',
    image: '/assets/collections/wedding.jpg',
    imageAlt: 'Tenue de mariée de la collection Wedding',
  },
];

export const services: readonly StoreService[] = [
  { title: 'Livraison Sénégal et internationale', detail: 'Selon votre destination' },
  { title: 'Retours rapides', detail: '24h après réception' },
  { title: 'Paiement sécurisé', detail: 'Wave, Orange Money, Visa' },
  { title: 'Support client', detail: 'contact@jeynamandaa.sn' },
];