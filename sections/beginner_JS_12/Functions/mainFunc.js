/*Replace this function and make it simpler
function main() {
    putBeeper();
    move();
    turnLeft();
    move();
    putBeeper();
    turnRight();
    move();
    turnLeft();
    move();
    putBeeper();
    turnRight();
    move();
    turnLeft();
    move();
    putBeeper();
    turnRight();
    move();
    turnLeft();
    move();
    putBeeper();
    turnRight();
}
*/

function main(){
    putBeeper();
    diagonalMoveAndBeeper()
    diagonalMoveAndBeeper()
    diagonalMoveAndBeeper()
    diagonalMoveAndBeeper()
}

function diagonalMoveAndBeeper() {
    move();
    turnLeft();
    move();
    putBeeper();
    turnRight();
}