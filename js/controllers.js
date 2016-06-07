//CONTROLLERS


wowApp.controller('homeController', ['$scope', '$location', 'characterService', 'realmService', function ($scope, $location, characterService, realmService) {
    
    $scope.region = "en_US";
    $scope.privateKey = "jnfn9kb9a7pwgu327xq4exbedxjnzyxr";
    $scope.realmsResult = realmService.GetRealms($scope.region, $scope.privateKey);
    $scope.name = characterService.name;
    $scope.selectedRealm = characterService.selectedRealm;
    
    
    $scope.$watch('name', function () {
        characterService.name = $scope.name;
    })
    
    $scope.$watch('selectedRealm', function () {
        characterService.selectedRealm = $scope.selectedRealm;
    })
    
    
    $scope.submit = function() {
        $location.path("/characterResult");
        console.log($scope.selectedRealm);
        console.log($scope.name);
    }
    
}]);



wowApp.controller('realmController', ['$scope', '$resource', 'realmService', function ($scope, $resource, realmService) {
    
    $scope.region = "en_US";
    $scope.privateKey = "jnfn9kb9a7pwgu327xq4exbedxjnzyxr";
    $scope.realmsResult = realmService.GetRealms($scope.region, $scope.privateKey);
    
//    console.log(window.sessionStorage);
//    
//    if (typeof(window.Storage))  {
//        console.log('storage available.');
//        if (sessionStorage.realms) {
//            console.log('realms is already created');
//            $scope.realmsResult = sessionStorage.realms;
//            console.log(sessionStorage.realms);
//
//        } else {
//            console.log('realms is not created.');
//            $scope.realmsResult = realmService.GetRealms($scope.region, $scope.privateKey);
//            sessionStorage.setItem('realms', $scope.realmsResult);
//            console.log(sessionStorage['realms']);
//        }
//    } else {
//        console.log('Sorry, no storage is available.');
//        $scope.realmsResult = realmService.GetRealms($scope.region, $scope.privateKey);
//    }
    
    

    
    $scope.sortType = 'name';
    $scope.sortReverse = false;
    $scope.searchRealms = '';
    
    $scope.sliceCountryFromTimezone = function(timezone) {
        var idx = timezone.indexOf("/");
        return timezone.slice(idx + 1).replace(/_/g," ");
    }
    

}]);

wowApp.controller('characterController', ['$scope', '$location', 'characterService', 'realmService', function ($scope, $location, characterService, realmService) {
    
    $scope.region = "en_US";
    $scope.privateKey = "jnfn9kb9a7pwgu327xq4exbedxjnzyxr";
    $scope.realmsResult = realmService.GetRealms($scope.region, $scope.privateKey);
    $scope.name = characterService.name;
    $scope.selectedRealm = characterService.selectedRealm;
    
    
    $scope.$watch('name', function () {
        characterService.name = $scope.name;
    })
    
    $scope.$watch('selectedRealm', function () {
        characterService.selectedRealm = $scope.selectedRealm;
    })
    
    
    $scope.submit = function() {
        $location.path("/characterResult");
        console.log($scope.selectedRealm);
        console.log($scope.name);
    }
    
}]);