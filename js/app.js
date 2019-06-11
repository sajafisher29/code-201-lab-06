'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

//First and Pike Store Data
var pike = {
  name: ('First and Pike'),
  minCust: 23,
  maxCust: 65,
  avgCookie: 6.3,
  totalCookiesSold: [],
  totalDaysCookies: 0,

  generateRandom: function(min, max) {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
  },

  cookiesPerHour: function () {
    return Math.floor(this.generateRandom(this.minCust, this.maxCust)* this.avgCookie);
  },

  render: function () {
    var divElement = document.getElementById('store');
    var newTitle = document.createElement('h2');
    newTitle.textContent = this.name;
    divElement.appendChild(newTitle);

    var storeData = document.createElement('ul');
    divElement.appendChild(storeData);


    for (var i=0; i < hours.length; i++ ) {
      console.log(`${hours[i]}: ${this.cookiesPerHour()}`);
      var hourData = document.createElement('li');
      var cookiesSoldPerHour = this.cookiesPerHour();
      hourData.textContent = `${hours[i]}: ${cookiesSoldPerHour} cookies`;
      storeData.appendChild(hourData);
      this.totalCookiesSold.push(this.cookiesPerHour());
      this.totalDaysCookies += cookiesSoldPerHour;
      console.log(cookiesSoldPerHour);
    }
    var showTotalDaysCookies = document.createElement('li');
    showTotalDaysCookies.textContent = `Total: ${this.totalDaysCookies} cookies`;
    storeData.appendChild(showTotalDaysCookies);

  }
};

//SeaTac Airport Store Data
var seaTac = {
  name: ('SeaTac Airport'),
  minCust: 3,
  maxCust: 24,
  avgCookie: 1.2,
  totalCookiesSold: [],
  totalDaysCookies: 0,

  generateRandom: function(min, max) {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
  },

  cookiesPerHour: function () {
    return Math.floor(this.generateRandom(this.minCust, this.maxCust)* this.avgCookie);
  },

  render: function () {
    var divElement = document.getElementById('store');
    var newTitle = document.createElement('h2');
    newTitle.textContent = this.name;
    divElement.appendChild(newTitle);

    var storeData = document.createElement('ul');
    divElement.appendChild(storeData);


    for (var i=0; i < hours.length; i++ ) {
      console.log(`${hours[i]}: ${this.cookiesPerHour()}`);
      var hourData = document.createElement('li');
      var cookiesSoldPerHour = this.cookiesPerHour();
      hourData.textContent = `${hours[i]}: ${cookiesSoldPerHour} cookies`;
      storeData.appendChild(hourData);
      this.totalCookiesSold.push(this.cookiesPerHour());
      this.totalDaysCookies += cookiesSoldPerHour;
      console.log(cookiesSoldPerHour);
    }
    var showTotalDaysCookies = document.createElement('li');
    showTotalDaysCookies.textContent = `Total: ${this.totalDaysCookies} cookies`;
    storeData.appendChild(showTotalDaysCookies);

  }
};

//Seattle Center Store Data
var seattle = {
  name: ('Seattle Center'),
  minCust: 11,
  maxCust: 38,
  avgCookie: 3.7,
  totalCookiesSold: [],
  totalDaysCookies: 0,

  generateRandom: function(min, max) {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
  },

  cookiesPerHour: function () {
    return Math.floor(this.generateRandom(this.minCust, this.maxCust)* this.avgCookie);
  },

  render: function () {
    var divElement = document.getElementById('store');
    var newTitle = document.createElement('h2');
    newTitle.textContent = this.name;
    divElement.appendChild(newTitle);

    var storeData = document.createElement('ul');
    divElement.appendChild(storeData);


    for (var i=0; i < hours.length; i++ ) {
      console.log(`${hours[i]}: ${this.cookiesPerHour()}`);
      var hourData = document.createElement('li');
      var cookiesSoldPerHour = this.cookiesPerHour();
      hourData.textContent = `${hours[i]}: ${cookiesSoldPerHour} cookies`;
      storeData.appendChild(hourData);
      this.totalCookiesSold.push(this.cookiesPerHour());
      this.totalDaysCookies += cookiesSoldPerHour;
      console.log(cookiesSoldPerHour);
    }
    var showTotalDaysCookies = document.createElement('li');
    showTotalDaysCookies.textContent = `Total: ${this.totalDaysCookies} cookies`;
    storeData.appendChild(showTotalDaysCookies);

  }
};

//Capitol Hill Store Data
var capitol = {
  name: ('Capitol Hill'),
  minCust: 20,
  maxCust: 38,
  avgCookie: 2.3,
  totalCookiesSold: [],
  totalDaysCookies: 0,

  generateRandom: function(min, max) {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
  },

  cookiesPerHour: function () {
    return Math.floor(this.generateRandom(this.minCust, this.maxCust)* this.avgCookie);
  },

  render: function () {
    var divElement = document.getElementById('store');
    var newTitle = document.createElement('h2');
    newTitle.textContent = this.name;
    divElement.appendChild(newTitle);

    var storeData = document.createElement('ul');
    divElement.appendChild(storeData);


    for (var i=0; i < hours.length; i++ ) {
      console.log(`${hours[i]}: ${this.cookiesPerHour()}`);
      var hourData = document.createElement('li');
      var cookiesSoldPerHour = this.cookiesPerHour();
      hourData.textContent = `${hours[i]}: ${cookiesSoldPerHour} cookies`;
      storeData.appendChild(hourData);
      this.totalCookiesSold.push(this.cookiesPerHour());
      this.totalDaysCookies += cookiesSoldPerHour;
      console.log(cookiesSoldPerHour);
    }
    var showTotalDaysCookies = document.createElement('li');
    showTotalDaysCookies.textContent = `Total: ${this.totalDaysCookies} cookies`;
    storeData.appendChild(showTotalDaysCookies);

  }
};

//Alki Store Data
var alki = {
  name: ('Alki'),
  minCust: 2,
  maxCust: 16,
  avgCookie: 4.6,
  totalCookiesSold: [],
  totalDaysCookies: 0,

  generateRandom: function(min, max) {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
  },

  cookiesPerHour: function () {
    return Math.floor(this.generateRandom(this.minCust, this.maxCust)* this.avgCookie);
  },

  render: function () {
    var divElement = document.getElementById('store');
    var newTitle = document.createElement('h2');
    newTitle.textContent = this.name;
    divElement.appendChild(newTitle);

    var storeData = document.createElement('ul');
    divElement.appendChild(storeData);


    for (var i=0; i < hours.length; i++ ) {
      console.log(`${hours[i]}: ${this.cookiesPerHour()}`);
      var hourData = document.createElement('li');
      var cookiesSoldPerHour = this.cookiesPerHour();
      hourData.textContent = `${hours[i]}: ${cookiesSoldPerHour} cookies`;
      storeData.appendChild(hourData);
      this.totalCookiesSold.push(this.cookiesPerHour());
      this.totalDaysCookies += cookiesSoldPerHour;
      console.log(cookiesSoldPerHour);
    }
    var showTotalDaysCookies = document.createElement('li');
    showTotalDaysCookies.textContent = `Total: ${this.totalDaysCookies} cookies`;
    storeData.appendChild(showTotalDaysCookies);

  }
};

var pageUpdate = function () {
  pike.render();
  seaTac.render();
  seattle.render();
  capitol.render();
  alki.render();
};

pageUpdate();

var today = newDate();
var year = today.getFullYear();

var el = document.getElementById('footer');
el.innerHTML = '<p>Copyright &copy;' + year + '</P>';
