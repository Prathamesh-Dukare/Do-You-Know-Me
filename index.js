const input = require("readline-sync")
var qnaObject = {
  "My name? " : "PRATHAMESH", 
  "My hobby? " : "TRACKING", 
  "My profession?  " : "DEVELOPER",
  "My favourite Programming lalanguage ?":"JAVASCRIPT"
}
var list = Object.keys(qnaObject)
var score = 0
var highScore = 3

function game() {
  for (i=0;i<list.length;i++) {
    var userAns = input.question(list[i])
    userAns = userAns.toUpperCase()
    //hellllo
    if (userAns == qnaObject[list[i]]) {
      console.log("correct!")
      score++
    }else {
      console.log("Wrong!")
    }
  }
  console.log("-------------------\nYour Score is : "+score+'\nHigh Score is : '+highScore+'\n-------------------')
}
game()