const faker = require('faker');

exports.seed = function(knex, Promise) {

  createFakerUser = () => {
    return { //this is all the information that we need faked. Will return and object
      firebase_id: faker.random.alphaNumeric(16),
      email: faker.internet.email(),
      name: faker.name.findName(),
      image_url: faker.image.avatar()
    }
  }

  const users = []; //will hold our fake users
  const numOfFakes = 500;

  for (let i = 0; i < numOfFakes; i++) {
    users.push(createFakerUser(i)) //push each new faker user into the users array
  }

  return (
    knex('users') //access the users table
      .then(function() {
        return knex ('users').insert(users) //insert the users array into the users table
      })
  )
  
};