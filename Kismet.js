/*
 * Kismet.js
 * Copyright (C) 2015
 * Shaun Landis <slandis@github>
 *
 * See README.MD for information, or read the comments (if they
 * exist at all.)
 */
var Kismet = function() {
  this.hand = [1, 1, 1, 1, 1];
};

/*
 * Throw the dice, causing multiple rolls.
 * @param {integer} rolls The number of times the dice should roll.
 * @param {function} callback The function to call after each roll of the dice.
 */
Kismet.prototype.throwDice = function(rolls, callback) {
  this.rolls = (typeof rolls !== 'undefined') ? rolls : 10;
  this.roll(callback);
};

/*
 * Roll the dice, essentially one flip of each die face.
 * @param {function} callback The function to call after the roll.
 */
Kismet.prototype.roll = function(callback) {
  if (this.rolls > 0) {
    this.rolls--;

    for (i = 1; i < 6; i++) {
      var die = Math.floor(Math.random()*6)+1;
      this.hand[i-1] = die;
    }

    callback(this.hand);

    sleep = setTimeout(function() {
      this.roll(callback);
    }.bind(this), 100);
  }
};

/*
 * Score the current hand.
 * @param {integer} type The type of hand to score.
 */
Kismet.prototype.scoreHand = function(type) {
  if (type > 0) {
    var s = this.toString();
    var value = parseInt(s.charAt(type-1));
    var total = value * type;

    return total;
  } else {
    var total = 0;
    var s = this.toString();

    for (i = 0; i <= 5; i++) {
      var value = s.charAt(i);
      total += (value * (i+1));
    }

    return total;
  }
};

Kismet.prototype.isTwoPairSame = function() {
  var match = /2[01]{4}2|[01]2[01]{2}2[01]|[01]{2}22[01]{2}/;
  var s = this.toString();

  if (s.match(match) || this.isFlush() || this.isFullHouseSame() || this.isFourKind() || this.isFiveKind()) {
    return true;
  }

  return false;
};

Kismet.prototype.isThreeKind = function() {
  var match = /^[012]*3[012]*/;
  var s = this.toString();

  if (s.match(match) || this.isFullHouse() || this.isFullHouseSame() || this.isFlush() || this.isFourKind() || this.isFiveKind()) {
    return true;
  }

  return false;
};

Kismet.prototype.isFlush = function() {
  var match = /400001|100004|040010|010040|004100|001400/;
  var s = this.toString();

  if (s.match(match) || this.isFullHouseSame() || this.isFiveKind()) {
    return true;
  }

  return false;
};

Kismet.prototype.isStraight = function() {
  var match = /111110|011111/;
  var s = this.toString();

  if (s.match(match)) {
    return true;
  }

  return false;
};

Kismet.prototype.isFullHouse = function() {
  var match = /2*3|3*2/;
  var s = this.toString();

  if (s.match(match) || this.isFiveKind()) {
    return true;
  }

  return false;
};

Kismet.prototype.isFullHouseSame = function() {
  var match = /200003|300002|020030|030020|002300|003200/;
  var s = this.toString();

  if (s.match(match) || this.isFiveKind()) {
    return true;
  }

  return false;
};

Kismet.prototype.isFourKind = function() {
  var match = /4/;
  var s = this.toString();

  if (s.match(match) || this.isFiveKind()) {
    return true;
  }

  return false;
};

Kismet.prototype.isFiveKind = function() {
  var match = /5/;
  var s = this.toString();

  if (s.match(match)) {
    return true;
  }

  return false;
}

Kismet.prototype.toString = function() {
  var a = b = c = d = e = f = 0;

  for (i = 0; i < 5; i++) {
    switch(this.hand[i]) {
      case 1:
        a++;
        break;

      case 2:
        b++;
        break;

      case 3:
        c++;
        break;

      case 4:
        d++;
        break;

      case 5:
        e++;
        break;

      case 6:
        f++;
        break;

      default:
        break;
    }
  }

  var string = a.toString() + b.toString() + c.toString() + d.toString() + e.toString() + f.toString();
  return string;
};
