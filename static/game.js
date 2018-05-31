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
























document.addEventListener('keydown', function(event) {
  switch (event.keyCode) {
    case 65: // A
      movement.left = true;
      break;
    case 87: // W
      movement.up = true;
      break;
    case 68: // D
      movement.right = true;
      break;
    case 83: // S
      movement.down = true;
      break;
  }
});

document.addEventListener('keyup', function(event) {
  switch (event.keyCode) {
    case 65: // A
      movement.left = false;
      break;
    case 87: // W
      movement.up = false;
      break;
    case 68: // D
      movement.right = false;
      break;
    case 83: // S
      movement.down = false;
      break;
  }
});

socket.emit('new player');
setInterval(function() {
  socket.emit('movement', movement);
}, 1000 / 60);

var canvas = document.getElementById('canvas');
canvas.width = 800;
canvas.height = 600;
var context = canvas.getContext('2d');
socket.on('state', function(players) {
  console.log(players);
  context.clearRect(0, 0, 800, 600);
  context.fillStyle = 'green';
  for (var id in players) {
    var player = players[id];
    context.beginPath();
    context.arc(player.x, player.y, 10, 0, 2 * Math.PI);
    context.fill();
  }
});
