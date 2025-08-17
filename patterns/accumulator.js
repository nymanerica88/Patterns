/**
 * You can assume that `n` is an integer.
 * @param {number} n
 * @returns {number} the sum of all integers from 1 to n, inclusive
 * @returns `0` if n is 0 or negative
 */
export function sumToN(n) {
  if (typeof n !== "number") return NaN;

  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

/**
 * @param {number} n
 * @returns {number} the product of all integers from 1 to n, inclusive
 * @returns `NaN` if n is not a number
 * @returns `undefined` if n is negative
 * @returns `1` if n is 0
 */
export function factorial(n) {
  if (typeof n !== "number") return NaN;
  if (n < 0) return undefined;
  if (n === 0) return 1;

  let product = 1;
  for (let i = 1; i <= n; i++) {
    product *= i;
  }
  return product;
}

/**
 * @param {number} n
 * @returns {number[]} an array of integers from 1 to n, inclusive
 * @returns `null` if n is not a number
 * @returns `[]` if n is 0 or negative
 */
export function buildNArray(n) {
  if (typeof n !== "number") return null;
  if (n <= 0) return [];

  let result = [];
  for (let i = 1; i <= n; i++) {
    result.push(i);
  }
  return result;
}

/**
 * @param {string[]} strings
 * @returns {string} the longest string in `strings`
 */
export function getLongestString(strings) {
  // set most to an empty string
  let most = "";

  //i starts at zero;
  // the loop runs as long as i is less than the length of strings;
  // i increments by one
  for (let i = 0; i < strings.length; i++) {
    //if strings at i contains more characters than the length of the current string,
    // replace strings[i] with the current (longer) string
    if (strings[i].length > most.length) {
      most = strings[i];
    }
  }

  //return the longest string or the string with the most characters
  return most;
}

/**
 * @param {boolean[]} attendance - `true` means a student is present, `false` means a student is absent
 * @returns {number} the number of students present
 */
export function countPresent(attendance) {
  //set count equal to zero
  let count = 0;
  //loop through each index if the index number is less than or equal to the length of the array
  // and if the evaluation of attendance[i]=true, add one to the total count of those present
  for (let i = 0; i <= attendance.length; i++) {
    if (attendance[i] === true) {
      count++;
    }
  }
  //return the final count, after the logic directly above has been evaluated
  return count;
}

/**
 * In DNA strings, the symbols `A` and `T` are complements of each other,
 * and the symbols `C` and `G` are complements of each other.
 * A complementary strand is a string formed by the complement
 * of each nucleobase in the original string.
 *
 * @param {string} dna - a string of the symbols `A`, `T`, `C`, or `G`
 * @returns {string} the complementary DNA strand
 * @returns `null` if `dna` is not a string
 */
export function complementDNA(dna) {
  // if dna is not equal to type string, return null
  if (typeof dna !== "string") return null;

  //set cmplmentryString equal to a blank string
  let cmplmntryString = "";

  //iterate through the string starting with index position zero
  // keep iterating as long as the index number is less than the string length
  //set origDNA equal to the string value at index i
  for (let i = 0; i < dna.length; i++) {
    let origDNA = dna[i];

    //if the string character at index i in the original string is A, return T
    //if the string character at index i in the original string is C, return G
    //if the string character at index i in the original string is G, return c
    //if the string character at index i in the original string is T, return A
    if (origDNA === "A") {
      cmplmntryString += "T";
    } else if (origDNA === "C") {
      cmplmntryString += "G";
    } else if (origDNA === "G") {
      cmplmntryString += "C";
    } else if (origDNA === "T") {
      cmplmntryString += "A";
    }
  }

  // return the complementary string populated with the relevant values
  return cmplmntryString;
}
