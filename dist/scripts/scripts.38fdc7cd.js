"use strict";angular.module("staffManagerApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngMaterial"]).config(["$routeProvider","$mdThemingProvider",function(a,b){a.when("/",{templateUrl:"scripts/main/main.template.html",controller:"MainCtrl",controllerAs:"main"}).when("/about",{templateUrl:"scripts/about/about.template.html",controller:"AboutCtrl",controllerAs:"about"}).otherwise({redirectTo:"/"}),b.theme("default").primaryPalette("blue").accentPalette("orange").warnPalette("red")}]),angular.module("staffManagerApp").controller("AboutCtrl",function(){}),angular.module("staffManagerApp").controller("MainCtrl",function(){}),angular.module("staffManagerApp").controller("AppCtrl",["$location","$mdSidenav",function(a,b){var c=this;c.navigateTo=function(c){a.path(c),b("left").close()},c.toggleSidenav=function(){b("left").toggle()}}]),angular.module("staffManagerApp").run(["$templateCache",function(a){a.put("scripts/about/about.template.html","About"),a.put("scripts/main/main.template.html",'<md-card> <md-card-title> <md-card-title-media> <div class="md-media-sm card-media" layout layout-align="center center"> <md-icon style="color:grey; width: 40px; height: 40px; font-size: 40px">person</md-icon> </div> </md-card-title-media> <md-card-title-text> <span class="md-headline">Username</span> <span class="md-subhead description">Ipsum lorem caveat emptor... <i class="fa fa-anchor"></i></span> </md-card-title-text> </md-card-title> </md-card> <md-card> <md-card-title> <md-card-title-media> <div class="md-media-sm card-media" layout layout-align="center center"> <md-icon style="color:grey; width: 40px; height: 40px; font-size: 40px">person</md-icon> </div> </md-card-title-media> <md-card-title-text> <span class="md-headline">Username</span> <span class="md-subhead description">Ipsum lorem caveat emptor...</span> </md-card-title-text> </md-card-title> </md-card> <md-card> <md-card-title> <md-card-title-media> <div class="md-media-sm card-media" layout layout-align="center center"> <md-icon style="color:grey; width: 40px; height: 40px; font-size: 40px">person</md-icon> </div> </md-card-title-media> <md-card-title-text> <span class="md-headline">Username</span> <span class="md-subhead description">Ipsum lorem caveat emptor...</span> </md-card-title-text> </md-card-title> </md-card>')}]);