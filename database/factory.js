'use strict'

/*
|--------------------------------------------------------------------------
| Factory
|--------------------------------------------------------------------------
|
| Factories are used to define blueprints for database tables or Lucid
| models. Later you can use these blueprints to seed your database
| with dummy data.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

Factory.blueprint('App/Models/User', (faker) => {
  return {
    username: faker.username(),
    email: faker.email(),
    password: 'user123',
  }
})

Factory.blueprint('App/Models/Report', faker => {
    return {
        divisi_id: faker.string({ length: 6, numeric: true }),
        project_id: faker.string({ length: 6, numeric: true }),
        task: faker.sentence({ length: 200 }),
        category: faker.string({ length: 50 }),
        place: faker.sentence({ length: 200 }),
        task_date: '2021-10-01',
        link: faker.url(),
    }
})
