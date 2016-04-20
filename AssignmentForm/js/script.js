
var app = angular.module("AddContactForm", []);

app.controller("addContactController", ['$scope', function($scope) {

	$scope.contacts = [];
	$scope.edit = false;
	$scope.editIndex = 0;



	$scope.resetForm = function() {
		$scope.fName = "";
		$scope.lName = "";
		$scope.date = "";
		$scope.company = "";
		$scope.email = "";
		$scope.phone = "";
		$scope.edit = false;
	}

	$scope.saveContact = function() {
		if($scope.fName  &&
			$scope.lName &&
			$scope.date &&
			$scope.company &&
			$scope.email &&
			$scope.phone) {

			if($scope.edit) {
				$scope.contacts[$scope.editIndex].fName = $scope.fName;
				$scope.contacts[$scope.editIndex].lName = $scope.lName;
				$scope.contacts[$scope.editIndex].date = $scope.date;
				$scope.contacts[$scope.editIndex].company = $scope.company;
				$scope.contacts[$scope.editIndex].email = $scope.email;
				$scope.contacts[$scope.editIndex].phone = $scope.phone;
			} else {
				$scope.contacts.push({
					fName: $scope.fName,
					lName: $scope.lName,
					date: $scope.date,
					company: $scope.company,
					email: $scope.email,
					phone: $scope.phone
				});
			}
			
			$scope.edit = false;
			$scope.resetForm();	

		} else {
			alert("Please fill in all the details with correct values.");
		}

	}

	$scope.deleteContact = function(index) {
		$scope.contacts.splice(index,1);
		$scope.edit = false;
	}

	$scope.editContact = function(index) {
		$scope.fName = $scope.contacts[index].fName;
		$scope.lName = $scope.contacts[index].lName;
		$scope.date = $scope.contacts[index].date;
		$scope.company = $scope.contacts[index].company;
		$scope.email = $scope.contacts[index].email;
		$scope.phone = $scope.contacts[index].phone;
		$scope.editIndex = index;
		$scope.edit = true;
	}

}]);