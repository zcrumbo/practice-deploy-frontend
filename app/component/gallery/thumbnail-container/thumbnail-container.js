'use strict';

require('./_thumbnail-container.scss');

module.exports = {
  template: require('./thumbnail-container.html'),
  controllerAs: 'thumbnailContainerCtrl',  //if component has no logic, don't need controller definition
  bindings: {
    gallery: '<'
  }
};