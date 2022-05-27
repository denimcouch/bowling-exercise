const scoreByFrames = require('./scoreByFrames')

const spareData = [5, '/', 7, 1]

const fullGame = [
  3,
  6,
  1,
  3,
  0,
  5,
  'X',
  5,
  1,
  2,
  3,
  4,
  '/',
  2,
  6,
  'X',
  8,
  '/',
  3,
]

const unfinishedGame = [4, 5, 'X', 1]

describe('scoreByFrames Function', () => {
  it('can calculate the total score for each frame', () => {
    expect(scoreByFrames(fullGame)).toEqual([
      9, 4, 5, 16, 6, 5, 12, 8, 20, 13,
    ])
  })

  it('can calculate the total of an ongoing game', () => {
    expect(scoreByFrames(unfinishedGame)[-1]).toBeFalsy()
    unfinishedGame.push(3)
    expect(scoreByFrames(unfinishedGame)).toEqual([9, 14, 4])
  })

  it('can calculate calculate the score for a spare', () => {
    expect(scoreByFrames(spareData)).toEqual([17, 8])
  })
})
