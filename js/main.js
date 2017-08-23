//the numbers og employees I want to show
const numOfEmployees = 12;
//Get all the results
$.ajax({
  url: 'https://randomuser.me/api/?results=' + numOfEmployees,
  dataType: 'json',
  success: function(data) {
  	//log the entire object to the console
    console.log(data);

    /**************************
    *** Front page directory **
    **************************/
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

    //create the employeeWidget
    let employeeWidget = "";
    for (let i = 0; i < data.results.length; i++) {
      employeeWidget += '<div class="employee employee-' + i + '">';
      employeeWidget += '<div class="employee-img">';
      employeeWidget += '<img alt="" src="' + imgs[i] + '">';
      employeeWidget += '</div>'; //end the img container
      employeeWidget += '<div class="employee-information">';
      employeeWidget += '<p class="employee-name">' + firstNames[i] + " " + lastNames[i] + '</p>';
      employeeWidget += '<p class="employee-email">' + emails[i] + '</p>';
      employeeWidget += '<p class="employee-city">' + cities[i] + '</p>';
      employeeWidget += '</div>';//end employee-information div
      employeeWidget += '</div>';//end employee div
    }

    $('.employees').append(employeeWidget);
    /**************************
    *********** Modal *********
    **************************/
    /* on click, show modal with img, name, email, cell, adress, bday*/
    //I only need to get the info for the  specific employee
    const employees = $('.employee');
    console.log(employees[0].className);
    employees.click( () => {
      let employee = $(this).attr('class');
      console.log(employee);
    });

  	} //end succes function
}); //end AJAX