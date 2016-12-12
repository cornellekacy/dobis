<?php
session_start();
error_reporting(E_ALL ^ E_WARNING);

function mysqlquote($str){
	if(empty($str))
		return "NULL";
	else
		return "'" . $str . "'";
}

if(!isset($_POST['op']) || empty($_POST['op'])){
	echo "There are Missing operation(s)";
	exit(0);
}
$op = $_POST['op'];

$opProc = array(
	"addUser"=>"addUser",
	"loginUser"=>"loginUser",
	"logoutUser"=>"logoutUser",
	"AsignRoleuser"=>"AsignRoleuser",
	"Addbook"=>"Addbook",
	"bookinfo"=>"bookinfo",
	"addAuthor"=>"addAuthor",
	"addItem"=>"addItem",
	"getRole"=>"getRole",
	"getPermision"=>"getPermision",
	"getUser"=>"getUser",
	"addLocation"=>"addLocation",
	"add_Cd"=>"add_Cd",
	"addCd_info"=>"addCd_info",
	"addSitution"=>"addSitution",
	"item_Borrow"=>"item_Borrow",
	"change_password"=>"change_password",
	"viewAllbooks"=>"viewAllbooks",
	"viewAllcds"=>"viewAllcds",
	"viewDep_books"=>"viewDep_books",
	"viewDep_cds"=>"viewDep_cds",
	"viewSitution"=>"viewSitution",
	"viewUsers"=>"viewUsers",
	"Borrow_books"=>"Borrow_books",
	"viewItem"=>"viewItem",
	"viewB_location"=>"viewB_location",
	"searchItem"=>"searchItem",
	"searchCd"=>"searchCd",
	"searchBook"=>"searchBook",
	"searchUsers"=>"searchUsers"
	);

if(!isset($opProc[$op])){
	echo "Unknown operation: {$op}";
	exit(0);
}

$proc = $opProc[$op];

$params = "";

