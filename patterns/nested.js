/**
 * @param {number} rows
 * @param {number} cols
 * @returns {string[][]} an array containing `rows` arrays of `cols` elements each.
 * Each element is the string "-".
 * @returns `null` if either argument is not a number
 * @returns `[]` if either argument is 0 or negative
 */
export function makeBoard(rows, cols) {
  if (typeof rows !== "number" || typeof cols !== "number") return null;
  if (rows <= 0 || cols <= 0) return [];

  const board = [];
  for (let i = 0; i < rows; i++) {
    const row = [];
    for (let j = 0; j < cols; j++) {
      row.push("-");
    }
    board.push(row);
  }
  return board;
}

/**
 * A 'triangle' is 2D array where each inner array has one more element than the previous.
 *
 * For example, this is a 2x2 triangle:
 * [
 *   ["-"],
 *   ["-", "-"]
 * ]
 *
 * @param {*} size - the number of rows in the triangle
 * @returns {string[][]} a triangle with `side` rows
 * @returns `null` if `size` is not a number
 * @returns `[]` if `size` is 0 or negative
 */
export function makeTriangle(size) {
  //if the data type of size is not a number, return null
  if (typeof size !== "number") return null;

  //if size is less than or equal to zero (zero or negative,)
  //return a blank array
  if (size <= 0) return [];

  //set triangle equal to a blank array
  let triangle = [];

  //loop through the array of rows, starting with index position 1
  // continue looping until the index position is less than or equal to size
  // increment by one while looping
  for (let i = 1; i <= size; i++) {
    // set row equal to a blank array
    let row = [];

    //loop through each individual row, starting with index position 0
    //continue looping as long as the index position is less than i
    //increment the index by one
    for (let j = 0; j < i; j++) {
      //add the dashes to the rows that we are looping through
      row.push("-");
    }
    // add the dashed rows to the triangle we're creating
    triangle.push(row);
  }
  //return the created triangle after executing through the logic above
  return triangle;
}

/**
 * @param {string[]} words
 * @param {string} letter - a single character
 * @returns {number}  the number of times `letter` appears in all the words
 * @returns `0` if `letter is not a string
 */
export function countLetter(words, letter) {
  //return zero if the letter is not a string
  if (typeof letter !== "string") return 0;

  //set counter for instances of a single letter to zero
  let countInstancesOfLetter = 0;

  //start looping through the array at index position zero
  //continue looping as long as index is less than the length of the words string
  //increase the index by one for each loop
  for (let i = 0; i < words.length; i++) {
    //set word equal to the character of words at index j
    let word = words[i];

    //Loop through the individual characters in the word
    //as long as the number of characters in the word is less
    //than the entire word length
    for (let j = 0; j < word.length; j++) {
      let char = word[j];

      //verify whether the character we're looking for matches the letter
      if (char === letter) {
        //if the character matches letter, increase the letter counter by one
        countInstancesOfLetter = countInstancesOfLetter + 1;
      }
    }
  }
  //return the count of the number of
  // instances of the specified letter
  return countInstancesOfLetter;
}
