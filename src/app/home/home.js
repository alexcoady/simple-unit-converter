/**
 * Each section of the site has its own module. It probably also has
 * submodules, though this boilerplate is too simple to demonstrate it. Within
 * `src/app/home`, however, could exist several additional folders representing
 * additional modules that would then be listed as dependencies of this one.
 * For example, a `note` section could have the submodules `note.create`,
 * `note.delete`, `note.edit`, etc.
 *
 * Regardless, so long as dependencies are managed correctly, the build process
 * will automatically take take of the rest.
 *
 * The dependencies block here is also where component dependencies should be
 * specified, as shown below.
 */
angular.module( 'ngBoilerplate.home', [
    'ui.state'
])

/**
 * Each section or module of the site can also have its own routes. AngularJS
 * will handle ensuring they are all available at run-time, but splitting it
 * this way makes each module more "self-contained".
 */
 .config(function config( $stateProvider ) {
    
    $stateProvider.state( 'home', {
        url: '/home',
        views: {
          "main": {
            controller: 'HomeCtrl',
            templateUrl: 'home/home.tpl.html'
        }
    },
        data:{ pageTitle: 'Home' }
    });
})

/**
 * And of course we define a controller for our route.
 */
 .controller( 'HomeCtrl', function HomeController( $scope, $timeout ) {

    console.log('# [HomeCtrl]');

    $scope.types = [{
        'name': 'Weight',
        'keyUnit': 'g',
        'units': [{
            'name': 'Grams',
            'short': 'g',
            'toKey': function ( g ) {
                return g;
            },
            'fromKey': function () {
                return $scope.currentKeyValue;
            }
        }, {
            'name': 'Kilograms',
            'short': 'kg',
            'toKey': function ( kg ) {
                return kg * 1000;
            },
            'fromKey': function () {
                return $scope.currentKeyValue * 0.001; 
            }
        }, {
            'name': 'Pounds',
            'short': 'lbs',
            'toKey': function ( lb ) {
                return lb * 454.545454545454;
            },
            'fromKey': function () {
                return $scope.currentKeyValue * 0.00220462;
            }
        }]
    }, {
        'name': 'Length',
        'keyUnit': 'm',
        'units': [{
            'name': 'Centilitre',
            'short': 'cm',
            'toKey': function ( cm ) {
                return cm * 0.01;
            },
            'fromKey': function () {
                return $scope.currentKeyValue * 100;
            }
        }, {
            'name': 'Kilometre',
            'short': 'km',
            'toKey': function ( km ) {
                return km * 1000;
            },
            'fromKey': function () {
                return $scope.currentKeyValue * 0.001; 
            }
        }, {
            'name': 'Metre',
            'short': 'm',
            'toKey': function ( m ) {
                return m;
            },
            'fromKey': function () {
                return $scope.currentKeyValue;
            }
        }, {
            'name': 'Mile',
            'short': 'mile',
            'toKey': function ( mile ) {
                return mile * 1609.344;
            },
            'fromKey': function () {
                return $scope.currentKeyValue * 0.000621371192;
            }
        }]
    }];

    $scope.currentValue = 0;
    $scope.currentKeyValue = 0;

    $scope.selectingType = false;
    $scope.selectingUnit = false;

    function calculate () {

        $scope.currentKeyValue = $scope.currentUnit.toKey( $scope.currentValue );
    }

    // Set default options
    $scope.currentType = $scope.types[0];
    $scope.currentUnit = $scope.currentType.units[0];
    $scope.$watch( 'currentValue', calculate);

    $scope.switchType = function (newType) {

        $scope.currentType = newType;
        $scope.currentUnit = $scope.currentType.units[0];
        $scope.selectingType = false;
        $scope.selectingUnit = true;
        calculate();
    };

    $scope.switchUnit = function (newUnit) {

        $scope.currentUnit = newUnit;
        $scope.selectingUnit = false;
        calculate();
    };

    $scope.selectType = function () {

        $scope.selectingType = !$scope.selectingType;
    };

    $scope.selectUnit = function () {

        $scope.selectingUnit = !$scope.selectingUnit;
    };

});

