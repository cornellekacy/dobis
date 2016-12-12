<?php include 'sidebar.php'; ?>
<?php include 'header.php'; ?>

<!-- //header-ends -->
<!-- main content start-->
<div id="page-wrapper">
<a href="search_user.php" class="btn btn-info" style="float: right;">Find User <span class="glyphicon glyphicon-eye-open"></span></a>
<a href="add_user.php" target="_self" class="btn btn-info">Add User <i class="fa fa-file-text-o"></i></a>

<br>
<center><h3 class="title1">View User</h3></center>
<table class="table">
  <thead>
    <tr>
      <th>Username</th>
      <th>Firstname</th>
      <th>Lastname</th>
      <th>Email</th>
      <th>Creation Date</th>
      <th>Edit</th>
      <th>Update</th>
      <th>Delete</th>
    </tr>
  </thead>
  <tbody id="user">

  </tbody>
</table>

  <div class="modal fade" id="view_user" role="dialog">
    <div class="modal-dialog">

      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal">&times;</button>
          <center><h4 class="modal-title">Assign User Role</h4></center>
        </div>
        <div class="modal-body">
          <!-- <form id="up_student" class="" action="index.html" method="post"> -->
            <form onsubmit="AsignRoleuser(); return false;" action="" method="post" id="assign">

  					 <div class="sign-u">
  						<div class="sign-up1">
  							<h4>Role Name* :</h4>
  						</div>
  						<div class="sign-up2">

                <select multiple="" id="roleid" class="form-control1">
                  <option value="1">Principal</option><br>
                  <option value="2">Vice_principal</option>
                  <option value="3">Dean_of_Study</option>
                  <option value="4">Displine_master</option>
                  <option value="5">Secretary</option>
                  <option value="6">Teacher</option>
                  <option value="7">Student</option>
                </select>

  						</div>
  						<div class="clearfix"> </div>
  					</div>

  					<div class="sign-u">
  						<div class="sign-up1">
  							<h4>Username* :</h4>
  						</div>
  						<div class="sign-up2">

  								<input type="text" id="username" required>

  						</div>
  						<div class="clearfix"> </div>
  					</div>
  					<div class="sub_home">
  							<input type="submit" value="Submit">
  						<div class="clearfix"> </div>
  						</form>
        </div>
      </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
        </div>
      </div>

    </div>
  </div>


    <div class="modal fade" id="myModal" role="dialog">
    <div class="modal-dialog modal-lg">

      <!-- Modal content-->
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal">&times;</button>
          <center><h4 class="modal-title">Update User</h4></center>
        </div>
        <div class="modal-body">
          <form onsubmit="addUser(); return false;" action="" method="post" id="add_user">
            <div class="sign-u">
              <div class="sign-up1">
                <h4>Username* :</h4>
              </div>
              <div class="sign-up2">

                <input type="text" id="username" required>

              </div>
              <div class="clearfix"> </div>
            </div>
            <div class="sign-u">
              <div class="sign-up1">
                <h4>First Name* :</h4>
              </div>
              <div class="sign-up2">

                <input type="text" id="fname"  required>

              </div>
              <div class="clearfix"> </div>
            </div>
            <div class="sign-u">
              <div class="sign-up1">
                <h4>Last Name* :</h4>
              </div>
              <div class="sign-up2">

                <input type="text" id="lname" required>

              </div>
              <div class="clearfix"> </div>
            </div>
            <div class="sign-u">
              <div class="sign-up1">
                <h4>Email Address* :</h4>
              </div>
              <div class="sign-up2">

                <input type="text" id="email" required>

              </div>
              <div class="clearfix"> </div>
            </div>
            <h6>Login Information :</h6>
            <div class="sign-u">
              <div class="sign-up1">
                <h4>Password* :</h4>
              </div>
              <div class="sign-up2">

                <input type="password" id="password" required>

              </div>
              <div class="clearfix"> </div>
            </div>
            <div class="sign-u">
              <div class="sign-up1">
                <h4>CreatedBy* :</h4>
              </div>
              <div class="sign-up2">

                <input type="text" id="created"  required>

              </div>
              <div class="clearfix"> </div>
            </div>
            <div class="sign-u">
              <div class="sign-up1">
                <h4>ModifyBy* :</h4>
              </div>
              <div class="sign-up2">

                <input type="text" id="modify" required>

              </div>
              <div class="clearfix"> </div>
            </div>
            <div class="sub_home">
              <input type="submit" value="Submit">
              <div class="clearfix"> </div>
            </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
        </div>
      </div>

    </div>
  </div>
</div>
</div>

<?php include 'footer.php'; ?>
