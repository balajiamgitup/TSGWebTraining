
var myList = [];
buildTable(myList);
$.ajax({
  method: "GET",
  url: "http://dummy.restapiexample.com/api/v1/employees",
  success: function (response) {
    myList = response.data;
    console.log(myList.data);
    buildTable(myList);
  },
});

// function run() {
//   // Creating Our XMLHttpRequest object
//   var xhr = new XMLHttpRequest();

//   // Making our connection
//   var url = "http://dummy.restapiexample.com/api/v1/employees";
//   xhr.open("GET", url, true);

//   // function execute after request is successful
//   xhr.onreadystatechange = function () {
//     if (this.readyState == 4 && this.status == 200) {
//       myList = response.data;
//       console.log(myList.data);
//       buildTable(myList);
//     }
//   };
//   // Sending our request
//   xhr.send();
// }
// run();
function buildTable(data) {
  console.log("java script file")
  var table = document.getElementById("mytable");
  console.log("Table");
  for (var i = 0; i < data.length; i++) {
    var row = `<tr>
      <td>${data[i].id}</td>
      <td>${data[i].employee_name}</td>
      <td>${data[i].employee_age}</td>
      <td>${data[i].employee_salary}</td>

      <td>${data[i].profile_image}</td>
      <td>
        <button type="button" class="btn btn-primary btn-sm" onclick="viewUser('${data[i].id}')" />
            View
            </button>
            <button type="button" class="btn btn-primary btn-sm" onclick="showUserEditBox('${data[i].id}')">
              Edit
            </button>
            <button type="button" class="btn btn-primary btn-sm"   onclick="userDelete('${data[i].id}')"      >
              Delete
            </button>
          </td>
      </tr>`;
    table.innerHTML += row;
  }
}
// function showUserCreateBox() {
//   Swal.fire({
//     title: "Create user",
//     html:
//       ' <input id="id" type="hidden">' +
//       '<input id="employee_name" class="swal2-input" placeholder="Employee_name">' +
//       '<input id="image" class="swal2-input" placeholder="image">' +
//       '<input id="employee_salary" class="swal2-input" placeholder="employee_salary">' +
//       '<input id="employee_age" class="swal2-input" placeholder="employee_age">',
//     focusConfirm: false,
//     preConfirm: () => {
//       userCreate();
//     },
//   });
// }

function userCreate() {
  const id = document.getElementById("id").value;
  const employee_name = document.getElementById("employee_name").value;
  const image = document.getElementById("image").value;
  const employee_salary =
    document.getElementById("employee_salary").value;
  const employee_age = document.getElementById("employee_age").value;

  const xhttp = new XMLHttpRequest();
  xhttp.open("POST", "http://dummy.restapiexample.com/api/v1/create");
  xhttp.setRequestHeader(
    "Content-Type",
    "application/json;charset=UTF-8"
  );
  xhttp.send(
    JSON.stringify({
      id: id,
      employee_name: employee_name,
      employee_salary: employee_salary,
      employee_age: employee_age,
      profile_image: image,
    })
  );
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      const objects = JSON.parse(this.responseText);
      console.log(Swal.fire(objects["message"]));
      // buildTable(Swal.fire(objects["message"]));
      window.location = "C:/Users/219696/web_training/practice/emp/empDetails.html";

      var Table = document.getElementById("mytable");
      Table.innerHTML = "";
      // myList.splice(0, myList.length);
      myList.push(objects.data);
      console.log("data", myList);
      buildTable(myList);
    } 
    // else {
    //   var row = `<h2>Loading</h2>`;
    //   table.innerHTML += row;
    // }
  };
}
//********************************************View********************************************************************

function viewUser(id) {
  console.log("view user id", id);
  console.log("all employee details", myList);
  const details = myList.filter((data) => {
    return data.id == id;
  });
  Swal.fire({
    title: "View User",
    html:
      '<input id="id" class="swal2-input"  readonly="readonly"   placeholder="First" value="' +
      details[0].id +
      '">' +
      '<input id="employee_name" class="swal2-input"  readonly="readonly"   placeholder="First" value="' +
      details[0].employee_name +
      '">' +
      '<input id="employee_salary" class="swal2-input"  readonly="readonly" placeholder="Last" value="' +
      details[0].employee_salary +
      '">' +
      '<input id="image " class="swal2-input"   readonly="readonly" placeholder="Username" value="' +
      details[0].image +
      '">' +
      '<input id="image " class="swal2-input"   readonly="readonly" placeholder="Username" value="' +
      details[0].employee_age +
      '">',

    focusConfirm: false,
    preConfirm: () => {
      userEdit();
    },
  });
  // }
  //};
}
//*****************************************edit*************************************************************************
function showUserEditBox(id) {
  console.log(id);

  const details = myList.filter((data) => {
    return data.id == id;
  });
  console.log("filtered one", details);

  Swal.fire({
    title: "View User",
    html:
      '<input id="id" class="swal2-input"     readonly="readonly" placeholder="First" value="' +
      details[0].id +
      '">' +
      '<input id="employee_name" class="swal2-input"    placeholder="First" value="' +
      details[0].employee_name +
      '">' +
      '<input id="employee_salary" class="swal2-input"   placeholder="Last" value="' +
      details[0].employee_salary +
      '">' +
      '<input id="image" class="swal2-input"    placeholder="Username" value="' +
      details[0].image +
      '">' +
      '<input id="employee_age" class="swal2-input"    placeholder="Username" value="' +
      details[0].employee_age +
      '">',
    focusConfirm: false,
    preConfirm: () => {
      userEdit();
    },
  });
}

function userEdit() {
  console.log("ofter edit ", document.getElementById("id").value);
  const id = document.getElementById("id").value;
  const employee_name = document.getElementById("employee_name").value;
  const image = document.getElementById("employee_name").value;
  const employee_salary =
    document.getElementById("employee_salary").value;
  const employee_age = document.getElementById("employee_age").value;
  var editedData = {
    id: id,
    employee_name: employee_name,
    employee_salary: employee_salary,
    employee_age: employee_age,
    profile_image: image,
  };
  for (var i = 0; i < myList.length; i++) {
    if (myList[i].id == id) {
      myList.splice(i, 1, editedData);
      console.log("Updated", myList);
    }
  }
  var Table = document.getElementById("mytable");
  Table.innerHTML = "";
  buildTable(myList);
  console.log("new array ", myList);
}
//************DEKETE************************************************
function userDelete(id) {
  var result = confirm("Are you sure to delete?");
  if (result) {
    console.log("deleting", id);
    for (var i = 0; i < myList.length; i++) {
      if (myList[i].id == id) {
        myList.splice(i, 1);
        console.log("Updated", myList);
      }
    }
    var Table = document.getElementById("mytable");
    Table.innerHTML = "";
    buildTable(myList);
    console.log("new array ", myList);
    console.log("Deleted");
  }
  // const xhttp = new XMLHttpRequest();
  // xhttp.open("DELETE", "http://dummy.restapiexample.com/api/v1/delete/2");
  // xhttp.setRequestHeader(
  //   "Content-Type",
  //   "application/json;charset=UTF-8"
  // );
  // xhttp.send(
  //   JSON.stringify({
  //     id: id,
  //   })
  // );
  // xhttp.onreadystatechange = function () {
  //   if (this.readyState == 4) {
  //     const objects = JSON.parse(this.responseText);
  //     Swal.fire(objects["message"]);
  //     var Table = document.getElementById("mytable");
  //     Table.innerHTML = "";
  //     myList.push(objects.data);
  //     console.log("data", myList);
  //     buildTable(myList);
  //   }
  // };
}
