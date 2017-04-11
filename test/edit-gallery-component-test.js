'use strict';

describe('edit gallery component', function () {

  beforeEach( () => {
    angular.mock.module('cfgram');
    angular.mock.inject(( $rootScope, $componentController, $httpBackend, authService) => {
      this.$rootScope = $rootScope;
      this.$componentController = $componentController;
      this.$httpBackend = $httpBackend;
      this.authService = authService;
    });
  });

  it('should contain the proper component bindings', () => {
    let mockBindings = {
      gallery: {
        name: 'test gallery name',
        desc: 'test gallery description'
      }
    };

    let editGalleryCtrl = this.$componentController('editGallery', null, mockBindings);
    expect(editGalleryCtrl.gallery.name).toEqual(mockBindings.gallery.name);
    expect(editGalleryCtrl.gallery.desc).toEqual(mockBindings.gallery.desc);

    this.$rootScope.$apply();
  });

  describe('editGallryCtrl.updateGallery', () => {
    it('should make a valid put request', () => {
      let url = `${__API_URL__}/api/gallery/12345`;
      let headers = {
        Accept: 'application/json',
        'Content-Type': 'applIcation/json',
        Authorization: 'Bearer testtoken'
      };

      this.$httpBackend.expectPUT(url, {
        _id: '12345',
        name: 'updated name',
        desc: 'updated desc',
      }, headers).respond(200);

      let mockBindings = {
        gallery: {
          _id: '12345',
          name: 'updated name',
          desc: 'updated desc'
        }
      };

      let editGalleryCtrl = this.$componentController('editGallery', null, mockBindings);
      editGalleryCtrl.gallery.name = 'updated name';
      editGalleryCtrl.gallery.desc = 'updated desc';

      editGalleryCtrl.updateGallery();

        //TODO write tests
      //expect(gallery.name).toEqual(mockBindings.gallery.name);

      this.$httpBackend.flush();
      this.$rootScope.$apply();
    });
  });
});