window.onload=init;
function init(){
	loadlookup();
}
function loadlookup(){
	viewAllbooks();
	viewAllcds();
	viewSitution();
	Borrow_books();
	viewItem();
	viewUsers();

}

//loginUser();
function loginUser(){

	var p_username = document.getElementById('username').value;
	var p_password = document.getElementById('password').value;

	var url ="ws/webservice.php" ;
	var fd = new FormData();

	fd.append('op', 'loginUser');
	fd.append('username', p_username);
	fd.append('password', p_password);

	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function() {
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200)
		{
			var response;
			try {

				response = JSON.parse(xmlhttp.responseText);
			}catch(e) {
				console.error(this.responseText);
				var responseText = this.responseText;
				alert ('Username/Password incorrect');

			}
			if (response) {
				console.log(response);
				var form = document.getElementById('books1');

				for (var i = 0; i < response.length; i++) {
					var row = document.createElement('tr');
					var name_td = document.createElement('td');
					name_td.innerHTML =  response[i].username;
					row.appendChild(name_td);

				 form.appendChild(row);
				}
				getRole();
				function getRole() {
					var p_username = document.getElementById('username').value;

					var url ="ws/webservice.php" ;
					var param6 = "op=getRole&ssid="+ p_username;
					console.log(param6);
					var xmlhttp = new XMLHttpRequest();
					xmlhttp.onreadystatechange = function() {
						if (xmlhttp.readyState == 4 && xmlhttp.status == 200)
						{
							var response;
							try {

								response = JSON.parse(xmlhttp.responseText);
							}catch(e) {
								console.error(this.responseText);
							}
							if (response) {
								console.log(response);
								window.location.href ="home.php";
								var form1 = document.getElementById('role');
								if (form1) form1.innerHTML='';

							for (var i = 0; i < response.length; i++) {

										 var row = document.createElement("tr");
										 var status = document.createElement("td");
										 status.innerHTML = response[i].username;
										 row.appendChild(status);
										 if(form1) form1.appendChild(row);
									}
							}
						}

					};

					xmlhttp.open('POST', url, true);
					xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
					xmlhttp.send(param6);
				}

			}
		}

	};

	xmlhttp.open('POST', url, true);
	xmlhttp.send(fd);
}

function logoutUser(p_userName){

	var url ="ws/webservice.php" ;
	var fd = new FormData();

	fd.append('op', 'logoutUser');
	fd.append('l_id', p_userName);

	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function() {
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200)
		{
			var response;
			try {

				response = JSON.parse(xmlhttp.responseText);
			}catch(e) {
				console.error(this.responseText);
				var responseText = this.responseText;
				alert ('couldnt logout user');

			}
			if (response) {
				console.log(response);
         // alert('logout');
         window.location.href ='index.php';
     }
 }

};

xmlhttp.open('POST', url, true);
xmlhttp.send(fd);
}

function AsignRoleuser(){

	var roleid = document.getElementById('roleid').value;
	var username = document.getElementById('username').value;


	var url ="ws/webservice.php" ;
	var fd = new FormData();

	fd.append('op', 'AsignRoleuser');
	fd.append('roleid', roleid);
	fd.append('username', username);

	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function() {
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200)
		{
			var response;
			try {

				response = JSON.parse(xmlhttp.responseText);
			}catch(e) {
				console.error(this.responseText);
				var responseText = this.responseText;
				alert ('Registration failed BECAUSE  ' + responseText);

			}
			if (response) {
				console.log(response);
				swal("Succesful!", "User Role Assigned!", "success")
				document.getElementById("assign").reset();
			}
		}

	};

	xmlhttp.open('POST', url, true);
	xmlhttp.send(fd);
}

function Addbook(){

	var isbn = document.getElementById('isbn').value;
	var item_id = document.getElementById('item_id').value;
	var bookstatus = document.getElementById('bookstatus').value;


	var url ="ws/webservice.php" ;
	var fd = new FormData();

	fd.append('op', 'Addbook');
	fd.append('isbn', isbn);
	fd.append('item_id', item_id);
	fd.append('bookstatus', bookstatus);

	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function() {
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200)
		{
			var response;
			try {

				response = JSON.parse(xmlhttp.responseText);
			}catch(e) {
				console.error(this.responseText);
				var responseText = this.responseText;
				alert ('Registration failed BECAUSE  ' + responseText);

			}
			if (response) {
				console.log(response);
				swal("Succesful!", "Book Added!", "success")
				document.getElementById("book").reset();
			}
		}

	};

	xmlhttp.open('POST', url, true);
	xmlhttp.send(fd);
}

