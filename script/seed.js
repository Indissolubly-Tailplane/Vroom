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
    description:
      'As an all-electric supercar, Roadster maximizes the potential of aerodynamic engineering—with record-setting performance and efficiency.',
    image:
      'https://cdn.images.express.co.uk/img/dynamic/24/590x/Tesla-Roadster-902249.jpg',
    year: '2018'
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
