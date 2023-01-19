// function loadTable() {
//     const xhttp = new XMLHttpRequest();
//     xhttp.open("GET", "http://dummy.restapiexample.com/api/v1/employees");
//     xhttp.send();
//     xhttp.onreadystatechange = function() {
//       if (this.readyState == 4 && this.status == 200) {
//         console.log(this.responseText);
//         var trHTML = ''; 
//         const objects = JSON.parse(this.responseText);
//         for (let object of objects) {
//           trHTML += '<tr>'; 
//           trHTML += '<td>'+object['id']+'</td>';
//           trHTML += '<td><img width="50px" src="'+object['avatar']+'" class="avatar"></td>';
//           trHTML += '<td>'+object['fname']+'</td>';
//           trHTML += '<td>'+object['lname']+'</td>';
//           trHTML += '<td>'+object['username']+'</td>';
//           trHTML += '<td><button type="button" class="btn btn-outline-secondary" onclick="showUserEditBox('+object['id']+')">Edit</button>';
//           trHTML += '<button type="button" class="btn btn-outline-danger" onclick="userDelete('+object['id']+')">Del</button></td>';
//           trHTML += "</tr>";
//         }
//         document.getElementById("mytable").innerHTML = trHTML;
//       }
//     };
//   }
  
//   loadTable();
  function showUserCreateBox() {
    Swal.fire({
      title: 'Create user',
      html:
        '<input id="id" type="hidden">' +
        '<input id="employee_name" class="swal2-input" placeholder="First">' +
        '<input id="Projet" class="swal2-input" placeholder="Last">' +
        '<input id="employee_salary" class="swal2-input" placeholder="Username">' +
        '<input id="employee_age" class="swal2-input" placeholder="Email">',
      focusConfirm: false,
      preConfirm: () => {
        userCreate();
      }
    })
  }
  
  function userCreate() {
    const employee_name = document.getElementById("employee_name").value;
    const Projet = document.getElementById("Projet").value;
    const employee_salary = document.getElementById("employee_salary").value;
    const employee_age = document.getElementById("employee_age").value;
      
    const xhttp = new XMLHttpRequest();
    xhttp.open("POST", "http://dummy.restapiexample.com/api/v1/employees");
    xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhttp.send(JSON.stringify({ 
      "employee_name": employee_name, "Projet": Projet, "employee_salary": employee_salary, "employee_age": employee_age, 
    
    }));
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        const objects = JSON.parse(this.responseText);
        Swal.fire(objects['message']);
        loadTable();
      }
    };
  }