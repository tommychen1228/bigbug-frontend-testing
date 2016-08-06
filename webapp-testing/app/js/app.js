'use strict';

/* App Module */

angular.module('app', [

    ])
    .config(function($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise("/login");
    });
