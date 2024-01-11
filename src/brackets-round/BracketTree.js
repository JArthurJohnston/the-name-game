function makePairings(list) {
  const result = []
  for (let i = 0; i < list.length / 2; i++) {
    result.push([list[i], list[list.length - i - 1]])
  }
  return result
}

const PASS_NAME = { text: 'PASS', results: [0, 0, 1] }

export class Bracket {
    /**
     * 
     * @param {Array} sortedNames A sorted list of names. Assumes names are sorted highest to lowest
     */
  constructor(sortedNames) {
    if(sortedNames.length % 2 === 0) {
        this.pairings = makePairings(sortedNames)
    } else {
        this.pairings = [[sortedNames[0], PASS_NAME], ...makePairings(sortedNames.slice(1, sortedNames.length))]
    }
    this.index = 0
  }

  get current() {
    return this.pairings[this.index]
  }

  get next() {
    this.index = this.index + 1
    return this.pairings[this.index]
  }
}
