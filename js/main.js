//the numbers og employees I want to show
const numOfEmployees = 12;
//Get all the results
$.ajax({
  url: 'https://randomuser.me/api/?results=' + numOfEmployees,
  dataType: 'json',
  success: function(data) {
  	//log the entire object to the console
    console.log(data);
    //create the employee widget
    let employee = '<div class="employee">';
    employee += '<div class="employee-img">';
    employee += '<img alt="" src="' + data.results[0].picture.large + '">';
    employee += '</div>'; //end the img container
    employee += '<div class="employee-information">';
    employee += '<p class="employee-name">' + data.results[0].name.first + data.results[0].name.last + '</p>';
    employee += '<p class="employee-email">' + data.results[0].email + '</p>';
    employee += '<p class="employee-city">' + data.results[0].location.city + '</p>';
    employee += '</div>';//end employee-information div
    employee += '</div>';//end employee div

    $('.employees').append(employee);
  	}
});