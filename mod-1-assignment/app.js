(function(){
'use strict';

angular.module('LunchCheck',[])
.controller('LunchCheckController',function($scope){


$scope.name="";
$scope.answer ="";
$scope.colors="";
$scope.checkit=function(){
	var comma=',';
	var x=splitString($scope.name,comma);
	$scope.answer =x;
	if(x=='Please Enter Data First')
		$scope.colors="red";
	else
		$scope.colors="green";
};	
function splitString(string,separator)
{
	var y= string.split(separator);
	console.log(y.length);
	if(!string.match(/\S/))
		return 'Please Enter Data First';
	else if(y.length>3)
		return "Too Much!";
	else 
		return "Enjoy!";
}
});	
		
})();