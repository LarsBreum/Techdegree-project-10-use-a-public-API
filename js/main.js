$(document).ready( () => {
  function getEmployeesData (data) {
    //get array of all first names
      let firstNames = [];
      for (let i = 0; i < numOfEmployees; i++) {
        firstNames.push(data[i].name.first);
      }
      //get array of all last names
      let lastNames = [];
      for (let i = 0; i < numOfEmployees; i++) {
        lastNames.push(data[i].name.last);
      }
      //get array of all imgs
      let imgs = [];
      for (let i = 0; i < numOfEmployees; i++) {
        imgs.push(data[i].picture.large);
      }
      //get array of all emails
      let emails = [];
      for (let i = 0; i < numOfEmployees; i++) {
        emails.push(data[i].email);
      }
      //get array of all cities
      let cities = [];
      for (let i = 0; i < numOfEmployees; i++) {
        cities.push(data[i].location.city);
      }
      //get array of usernames
      let usernames = [];
      for (let i = 0; i < numOfEmployees; i++) {
        usernames.push(data[i].id.name);
      }
      //get array of cell numbers
      let cellNr = [];
      for (let i = 0; i < numOfEmployees; i++) {
        cellNr.push(data[i].cell);
      }
      //get array of streetnames
      let streetNames = [];
      for (let i = 0; i < numOfEmployees; i++) {
        streetNames.push(data[i].location.street);
      }
      //get array of countries
      let countries = [];
      for (let i = 0; i < numOfEmployees; i++) {
        countries.push(data[i].nat);
      }
      //get array of post-codes
      let postCodes = [];
      for (let i = 0; i < numOfEmployees; i++) {
        postCodes.push(data[i].location.postcode);
      }
      //get arry of birthdays
      let birthdays = [];
      for (let i = 0; i < numOfEmployees; i++) {
        birthdays.push(data[i].registered);
      }
      let employeesData = {
        firstNames,
        lastNames,
        imgs,
        emails,
        cities,
        usernames,
        cellNr,
        streetNames,
        countries,
        postCodes,
        birthdays
      }
      console.log(employeesData);
      return employeesData;
  }

  function drawEmployeeWigdet (widgetData) {
    let employeeWidget = "";
      for (let i = 0; i < numOfEmployees; i++) {
        employeeWidget += '<div class="employee employee-' + i + '">';
        employeeWidget += '<div class="employee-img">';
        employeeWidget += '<img alt="employee img" src="' + widgetData.imgs[i] + '">';
        employeeWidget += '</div>'; //end the img container
        employeeWidget += '<div class="employee-information">';
        employeeWidget += '<p class="employee-name">' + widgetData.firstNames[i] + " " + widgetData.lastNames[i] + '</p>';
        employeeWidget += '<p class="employee-email">' + widgetData.emails[i] + '</p>';
        employeeWidget += '<p class="employee-city">' + widgetData.cities[i] + '</p>';
        employeeWidget += '</div>';//end employee-information div
        employeeWidget += '</div>';//end employee div
      }
    $('.employees').append(employeeWidget);
  }
  function getModalData(data, i) {
    console.log(i);
    let img = data.imgs[i];
    let name = data.firstNames[i] + " " + data.lastNames[i];
    let userName = data.usernames[i];
    let email = data.emails[i];
    let cell = data.cellNr[i];
    let address = data.streetNames[i] + " " + data.cities[i] + " " + data.countries[i] + " " + data.postCodes[i];
    let birthday = data.birthdays[i];

    return {
      img,
      name,
      userName,
      email,
      cell,
      address,
      birthday
    };
  }
  function getIndex () {
    index = $('.employee').index(this);
    console.log("index: " + index);
    return index;
  }
  function employeeClickHandler(data) {
    $('.employee').on('click', () => {
      let modalData = getModalData(data, index);
      return modalData;
    } );
  }

  function drawModal(data) {
    modal = $('.modalBackdrop');
  }

  const numOfEmployees = 12;
  const data = $.ajax({
    url: 'https://randomuser.me/api/?results=' + numOfEmployees,
    dataType: 'json',
    success: function(data) {
        const results = data.results;
        let employeesData = getEmployeesData(results);
        drawEmployeeWigdet(employeesData);
        let index = $('.employee').click(getIndex);
        let modalData = employeeClickHandler(employeesData);
        drawModal(modalData);
      } //end succes function
  }); //end AJAX
}); //end document ready