function viewAllbooks() {
	var url ="ws/webservice.php" ;
	var param6 = "op=viewAllbooks";
// console.log(param6);
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
	if (xmlhttp.readyState == 4 && xmlhttp.status == 200)
	{
		var response;
		try {

			response = JSON.parse(xmlhttp.responseText);
		}catch(e) {
			console.error(this.responseText);
		}
		if (response) {
			console.log(response);



			 var tbody = document.getElementById('books');
			 if (tbody) tbody.innerHTML='';

			for (var i = 0; i < response.length; i++) {



				 var row = document.createElement("tr");
				 var currentstudentId = response[i].item_id;

				 var status = document.createElement("td");
				 status.innerHTML = response[i].status;
				 row.appendChild(status);

				 var id_td = document.createElement("td");
				 id_td.innerHTML = response[i].title;
				 row.appendChild(id_td);

				 var name_td = document.createElement('td');
				 name_td.innerHTML = response[i].edition;
				 row.appendChild(name_td);

				 var sex_td = document.createElement('td');
				 sex_td.innerHTML = response[i].publisher;
				 row.appendChild(sex_td);

				 var home_td = document.createElement('td');
				 home_td.innerHTML = response[i].category;
				 row.appendChild(home_td);

				 var pay_td = document.createElement("td");
				 pay_td.innerHTML = "<a href='/edit_student/"+response[i].studentId+"/' onclick='getStudent("+currentstudentId+");return false;' ><i class='edit icon'></i>borrow</a>"
				 row.appendChild(pay_td);

				 var delete_td = document.createElement("td");
				 delete_td.innerHTML = "<a href='/delete_student/"+response[i].studentId+"/' onclick='deleteStudent("+currentstudentId+");return false;'><i class='remove icon'></i>Delete</a>"
				 row.appendChild(delete_td);

				 if(tbody) tbody.appendChild(row);
			}
			var form1 = document.getElementById('books1');
			if (form1) form1.innerHTML='';

			var form2 = document.getElementById('anoda');
			if (form2) form2.innerHTML='';

		for (var i = 0; i < response.length; i++) {

				var image = document.createElement('img');
				 document.createTextNode(" ");
				 image.src = "data:image/png;base64," +response[i].photo;
				 image.style.marginRight = "50px";
				 image.style.marginBottom = "50px";
					image.width='100';
					image.height='100';

					form1.appendChild(image);
					// console.log(response[i])
					// var row = document.createElement("tr");
					// var currentstudentId = response[i].item_id;
					//
					// var status = document.createElement("td");
					// status.innerHTML = response[i].title;
					// row.appendChild(status);
					// if(form1) form1.appendChild(row);
				}
		}
	}

};

xmlhttp.open('POST', url, true);
xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
xmlhttp.send(param6);
}

function viewSitution() {
	var url ="ws/webservice.php" ;
	var param4 = "op=viewSitution";
 // console.log(param4);
 var xmlhttp = new XMLHttpRequest();
 xmlhttp.onreadystatechange = function() {
 	if (xmlhttp.readyState == 4 && xmlhttp.status == 200)
 	{
 		var response;
 		try {

 			response = JSON.parse(xmlhttp.responseText);
 		}catch(e) {
 			console.error(this.responseText);
 		}
 		if (response) {
 			console.log(response);

 			var tbody = document.getElementById('situation');
 			if (tbody) tbody.innerHTML='';

 			for (var i = 0; i < response.length; i++) {

 				var row = document.createElement("tr");
 				var currentstudentId = response[i].item_id;

 				var status = document.createElement("td");
 				status.innerHTML = response[i].due_date;
 				row.appendChild(status);

 				var id_td = document.createElement("td");
 				id_td.innerHTML = response[i].fine;
 				row.appendChild(id_td);

 				var name_td = document.createElement('td');
 				name_td.innerHTML = response[i].issue_date;
 				row.appendChild(name_td);

 				var sex_td = document.createElement('td');
 				sex_td.innerHTML = response[i].remark;
 				row.appendChild(sex_td);

 				var home_td = document.createElement('td');
 				home_td.innerHTML = response[i].returned_date;
 				row.appendChild(home_td);
 				if(tbody) tbody.appendChild(row);
 			}
 		}
 	}

 };

 xmlhttp.open('POST', url, true);
 xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
 xmlhttp.send(param4);
}

function Borrow_books() {
	var url ="ws/webservice.php" ;
	var param2 = "op=Borrow_books";
 // console.log(param2);
 var xmlhttp = new XMLHttpRequest();
 xmlhttp.onreadystatechange = function() {
 	if (xmlhttp.readyState == 4 && xmlhttp.status == 200)
 	{
 		var response;
 		try {

 			response = JSON.parse(xmlhttp.responseText);
 		}catch(e) {
 			console.error(this.responseText);
 		}
 		if (response) {
 			console.log(response);

 			var tbody = document.getElementById('Borrow');
 			if (tbody) tbody.innerHTML='';

 			for (var i = 0; i < response.length; i++) {

 				var row = document.createElement("tr");
 				var currentstudentId = response[i].item_id;

 				var status = document.createElement("td");
 				status.innerHTML = response[i].borrow_id;
 				row.appendChild(status);

 				var name_td = document.createElement('td');
 				name_td.innerHTML = response[i].item_item_id;
 				row.appendChild(name_td);

 				var issue_td = document.createElement('td');
 				issue_td.innerHTML = response[i].issue_date;
 				row.appendChild(issue_td);

 				if(tbody) tbody.appendChild(row);
 			}
 		}
 	}

 };

 xmlhttp.open('POST', url, true);
 xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
 xmlhttp.send(param2);
}

