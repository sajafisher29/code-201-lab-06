'use strict';

//Franchise hours

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

//Array to hold the created franchises

var franchises = [];

//Array to hold the calculated total cookies by hour

var totalCookiesByHour = [];


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

console.log(franchises);

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
  tableBody.appendChild(tableRow);
  
  for (var i = 0; i < hours.length; i++) {
    cell = document.createElement('td');
    cell.textContent = this.cookiesPerHourArray[i];
    tableRow.appendChild(cell);
    tableBody.appendChild(tableRow);
  }
  cell = document.createElement('td');
  cell.textContent = this.totalDaysCookies;
  tableRow.appendChild(cell);
  tableBody.appendChild(tableRow);
};

//Renders the totals by hour, sums, then total of the franchise totals

var totalByHourRender = function() {
  var tableFooter = document.getElementById('franchiseHourlyTotals');
  var tableRow = document.createElement('tr');
  
  var cell = document.createElement('td');
  cell.textContent = 'Totals By Hour';
  tableRow.appendChild(cell);
  tableFooter.appendChild(tableRow);
  
  for (var i = 0; i < hours.length; i++) {
    cell = document.createElement('td');
    cell.textContent = totalCookiesByHour[i];
    tableRow.appendChild(cell);
    tableFooter.appendChild(tableRow);
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
    console.log(hours[i]);

    for (var j = 0; j < franchises.length; j++) {
      console.log(franchises[j].cookiesPerHourArray[i], 'cookies sold at store');
      sumOfHour += franchises[j].cookiesPerHourArray[i];
      console.log(sumOfHour, 'current total cookies sold for the hour');
    }

    totalCookiesByHour.push(sumOfHour);
    console.log(totalCookiesByHour);
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

