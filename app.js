const game = {
  title: 'Guess the Number!',

  // Maybe have a easy normal hard mode //
  /* Game Values */
  biggestNum: 100,
  smallestNum: 1, 
  secretNum: null, // determined on start 
  prevGuesses: [], // holds guesses in empty array 

  play: function () {
    // Initialize Secret Number Generator //
    this.secretNumGen()
    // Ask player to start guessing // 
    this.getGuess()
    return this.getGuess()
  },
  secretNumGen: function () { // Works 
    this.secretNum = Math.floor(Math.random() * (
      this.biggestNum - this.smallestNum + 1) + this.smallestNum)
    return this.secretNum
  },
  getGuess: function () {
    let guesses = [] // holds what will be returned 
    for (i = 0; i < 10; i++) {
      guesses.push(1 /*prompt(`Put a Number`)*/) // 1 for testing because I hate prompt
    }
    this.prevGuesses = guesses.splice(0) 
    return this.prevGuesses
  }
}
game.play() 

console.log(game.secretNumGen())
console.log(game.getGuess())
console.log(game.play())
