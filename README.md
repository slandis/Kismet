# Kismet.js
# Copyright (C) 2015
# Shaun Landis <slandis@github>

Basic Kismet (Yahtzee) functions in Javascript

Kismet is a scoring dice game with some poker attributes. It is almost identical to Yahtzee, with a couple exceptions:

- The dice are colored in pairs. 1's and 6's are black, 2's and 5's are red, and 3's and 4's are green.
- The bonus potential in the Upper Section is greatly increased, starting at 35 and topping out at 75 depending upon where your score sits in this section.
- The Lower Section begins with an added *Two Pair Same Color* score.
- There is only one 'straight' section, and it must be a run of five dice.
- There is an added *Flush* score.
- There is an added *Full House Same Color* score.
- The Yahztee score is a Kismet score (Five of a Kind) and nets you the sum of your dice plus 50 bonus points.

** Constructor **
## Kismet()

Creates a new Kismet object.

** Function List **
## Kismet.throwDice(rolls, callback)

Throws the dice _rolls_ number of times, returning the results to _callback_.

## Kismet.roll(callback)

Rolls the dice faces once, returning the results to _callback_.

## Kismet.scoreHand(type)

Calculates the score based on _type_: 1-6 sums the number of matching faces on the dice, 0 sums the total of all dice.

## Kismet.isTwoPairSame()

Checks for and returns *true* if the dice contain two pairs of the same color. Flush, Full House Same Color, Four of a Kind, and Five of a Kind are also valid Two Pair Same Color matches.

## Kismet.isThreeKind()

Checks for and returns *true* if the dice contain three of a kind. Flush, Full House, Full House Same Color, Four of a Kind, and Five of a Kind are also valid Three of a Kind matches.

## Kismet.isFlush()

Checks for and returns *true* if the dice contain a flush, ie. all dice are the same color. Full House Same Color and Five of a Kind are also valid Flush matches.

## Kismet.isStraight()

Checks for and returns *true* if the dice contain a straight run, ie. 1,2,3,4,5 or 2,3,4,5,6.

## Kismet.isFullHouse()

Checks for and returns *true* if the dice contain a full house. Five of a Kind is also a valid Full House match.

## Kismet.isFullHouse()

Checks for and returns *true* if the dice contain a full house same color, ie. a standard full house but all dice of the same color. Five of a Kind is also a valid Full House Same Color match.

## Kismet.isFourKind()

Checks for and returns *true* if the dice contain four of a kind. Five of a Kind is also a valid Four of a Kind match.

## Kismet.isFiveKind()

Checks for and returns *true* if the dice contain five of a kind, aka "a kismet."

## Kismet.toString()

Converts the dice into a counter string representing the number of each die face in the hand. If the current hand is 2,4,4,1,5 for example, the counter string would appear as '110210'.
