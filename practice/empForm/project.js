var myList = [
  {
    No: 1,
    TSG: "Dingi",
    Microsoft: "Dinga",
    DataBase: "Me.Bean",
    Testing: "A",
  },
  {
    No: 2,
    TSG: "Abbas",
    Microsoft: "Yogi",
    DataBase: "Yaman",
    Testing: "B",
  },
  {
    No: 3,
    TSG: "Anki",
    Microsoft: "Athul",
    DataBase: "Vishnu",
    Testing: "C",
  },
];
buildTable(myList);
function buildTable(data) {
  var main = document.getElementById("main");
  var table = document.getElementById("mytable");
  console.log(main, 'main');
  for (var i = 0; i < data.length; i++) {
    console.log("calling create function ", table)
    var row = `<tr>
          <td>${data[i].No}</td>
          <td>${data[i].TSG}</td>
          <td>${data[i].Microsoft}</td>
          <td>${data[i].DataBase}</td>
          <td>${data[i].Testing}</td>
          <td>
            <button type="button" class="btn btn-primary btn-sm" onclick="viewUser('${data[i].No}')">
          View
          </button>
          <button type="button" class="btn btn-primary btn-sm" onclick="showUserEditBox('${data[i].No}')">
            Edit
          </button>
          <button type="button" class="btn btn-primary btn-sm"   onclick="userDelete('${data[i].No}')">
            Delete
          </button>
              </td>
          </tr>`;
    if(table) table.innerHTML += row;
  }
}
//*******************************Create**********************************************
// function showUserCreateBox(){
//   Swal.fire({
//     title: "Create user",
//     html:
//       '<input id="no" class="swal2-input" placeholder="NO">' +
//       '<input id="tsg" class="swal2-input" placeholder="TSG">' +
//       '<input id="microsoft" class="swal2-input" placeholder="Microsoft">' +
//       '<input id="db" class="swal2-input" placeholder="DataBase">' +
//       '<input id="testing" class="swal2-input" placeholder="Testing">',
//     focusConfirm: false,
//     preConfirm: () => {
//       userCreate();
//     },
//   });
// }
function userCreate() {
  const no = document.getElementById("no").value;
  const tsg = document.getElementById("tsg").value;
  const image = document.getElementById("microsoft").value;
  const microsoft = document.getElementById("db").value;
  const testing = document.getElementById("testing").value;
  var newPro = {
    No: no,
    TSG: tsg,
    Microsoft: image,
    DataBase: microsoft,
    Testing: testing,
  };
  window.location = "C:/Users/219696/web_training/practice/emp/projects.html";

  var Table = document.getElementById("mytable");
  Table.innerHTML = "";
  // myList.splice(0, myList.length);
  myList.push(newPro);
  console.log("data", myList);
  buildTable(myList);
}
//**************************view***********************************
function viewUser(id) {
  console.log("view user id", id);
  console.log("all employee details", myList);
  const details = myList.filter((data) => {
    return data.No == id;
  });
  Swal.fire({
    title: "View User",
    html:
      '<input id="id" class="swal2-input"  readonly="readonly"   placeholder="First" value="' +
      details[0].No +
      '">' +
      '<input id="employee_name" class="swal2-input"  readonly="readonly"   placeholder="First" value="' +
      details[0].TSG +
      '">' +
      '<input id="employee_salary" class="swal2-input"  readonly="readonly" placeholder="Last" value="' +
      details[0].Microsoft +
      '">' +
      '<input id="image " class="swal2-input"   readonly="readonly" placeholder="Username" value="' +
      details[0].DataBase +
      '">' +
      '<input id="image " class="swal2-input"   readonly="readonly" placeholder="Username" value="' +
      details[0].Testing +
      '">',

    focusConfirm: false,
    preConfirm: () => {
      userEdit();
    },
  });
}
//******************************Edit****************************************
function showUserEditBox(id) {
  console.log(id);

  const details = myList.filter((data) => {
    return data.No == id;
  });
  console.log("filtered one", details);

  Swal.fire({
    title: "View User",
    html:
      '<input id="no" class="swal2-input"     readonly="readonly" placeholder="First" value="' +
      details[0].No +
      '">' +
      '<input id="tsg" class="swal2-input"    placeholder="First" value="' +
      details[0].TSG +
      '">' +
      '<input id="microsoft" class="swal2-input"   placeholder="Last" value="' +
      details[0].Microsoft +
      '">' +
      '<input id="db" class="swal2-input"    placeholder="Username" value="' +
      details[0].DataBase +
      '">' +
      '<input id="testing" class="swal2-input"    placeholder="Username" value="' +
      details[0].Testing +
      '">',
    focusConfirm: false,
    preConfirm: () => {
      userEdit();
    },
  });
}
function userEdit() {
  console.log("ofter edit ", document.getElementById("no").value);
  const no = document.getElementById("no").value;
  const tsg = document.getElementById("tsg").value;
  const image = document.getElementById("microsoft").value;
  const microsoft = document.getElementById("db").value;
  const testing = document.getElementById("testing").value;
  var editedData = {
    No: no,
    TSG: tsg,
    Microsoft: image,
    DataBase: microsoft,
    Testing: testing,
  };
  for (var i = 0; i < myList.length; i++) {
    if (myList[i].No == no) {
      myList.splice(i, 1, editedData);
      console.log("Updated", myList);
    }
  }
  var Table = document.getElementById("mytable");
  Table.innerHTML = "";
  buildTable(myList);
  console.log("new array ", myList);
}
//******************************delete**********************************
function userDelete(id) {
  var result = confirm("Are you sure to delete?");
  if (result) {
    console.log("deleting", id);
    for (var i = 0; i < myList.length; i++) {
      if (myList[i].No == id) {
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
}
