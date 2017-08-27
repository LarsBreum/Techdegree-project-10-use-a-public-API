//the numbers og employees I want to show
const numOfEmployees = 12;
//Get all the results
$.ajax({
  url: 'https://randomuser.me/api/?results=' + numOfEmployees,
  dataType: 'json',
  success: function(data) {
  	//log the entire object to the console
    console.log(data);

    /***************************
    *** Front page directory ***
    ***************************/
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
    /*const employees = $('.employee');
    const modal = $('.modalBackdrop');
    employees.click( () => {
      //get the modal content
      console.log($(this));

      modal.css('display', 'initial');
      //create the modalWidget content
      let modalImg = '<div class="modal-img">';
      modalImg += '<img src="' + data.results[0].picture.large + '" alt="employee img">';
      modalImg += '</div>'//img container end

      let modalInfo = '<div class="modal-info">';
      modalInfo += '<p class="employee-name">' + firstNames[0] + ' ' + lastNames[0] + '</p>';
      modalInfo += '<p>' + 'username' + '</p>';
      modalInfo += '<p>' + 'email' + '</p>';
      modalInfo += '<p>' + 'cellphone' + '</p>';
      modalInfo += '<p>' + 'address' + '</p>';
      modalInfo += '<p>' + 'Birthday' + '</p>';
      modalInfo += '</div>'; //modal-info end

      $('.modal-content').append(modalImg, modalInfo);
    });//end employees.click*/

   /* const modalCloseButton = $('.modal .close');
    modalCloseButton.click( () => {
      //reset the modal
      modalImg = "";
      modalInfo = "";
      $('.modal-info, .modal-img').remove();
      modal.css('display', 'none');
    });*/

    /********************
    **PROBLEM IS HERE***
    *******************/
    //jQuery
    /*const employees = $('.employee');
    console.log(employees)
    employees.click( () => {
      console.log(this);
    });*/

    //vanilla js
    const employees = document.getElementsByClassName('employee');
    console.log(employees);
    for (let i = 0; i < employees.length; i++) {
      employees[i].addEventListener('click', () => {
        console.log(this);
      });
    }

  	} //end succes function
}); //end AJAX

