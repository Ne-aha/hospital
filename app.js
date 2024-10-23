var app = angular.module('hospitalApp', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
    .when('/home', {
        template: '<h2>Welcome to Sunnyvale General Hospital</h2><p>Your health and well-being are our top priorities.</p>'
    })
    .when('/find-doctor', {
        template: '<h2>Find a Doctor</h2><p>Search for experienced doctors in various specialties.</p>'
    })
    .when('/register-doctor', {
        template: '<h2>Register as a Doctor</h2><p>Please fill out the form to register.</p>'
    })
    .when('/medication', {
        template: '<h2>Medication Information</h2><p>Access information about medications and prescription refills.</p>'
    })
    .when('/about', {
        template: '<h2>About Us</h2><p>Learn more about our mission and values.</p>'
    })
    .when('/location', {
        template: '<h2>Location</h2><p>Find us at 123 Health Way, Sunnyvale, CA 94086.</p>'
    })
    .otherwise({
        redirectTo: '/home'
    });
}]);

app.controller('MainController', function() {
    this.hospitalName = 'Sunnyvale General Hospital';
});
