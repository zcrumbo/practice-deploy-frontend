'use strict';

module.exports = function() {
  return {
    restrict: 'EAC', //triggers how directive works - element attribute class
    template: require('./social-icons.html'),
    controller: ['$log', SocialIconsController],
    bindToController: true, //different than component method
    controllerAs: 'socialIconsCtrl',
    scope: {  //like bindings
      tester: '@'
    }
  };
};

function SocialIconsController() {
  this.icons = ['fb', 'twitter', 'instagram'];
}