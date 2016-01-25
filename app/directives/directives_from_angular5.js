/*
Task 2
Create Directives, add nessessary attributes
<menu>
  <menu-item>
  <menu-item>
  <menu-group>
    <menu-item>
    <menu-item>
  </menu-group>
</menu>

Result
<ul>
  <li>Task</li>
  <li>Users</li>
  <li>Settings
    <ul>
      <li>General</li>
      <li>Cost</li>
    </ul>
  </li>
</ul>
*/



(function(){
	'use strict';

	var app = angular.module('app');

	app.directive('multislotCard', multipleTransclusion);
  
function multipleTransclusion(){
  return {
    restrict: 'E',
    transclude: {
      'title': '?cardTitle',
      'song': '?cardSong',
    },
    template:
      '<div>' + 
        '<h3 ng-transclude="title">No title</h3>' + 
        '<i ng-transclude="song">Empty</i>' +
      '</div>'
  };
}





	app.directive('menu', function(){
		return {
			restrict: 'E',
			template: '<ul><li  ng-transclude="item1"></li><li ng-transclude="item2"></li></ul>',

			replace: true,

			transclude: {
				'item1': 'menuItem1',
				'item2': 'menuItem2'
			},
		}
	});


	app.directive('menuItem', function(){
		return {
			restrict: 'E',
			template: function(tElem, tAttrs){
				return tAttrs['name'];
			},
			replace: true
		}
	})
})();