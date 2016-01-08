define(function(require){
            var angular = require('angular'),
                Controllers = angular.module('controllers', []);
            Controllers.controller('EsocialCtrl', require('controllers/EsocialCtrl'));
            return Controllers;
        })
