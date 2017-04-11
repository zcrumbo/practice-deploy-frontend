'use strict';

module.exports = {
  template: require('./signup.html'),
  controller: ['$log', '$location', 'authService', SignupController],
  controllerAs: 'signupCtrl'
};

function SignupController($log, $location, authService) {
  $log.debug('SignupController');

  authService.getToken()
  .then( token => {
    $log.debug('authService token:', token);
    $location.url('/home');
  });

  this.signup = function(user) {
    $log.debug('signupCtrl.sginup');

    authService.signup(user)
    .then( () => {
      $location.url('/home');
    });

  };
}
