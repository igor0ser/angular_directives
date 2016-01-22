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
	app.directive('menu', function(){
		return {
			restrict: 'E',
			template: '<ul ng-transclude></ul>',
			replace: true,
			transclude: 'true'
		}
	});


	app.directive('menuItem', function(){
		return {
			restrict: 'E',
			template: function(tElem, tAttrs){
				console.log(tAttrs['name']);
				return '<li>' + tAttrs['name'] + '</li>';
			},
			replace: true
		}
	})
})();