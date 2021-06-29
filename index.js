function superbowlWin(gameArray) {
  let result = gameArray.find( game => game.result === "W")
  return !!result ? result.year : undefined
}