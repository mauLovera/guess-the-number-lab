const game = {
  title: "Guess the Number!",

  /* Game Values */
  biggestNum: 100,
  smallestNum: 1,
  secretNum: null, // determined on start

  prevGuesses: [], // holds guesses in empty array

  play: function () {
    // Initialize Secret Number Generator // 
    this.secretNumGen() 
    // Ask player to start guessing and render their previous guesses in the prompt window //
    do { // loop goes: run prompt to get guess, push it into prev guess, render either a win alert or a its too high or low alert, repeat until you get the secret number
      this.prevGuesses.push(this.getGuess())
      this.render()
    } while (this.prevGuesses[this.prevGuesses.length - 1] !== this.secretNum) 
    // Again dont understand why we put -1 
  },

  secretNumGen: function () { // Works 
    this.secretNum = Math.floor(Math.random() * (
      this.biggestNum - this.smallestNum + 1) + this.smallestNum)
    return this.secretNum
  },

  getGuess: function () {
    let guess // this will get pushed into previous guesses 
    do {
      guess = parseInt(
        prompt(`Enter a guess between ${this.smallestNum} and ${this.biggestNum}\nHere is the secret number: ${this.secretNum}\nPrevious guesses: ${this.prevGuesses.join(" -- ")} `) 
        // I hate prompt 
      )
    } while (isNaN(guess) || guess < this.smallestNum || guess > this.biggestNum)
    return guess
  },

  // honestly had trouble with this one and looked at the solution
  render: function () {
    let message // I dont get why we put this.prevGuess.length (- 1) <== this part
    if (this.prevGuesses[this.prevGuesses.length - 1] === this.secretNum) {
      message = `You guessed the number in ${this.prevGuesses.length} ${"guesses"}!`
    } else {
      message = `Not quite! Your guess is too ${this.prevGuesses[this.prevGuesses.length - 1] > this.secretNum ? "high" : "low"} \nPrevious guesses: ${this.prevGuesses.join(" -- ")}`
    }
    alert(message) 
  },
}
game.play() 
