angular.module('sell', [])

.controller("ExampleController", function ($scope, $cordovaCamera, $http) {

    $scope.closeProductDes= function(){
        $scope.addDescription = false;
    }
    $scope.sell={};
    $scope.submitProductDes= function(){ 
        $scope.addDescription = false;
    };
    $scope.addDescription = false;
    $scope.imgArr=[];
    
    $scope.addPhoto =function(imgURI){
        $scope.addDescription = false;
    }
    
    $scope.takePhoto = function () {
      var options = {
        quality: 75,
        destinationType: Camera.DestinationType.DATA_URL,
        sourceType: Camera.PictureSourceType.CAMERA,
        allowEdit: true,
        encodingType: Camera.EncodingType.JPEG,
        targetWidth: 100,
        targetHeight: 100,
        popoverOptions: CameraPopoverOptions,
        saveToPhotoAlbum: false
      };

        $cordovaCamera.getPicture(options).then(function (imageData) {
            $scope.imgURI = "data:image/jpeg;base64," + imageData;

            $scope.addDescription = true;
        }, function (err) {
            console.log("error");
            // An error occured. Show a message to the user
        });
        
    }

    $scope.choosePhoto = function () {
      var options = {
        quality: 75,
        destinationType: Camera.DestinationType.DATA_URL,
        sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
        allowEdit: true,
        encodingType: Camera.EncodingType.JPEG,
        targetWidth: 100,
        targetHeight: 100,
        popoverOptions: CameraPopoverOptions,
        saveToPhotoAlbum: false
      };

        $cordovaCamera.getPicture(options).then(function (imageData) {
           
            $scope.imgURI= "data:image/jpeg;base64," + imageData;

            $scope.imgArr.push({image : $scope.imgURI});

            $scope.addDescription = true;
        }, function (err) {
            // An error occured. Show a message to the user
        });
    }
});
