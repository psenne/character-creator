function GetRandomItemFromArray(arr) {
  var position = Math.floor((window.crypto.getRandomValues(new Uint32Array(1))[0] / (Math.pow(2, 32) - 1)) * (arr.length));
  return arr[position]
}

function RollDie(noOnesAllowed = false) {
  if (noOnesAllowed) {
    return Math.floor((window.crypto.getRandomValues(new Uint32Array(1))[0] / (Math.pow(2, 32) - 1)) * (5) + 2); //only allow 2 - 6 as rolls
  }
  else {
    return Math.floor((window.crypto.getRandomValues(new Uint32Array(1))[0] / (Math.pow(2, 32) - 1)) * (6) + 1);
  }
}

function RollStat(noOnesAllowed = false) {
  var DiceRoll = [RollDie(noOnesAllowed), RollDie(noOnesAllowed), RollDie(noOnesAllowed), RollDie(noOnesAllowed)].sort().splice(1, 3); //roll 4 times, and keep highest 3 rolls
  return DiceRoll.reduce((roll, sum) => sum += roll, 0); //sum rolls
}

function RollStats(noOnesAllowed = false) {
  return {
    "strength": RollStat(noOnesAllowed),
    "dexterity": RollStat(noOnesAllowed),
    "constitution": RollStat(noOnesAllowed),
    "intelligence": RollStat(noOnesAllowed),
    "wisdom": RollStat(noOnesAllowed),
    "charisma": RollStat(noOnesAllowed)
  }
}

