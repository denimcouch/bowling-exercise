function scoreByFrames(rollArray) {
  let frameScore = []
  let cursor = 0
  
  if (rollArray.length > 21) {return 'invalid input'}
  if (rollArray.some(roll => roll < 0)) {return 'invalid input'}
  
  if (rollArray.length <= 1) {frameScore.push(null)}
  if (rollArray.length === 12 && rollArray.every(isStrike)) {
    let perfectGame = []
    for (let i = 0; i < 10; i++) {
      perfectGame.push(30)
    }
    return perfectGame
  }
  
  for (let frame = 0; frame < rollArray.length / 2; frame++) {
    let currentRoll = rollArray[cursor]
    let nextRoll = rollArray[cursor + 1]
    
    if (currentRoll === 'X') {
      let strikeTotal = null
      let thirdRoll = rollArray[cursor + 2]
      if (nextRoll && thirdRoll) {
        if (thirdRoll === '/') {
          strikeTotal = 10 + 10
        } else {
         strikeTotal = 10 + nextRoll + thirdRoll 
        }
      }
      frameScore.push(strikeTotal)
      cursor++
    } else if (currentRoll + nextRoll === 10 || nextRoll === '/') {
      let spareTotal = null
      let thirdRoll = rollArray[cursor + 2]
      if (thirdRoll) {
        spareTotal = 10 + thirdRoll
      }
      frameScore.push(spareTotal)
      cursor += 2
    } else {
      if (nextRoll || nextRoll === 0) {
        frameScore.push(currentRoll + nextRoll)
      } else {
        frameScore.push(null)
      }
      cursor += 2
    }
  }
  return frameScore
}

const isStrike = value => value === 'X'

module.exports = scoreByFrames