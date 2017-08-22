//the numbers og employees I want to show
const numOfEmployees = 12;
//Get all the results
$.ajax({
  url: 'https://randomuser.me/api/?results=' + numOfEmployees,
  dataType: 'json',
  success: function(data) {
  	//log the entire object to the console
    console.log(data);
    //get array of all first names
    let firstNames = [];
    for (let i = 0; i < data.results.length; i++) {
      firstNames.push(data.results[i].name.first);
    }
    //get array of all last names
    let lastNames = [];
    for (let i = 0; i < data.results.length; i++) {
      lastNames.push(data.results[i].name.last);
    }
    //get array of all imgs
    let imgs = [];
    for (let i = 0; i < data.results.length; i++) {
      imgs.push(data.results[i].picture.large);
    }
    //get array of all emails
    let emails = [];
    for (let i = 0; i < data.results.length; i++) {
      emails.push(data.results[i].email);
    }
    //get array of all cities
    let cities = [];
    for (let i = 0; i < data.results.length; i++) {
      cities.push(data.results[i].location.city);
    }

    //create the employee widget
    let employee = "";
    for (let i = 0; i < data.results.length; i++) {
      employee += '<div class="employee employee-' + i + '">';
      employee += '<div class="employee-img">';
      employee += '<img alt="" src="' + imgs[i] + '">';
      employee += '</div>'; //end the img container
      employee += '<div class="employee-information">';
      employee += '<p class="employee-name">' + firstNames[i] + " " + lastNames[i] + '</p>';
      employee += '<p class="employee-email">' + emails[i] + '</p>';
      employee += '<p class="employee-city">' + cities[i] + '</p>';
      employee += '</div>';//end employee-information div
      employee += '</div>';//end employee div
    }

    $('.employees').append(employee);
  	}
}); //end AJAX