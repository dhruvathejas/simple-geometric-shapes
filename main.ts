function drawSquare (sideLength: number) {
    turtle.setPositionCartesian(0 - sideLength / 2, sideLength / 2)
    for (let index = 0; index < 4; index++) {
        turtle.moveTurtleDirection(TurtleDirection.Forward, sideLength)
        turtle.turnTurtleDirectionByDegrees(TurtleTurnDirection.Right, 90)
    }
}
drawSquare(80)
