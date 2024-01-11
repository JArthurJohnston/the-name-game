import { expect, test } from 'vitest'
import { generatePairs } from '../src/round-robin-pairs'

test('pairing names', () => {
  const names = ['sue', 'anna', 'claribel', 'helen', 'joy', 'elaine', 'mel']

  const pairings = generatePairs(names)

  expect(pairings.length).toBe(21)
})
