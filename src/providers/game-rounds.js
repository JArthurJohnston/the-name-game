export const GAME_ROUNDS = [
  {
    index: 0,
    name: "Yes or No",
    passed: (name) => name.results[0] > 0,
  },
  {
    index: 1,
    name: 'Round Robin',
    passed: () => true
  },
  {
    index: 2,
    name: 'Brackets',

  }
];

export const ROUNDS_MAP = {
    YesOrNo: GAME_ROUNDS[0],
    RoundRobin: GAME_ROUNDS[1],
    Brackets: GAME_ROUNDS[2]
}
