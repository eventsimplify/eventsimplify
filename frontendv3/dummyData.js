export const DummyData = () => {
  // event showcase type and details
  const eventCardDetailsDummy = [
    {
      date: ['Nov', '01'],
      title: 'Panic! at the disco',
      price: 'Rs 45,000',
      location: 'Kathmandu, Nepal',
      image: '/assets/card_image/singer.png',
    },
    {
      date: ['Nov', '01'],
      title: 'Panic! at the disco',
      price: 'Rs 45,000',
      location: 'Kathmandu, Nepal',
      image: '/assets/card_image/singer.png',
    },
    {
      date: ['Nov', '01'],
      title: 'Panic! at the disco',
      price: 'Rs 45,000',
      location: 'Kathmandu, Nepal',
      image: '/assets/card_image/singer.png',
    },
    {
      date: ['Nov', '01'],
      title: 'Panic! at the disco',
      price: 'Rs 45,000',
      location: 'Kathmandu, Nepal',
      image: '/assets/card_image/singer.png',
    },
  ];
  //
  const eventShowCase = {
    type: 'Upcoming Events',
    detailsOfEvents: eventCardDetailsDummy,
  };

  // arts
  const artShowCase = {
    type: 'Browse by Arts',
    detailsOfEvents: eventCardDetailsDummy,
  };

  // concerts
  const concertShowCase = {
    type: 'Browse by Concerts',
    detailsOfEvents: eventCardDetailsDummy,
  };
  const tickets = [
    {
      ticketTitle: 'VIP Ticket',
      ticketPrice: 99.99,
      ticketDesc:
        'Experience our event in style with a VIP ticket. Includes front-row seating, access to exclusive VIP lounge, and a complimentary drink voucher.',
    },
    {
      ticketTitle: 'General Admission Ticket',
      ticketPrice: 49.99,
      ticketDesc:
        'Get access to our event and enjoy all the entertainment, activities, and performances. This ticket does not include any special privileges.',
    },
    {
      ticketTitle: 'Student Ticket',
      ticketPrice: 29.99,
      ticketDesc:
        'Valid for students with a valid student ID. Get access to our event at a discounted price.',
    },
    {
      ticketTitle: 'Family Ticket',
      ticketPrice: 149.99,
      ticketDesc:
        'Bring your family along to our event with our Family Ticket. Includes admission for two adults and two children, along with a complimentary family photo.',
    },
    {
      ticketTitle: 'Early Bird Ticket',
      ticketPrice: 39.99,
      ticketDesc:
        'Get early access to our event and save with our Early Bird Ticket. Limited quantities available, so purchase early to secure your spot.',
    },
    {
      ticketTitle: 'Group Ticket',
      ticketPrice: 199.99,
      ticketDesc:
        'Bring your friends and save with our Group Ticket. Includes admission for 5 people and a complimentary group photo.',
    },
    {
      ticketTitle: 'VIP Plus Ticket',
      ticketPrice: 199.99,
      ticketDesc:
        'Get the ultimate VIP experience with our VIP Plus Ticket. Includes front-row seating, exclusive backstage access, complimentary drinks, and a meet-and-greet with the performers.',
    },
  ];

  return [
    eventShowCase,
    artShowCase,
    concertShowCase,
    eventCardDetailsDummy,
    tickets,
  ];
};
