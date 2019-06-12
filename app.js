'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
var franchises = [];


function Franchise(location, minCust, maxCust, avgCookie) {
  this.location = location;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookie = avgCookie;
  this.cookiesPerHour = [];
  this.totalDaysCookies = 0;
  franchises.push(this);

  Franchise.cookiesPerHour(this);
}

//Generates a random number between the min and max inclusive
Franchise.prototype.generateRandom = function (minCust, maxCust) {
  return Math.floor(Math.random() * (maxCust - minCust + 1)) + minCust;
};

//Generates a cookiesPerHour number for each hour in the hours array, pushes it into the cookiesPerHour array, and adds to the daily cookies sold
Franchise.cookiesPerHour = function (objectStore) {
  for (var i=0; i < hours.length; i++ ) {
    var hourlyCookies = Math.ceil(objectStore.generateRandom(objectStore.minCust, objectStore.maxCust)* objectStore.avgCookie);
    objectStore.cookiesPerHour.push(hourlyCookies);
    objectStore.totalDaysCookies += hourlyCookies;
  }
};

var pike = new Franchise('First and Pike', 23, 65, 6.3);
var seaTac = new Franchise('SeaTac Airport', 3, 24, 1.2);
var seattle = new Franchise('Seattle Center', 11, 38, 3.7);
var capitol = new Franchise('Capitol Hill', 20, 38, 2.3);
var alki = new Franchise('Alki', 2, 16, 4.6);

var hoursRender = function() {
  var tableBody = document.getElementById('franchiseHead');
  var tableRow = document.createElement('tr');
  for (var i = 0; i < hours.length; i++) {
    var cell = document.createElement('td');
    cell.textContent = hours[i];
    tableRow.appendChild(cell);
  }
  var cellTotal = document.createElement('td');
  cellTotal.textContent = 'Total';
  tableRow.appendChild(cellTotal);
  tableBody.appendChild(tableRow);
};

hoursRender();

Franchise.prototype.render = function () {
  var tableBody = document.getElementById('franchisesData');
  var tableRow = document.createElement('tr');
  for (var i = 0; i < hours.length; i++) {
    var cell = document.createElement('td');
    cell.textContent = this.cookiesPerHour[i];
    tableRow.appendChild(cell);
  }
  var cellTotal = document.createElement('td');
  cellTotal.textContent = this.totalDaysCookies;
  tableRow.appendChild(cellTotal);
  tableBody.appendChild(tableRow);
};

var pageUpdate = function() {
  for (var i = 0; i < franchises.length; i++)
    franchises[i].render();
};

pageUpdate();

// // var today = newDate();
// // var year = today.getFullYear();

// // var el = document.getElementById('footer');
// // el.innerHTML = '<p>Copyright &copy;' + year + '</P>';
