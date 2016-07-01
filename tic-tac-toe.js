function TicTacToe() {
  this.board = $('table')
  this.won = function (count) {
      if (count < 5) {
        return false
      }
      for (i = 0; i < 3; i++) {
        console.log($('#' + i + '-' + i).contents()[0])
        if (($('#' + i + '-' + 0).contents()[0] === $('#' + i + '-' + 1).contents()[0]) && ($('#' + i + '-' + 0).contents()[0] === $('#' + i + '-' + 2).contents()[0]) && (($('#' + i + '-' + 0).contents() !== []))) {
          return $('#' + i + '-' + 0).contents()[0]
        } else if (($('#' + 0 + '-' + i).contents()[0] === $('#' + 1 + '-' + i).contents()[0]) && ($('#' + 0 + '-' + i).contents()[0] === $('#' + 2 + '-' + i).contents()[0]) && (($('#' + 0 + '-' + i).contents() !== []) )) {
        return $('#' + 0 + '-' + i).contents()[0]
      }
    }
    if ($('#' + 0 + '-' + 0).contents()[0] === $('#' + 1 + '-' + 1).contents()[0] && $('#' + 0 + '-' + 0).contents()[0]  === $('#' + 2 + '-' + 2).contents()[0] && $('#' + 0 + '-' + 0).contents() !== []) {
      return $('#' + 0 + '-' + 0).contents()[0]
    } else if ($('#' + 2 + '-' + 0).contents()[0] === $('#' + 1 + '-' + 1).contents()[0] && $('#' + 2 + '-' + 0).contents()[0] === $('#' + 2 + '-' + 0).contents()[0] && $('#' + 2 + '-' + 0).contents() !== []){
      return $('#' + 2 + '-' + 0).contents()[0]
    } else if (count === 9) {
      return "Draw"
    }
    return false
  }

  this.playTurn = function (game) {
    var plays = 0
      this.board.on('click', function () {
        event.preventDefault()
        if (game.won(plays) === false && plays < 9){
          var button = event.target
          var coordinates = button.id
          if ($('#' + coordinates).contents()[0] !== 'x' && $('#' + coordinates).contents()[0] !== 'o') {
                if (plays % 2 === 0){
                  var gamePiece = 'o'
                  plays++
                } else {
                  var gamePiece = 'x'
                  plays++
                }
            $(document.getElementById(coordinates)).text(gamePiece)
            if (game.won(plays) !== false) {
              alert("Winner: " + game.won(plays))
              return false
            }
          }
      } else {
        alert("Winner: " + game.won(plays))
      }
    })
  }

}
