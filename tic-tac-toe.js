function TicTacToe() {
  this.board = $('table')
  this.firstRow = this.board.children('#first')
  this.secondRow = this.board.children('#second')
  this.thirdRow = this.board.children('#third')
  this.boardReplica = [[this.firstRow.children('.[0] [0]'), this.firstRow.children('.[0] [1]'), this.firstRow.children('.[0] [2]')], [this.secondRow.children('.[1] [0]'), this.secondRow.children('.[1] [1]'), this.secondRow.children('.[1] [2]')], [this.thirdRow.children('.[2] [0]'), this.thirdRow.children('.[2] [1]''), this.thirdRow.children('.[2] [2]')]]
}

TicTacToe.prototype = {
  this.play = function () {
    while (this.won() === false) {
      this.playerOne()
      if (this.won() === false){
        this.playerTwo()
      }
    }
    console.log('Winning player: ' + this.won())
  }

  this.playTurn = function (gamePiece) {
    event.preventDefault()
    var button = $(this)
    if (button.is(':empty')) {
      var coordinates = button.class
      var square = this.board.children('.' + coordinates)[0]
      square.append(gamePiece)
    }
  }

  this.playerOne = function () {
    var gamePiece = o
    this.board.on('click', this.playTurn(gamePiece))
  }

  this.playerTwo = function () {
    var gamePiece = x
    this.board.on('click', this.playTurn(gamePiece))
  }

  this.won = function () {
    for (i = 0; i < 3; i++) {
      if (this.boardReplica[i][0] === this.boardReplica[i][1] === this.boardReplica[i][2]) {
        return this.boardReplica[i][0]
      } else if (this.boardReplica[0][i] === this.boardReplica[1][i] === this.boardReplica[2][i]) {
      return this.boardReplica[0][i]
    } else if (this.boardReplica[0][0] === this.boardReplica[1][1] === this.boardReplica[2][2]) {
      return this.boardReplica[0][0]
    } else if (this.boardReplica[2][0] === this.boardReplica[1][1] === this.boardReplica[2][0]){
      return this.boardReplica[2][0]
    }
  }
  return false
}

    // if ((this.boardReplica[0][0] === this.boardReplica[0][1]) && (this.boardReplica[0][0] === this.boardReplica[0][2]))
  }
}
