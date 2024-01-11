import { expect, test } from "vitest";
import { randomize } from "../src/randmizer";

test('it randomizes', () => {
    const names = ['allison', 'abbey', 'bethany', 'briana', 'catherine', 'elaine', 'daphne', 'georgiana', 'francine', 'jolene', 'mary', 'nancy', 'penelope', 'olivia', 'spencer', 'theresa', 'ursula', 'violet', 'zelda']

    const randomizedNames = randomize(names)
    console.log(randomizedNames);

    expect(randomizedNames.length).toEqual(names.length)
})