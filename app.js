const game = {
  title: 'Guess the Number!',

  /* Game Values */ 
  biggestNum: 100, //prompt(`Assign highest value`), // Reassign this to user choice
  smallestNum: 1, //prompt(`Assign Lowest Value`), // Reassign this to user choice
  secretNum: null,
  previousGuess: [], 

  /* Get Guess Method */ 
  getGuess: function(guess) {
    if (isNaN(guess)) {
      return `Please input a valid number`
    } else {
    return prompt(`Enter a guess between ${smallestNum} and ${biggestNum}.`)
  }},
  
  /* Play method */
  play: function() {
    this.secretNum = Math.floor(Math.random() * 
      (this.biggestNum - this.smallestNum + 1)) + this.smallestNum
  }
}

// console.log(game)