function viewItem() {
	var url ="ws/webservice.php" ;
	var param7 = "op=viewItem";
	// console.log(param7);
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function() {
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200)
		{
			var response;
			try {

				response = JSON.parse(xmlhttp.responseText);
			}catch(e) {
				console.error(this.responseText);
			}
			if (response) {
				console.log(response);

				var tbody = document.getElementById('item');
				if (tbody) tbody.innerHTML='';

				for (var i = 0; i < response.length; i++) {

					var row = document.createElement("tr");
					var currentstudentId = response[i].item_id;

					var status = document.createElement("td");
					status.innerHTML = response[i].item_id;
					row.appendChild(status);

					var name_td = document.createElement('td');
					name_td.innerHTML = response[i].item_title;
					row.appendChild(name_td);

					var issue_td = document.createElement('td');
					issue_td.innerHTML = response[i].price;
					row.appendChild(issue_td);

					var received_td = document.createElement('td');
					received_td.innerHTML = response[i].received_date;
					row.appendChild(received_td);

					if(tbody) tbody.appendChild(row);
				}
			}
		}

	};

	xmlhttp.open('POST', url, true);
	xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
	xmlhttp.send(param7);
}

function addLocation(){


	var shelf = document.getElementById('shelf').value;


	var url ="ws/webservice.php" ;
	var fd = new FormData();

	fd.append('op', 'addLocation');
	fd.append('shelf', shelf);

	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function() {
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200)
		{
			var response;
			try {

				response = JSON.parse(xmlhttp.responseText);
			}catch(e) {
				console.error(this.responseText);
				var responseText = this.responseText;
				alert ('Registration failed BECAUSE  ' + responseText);

			}
			if (response) {
				console.log(response);
				swal("Succesful!", "Location Added!", "success")
				document.getElementById("book").reset();
			}
		}

	};

	xmlhttp.open('POST', url, true);
	xmlhttp.send(fd);
}

function viewB_location(){


	var l_title = document.getElementById('l_title').value;


	var url ="ws/webservice.php" ;
	var fd = new FormData();

	fd.append('op', 'viewB_location');
	fd.append('l_title', l_title);
	console.log(fd);
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function() {
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200)
		{
			var response;
			try {

				response = JSON.parse(xmlhttp.responseText);
			}catch(e) {
				console.error(this.responseText);
				var responseText = this.responseText;
				alert ('Registration failed BECAUSE  ' + responseText);

			}
			if (response) {
				console.log(response);
				swal("Succesful!", "shelf Name Available!", "success")
				document.getElementById("title").reset();

				var tbody = document.getElementById('location');
				if (tbody) tbody.innerHTML='';

				for (var i = 0; i < response.length; i++) {

					var row = document.createElement("tr");
					var currentstudentId = response[i].id;

					var id_td = document.createElement("td");
					id_td.innerHTML = response[i].title;
					row.appendChild(id_td);

					var name_td = document.createElement('td');
					name_td.innerHTML = response[i].edition;
					row.appendChild(name_td);

					var sex_td = document.createElement('td');
					sex_td.innerHTML = response[i].publisher;
					row.appendChild(sex_td);

					var home_td = document.createElement('td');
					home_td.innerHTML = response[i].shelf_name;
					row.appendChild(home_td);
					if(tbody) tbody.appendChild(row);
				}
			}
		}

	};

	xmlhttp.open('POST', url, true);
	xmlhttp.send(fd);
}

function bookinfo(){

	var isbn = document.getElementById('isbn').value;
	var tittle = document.getElementById('tittle').value;
	var edition = document.getElementById('edition').value;
	var upload = document.querySelector('#upload');
	var publisher = document.getElementById('publisher').value;
	var category = document.getElementById('category').value;



	var url ="ws/webservice.php" ;
	var fd = new FormData();

	fd.append('op', 'bookinfo');
	fd.append('isbn', isbn);
	fd.append('tittle', tittle);
	fd.append('edition', edition);
	fd.append('upload', upload.files[0]);
	fd.append('publisher', publisher);
	fd.append('category', category);

	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function() {
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200)
		{
			var response;
			try {

				response = JSON.parse(xmlhttp.responseText);
			}catch(e) {
				console.error(this.responseText);
				var responseText = this.responseText;
				alert ('Registration failed BECAUSE  ' + responseText);

			}
			if (response) {
				console.log(response);
				swal("Succesful!", "Book Info Added!", "success")
				document.getElementById("bookinfo").reset();
			}
		}

	};

	xmlhttp.open('POST', url, true);
	xmlhttp.send(fd);
}

