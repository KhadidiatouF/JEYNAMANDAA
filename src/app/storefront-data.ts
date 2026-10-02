export interface FashionCollection {
  readonly name: string;
  readonly image: string;
  readonly imageAlt: string;
  readonly galleryImages: readonly string[];
}

export interface StoreService {
  readonly title: string;
  readonly detail: string;
}

export const womenCategories = ['Chemises', 'Tailleurs', 'Blazers', 'Pantalons'];
export const menCategories = ['Chemises', 'Costumes', 'Ensembles'];

const numberedGallery = (
  folder: string,
  filename: string,
  count: number,
  separator = '',
): readonly string[] =>
  Array.from({ length: count }, (_, index) =>
    `/assets/${folder}/${filename}${separator}${index === 0 ? '' : `(${index})`}.jpg`,
  );

export const collections: readonly FashionCollection[] = [
  {
    name: 'Aïssatou',
    image: '/assets/collections/aissatou.jpg',
    imageAlt: 'Tenue de la collection Aïssatou',
    galleryImages: numberedGallery('AISSATOU', 'AÏSSATOU MAMADOU - BAAXANTAL ✨Une silhouette affirmée, pensée comme une rencontre entre structur', 7),
  },
  {
    name: 'Amina',
    image: '/assets/collections/amina.jpg',
    imageAlt: 'Tenue de la collection Amina',
    galleryImages: numberedGallery('AMINA', 'La belle Amina 🩵Un turquoise lumineux, des lignes graphiques et un imprimé profond qui se déplo', 5),
  },
  {
    name: 'Dalanda',
    image: '/assets/collections/dalanda.jpg',
    imageAlt: 'Tenue de la collection Dalanda',
    galleryImages: numberedGallery('DALANDA', 'DALANDA — BAAXANTAL ✨Une silhouette sculpturale aux lignes fluides, sublimée par un jeu de volum', 9),
  },
  {
    name: 'Gnilane',
    image: '/assets/collections/gnilane.jpg',
    imageAlt: 'Tenue de la collection Gnilane',
    galleryImages: numberedGallery('GNILANE', 'Gnilane, “celle qui met bien le pagne”, rend hommage à la grâce traditionnelle. Une coupe fluide', 4),
  },
  {
    name: 'Guiniane',
    image: '/assets/collections/guiniane.jpg',
    imageAlt: 'Tenue de la collection Guiniane',
    galleryImages: numberedGallery('GNILANE', 'Guiniane, “la rassasiée”, symbolise plénitude et paix intérieure. Une coupe sculptée qui évoque', 5, ' '),
  },
  {
    name: 'Johayna',
    image: '/assets/collections/johayna.jpg',
    imageAlt: 'Tenue de la collection Johayna',
    galleryImages: numberedGallery('JOHAYNA', 'JOHAYNA — BAAXANTAL ✨Une silhouette solaire aux lignes majestueuses, où la fluidité des matières', 10),
  },
  {
    name: 'Marie Diop',
    image: '/assets/collections/marie.jpg',
    imageAlt: 'Tenue de la collection Marie Diop',
    galleryImages: numberedGallery('MARIE ', 'MARIE DIOP — BAAXANTAL ✨Une silhouette enveloppante où la richesse des matières rencontre la pré', 12),
  },
  {
    name: 'Mosaïka',
    image: '/assets/collections/mosaika.jpg',
    imageAlt: 'Tenue de la collection Mosaïka',
    galleryImages: numberedGallery('MOSAIKA', 'MOSAIKA — BAAXANTAL ✨Une silhouette sculptée comme un jeu de lignes et de lumière, sublimée par', 9, ' '),
  },
  {
    name: 'Ndèye Ousseynou',
    image: '/assets/collections/ndeye.jpg',
    imageAlt: 'Tenue de la collection Ndèye Ousseynou',
    galleryImages: numberedGallery('NDEYE', 'NDÈYE OUSSEYNOU ✨Une silhouette majestueuse aux lignes sculptées, sublimée par un travail minuti', 6),
  },
  {
    name: 'Tening',
    image: '/assets/collections/tening.jpg',
    imageAlt: 'Tenue de la collection Tening',
    galleryImages: numberedGallery('TENING', 'Tening, “lundi”, symbolise un nouveau départ. Une coupe épurée qui évoque renouveau, simplicité', 3, ' '),
  },
  {
    name: 'Wedding',
    image: '/assets/collections/wedding.jpg',
    imageAlt: 'Tenue de mariée de la collection Wedding',
    galleryImages: [
      '/assets/wedding/Fall mi yalla faalé @maimounatou_bint_khadim Mrs Fall yalna leen saa borom doli barké - شڢى السف.jpg',
      '/assets/wedding/Fall mi yalla faalé @maimounatou_bint_khadim Mrs Fall yalna leen saa borom doli barké - شڢى السف(1).jpg',
      '/assets/wedding/From a dream… to forever 🤍A timeless bride for a timeless love.%23JeynaABridal✨ @tala_niang.jpg',
      '/assets/wedding/From a dream… to forever 🤍A timeless bride for a timeless love.%23JeynaABridal✨ @tala_niang(1).jpg',
      '/assets/wedding/Il existe des rencontres qui ressemblent à des évidences. Parce qu’Allah les avait écrites bien .jpg',
      '/assets/wedding/Il existe des rencontres qui ressemblent à des évidences. Parce qu’Allah les avait écrites bien (1).jpg',
      '/assets/wedding/Il existe des rencontres qui ressemblent à des évidences. Parce qu’Allah les avait écrites bien (2).jpg',
    ],
  },
  {
    name: 'MOSANE',
    image: '/assets/MOSANE/Mossane, “la belle”, célèbre une féminité lumineuse. Sa coupe sculptée révèle une élégance natur.jpg',
    imageAlt: 'Tenue de la collection MOSANE',
    galleryImages: numberedGallery('MOSANE', 'Mossane, “la belle”, célèbre une féminité lumineuse. Sa coupe sculptée révèle une élégance natur', 6),
  },
];

const featuredCollectionNames = ['Wedding', 'Dalanda', 'Amina', 'Aïssatou'];

export const featuredCollections = featuredCollectionNames
  .map((name) => collections.find((collection) => collection.name === name))
  .filter((collection): collection is FashionCollection => collection !== undefined);

export const otherCollections = collections.filter(
  (collection) => !featuredCollections.includes(collection),
);

export const services: readonly StoreService[] = [
  { title: 'Livraison Sénégal et internationale', detail: 'Selon votre destination' },
  { title: 'Retours rapides', detail: '24h après réception' },
  { title: 'Paiement sécurisé', detail: 'Wave, Orange Money, Visa' },
  { title: 'Support client', detail: 'contact@jeynamandaa.sn' },
];