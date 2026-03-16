export type Hotel = {
  id: string;
  name: string;
  location: string;
  nights: string;
  price: string;
  image: string;
  gallery: string[];
  maxGuests: number;
  roomType: string;
  checkIn: string;
  checkOut: string;
  description: string;
  amenities: string[];
};

export const HOTELS: Hotel[] = [
  {
    id: 'anantara-peace-haven',
    name: 'Anantara Peace Haven',
    location: 'Tangalle, Southern Coast',
    nights: '2 Nights / 3 Days',
    price: 'LKR 98,000',
    image:
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1455587734955-081b22074882?auto=format&fit=crop&w=1000&q=80',
    ],
    maxGuests: 4,
    roomType: 'Ocean View Suite',
    checkIn: '2:00 PM',
    checkOut: '12:00 PM',
    description:
      'Set above the turquoise Indian Ocean, this luxury property blends tropical design, private terraces, and quiet beach access for couples and small families.',
    amenities: ['Infinity pool', 'Private beach access', 'Ayurveda spa', 'Breakfast included'],
  },
  {
    id: 'amaya-lake-resort',
    name: 'Amaya Lake Resort',
    location: 'Dambulla',
    nights: '1 Night / 2 Days',
    price: 'LKR 56,500',
    image:
      'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1000&q=80',
    ],
    maxGuests: 3,
    roomType: 'Garden Chalet',
    checkIn: '1:00 PM',
    checkOut: '11:00 AM',
    description:
      'A calm lakeside getaway near Sigiriya and heritage sites, perfect for travelers who want nature views, cultural day trips, and peaceful evenings.',
    amenities: ['Lake view rooms', 'Nature trails', 'On-site restaurant', 'Airport transfer'],
  },
  {
    id: 'marino-beach-hotel',
    name: 'Marino Beach Hotel',
    location: 'Colombo',
    nights: '3 Nights / 4 Days',
    price: 'LKR 124,000',
    image:
      'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1444201983204-c43cbd584d93?auto=format&fit=crop&w=1000&q=80',
    ],
    maxGuests: 5,
    roomType: 'Family Deluxe Room',
    checkIn: '2:00 PM',
    checkOut: '12:00 PM',
    description:
      'Modern city luxury with rooftop views and easy access to shopping, nightlife, and business centers in Colombo.',
    amenities: ['Rooftop infinity pool', 'City skyline view', 'Gym and sauna', '24h room service'],
  },
  {
    id: 'theva-residency',
    name: 'Theva Residency',
    location: 'Kandy Hills',
    nights: '2 Nights / 3 Days',
    price: 'LKR 74,000',
    image:
      'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1468824357306-a439d58ccb1c?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1000&q=80',
    ],
    maxGuests: 2,
    roomType: 'Mountain Panorama Suite',
    checkIn: '2:30 PM',
    checkOut: '11:30 AM',
    description:
      'Boutique hill-country stay with misty mountain mornings, curated cuisine, and close access to Kandy city landmarks.',
    amenities: ['Mountain balcony', 'Fine dining', 'Airport pickup', 'Couple packages'],
  },
  {
    id: 'jetwing-lighthouse',
    name: 'Jetwing Lighthouse',
    location: 'Galle',
    nights: '2 Nights / 3 Days',
    price: 'LKR 88,500',
    image:
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1451976426598-a7593bd6d0b2?auto=format&fit=crop&w=1000&q=80',
    ],
    maxGuests: 4,
    roomType: 'Sea Facing Premium Room',
    checkIn: '2:00 PM',
    checkOut: '12:00 PM',
    description:
      'A design-forward resort beside the southern sea, ideal for beach lovers and guests planning Galle Fort excursions.',
    amenities: ['Oceanfront dining', 'Spa and wellness', 'Kids activity zone', 'Daily high tea'],
  },
  {
    id: 'heritance-kandalama',
    name: 'Heritance Kandalama',
    location: 'Dambulla Forest',
    nights: '2 Nights / 3 Days',
    price: 'LKR 92,000',
    image:
      'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=1000&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1521783593447-5702b9bfd267?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1501117716987-c8e1ecb210a3?auto=format&fit=crop&w=1000&q=80',
    ],
    maxGuests: 4,
    roomType: 'Forest Signature Room',
    checkIn: '2:00 PM',
    checkOut: '12:00 PM',
    description:
      'An iconic eco-luxury retreat built into the rock and forest line, offering dramatic lake views and easy access to Sigiriya.',
    amenities: ['Eco architecture', 'Nature observation deck', 'Multiple pools', 'Guided heritage tours'],
  },
];

export const getHotelById = (id: string) => HOTELS.find((hotel) => hotel.id === id);