function searchItem(){

	var item_title = document.getElementById('item_title').value;
	var title = document.getElementById('title').value;

	var url ="ws/webservice.php" ;
	var fd = new FormData();
	console.log(fd);
	fd.append('op', 'searchItem');
	fd.append('item_title', item_title);
	fd.append('title', title);

	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function() {
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200)
		{
			var response;
			try {

				response = JSON.parse(xmlhttp.responseText);
			}catch(e) {
				console.error(this.responseText);
				var responseText = this.responseText;
				alert ('Registration failed BECAUSE  ' + responseText);

			}
			if (response) {
				console.log(response);
				swal("Succesful!", "Search Result Found!", "success")
				document.getElementById("searchitem").reset();


				var tbody = document.getElementById('search');
				if (tbody) tbody.innerHTML='';

				for (var i = 0; i < response.length; i++) {

					var row = document.createElement("tr");
					var currentstudentId = response[i].status;

					var title_td = document.createElement("td");
					title_td.innerHTML = response[i].item_title;
					row.appendChild(title_td);

					var name_td = document.createElement('td');
					name_td.innerHTML = response[i].price;
					row.appendChild(name_td);

					var sex_td = document.createElement('td');
					sex_td.innerHTML = response[i].shelf_name;
					row.appendChild(sex_td);

					var home_td = document.createElement('td');
					home_td.innerHTML = response[i].title;
					row.appendChild(home_td);
					if(tbody) tbody.appendChild(row);
				}
			}
		}

	};

	xmlhttp.open('POST', url, true);
	xmlhttp.send(fd);
}

function searchUsers(){

	var username = document.getElementById('username').value;

	var url ="ws/webservice.php" ;
	var fd = new FormData();
	console.log(fd);
	fd.append('op', 'searchUsers');
	fd.append('username', username);

	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function() {
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200)
		{
			var response;
			try {

				response = JSON.parse(xmlhttp.responseText);
			}catch(e) {
				console.error(this.responseText);
				var responseText = this.responseText;
				alert ('Registration failed BECAUSE  ' + responseText);

			}
			if (response) {
				console.log(response);
				swal("Succesful!", "Search Result Found!", "success")
				document.getElementById("searchitem").reset();


				var tbody = document.getElementById('finduser');
				if (tbody) tbody.innerHTML='';

				for (var i = 0; i < response.length; i++) {

					var row = document.createElement("tr");
					var currentstudentId = response[i].status;

					var title_td = document.createElement("td");
					title_td.innerHTML = response[i].username;
					row.appendChild(title_td);

					var name_td = document.createElement('td');
					name_td.innerHTML = response[i].fname;
					row.appendChild(name_td);

					var sex_td = document.createElement('td');
					sex_td.innerHTML = response[i].lname;
					row.appendChild(sex_td);

					var home_td = document.createElement('td');
					home_td.innerHTML = response[i].email;
					row.appendChild(home_td);

					var pay_td = document.createElement("td");
					pay_td.innerHTML = "<a href='/edit_student/"+response[i].studentId+"/' onclick='getStudent("+currentstudentId+");return false;' class='btn btn-default'><i class='edit icon'></i>Edit</a>"
					row.appendChild(pay_td);

					var delete_td = document.createElement("td");
					delete_td.innerHTML = "<a href='/delete_student/"+response[i].studentId+"/' onclick='deleteStudent("+currentstudentId+");return false;' class='btn btn-default'><i class='remove icon'></i>Update</a>"
					row.appendChild(delete_td);

					var delete_td = document.createElement("td");
					delete_td.innerHTML = "<a href='/delete_student/"+response[i].studentId+"/' onclick='deleteStudent("+currentstudentId+");return false;' class='btn btn-default'><i class='remove icon'></i>Delete</a>"
					row.appendChild(delete_td);

					if(tbody) tbody.appendChild(row);
				}
			}
		}

	};

	xmlhttp.open('POST', url, true);
	xmlhttp.send(fd);
}

function searchBook(){

	var b_title = document.getElementById('b_title').value;

	var url ="ws/webservice.php" ;
	var fd = new FormData();
	console.log(fd);
	fd.append('op', 'searchBook');
	fd.append('b_title', b_title);

	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function() {
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200)
		{
			var response;
			try {

				response = JSON.parse(xmlhttp.responseText);
			}catch(e) {
				console.error(this.responseText);
				var responseText = this.responseText;
				alert ('Registration failed BECAUSE  ' + responseText);

			}
			if (response) {
				console.log(response);
				swal("Succesful!", "Search Result Found!", "success")
				document.getElementById("searchbook").reset();

				var tbody = document.getElementById('book');
				if (tbody) tbody.innerHTML='';

				for (var i = 0; i < response.length; i++) {

					var row = document.createElement("tr");
					var currentstudentId = response[i].status;

					var title_td = document.createElement("td");
					title_td.innerHTML = response[i].status;
					row.appendChild(title_td);

					var name_td = document.createElement('td');
					name_td.innerHTML = response[i].title;
					row.appendChild(name_td);

					var sex_td = document.createElement('td');
					sex_td.innerHTML = response[i].edition;
					row.appendChild(sex_td);

					var home_td = document.createElement('td');
					home_td.innerHTML = response[i].publisher;
					row.appendChild(home_td);

					var home1_td = document.createElement('td');
					home1_td.innerHTML = response[i].category;
					row.appendChild(home1_td);
					if(tbody) tbody.appendChild(row);
				}
			}
		}

	};

	xmlhttp.open('POST', url, true);
	xmlhttp.send(fd);
}

