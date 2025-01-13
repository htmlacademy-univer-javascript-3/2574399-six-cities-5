const offers = [
  {
    id: '1',
    title: 'Beautiful & luxurious studio at great location',
    price: 120,
    rating: 4.8,
    type: 'Apartment',
    isPremium: true,
    isFavorite: false,
    images: ['img/apartment-01.jpg'],
    coordinates: [52.3909553943508, 4.85309666406198],
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.37454,
        longitude: 4.897976,
        zoom: 12,
      },
    },
  },
  {
    id: '2',
    title: 'Wood and stone place',
    price: 80,
    rating: 4.9,
    type: 'Private room',
    isPremium: false,
    isFavorite: true,
    images: ['img/room.jpg'],
    coordinates: [52.3609553943508, 4.85309666406198],
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.37454,
        longitude: 4.897976,
        zoom: 12,
      },
    },
  },
  {
    id: '3',
    title: 'Canal View Prinsengracht',
    price: 132,
    rating: 4.7,
    type: 'Apartment',
    isPremium: true,
    isFavorite: false,
    images: ['img/apartment-02.jpg'],
    coordinates: [52.3909553943508, 4.929309666406198],
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.37454,
        longitude: 4.897976,
        zoom: 12,
      },
    },
  },
  {
    id: '4',
    title: 'Nice, cozy, warm big bed apartment',
    price: 180,
    rating: 5.0,
    type: 'Apartment',
    isPremium: true,
    isFavorite: true,
    images: ['img/apartment-03.jpg'],
    coordinates: [52.3809553943508, 4.939309666406198],
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.37454,
        longitude: 4.897976,
        zoom: 12,
      },
    },
  },
];

export default offers;
