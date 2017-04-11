'use strict';

describe('Auth Service', function() {

  beforeEach(() => {
    angular.mock.module('cfgram');
    angular.mock.inject(($rootScope, authService, $window, $httpBackend) => {
      this.$window = $window;
      this.$rootScope = $rootScope;
      this.authService = authService;
      this.$httpBackend = $httpBackend;
    });

  });
  describe('authService.getToken', () => {
    it('should return a token', () => {
      this.authService.token = null;
      this.$window.localStorage.setItem('token', 'testtoken');//don't need real token, b/c mock backend
      this.authService.getToken()
      .then (token => {
        expect(token).toEqual('testtoken');
      })
      .catch( err => {
        expect(err).toEqual(null);
      });

      this.$rootScope.$apply(); //kicks off watch cycle
    });
  });
});