/**
 * Created by Karuna on 10/28/2015.
 */
'use strict';

// the storeController contains two objects:
// - mealstore: contains the meal list
// - cart: the shopping cart object
function storeController($scope, $routeParams, DataService) {

    // get store and cart from service
    $scope.store = DataService.store;
    $scope.cart = DataService.cart;

    // use routing to pick the selected product
    if ($routeParams.mealSku != null) {
        $scope.meal = $scope.store.getmeal($routeParams.mealSku);
    }
}