if(
	$op == "getgendertype" || $op == "viewAllbooks" || $op == "viewAllcds" || $op == "viewSitution" || $op == "Borrow_books" || $op == "viewItem" || $op == "viewUsers"  ){



}else if($op == "loginUser"){
	$param1 = mysqlquote($_POST['username']);
	$param2 = mysqlquote($_POST['password']);


	$_SESSION['user_id'] = $param1;
	$_SESSION['user'] = ($_POST['username']);

		 // echo "Session variables are set.";

	$params = $param1 . ", " .$param2;

}else if($op == "change_password"){
	$param1 = mysqlquote($_POST['username']);
	$param2 = mysqlquote($_POST['password']);

	$params = $param1 . ", " .$param2;

}else if($op == "addUser"){
	$param1 = mysqlquote($_POST['username']);
	$param2 = mysqlquote($_POST['fname']);
	$param3 = mysqlquote($_POST['lname']);
	$param4 = mysqlquote($_POST['email']);
	$param5 = mysqlquote($_POST['password']);
	$param6 = mysqlquote($_POST['created']);
	$param7 = mysqlquote($_POST['modify']);

	$params = $param1 . ", " .$param2 .", ".
	$param3.", ".$param4.", ".$param5.", ".$param6.", ".$param7;

}else if($op == "bookinfo"){
	$param1 = mysqlquote($_POST['isbn']);
	$param2 = mysqlquote($_POST['tittle']);
	$param3 = mysqlquote($_POST['edition']);
	$param4 = mysqlquote($_POST['publisher']);
	$param5 = mysqlquote($_POST['category']);

	$params = $param1 . ", " .$param2. ", " .$param3. ", " .$param4. ", " .$param5;

}else if($op == "addAuthor"){
	$param1 = mysqlquote($_POST['isbn']);
	$param2 = mysqlquote($_POST['fname']);
	$param3 = mysqlquote($_POST['lname']);
	$param4 = mysqlquote($_POST['othername']);
	$param5 = mysqlquote($_POST['othername1']);

	$params = $param1 . ", " .$param2. ", " .$param3. ", " .$param4. ", " .$param5;

}else if($op == "addItem"){
	$param1 = mysqlquote($_POST['item_title']);
	$param2 = mysqlquote($_POST['price']);
	$param3 = mysqlquote($_POST['location']);

	$params = $param1. ", " .$param2. ", " .$param3;

}else if($op == "Addbook"){
	$param1 = mysqlquote($_POST['isbn']);
	$param2 = mysqlquote($_POST['item_id']);
	$param3 = mysqlquote($_POST['bookstatus']);

	$params = $param1 . ", " .$param2. ", " .$param3;

}else if($op == "add_Cd"){
	$param1 = mysqlquote($_POST['isbn']);
	$param2 = mysqlquote($_POST['item_id']);
	$param3 = mysqlquote($_POST['desc']);

	$params = $param1 . ", " .$param2. ", " .$param3;

}else if($op == "addCd_info"){
	$param1 = mysqlquote($_POST['isbn']);
	$param2 = mysqlquote($_POST['title']);
	$param3 = mysqlquote($_POST['edition']);
	$param4 = mysqlquote($_POST['publisher']);
	$param5 = mysqlquote($_POST['category']);

	$params = $param1 . ", " .$param2. ", " .$param3. ", " .$param4. ", " .$param5;

}else if($op == "addSitution"){
	$param1 = mysqlquote($_POST['issue']);
	$param2 = mysqlquote($_POST['return_date']);
	$param3 = mysqlquote($_POST['due']);
	$param4 = mysqlquote($_POST['fine']);
	$param5 = mysqlquote($_POST['remark']);

	$params = $param1 . ", " .$param2. ", " .$param3. ", " .$param4. ", " .$param5;


}else if($op == "item_Borrow"){
	$param1 = mysqlquote($_POST['item_id']);

	$params = $param1;

}else if($op == "getRole"){
	$param1 = mysqlquote($_POST['ssid']);

// 	$_SESSION['role_id'] = $param1;
// 	$_SESSION['role'] = ($_POST['name']);
// echo "Session variables are set.";
	$params = $param1;

}else if($op == "getPermision"){
	$param1 = mysqlquote($_POST['gperm']);

	$params = $param1;
}else if($op == "viewDep_books"){
	$param1 = mysqlquote($_POST['category']);

	$params = $param1;
}else if($op == "viewDep_cds"){
	$param1 = mysqlquote($_POST['cd_category']);

	$params = $param1;
}else if($op == "viewB_location"){
	$param1 = mysqlquote($_POST['l_title']);

	$params = $param1;

}else if($op == "getUser"){
	$param1 = mysqlquote($_POST['guser']);

	$params = $param1;

}else if($op == "AsignRoleuser"){
	$param1 = mysqlquote($_POST['roleid']);
	$param2 = mysqlquote($_POST['username']);

	$params = $param1 . ", " .$param2;

}else if($op == "searchItem"){
	$param1 = mysqlquote($_POST['item_title']);
	$param2 = mysqlquote($_POST['title']);

	$params = $param1 . ", " .$param2;

}else if($op == "searchCd"){
	$param1 = mysqlquote($_POST['title']);

	$params = $param1;
}else if($op == "searchBook"){
	$param1 = mysqlquote($_POST['b_title']);

	$params = $param1;

}else if($op == "searchUsers"){
	$param1 = mysqlquote($_POST['username']);

	$params = $param1;

}else if($op == "addLocation"){
	$param1 = mysqlquote($_POST['shelf']);

	$params = $param1;

}else if($op == "logoutUser"){
	$param1 = mysqlquote($_POST['l_id']);

	unset($_SESSION['user_id']);

	if (!empty($_SESSION['user_id'])) {
		$_SESSION['user_id'] = '';
	}
	session_destroy();


	$params = $param1;

}else{
	echo "Operation not implemented: {$op}";
	exit(0);
}


$con = mysqli_connect("localhost", "root", "", "library");
if (mysqli_connect_errno($con)) {
	echo "Failed to connect to MySQL: " . mysqli_connect_error();
	exit(0);
}

$output = array();
$sql = "CALL {$proc}({$params});";
	//   if($op == "addStudentGuardian"){
	//   	echo $sql;
	//   	exit(0);
	 // }


$res = mysqli_query($con, $sql);

if($res){
	while($row = mysqli_fetch_assoc($res)){
		$output[] = $row;
	}
	echo header('Content-Type: application/json');
	echo json_encode($output);

}else{
	echo "Database query error Due To: " . mysqli_error($con);
	exit(0);
}

mysqli_close($con);
?>
