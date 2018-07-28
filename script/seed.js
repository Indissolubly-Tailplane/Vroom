'use strict'

const db = require('../server/db')
const {User} = require('../server/db/models/')
const {Car} = require('../server/db/models/')

const newUsers = [
  {
    firstName: 'Zohayb',
    lastName: 'Shaikh',
    email: 'zs@email.com',
    password: '123'
  },
  {
    firstName: 'Monica',
    lastName: 'Restrepo',
    email: 'mr@email.com',
    password: '123'
  },
  {
    firstName: 'Celine',
    lastName: 'Gauchey',
    email: 'cg@email.com',
    password: '123'
  },
  {
    firstName: 'Zachary',
    lastName: 'Margolies',
    email: 'zm@email.com',
    password: '123'
  }
]

const newCars = [
  {
    make: 'Ferrari',
    model: 'California',
    color: 'Red',
    price: 200000,
    quantity: 20,
    description:
      'Penned by the Ferrari style centre in collaboration with Pininfarina, the new California T is a sophisticated prancing horse grand tourer with a beautifully ergonomic and sumptuously handcrafted. The re-innovated California T is a car worthy of any automobile aficionado or a discerning client seeking a majestically comfortable daily drive.',
    image:
      'https://www.torquenews.com/sites/default/files/styles/news/public/image-106/%5Btitle-raw%5D/ferrari_f12_front_square.jpg',
    year: '2012'
  },
  {
    make: 'Lamborghini',
    model: 'Huracan',
    color: 'Green',
    price: 300000,
    quantity: 20,
    description:
      ' Your heart will leap when you sit inside and press the ignition button, feeling what it means to have a naturally aspirated V10 engine behind you, and all the technology you need to control it right at your fingertips. Your eyes will enthrall you a final time once you take in the full-LED lighting system and the 12.3" TFT instrument panel, which provides an unrivalled driving experience.',
    image:
      'https://st.motortrend.ca/uploads/sites/5/2018/02/2018-Lamborghini-Huracan-Performante-front-side-view-closer.jpg?interpolation=lanczos-none&fit=around%7C660%3A438',
    year: '2018'
  },
  {
    make: 'Apollo',
    model: 'Arrow',
    color: 'Orange',
    price: 1100000,
    quantity: 20,
    description:
      'As an all-electric supercar, Roadster maximizes the potential of aerodynamic engineering—with record-setting performance and efficiency.',
    image:
      'https://i2.wp.com/res.cloudinary.com/dbm5rx8rl/image/upload/v1503413555/expensive-supercars_12_lwnwzf.jpg?resize=662%2C455&ssl=1',
    year: '2019'
  },
  {
    make: 'Buggati',
    model: 'Chiron',
    color: 'Black-Blue',
    price: 3260000,
    quantity: 20,
    description:
      'The Chiron Sport has become perceptibly more nimble and its new agility, especially in tight corners makes for a much more emotional experience for the driver on winding roads and handling circuits. Bugatti put the Chiron on a weight loss regime. This includes lightweight wheel and the use of carbon fiber in areas such as the stabilizer, windshield wiper, and intercooler cover.',
    image:
      'https://hips.hearstapps.com/amv-prod-cad-assets.s3.amazonaws.com/wp-content/uploads/2017/03/2018-Bugatti-Chiron-125.jpg',
    year: '2018'
  },
  {
    make: 'McLaren ',
    model: '720S',
    color: 'Orange',
    price: 600000,
    quantity: 20,
    description:
      'The McLaren 720S embodies our relentless quest to push the limits of possibility. Lighter, stronger, faster. It’s all of these and more. But how it makes you feel is altogether something else. Prepare to push the limits of what you thought possible in a supercar.',
    image:
      'https://cdn.images.express.co.uk/img/dynamic/24/590x/McLaren-720S-Super-Series-supercar-777068.jpg',
    year: '2018'
  },
  {
    make: 'Tesla',
    model: 'Roadster',
    color: 'Red',
    price: 250000,
    quantity: 20,
    description:
      'As an all-electric supercar, Roadster maximizes the potential of aerodynamic engineering—with record-setting performance and efficiency.',
    image:
      'https://cdn.images.express.co.uk/img/dynamic/24/590x/Tesla-Roadster-902249.jpg',
    year: '2018'
  },
  {
    make: 'Koenigsegg',
    model: 'Agera',
    color: 'Blue',
    price: 2100000,
    quantity: 20,
    description:
      'The new Koenigsegg Agera RS has its focus set firmly on the track but is still perfect for regular use on the road. It uses advanced technology developed during our exclusive Koenigsegg One:1 program, while maintaining all the functionality of previous S and R models. Such practicalities include a usable luggage compartment and a detachable hardtop that can be stowed internally for top-down motoring at any time.',
    image:
      'http://alliswall.com/file/4814/1920x1200/16:9/koenigsegg-agera-r-.jpg',
    year: '2018'
  },
  {
    make: 'Pagani',
    model: 'Zonda HP',
    color: 'Blue',
    price: 17500000,
    quantity: 20,
    description:
      'The Zonda HP Barchetta, first seen last year, boasts a 6.0-litre biturbo V12 on board with 789bhp, the same power output of the wild Huayra BC. It’s matched to a six-speed manual gearbox, along with a mechanical locking diff and rear-wheel-drive.',
    image:
      'https://s1.cdn.autoevolution.com/images/news/gallery/pagani-zonda-revolution-sets-nurburgring-record-for-track-cars-heres-what-the-630-time-means_4.jpeg',
    year: '2019'
  },
  {
    make: 'Bentley',
    model: 'Continental GT',
    color: 'Silver',
    price: 250000,
    quantity: 20,
    description:
      'With a completely new 6.0 litre, twin-turbocharged W12 engine, a step-change in technology and a truly stunning design language, the new Continental GT is unmatched in its class. This Bentley GT coupé is the quintessential grand tourer – phenomenally powerful, beautifully designed and exquisitely crafted.',
    image:
      'https://hips.hearstapps.com/amv-prod-cad-assets.s3.amazonaws.com/images/17q1/674191/2017-bentley-continental-supersports-revealed-news-car-and-driver-photo-674309-s-original.jpg',
    year: '2018'
  },
  {
    make: 'Audi',
    model: 'R8-V10',
    color: 'Blue',
    price: 250000,
    quantity: 20,
    description:
      'With a completely new 6.0 litre, twin-turbocharged W12 engine, a step-change in technology and a truly stunning design language, the new Continental GT is unmatched in its class. This Bentley GT coupé is the quintessential grand tourer – phenomenally powerful, beautifully designed and exquisitely crafted.',
    image:
      'https://st.motortrend.com/uploads/sites/10/2015/09/2017-Audi-R8-V10-Plus-front-three-quarter-in-motion-02.jpg',
    year: '2018'
  },
  {
    make: 'Rolls-Royce',
    model: 'Phantom',
    color: 'White',
    price: 500000,
    quantity: 20,
    description:
      'An unmistakable aura. A presence that defies time itself. Phantom is the signature Rolls-Royce; an iconic and enduring interpretation of the modern motor car.In a world where unique is rarely experienced, Phantom is unmatched. Unrivalled. One of one.',
    image: 'http://paperlief.com/images/rolls-royce-wallpaper-4.jpg',
    year: '2019'
  },
  {
    make: 'Merceds',
    model: 'G-Wagon',
    color: 'Yellow',
    price: 500000,
    quantity: 20,
    description:
      'Created to conquer challenges on six continents, the 38-year evolution of the G-Class keeps elevating the pinnacle of refinement. From its advanced lighting to its classic upright shape, its purposeful elegance is both unmistakable and irrefutable',
    image:
      'https://st.motortrend.com/uploads/sites/5/2016/12/Mansory-G_class_Wide-Body-Kit_.jpg',
    year: '2019'
  }
]

const seed = () =>
  Promise.all(newUsers.map(user => User.create(user))).then(() =>
    Promise.all(newCars.map(car => Car.create(car)))
  )

const main = () => {
  console.log('Syncing db...')
  db
    .sync({force: true})
    .then(() => {
      console.log('Seeding databse...')
      return seed()
    })
    .catch(err => {
      console.log('Error while seeding')
      console.log(err.stack)
    })
    .then(() => {
      db.close()
      return null
    })
}

main()
