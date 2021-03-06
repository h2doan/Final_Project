'use strict';
var Backbone = require('backbone');

module.exports = Backbone.Router.extend({
  routes: {
    '': 'home',
    'food-trucks': 'showAllFoodTrucks',
    'food-trucks/:name': 'showFoodTruck',
    'food-types': 'showAllFoodTypes',
    'food-types/:type': 'showFoodTrucksByFoodType',
    'today': 'showFoodTrucksToday',
    'payment-types': 'showAllPaymentTypes',
    'payment-types/:type': 'showFoodTrucksByPaymentType'
  },
  initialize: function (options) {
    options || {};
    this.appController = options.appController;
  },
  home: function () {
    this.appController.showHome();
  },
  showAllFoodTrucks: function () {
    this.appController.showAllFoodTrucks();
  },
  showFoodTruck: function (name) {
    this.appController.showFoodTruck({ name: name });
  },
  showAllFoodTypes: function () {
    this.appController.showAllFoodTypes();
  },
  showFoodTrucksByFoodType: function (type) {
    this.appController.showFoodTrucksByFoodType({ type: type });
  },
  showFoodTrucksToday: function () {
    this.appController.showFoodTrucksToday();
  },
  showAllPaymentTypes: function () {
    this.appController.showAllPaymentTypes();
  },
  showFoodTrucksByPaymentType: function (type) {
    this.appController.showFoodTrucksByPaymentType({ type: type });
  }
});
