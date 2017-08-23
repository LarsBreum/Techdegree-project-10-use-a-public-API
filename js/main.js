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
      employeeWidget += '<img alt="employee img" src="' + imgs[i] + '">';
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
    const modal = $('.modalBackdrop');
    const modalCloseButton = $('.modal .close');
    employees.click( () => {
      modal.css('display', 'initial');
      //create the modalWidget content
      let modalContent = '<div class="modal-content">';
      modalContent += '<div class="modal-img>"';
      modalContent += '<img src="' + imgs[0] + '" alt="employee img">';
      modalContent += '</div>'//img container end
      modalContent += '<div class="modal-info">';
      modalContent += '<p class="employee-name">' + firstNames[0] + ' ' + lastNames[0] + '</p>';
      modalContent += '<p>' + /*username*/ + '</p>';
      modalContent += '<p>' + /*email*/ + '</p>';
      modalContent += '<p>' + /*Cellphone*/ + '</p>';
      modalContent += '<p>' + /*adress*/ + '</p>';
      modalContent += '<p>' + /*Birthday*/ + '</p>';
      modalContent += '</div>'; //modal-info end
      modalContent += '</div>'; //modal-content end

      console.log(modalContent);
      $('.modal').append(modalContent);

    });
    modalCloseButton.click( () => {
      modalContent = "";
      $('.modal-content').remove();
      modal.css('display', 'none');
    });

  	} //end succes function
}); //end AJAX