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

	var app = angular.module('app', []);

	app.directive('menu', menu);
	app.directive('menuItem', menuItem);
	app.directive('menuGroup', menuGroup);

	function menu(){
		return {
			template: '<ul></ul>',
			replace: true,
			transclude: true,
			controller: function ($scope, $transclude) {
				$scope.items = [];

				$transclude(function(clone, scope) {
					for (var i = 0; i < clone.length; i++) {
						if (clone[i].nodeType === 1){
							scope.items.push(clone[i]);
						}
					}
				});
			},
			link: function(scope, element) {
				for (var i = 0; i < scope.items.length; i++) {
					element.append(scope.items[i]);
				}
			}
		};
	}

	function menuItem(){
		return {
			template: function(tElem, tAttrs){
				return '<li>' + tAttrs.name + '</li>';
			},
			replace: true
		};
	}

	function menuGroup(){
		return {
			template: function(tElem, tAttrs){
				return '<li><ul>' + tAttrs['name'] + '</ul></li>';
			}, 
			replace: true,
			transclude: true,
			controller: function ($scope, $transclude) {
				$scope.items = [];
				$transclude(function(clone, scope) {
					for (var i = 0; i < clone.length; i++) {
						if (clone[i].nodeType === 1){
							scope.items.push(clone[i]);
						}
					}
				});
			},
			link: function(scope, element) {
				var menuGroup = angular.element(element.children()[0]);
				for (var i = 0; i < scope.items.length; i++) {
					menuGroup.append(scope.items[i]);
				}
			}
		};
	}




})();