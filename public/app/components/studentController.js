var studentController = angular.module('StudentController', []);

studentController.controller('StudentsListCtrl', function($scope, $http){
	console.log('22222222222')
	$scope.students = {};	
	
	
});

/*var studentController = angular.module('SampleController', []);

studentController.controller('StudentsListCtrl'. function($scope, $http){
	$scope.students = {};	
	SampleS.get().success(function(data){
		console.log('22222222')
		console.log('Contoller %s', data);
		$scope.sampleText = data;
	});
	
});
*/

/*function StudentsListCtrl($scope, StuService) {
	console.log('22222222222')
	$scope.students = StuService.query();
}

function StudentCtrl($scope, $routeParams, StuService) {
	$scope.student = StuService.get({studentId: $routeParams.id});
}*/