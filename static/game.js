//var socket = io();

// Creates player properties
let player = {
//  username: `${username}`,
  hand: [],
  money: 0,
}

// Creates table properties
let table = {
  cards: [],
  pot: 0,
}

// Sets card properties
var cards = {
  deck: [],
  kinds: ['s', 'c', 'h', 'd'],
  values: [1,2,3,4,5,6,7,8,9,10,11,12,13,14],
};

//Builds new deck
function build_deck() {
  var deck = cards.deck = [];
  for (var i=1;i<14;i++) {
    deck.push(String(i)+'s');
    deck.push(String(i)+'c');
    deck.push(String(i)+'h');
    deck.push(String(i)+'d');
  };
};

// This is used to find the occurence of an element in an array
function count_occurence(item, array) {
  var result = array.includes(item);
  var n = array.length
  // Removes it from the array if it exists within it
  if (result) {
    while (array.includes(item)) {
      var a = array.indexOf(item);
      array.splice(a,1);
  };
    n -= array.length;
  } else { n = 0; };
  // Returns the number of occurences as n
  return n;
};

// This is used to find the highest value in an array
function highestIndex(arr) {
  // Idk why but the first element in this array becomes 1
    var max = arr[1];
    var maxIndex = 1;

    for (var i = 2; i < arr.length; i++) {
        if (arr[i] > max) {
            maxIndex = i;
            max = arr[i];
        } }
    //returns index of highest number
    return maxIndex;
};

// Ranks players' hand
// TO DO!!!!
function rank_hand(hand) {
  var kinds = cards.kinds;
  var suits = [];
  var newHand = [];
  var occurences = [];
  for (i=0;i<hand.length;i++){
    var s = String(hand[i]);
    suits.push(s.slice(-1));
    newHand.push(Number(s.slice(0-s.length,s.length-1))); };
  for (var i=0;i<4;i++){
  var kind = cards.kinds[i]
  var count = count_occurence(kind, suits)
  console.log(cards.kinds[i] + ' => ' + count);
  occurences.push(count);
  };
  console.log(occurences);
  if (occurences[highestIndex(occurences)]>4) {
    console.log('Flush')
  };

  const isStraight = a => {
    const uniq = a.filter((val, idx) => a.indexOf(val) === idx);
    uniq.sort((a, b) => a-b);
    const tries = uniq.length - 4;
    for (var i=0; i<tries; i++) {
      if (uniq[i + 4] - uniq[i] === 4) {
        return 'Straight';
      }
    }
    return '';
  }
  console.log(isStraight(newHand));
};

function deal_cards(hand) {
  var deck = cards.deck;
  for (var i=0;i<5;i++) {
    var index = Number(Math.floor(Math.random() * deck.length));
    var card = deck[index];
    table.cards.push(card);
    console.log(index + ' => '+card);
    deck.splice(deck.indexOf(card),1);
  }

  for (var i=0;i<2;i++) {
    var index = Number(Math.floor(Math.random() * deck.length));
    var card = deck[index];
    hand.push(card);
    console.log(index + ' => '+card);
    deck.splice(deck.indexOf(card),1);
  }
  console.log(deck.length);
  return hand
}
build_deck();
//console.log(cards.deck.length);
//console.log(cards.deck.join(' '));
deal_cards(player.hand);
//console.log(cards.deck.length);
console.log(table.cards);

//console.log(cards.kinds);
console.log(player.hand);
rank_hand(player.hand.concat(table.cards));