function searchCd(){

	var title = document.getElementById('title').value;

	var url ="ws/webservice.php" ;
	var fd = new FormData();
	console.log(fd);
	fd.append('op', 'searchCd');
	fd.append('title', title);

	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function() {
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200)
		{
			var response;
			try {

				response = JSON.parse(xmlhttp.responseText);
			}catch(e) {
				console.error(this.responseText);
				var responseText = this.responseText;
				alert ('Registration failed BECAUSE  ' + responseText);

			}
			if (response) {
				console.log(response);
				swal("Succesful!", "Search Result Found!", "success")
				document.getElementById("search").reset();


				var tbody = document.getElementById('searchcd');
				if (tbody) tbody.innerHTML='';

				for (var i = 0; i < response.length; i++) {

					var row = document.createElement("tr");
					var currentstudentId = response[i].isbn;

					// var status_td = document.createElement("td");
					// status_td.innerHTML = response[i].status;
					// row.appendChild(status_td);

					var name_td = document.createElement('td');
					name_td.innerHTML = response[i].cd_title;
					row.appendChild(name_td);

					var name_td = document.createElement('td');
					name_td.innerHTML = response[i].cd_edition;
					row.appendChild(name_td);

					var sex_td = document.createElement('td');
					sex_td.innerHTML = response[i].cd_publisher;
					row.appendChild(sex_td);

					var home_td = document.createElement('td');
					home_td.innerHTML = response[i].cd_category;
					row.appendChild(home_td);
					if(tbody) tbody.appendChild(row);
				}
			}
		}

	};

	xmlhttp.open('POST', url, true);
	xmlhttp.send(fd);
}

function addAuthor(){

	var isbn = document.getElementById('isbn').value;
	var fname = document.getElementById('fname').value;
	var lname = document.getElementById('lname').value;
	var othername = document.getElementById('othername').value;
	var othername1 = document.getElementById('othername1').value;

	var url ="ws/webservice.php" ;
	var fd = new FormData();

	fd.append('op', 'addAuthor');
	fd.append('isbn', isbn);
	fd.append('fname', fname);
	fd.append('lname', lname);
	fd.append('othername', othername);
	fd.append('othername1', othername1);

	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function() {
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200)
		{
			var response;
			try {

				response = JSON.parse(xmlhttp.responseText);
			}catch(e) {
				console.error(this.responseText);
				var responseText = this.responseText;
				alert ('Registration failed BECAUSE  ' + responseText);

			}
			if (response) {
				console.log(response);
				swal("Succesful!", "Author Added!", "success")
				document.getElementById("author").reset();
			}
		}

	};

	xmlhttp.open('POST', url, true);
	xmlhttp.send(fd);
}

function addItem(){

	var item_title = document.getElementById('item_title').value;
	var price = document.getElementById('price').value;
	var location = document.getElementById('location').value;


	var url ="ws/webservice.php" ;
	var fd = new FormData();

	fd.append('op', 'addItem');
	fd.append('item_title', item_title);
	fd.append('price', price);
	fd.append('location', location);

	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function() {
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200)
		{
			var response;
			try {

				response = JSON.parse(xmlhttp.responseText);
			}catch(e) {
				console.error(this.responseText);
				var responseText = this.responseText;
				alert ('Registration failed BECAUSE  ' + responseText);

			}
			if (response) {
				console.log(response);
				swal("Succesful!", "Item Added!", "success")
				document.getElementById("item").reset();
			}
		}

	};

	xmlhttp.open('POST', url, true);
	xmlhttp.send(fd);
}

function add_Cd(){

	var isbn = document.getElementById('isbn').value;
	var item_id = document.getElementById('item_id').value;
	var desc = document.getElementById('desc').value;


	var url ="ws/webservice.php" ;
	var fd = new FormData();
// console.log(fd);
fd.append('op', 'add_Cd');
fd.append('isbn', isbn);
fd.append('item_id', item_id);
fd.append('desc', desc);

var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
	if (xmlhttp.readyState == 4 && xmlhttp.status == 200)
	{
		var response;
		try {

			response = JSON.parse(xmlhttp.responseText);
		}catch(e) {
			console.error(this.responseText);
			var responseText = this.responseText;
			alert ('Registration failed BECAUSE  ' + responseText);

		}
		if (response) {
			console.log(response);
			swal("Succesful!", "CD Added!", "success")
			document.getElementById("item").reset();
		}
	}

};

xmlhttp.open('POST', url, true);
xmlhttp.send(fd);
}

