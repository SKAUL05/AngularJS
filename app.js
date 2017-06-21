(function() {
'use strict';	

angular.module('myFirstApp', [])

.controller('MyFirstcontroller', function ($scope) {
$scope.name = "SARATH";

})

.controller('NameCalculator', function ($scope) {
	$scope.texts ="";
	$scope.totalvalue = 0;
	$scope.display = function() {
		var totalnamevalue = calculate($scope.texts);
		$scope.totalvalue = totalnamevalue;
	};
	
	function calculate(string)
	{
		var totalstringvalue = 0;
		for(var i=0; i < string.length; i++)
		{
			totalstringvalue += string.charCodeAt(i);
		}
		return totalstringvalue;
	}
});

})();