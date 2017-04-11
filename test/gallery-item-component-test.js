'use strict';

describe('Gallery Item Component', function () {

  beforeEach(() => {
    angular.mock.module('cfgram');
    angular.mock.inject(($rootScope, $componentController, $httpBackend, authService) => {
      this.$rootScope = $rootScope;
      this.$componentController = $componentController;
      this.$httpBackend = $httpBackend;
      this.authService = authService;
    });
  });

  describe('galleryItemCtrl.deleteDone', () => {
    it('should call deleteDone', () => {
      let mockBindings = {
        gallery: {
          _id: '12345',
          name: 'test name',
          desc: 'test desc',
          pics: []
        },
        deleteDone: function(data) {
          expect(data.galleryData._id).toEqual('12345');
        }
      };

      let galleryItemCtrl = this.$componentController('galleryItem', null, mockBindings);
      galleryItemCtrl.deleteDone({galleryData: galleryItemCtrl.gallery });

      //more tests

      this.$rootScope.$apply();
    });
  });

});