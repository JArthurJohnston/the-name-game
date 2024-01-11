export function randomize(names) {
  // Fisher-Yates shuffle algorithm for arrays
  let m = names.length
  while (m) {
    let i = Math.floor(Math.random() * m--)
    ;[names[m], names[i]] = [names[i], names[m]]
  }
  return names
}