function addCd_info(){

	var isbn = document.getElementById('isbn').value;
	var title = document.getElementById('title').value;
	var edition = document.getElementById('edition').value;
	var publisher = document.getElementById('publisher').value;
	var category = document.getElementById('category').value;


	var url ="ws/webservice.php" ;
	var fd = new FormData();

	fd.append('op', 'addCd_info');
	fd.append('isbn', isbn);
	fd.append('title', title);
	fd.append('edition', edition);
	fd.append('publisher', publisher);
	fd.append('category', category);

	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function() {
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200)
		{
			var response;
			try {

				response = JSON.parse(xmlhttp.responseText);
			}catch(e) {
				console.error(this.responseText);
				var responseText = this.responseText;
				alert ('Registration failed BECAUSE  ' + responseText);

			}
			if (response) {
				console.log(response);
				swal("Succesful!", "CD Info Added!", "success")
				document.getElementById("item").reset();
			}
		}

	};

	xmlhttp.open('POST', url, true);
	xmlhttp.send(fd);
}

function viewAllcds() {
	var url ="ws/webservice.php" ;
	var param5 = "op=viewAllcds";
	// console.log(param5);
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function() {
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200)
		{
			var response;
			try {

				response = JSON.parse(xmlhttp.responseText);
			}catch(e) {
				console.error(this.responseText);
			}
			if (response) {
				console.log(response);

				var tbody1 = document.getElementById('cd1');
				if (tbody1) tbody1.innerHTML=",";

				for (var i = 0; i < response.length; i++) {

					var row = document.createElement("tr");
					var currentstudentId = response[i].id;

					var status_td = document.createElement("td");
					status_td.innerHTML = response[i].status;
					row.appendChild(status_td);

					 var id_td = document.createElement("td");
					 id_td.innerHTML = response[i].cd_title;
					 row.appendChild(id_td);

					var name_td = document.createElement('td');
					name_td.innerHTML = response[i].cd_edition;
					row.appendChild(name_td);

					var sex_td = document.createElement('td');
					sex_td.innerHTML = response[i].cd_publisher;
					row.appendChild(sex_td);

					var home_td = document.createElement('td');
					home_td.innerHTML = response[i].cd_category;
					row.appendChild(home_td);

					var pay_td = document.createElement("td");
					pay_td.innerHTML = "<a href='/edit_student/"+response[i].studentId+"/' onclick='getStudent("+currentstudentId+");return false;' ><i class='edit icon'></i>borrow</a>"
					row.appendChild(pay_td);

					var delete_td = document.createElement("td");
					delete_td.innerHTML = "<a href='/delete_student/"+response[i].studentId+"/' onclick='deleteStudent("+currentstudentId+");return false;'><i class='remove icon'></i>Delete</a>"
					row.appendChild(delete_td);

					if(tbody1) tbody1.appendChild(row);
				}
			}
		}

	};

	xmlhttp.open('POST', url, true);
	xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
	xmlhttp.send(param5);
}

 function viewUsers() {
 	var url ="ws/webservice.php" ;
 	var param5 = "op=viewUsers";
 	// console.log(param5);
 	var xmlhttp = new XMLHttpRequest();
 	xmlhttp.onreadystatechange = function() {
 		if (xmlhttp.readyState == 4 && xmlhttp.status == 200)
 		{
 			var response;
 			try {

 				response = JSON.parse(xmlhttp.responseText);
 			}catch(e) {
 				console.error(this.responseText);
 			}
 			if (response) {
 				console.log(response);

 				var tbody = document.getElementById('user');
 				if (tbody) tbody.innerHTML='';

 				for (var i = 0; i < response.length; i++) {

 					var row = document.createElement("tr");
 					var currentstudentId = response[i].username;

 					var username_td = document.createElement("td");
 					username_td.innerHTML = response[i].username;
 					row.appendChild(username_td);

 					var firstname_td = document.createElement("td");
 					firstname_td.innerHTML = response[i].fname;
 					row.appendChild(firstname_td);

 					var lastname_td = document.createElement('td');
 					lastname_td.innerHTML = response[i].lname;
 					row.appendChild(lastname_td);

 					var email_td = document.createElement('td');
 					email_td.innerHTML = response[i].email;
 					row.appendChild(email_td);

 					var creation_date_td = document.createElement('td');
 					creation_date_td.innerHTML = response[i].creation_date;
 					row.appendChild(creation_date_td);

					 var pay_td = document.createElement("td");
           pay_td.innerHTML = "<a href='/view_user/"+currentstudentId+"/' onclick='getUser(); return false;' $('#myModal').modal('show'); class='btn btn-default'>Edit</a>"
           row.appendChild(pay_td);

 				 	var update_td = document.createElement("td");
 				 	update_td.innerHTML = "<a href='/view_user/"+currentstudentId+"/' onclick='getUser();return false;' class='btn btn-default'>update</a>"
 				 	row.appendChild(update_td);

 				// 	var delete_td = document.createElement("td");
 				// 	delete_td.innerHTML = "<a href='/delete_student/"+response[i].username+"/' onclick='deleteStudent("+currentstudentId+");return false;' class='btn btn-default'><i class='remove icon'></i>Delete</a>"
 				// 	row.appendChild(delete_td);

 					if(tbody) tbody.appendChild(row);
 				}
 			}
 		}

 	};

 	xmlhttp.open('POST', url, true);
 	xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
 	xmlhttp.send(param5);
 }



