'use strict';

//Franchise hours

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

//Array to hold the created franchises

var franchises = [];



//Object constructor used to create franchises

function Franchise(location, minCust, maxCust, avgCookie) {
  this.location = location;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookie = avgCookie;
  this.cookiesPerHourArray = [];
  this.totalDaysCookies = 0;
  Franchise.cookiesPerHour(this);
  franchises.push(this);
}

//Array to hold the calculated total cookies by hour

var totalCookiesByHour = [];

//Generates a random number between the min and max inclusive

Franchise.prototype.generateRandom = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

//Generates a number of cookies for the hour, pushes it into the cookiesPerHourArray, and adds to the totalDaysCookies sold for each franchise

Franchise.cookiesPerHour = function (franchiseObject) {
  for (var i=0; i < hours.length; i++ ) {
    var hourlyCookies = Math.ceil(franchiseObject.generateRandom(franchiseObject.minCust, franchiseObject.maxCust)* franchiseObject.avgCookie);
    franchiseObject.cookiesPerHourArray.push(hourlyCookies);
    franchiseObject.totalDaysCookies += hourlyCookies;
  }
};

//Renders the empty cell, hours, then Total header for the table

var hoursRender = function() {
  var tableHead = document.getElementById('franchiseHead');
  var tableRow = document.createElement('tr');
  
  var cell = document.createElement('th');
  cell.textContent = '';
  tableRow.appendChild(cell);
  tableHead.appendChild(tableRow);
  
  for (var i = 0; i < hours.length; i++) {
    cell = document.createElement('th');
    cell.textContent = hours[i];
    tableRow.appendChild(cell);
    tableHead.appendChild(tableRow);
  }
  cell = document.createElement('th');
  cell.textContent = 'Total';
  tableRow.appendChild(cell);
  tableHead.appendChild(tableRow);
};

//Renders the cookie data for each franchise for the table

Franchise.prototype.render = function () {
  var tableBody = document.getElementById('franchisesData');
  var tableRow = document.createElement('tr');
  
  var cell = document.createElement('td');
  cell.textContent = this.location;
  tableRow.appendChild(cell);
  
  for (var i = 0; i < hours.length; i++) {
    cell = document.createElement('td');
    cell.textContent = this.cookiesPerHourArray[i];
    tableRow.appendChild(cell);
  }
  cell = document.createElement('td');
  cell.textContent = this.totalDaysCookies;
  tableRow.appendChild(cell);
  tableBody.appendChild(tableRow);
};

//Renders the totals by hour, sums, then total of the franchise totals

var tableFooter = document.getElementById('franchiseHourlyTotals');
var totalByHourRender = function() {
  var tableRow = document.createElement('tr');
  
  var cell = document.createElement('td');
  cell.textContent = 'Totals By Hour';
  tableRow.appendChild(cell);
  
  for (var i = 0; i < hours.length; i++) {
    cell = document.createElement('td');
    cell.textContent = totalCookiesByHour[i];
    tableRow.appendChild(cell);
  }
  cell = document.createElement('td');
  cell.textContent = '';
  tableRow.appendChild(cell);
  tableFooter.appendChild(tableRow);
};

//Instances creating franchises

var pike = new Franchise('First and Pike', 23, 65, 6.3);
var seaTac = new Franchise('SeaTac Airport', 3, 24, 1.2);
var seattle = new Franchise('Seattle Center', 11, 38, 3.7);
var capitol = new Franchise('Capitol Hill', 20, 38, 2.3);
var alki = new Franchise('Alki', 2, 16, 4.6);

//Nested for loops calculating the total cookies by hour

function sumCookiesAcrossFranchises () {
  for (var i = 0; i < hours.length; i++) {
    var sumOfHour = 0;

    for (var j = 0; j < franchises.length; j++) {
      sumOfHour += franchises[j].cookiesPerHourArray[i];
    }

    totalCookiesByHour.push(sumOfHour);
  }
}

sumCookiesAcrossFranchises();

//Call to action updating the page

var pageUpdate = function() {
  for (var i = 0; i < franchises.length; i++) {
    franchises[i].render();
  }
};

hoursRender();
totalByHourRender();
pageUpdate();

//Coding the event listener and handler
var form = document.getElementById('franchiseForm');



var addFranchise = function(event) {
  event.preventDefault();
  console.log(event.target.franLocation.value);
  var franLocation = event.target.franLocation.value;
  
  var franMinCust = parseInt(event.target.franMinCust.value);
  
  var franMaxCust = parseInt(event.target.franMaxCust.value);
  
  var franAveCust = parseInt(event.target.franAveCust.value);
  
  new Franchise(franLocation, franMinCust, franMaxCust, franAveCust);
  
  franchises[franchises.length-1].render();

  tableFooter.deleteRow(tableFooter.rows.length-1);
  
  totalByHourRender();
};


form.addEventListener('submit', addFranchise);
