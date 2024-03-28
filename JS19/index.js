// String: uses destructuring to declare five animal sounds
const animalSounds = {
  dog: 'bark',
  cat: 'meow',
  mouse: 'squeak',
  cow: 'moo',
  horse: 'neigh'
};
const { dog: dogSound, cat: catSound, mouse: mouseSound, cow: cowSound, horse: horseSound } = animalSounds;

// String: uses destructuring to declare the four traditional animal names
const animalNames = {
  cow: 'Bessie',
  cat: 'Daisy',
  dog: 'Moosie',
  horse: 'Sir BarksALot'
};
const { cow: traditionalCow, cat: traditionalCat, dog: traditionalDog, horse: traditionalHorse } = animalNames;

// String: uses destructuring to declare the three traditional animal colors
const animalColors = {
  cow: 'black and white',
  cat: 'brown',
  dog: 'white'
};
const { cow: cowColor, cat: catColor, dog: dogColor } = animalColors;

// Array: uses destructuring to declare the six rainbow color variables using initials
const [, r, o, y, g, b, indg] = rainbowColors;

// Object: uses destructuring to assign all appropriate variables using the keys as the variable names
const kermit = {
  muppetName: 'Kermit',
  color: 'green',
  song: 'Rainbow Connection',
  job: 'TV Host',
  partner: 'Miss Piggy'
};
const { muppetName, color, song, job, partner } = kermit;

// Object: uses destructuring to assign songs 2 and 4, and Kermit's job and partner
const { song2, song4 } = kermit;