function addSitution(){

	var issue = document.getElementById('issue').value;
	var return_date = document.getElementById('return_date').value;
	var due = document.getElementById('due').value;
	var fine = document.getElementById('fine').value;
	var remark = document.getElementById('remark').value;


	var url ="ws/webservice.php" ;
	var fd = new FormData();

	fd.append('op', 'addSitution');
	fd.append('issue', issue);
	fd.append('return_date', return_date);
	fd.append('due', due);
	fd.append('fine', fine);
	fd.append('remark', remark);

	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function() {
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200)
		{
			var response;
			try {

				response = JSON.parse(xmlhttp.responseText);
			}catch(e) {
				console.error(this.responseText);
				var responseText = this.responseText;
				alert ('Registration failed BECAUSE  ' + responseText);

			}
			if (response) {
				console.log(response);
				swal("Succesful!", "CD Info Added!", "success")
				document.getElementById("item").reset();
			}
		}

	};

	xmlhttp.open('POST', url, true);
	xmlhttp.send(fd);
}

function item_Borrow(){

	var item_id = document.getElementById('item_id').value;


	var url ="ws/webservice.php" ;
	var fd = new FormData();

	fd.append('op', 'item_Borrow');
	fd.append('item_id', item_id);

	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function() {
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200)
		{
			var response;
			try {

				response = JSON.parse(xmlhttp.responseText);
			}catch(e) {
				console.error(this.responseText);
				var responseText = this.responseText;
				alert ('Registration failed BECAUSE  ' + responseText);

			}
			if (response) {
				console.log(response);
				swal("Succesful!", "book borrow Added!", "success")
				document.getElementById("borrow").reset();
			}
		}

	};

	xmlhttp.open('POST', url, true);
	xmlhttp.send(fd);
}

function change_password(){

	var username = document.getElementById('username').value;
	var password = document.getElementById('password').value;


	var url ="ws/webservice.php";
	var fd = new FormData();

	fd.append('op', 'change_password');
	fd.append('username', username);
	fd.append('password', password);

	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function() {
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200)
		{
			var response;
			try {

				response = JSON.parse(xmlhttp.responseText);
			}catch(e) {
				console.error(this.responseText);
				var responseText = this.responseText;
				alert ('Registration failed BECAUSE  ' + responseText);

			}
			if (response) {
				console.log(response);
				swal("Succesful!", "Password Changed!", "success")
				document.getElementById("change").reset();
			}
		}

	};

	xmlhttp.open('POST', url, true);
	xmlhttp.send(fd);
}

function Userphotoedit(){

	var username = document.getElementById('username').value;
	var photo = document.querySelector('#fileinput');


	var url ="ws/webservice.php";
	var fd = new FormData();

	fd.append('op', 'Userphotoedit');
	fd.append('username', username);
	fd.append('fileinput', photo.files[0]);

	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function() {
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200)
		{
			var response;
			try {

				response = JSON.parse(xmlhttp.responseText);
			}catch(e) {
				console.error(this.responseText);
				var responseText = this.responseText;
				alert ('Registration failed BECAUSE  ' + responseText);

			}
			if (response) {
				console.log(response);
				swal("Succesful!", "profile picture set!", "success")
				document.getElementById("pic").reset();
			}
		}

	};

	xmlhttp.open('POST', url, true);
	xmlhttp.send(fd);
}



function addUser(){

	var username = document.getElementById('username').value;
	var fname = document.getElementById('fname').value;
	var lname = document.getElementById('lname').value;
	var email = document.getElementById('email').value;
	var password = document.getElementById('password').value;
	var created = document.getElementById('created').value;
	var modify = document.getElementById('modify').value;





	var url ="ws/webservice.php" ;
	var fd = new FormData();

	fd.append('op', 'addUser');
	fd.append('username', username);
	fd.append('fname', fname);
	fd.append('lname', lname);
	fd.append('email', email);
	fd.append('password', password);
	fd.append('created', created);
	fd.append('modify', modify);

	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function() {
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200)
		{
			var response;
			try {

				response = JSON.parse(xmlhttp.responseText);
			}catch(e) {
				console.error(this.responseText);
				var responseText = this.responseText;
				alert ('Registration failed BECAUSE  ' + responseText);

			}
			if (response) {
				console.log(response);
				swal("Succesful!", "User Registered!", "success")
				document.getElementById("add_user").reset();
			}
		}

	};

	xmlhttp.open('POST', url, true);
	xmlhttp.send(fd);
}

