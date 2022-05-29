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
  },
  secretNumGen: function () {
    this.secretNum = Math.floor(Math.random() * (
      this.biggestNum - this.smallestNum + 1) + this.smallestNum)
    return this.secretNum
  },
}

  console.log(game.secretNumGen())``