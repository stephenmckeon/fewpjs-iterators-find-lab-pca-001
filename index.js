const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(record) {
  const result = record.find(superbowl => superbowl.result === "W")
  return result ? result.year : undefined
}