function viewDep_books(){
	var category = document.getElementById('category').value;

	var url ="ws/webservice.php" ;
	var fd = new FormData();
	console.log(fd);
	fd.append('op', 'viewDep_books');
	fd.append('category', category);


	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function() {
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200)
		{
			var response;
			try {

				response = JSON.parse(xmlhttp.responseText);
			}catch(e) {
				console.error(this.responseText);
				var responseText = this.responseText;
				alert ('Registration failed BECAUSE  ' + responseText);

			}
			if (response) {
				console.log(response);
				swal("Succesful!", "User Registered!", "success")
				document.getElementById("cat").reset();

				var tbody = document.getElementById('department');
				if (tbody) tbody.innerHTML='';

				for (var i = 0; i < response.length; i++) {

					var row = document.createElement("tr");
					var currentstudentId = response[i].status;

					var title_td = document.createElement("td");
					title_td.innerHTML = response[i].status;
					row.appendChild(title_td);

					var name_td = document.createElement('td');
					name_td.innerHTML = response[i].title;
					row.appendChild(name_td);

					var sex_td = document.createElement('td');
					sex_td.innerHTML = response[i].edition;
					row.appendChild(sex_td);

					var home_td = document.createElement('td');
					home_td.innerHTML = response[i].publisher;
					row.appendChild(home_td);
					if(tbody) tbody.appendChild(row);
				}
			}
		}

	};

	xmlhttp.open('POST', url, true);
	xmlhttp.send(fd);
}

function viewDep_cds(){
	var cd_category = document.getElementById('cd_category').value;

	var url ="ws/webservice.php" ;
	var fd = new FormData();
// console.log(fd);
fd.append('op', 'viewDep_cds');
fd.append('cd_category', cd_category);
console.log(fd);
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
	if (xmlhttp.readyState == 4 && xmlhttp.status == 200)
	{
		var response;
		try {

			response = JSON.parse(xmlhttp.responseText);
		}catch(e) {
			console.error(this.responseText);
			var responseText = this.responseText;
			alert ('Registration failed BECAUSE  ' + responseText);
		}
		if (response) {
			console.log(response);
			swal("Succesful!", "User Registered!", "success")
			document.getElementById("department").reset();

			var tbody = document.getElementById('department_cd');
			if (tbody) tbody.innerHTML='';

			for (var i = 0; i < response.length; i++) {

				var row = document.createElement("tr");
				var currentstudentId = response[i].isbn;

				var title_td = document.createElement("td");
				title_td.innerHTML = response[i].status;
				row.appendChild(title_td);

				var name_td = document.createElement('td');
				name_td.innerHTML = response[i].cd_title;
				row.appendChild(name_td);

				var sex_td = document.createElement('td');
				sex_td.innerHTML = response[i].cd_edition;
				row.appendChild(sex_td);

				var home_td = document.createElement('td');
				home_td.innerHTML = response[i].cd_publisher;
				row.appendChild(home_td);

				if(tbody) tbody.appendChild(row);
			}
		}
	}

};

xmlhttp.open('POST', url, true);
xmlhttp.send(fd);
}

 function getRole(p_username) {
 	var url ="ws/webservice.php" ;
 	var param6 = "op=getRole&ssid="+ p_username;
 //console.log(param6);
 var xmlhttp = new XMLHttpRequest();
 xmlhttp.onreadystatechange = function() {
 	if (xmlhttp.readyState == 4 && xmlhttp.status == 200)
 	{
 		var response;
 		try {

 			response = JSON.parse(xmlhttp.responseText);
 		}catch(e) {
 			console.error(this.responseText);
 		}
 		if (response) {
 			console.log(response);


 		}
 	}

 };

 xmlhttp.open('POST', url, true);
 xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
 xmlhttp.send(param6);
 }


function getPermision(p_username) {
	var url ="ws/webservice.php" ;
	var param6 = "op=getPermision&gperm="+ p_username;
//console.log(param6);
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
	if (xmlhttp.readyState == 4 && xmlhttp.status == 200)
	{
		var response;
		try {

			response = JSON.parse(xmlhttp.responseText);
		}catch(e) {
			console.error(this.responseText);
		}
		if (response) {
			console.log(response);


		}
	}

};

xmlhttp.open('POST', url, true);
xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
xmlhttp.send(param6);
}

 // getUser();
function getUser(p_username) {
	var url ="ws/webservice.php" ;
	var param6 = "op=getUser&guser="+ p_username;
//console.log(param6);
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
	if (xmlhttp.readyState == 4 && xmlhttp.status == 200)
	{
		var response;
		try {

			response = JSON.parse(xmlhttp.responseText);
		}catch(e) {
			console.error(this.responseText);
		}
		if (response) {
			console.log(response);

			  $('#myModal').modal('show');
			  $('#myModal').on('shown.bs.modal', function(){
            // console.log("");
						document.getElementById("upd_id").value = response[i].username;
        });

 			$('#view_user').modal('show');
 			$('#view_user').on('shown.bs.modal', function(){
document.getElementById("upd_id").value = response[i].username;
         });

				var form = document.getElementById('up_student');

				for (var i = 0; i < response.length; i++) {

							 document.getElementById("upd_id").value = response[i].username;
						 }
		}
	}

};

xmlhttp.open('POST', url, true);
xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
xmlhttp.send(param6);
}
