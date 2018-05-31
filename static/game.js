var socket = io();

// Creates player properties
let player = {
  username: `${username}`,
  hand: [],
  money: 0,
}

// Creates table properties
let table = {
  cards: [],
  pot: 0,
}

// Sets card properties
let cards = {
  kinds: ['s', 'c', 'h', 'd'],
  values: [1,2,3,4,5,6,7,8,9,10,11,12,13],
}

// Creates deck array
deck = [];

// Creates new deck
function build_deck() {
  deck = [];
  for (i=1;i<14;i++) {
    deck.push(String(i)+'s');
    deck.push(String(i)+'c');
    deck.push(String(i)+'h');
    deck.push(String(i)+'d');
  };
  return deck;
};

// This is used to find the same number of suits or values
function count_occurence(item, array) {
  result = array.includes(item);
  n = array.length
  // Removes it from the array if it exists within it
  if (result) {
    while (array.includes(item)) {
      var a = array.indexOf(item);
      array.splice(a,1);
    };
    n -= array.length;
  };
  // Returns the number of occurences as n
  return n;
};

function rank_hand(player.hand) {
  values =
  for (i=0;i<4;i++){
  kind = cards.kinds[i]
  console.log(cards.kinds[i] + ' => ' + count_occurence(kind, suits));
};
}
