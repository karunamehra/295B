var app = angular.module("eatery",['ngRoute'])

    .config(['$routeProvider', function($routeProvider){
        $routeProvider.
            when('/main',{
                templateUrl: 'main.html',
                controller:'MainCtrl'
            }).
            when('/howitworks',{
                templateUrl: 'howitworks.html',
                controller:'MainCtrl'
            }).
            when('/team',{
                templateUrl: 'team.html',
                controller:'MainCtrl'
            }).
            when('/showmeals',{
                templateUrl: 'store.html',
                controller:storeController
            }).
            when('/store',{
                templateUrl: 'store.html',
                controller:storeController
            }).
            when('/sellmeals',{
                templateUrl: 'sellmeals.html',
               // controller:'SellMealsCtrl'
            }).
            when('/donate',{
                templateUrl: 'http://www.foodrunners.org',
                controller:'DonateCtrl'
            }).
            when('/meals/:mealSku',{
                templateUrl: 'meal.html',
                controller:storeController
            }).
            when('/cart',{
                templateUrl: 'shoppingCart.html',
                controller:storeController
            }).
            when('/contact',{
                templateUrl: 'contact.html',
               // controller:'ContactCtrl'
            }).
            otherwise({redirectTo:'/main'})
    }])



    .controller('MainCtrl',['$scope',function($scope){
        //

    }])

    .controller('ShowMealsCtrl',['$scope','$http',function($scope,$http){
        $http.get('showmeals.json').then(function(response){
            $scope.showmeals = response.data;
        });


    }])

    .controller('MealDetailCtrl',['$scope','$http',function($scope,$http){
        $http.get('mealdetail.json').then(function(response){
            $scope.mealdetail = response.data;
        });


    }])



// create a data service that provides a store and a shopping cart that
// will be shared by all views (instead of creating fresh ones for each view).
app.factory("DataService", function () {

    // create store
    var myStore = new store();

    // create shopping cart
    var myCart = new shoppingCart("eatery");

    // enable PayPal checkout
    // note: the second parameter identifies the merchant; in order to use the
    // shopping cart with PayPal, you have to create a merchant account with
    // PayPal. You can do that here:
    // https://www.paypal.com/webapps/mpp/merchant
    myCart.addCheckoutParameters("PayPal", "bernardo.castilho-facilitator@gmail.com");

    // enable Google Wallet checkout
    // note: the second parameter identifies the merchant; in order to use the
    // shopping cart with Google Wallet, you have to create a merchant account with
    // Google. You can do that here:
    // https://developers.google.com/commerce/wallet/digital/training/getting-started/merchant-setup
    myCart.addCheckoutParameters("Google", "500640663394527");

    // return data object with store and cart
    return {
        store: myStore,
        cart: myCart
    };
});