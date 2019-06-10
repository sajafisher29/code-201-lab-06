'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm']

var location1standPike = {
  minHourly: 23,
  maxHourly: 65,
  averageCookies: 6.3,
  cookiesPerHour = (averageCookies * randomNumberCustomers)
  cookiesPurchasedPerHour: [hour, cookiesPerHour],

  randomNumberCustomers: function getRandomIntInclusive (minHourly, maxHourly) {
    minHourly = math.ceil(minHourly);
    maxHourly = math.floor(maxHourly);
    return math.floor(math.random() * (maxHourly - minHourly +1)) + minHourly;
  },
  randomNumberCustomers(),
  
  render: function() {
    var alkiElement = document.getElementbyId ('pike');

    for (hours = 0; hours < this.items.length; hours++) {
      var newItem = document.createElement('li');

      newItem.textContent = this.items[hours, this.cookiesPerHour];

      pikeElement.appendChild(newItem);
    }
  },

  return cookiesPurchasedPerHour;
}

// var locationSeaTacAirport = {
//   minHourly: 3,
//   maxHourly: 24,
//   averageCookies: 1.2,
//   cookiesPurchasedPerHour: [hour, averageCookies, randomNumberCustomers],
//   randomNumberCustomers: function getRandomIntInclusive (minHourly, maxHourly) {
//     minHourly = math.ceil(minHourly);
//     maxHourly = math.floor(maxHourly);
//     return math.floor(math.random() * (maxHourly - minHourly +1)) + minHourly;
//   }
  
//   render: function() {

//     var seaTacElement = document.getElementbyId ('seaTac');

//     for (i = 0; i < this.items.length; i++) {
//       var newItem = document.createElement('li');

//       newItem.textContent = this.items[i];

//       seaTacElement.appendChild(newItem);
//     }
//   }
//   return cookiesPurchasedPerHour;
// }

// var locationSeattleCenter = {
//   minHourly: 11,
//   maxHourly: 38,
//   averageCookies: 3.7,
//   cookiesPurchasedPerHour: [hour, averageCookies, randomNumberCustomers],
//   randomNumberCustomers: function getRandomIntInclusive (minHourly, maxHourly) {
//     minHourly = math.ceil(minHourly);
//     maxHourly = math.floor(maxHourly);
//     return math.floor(math.random() * (maxHourly - minHourly +1)) + minHourly;
//   }
  
//   render: function() {

//     var centerElement = document.getElementbyId ('center');

//     for (i = 0; i < this.items.length; i++) {
//       var newItem = document.createElement('li');

//       newItem.textContent = this.items[i];

//       centerElement.appendChild(newItem);
//     }
//   }
//   return cookiesPurchasedPerHour;
// }

// var locationCapitolHill = {
//   minHourly: 20,
//   maxHourly: 38,
//   averageCookies: 2.3,
//   cookiesPurchasedPerHour: [hour, averageCookies, randomNumberCustomers],
//   randomNumberCustomers: function getRandomIntInclusive (minHourly, maxHourly) {
//     minHourly = math.ceil(minHourly);
//     maxHourly = math.floor(maxHourly);
//     return math.floor(math.random() * (maxHourly - minHourly +1)) + minHourly;
//   }
  
//   render: function() {

//     var capitolElement = document.getElementbyId ('capitol');

//     for (i = 0; i < this.items.length; i++) {
//       var newItem = document.createElement('li');

//       newItem.textContent = this.items[i];

//       capitolElement.appendChild(newItem);
//     }
//   }
//   return cookiesPurchasedPerHour;
// }

// var locationAlki = {
//   minHourly: 2,
//   maxHourly: 16,
//   averageCookies: 4.6,

//   cookiesPurchasedPerHour: [hour, averageCookies, randomNumberCustomers],
//   randomNumberCustomers: function getRandomIntInclusive (minHourly, maxHourly) {
//     minHourly = math.ceil(minHourly);
//     maxHourly = math.floor(maxHourly);
//     return math.floor(math.random() * (maxHourly - minHourly +1)) + minHourly;
//   }

//   render: function() {

//     var alkiElement = document.getElementbyId ('alki');

//     for (i = 0; i < this.items.length; i++) {
//       var newItem = document.createElement('li');

//       newItem.textContent = this.items[i];

//       alkiElement.appendChild(newItem);
//     }
//   }
//   return cookiesPurchasedPerHour;
// }

var pageUpdate = function () {
  pike.render();
  // seaTac.render();
  // center.render();
  // capitol.render();
  // alki.render();
}

pageUpdate();