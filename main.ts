let side_length = 80
turtle.setPositionCartesian(0 - side_length / 2, side_length / 2)
for (let index = 0; index < 4; index++) {
    turtle.moveTurtleDirection(TurtleDirection.Forward, side_length)
    turtle.turnTurtleDirectionByDegrees(TurtleTurnDirection.Right, 90)
}
