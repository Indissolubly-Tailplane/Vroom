'use strict';

const db = require('../server/db');
const { User } = require('../server/db/models/');
const { Car } = require('../server/db/models/');

const newUsers = [
  {
    firstName: 'Zohayb',
    lastName: 'Shaikh',
    email: 'zs@email.com',
    password: '123',
  },
  {
    firstName: 'Monica',
    lastName: 'Restrepo',
    email: 'mr@email.com',
    password: '123',
  },
  {
    firstName: 'Celine',
    lastName: 'Gauchey',
    email: 'cg@email.com',
    password: '123',
  },
  {
    firstName: 'Zachary',
    lastName: 'Margolies',
    email: 'zm@email.com',
    password: '123',
  },
];

const newCars = [
  {
    make: 'Zohayb',
    model: 'Shaikh',
    color: 'zs@email.com',
    price: '123',
    description: 'cool car',
    image: 'img.png',
    year: '2012',
  },
];

const seed = () =>
  Promise.all(newUsers.map(user => User.create(user))).then(() =>
    Promise.all(newCars.map(car => Car.create(car)))
  );

const main = () => {
  console.log('Syncing db...');
  db
    .sync({ force: true })
    .then(() => {
      console.log('Seeding databse...');
      return seed();
    })
    .catch(err => {
      console.log('Error while seeding');
      console.log(err.stack);
    })
    .then(() => {
      db.close();
      return null;
    });
};

main();
