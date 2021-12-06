import userModel from '../api/users/userModel';
import genreModel from '../api/genres/genreModel';
import users from './users';
import genres from './genres';
import dotenv from 'dotenv';

dotenv.config();

// deletes all user documents in collection and inserts test data
async function loadUsers() {
  console.log('load user Data');
  try {
    await userModel.deleteMany();
    await users.forEach(user => userModel.create(user));
    console.info(`${users.length} users were successfully stored.`);
  } catch (err) {
    console.error(`failed to Load user Data: ${err}`);
  }
}

async function loadGenres() {
  try{
    await genreModel.deleteMany();
    await genreModel.collection.insertMany(genres);
    console.info(`${genres.length} genres were successfully stored.`);
  } 
  catch (e) {
    console.log(`failed to load genres: ${e}`);
  }
}

if (process.env.SEED_DB) {
  loadUsers();
  loadGenres();
}