# electron-whist

## Stories

- The user can see the main menu whith the following options: New game, Leaderboards, Tips & help.
- The user can start a new game.
- Before a new game...
  - ...the user can select the applied game ruleset (2 game ruleset: Stadard, Oh hell!).
  - ...the user can enter the number of players (2-6).
  - ...the user can pick from the following game types: asceding, descending or pyramid.
  - ...the user can enter the name of the players.
- The user can view the leaderboard per ruleset & game type (player name, points).
- The user can view and browse Tips & help.
- In a new game...
  - ...the user can enter the estimations.
  - ...the user can enter the takes.
  - ...the user can view the calculations based on the previous estimations and takes.
  - ...the user can view current rankings within the game.
  - ...the user can view the current ace (per round).
  - ...at the start of a new round, visible steps show which person should deal the cards (and shuffle),which one picks the ace, and who is the first player of the round.
  - ...the user can view whose turn it is.
  - ...the user can view the winner.

## Visual features

- Animated ranking changes (if someone overtakes, the switching lines are animated).
- Animated round changes (dealing cards).
- Game statistics:
  - Best estimator: most accurately predicted, how many he's going to take.
  - Risk taker: highest estimates, regardless of winning or losing them.
  - Safety player: lowest estimates, regardless of winning or losing them.
  - Turning tides: change the longest winning streak to a losing streak, or the longest losing streak to a winning streak (achieving the same win/lose result in 3 or more consecutive rounds)
- Winning animation.
