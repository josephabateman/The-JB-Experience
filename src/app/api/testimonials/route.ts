import { NextRequest, NextResponse } from 'next/server';

// Static testimonials data - all 12 reviews
const fallbackTestimonials = [
  {
    _id: '1',
    name: 'Richard C',
    event: 'Corporate Event - Hilton, London',
    text: 'Joe and the band were a huge hit at our event! I kept hearing fantastic feedback throughout the night about how talented and engaging they were. They brought great energy and professionalism, making the evening truly memorable. Would highly recommend!',
    rating: 5,
    featured: true,
  },
  {
    _id: '2',
    name: 'Fiona E',
    event: 'Wedding - London',
    text: 'They were fantastic! The music was lively and engaging, and the way they interacted with the crowd made the evening so enjoyable. I got tons of compliments from our guests about how talented the band was, and it really added a special touch to our event. They definitely made the night a highlight for everyone involved.',
    rating: 5,
    featured: true,
  },
  {
    _id: '3',
    name: 'Olivia H',
    event: 'Wedding - Surrey',
    text: 'Our wedding was unforgettable thanks to Joe and his band! Their setlist perfectly included our favourite songs, and they had a great way of reading the crowd. The band was not only professional but also friendly and approachable. We\'re so grateful they were part of our special day and can\'t recommend them enough!',
    rating: 5,
    featured: true,
  },
  {
    _id: '4',
    name: 'Nathan C',
    event: 'Private Event - London',
    text: 'They did not disappoint! The band was super easy to work with and arrived early, which helped everything run smoothly. They brought so much energy to the night, and everyone kept raving about how great the music was. I was especially impressed when they got my friends—who usually never dance—up on the floor! I highly recommend them for any event!',
    rating: 5,
    featured: false,
  },
  {
    _id: '5',
    name: 'Francesca D',
    event: 'Wedding - London',
    text: 'We had Joe play at our wedding, and he was amazing! The entire band created a wonderful atmosphere. They were really accommodating with our song requests and kept the dance floor packed all night. We received so many compliments from our guests about how great they were!',
    rating: 5,
    featured: false,
  },
  {
    _id: '6',
    name: 'Felicity B',
    event: 'Wedding - London',
    text: 'Joe and the band were amazing! We had a very specific style of music we wanted for our wedding, and they absolutely delivered. The band created such a beautiful atmosphere during the day. When the evening hit, they kept the energy high, and the dance floor was packed all night. We couldn\'t have asked for more!',
    rating: 5,
    featured: false,
  },
  {
    _id: '7',
    name: 'Adam P',
    event: 'Private Event - London',
    text: 'I hired this band for a recent event, and I was really impressed. They struck the perfect balance between laid-back background music and lively dance tracks. The band played flawlessly, and they were a fantastic choice for our gathering.',
    rating: 5,
    featured: false,
  },
  {
    _id: '8',
    name: 'Michael H',
    event: 'Corporate Event - London',
    text: 'The band was the highlight of our corporate event. Their versatility shone through as they moved effortlessly between laid-back acoustic numbers and more upbeat tracks. Our guests kept commenting on how much they enjoyed the music. The band was polished, professional, and incredibly easy to work with!',
    rating: 5,
    featured: true,
  },
  {
    _id: '9',
    name: 'Bethany F',
    event: 'New Year\'s Eve Party - London',
    text: 'Hired for our New Year\'s Eve party, and they completely blew us away! The band was super tight, and the performance was unforgettable. It was the perfect way to ring in the new year!',
    rating: 5,
    featured: false,
  },
  {
    _id: '10',
    name: 'Francesca D',
    event: 'Company Christmas Party - London',
    text: 'We hired Joe and his band for our company\'s Christmas party, and they really got everyone in the festive spirit! The energy was fantastic, and they nailed a great mix of Christmas classics and crowd favourites. Everyone was up dancing from the moment they started playing, and it really made the night special. Can\'t recommend them enough!',
    rating: 5,
    featured: false,
  },
  {
    _id: '11',
    name: 'Rebecca C',
    event: 'Birthday Party - London',
    text: 'Joe\'s performance was the highlight of the evening at my husband\'s birthday. The band really brought the party to life, and everyone loved the mix of covers and originals. By the end, the dance floor was packed! The whole experience—the looping, the musicianship—made it extra special.',
    rating: 5,
    featured: false,
  },
];

// GET /api/testimonials - Public endpoint for fetching testimonials
export async function GET(request: NextRequest) {
  try {
    return NextResponse.json({
      success: true,
      data: fallbackTestimonials,
      total: fallbackTestimonials.length,
    });
  } catch (error) {
    console.error('Error fetching testimonials:', error);
    return NextResponse.json(
      { error: 'Failed to fetch testimonials' },
      { status: 500 }
    );
  }
}