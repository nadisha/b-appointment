var StudentService = angular.module('StudentService', ['ngResource']);
StudentService.factory('StuService', function($resource){
	return $resource('students/:studentId', {}, {
              query: { method: 'GET', params: { studentId: 'students' }, isArray: true }
            });
	});