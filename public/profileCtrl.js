angular.module('userProfiles')
.controller('profileCtrl', function( $scope, friendService) {

        friendService.getFriends().then(response =>{
        console.log(response);
        $scope.currentUser = response.data.currentUser;
        $scope.currentFriends = response.data.friends;
    });

        $scope.removeFriend = (name) =>{
            friendService.removeFriend(name);
        }
});