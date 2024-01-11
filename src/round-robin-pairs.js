/**
 * Generates a list of pairings for each name for the round robin part of the game
 * @param {string[]} names
 * @returns {Array} An array of tuples. [[name1, name2]]
 */
export function generatePairs(names) {
  const pairs = []
  for (let i = 0; i < names.length - 1; i++) {
    for (let j = i + 1; j < names.length; j++) {
      pairs.push([names[i], names[j]])
    }
  }
  return pairs
}
