/**
 * @param {string[]} playlist
 * @param {string} song
 * @returns {boolean} whether `song` is in `playlist`
 * @returns `false` if `playlist` is empty
 */
export function isSongInPlaylist(playlist, song) {
  for (const songInPlaylist of playlist) {
    if (songInPlaylist === song) {
      return true;
    }
  }
  return false;
}

/**
 * @param {number[]} numbers
 * @returns {boolean} whether all `numbers` are even
 * @returns `undefined` if `numbers` is empty
 */
export function isAllEven(numbers) {
  // if the length of the array is zero (no array), return undefined
  if (numbers.length === 0) return undefined;

  //loops through each individual number of the numbers array and
  //if the number divided by two doesn't equal zero, return false (it's odd)
  for (const number of numbers) {
    if (number % 2 !== 0) {
      return false;
    }
  }
  //if the number divided by two does equal zero, return true (it's even)
  return true;
}

/**
 * You're in charge of a group camping trip. You've packed supplies in a backpack,
 * and each item in the backpack has a category, such as "food", "equipment", or "clothes".
 * Each item in the "food" category is enough to feed one person.
 *
 * @param {{category: string}[]}} backpack
 * @param {number} people
 * @returns {boolean} whether there is enough food in the backpack to feed everyone
 */
export function haveEnoughFood(backpack, people) {
  //set initial number of food items to zero, so the counter will begin at zero
  let numberOfFoodItems = 0;

  //loop through each item in the backpack
  for (const things of backpack) {
    //if it is a food item, increase the food item counter (numberOfFoodItems) by one
    if (things.category === "food") {
      numberOfFoodItems++;
    }
  }

  //return when the number of food items is greater than or equal to the number of people
  return numberOfFoodItems >= people;
}
