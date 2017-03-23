angular.module('userProfiles')
.service('friendService', function( $http ) {

    this.login = function( user, pass ) {
        return $http({
            method: 'POST',
            url: '/api/login',
            data: {name:user, password:pass}
        });
    };

    this.getFriends = function() {
    	return $http({
            method: 'GET',
            url: '/api/profiles'
        });
    };

    this.removeFriend = (name) =>{
        
    }
});
