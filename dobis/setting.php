<?php include 'sidebar.php'; ?>
<?php include 'header.php'; ?>

		<!-- //header-ends -->
		<!-- main content start-->
		<div id="page-wrapper">
		<a href="../matrix/index.html">layout</a>
		<center><h1>Application Settings</h1></center>
         <div class="row">
         <div class="col-md-4">
         	<button type="button" class="btn btn-info" data-toggle="modal" data-target="#myModal">Change User Role</button>
         </div>
         <div class="col-md-4">
         	  <button type="button" class="btn btn-info" data-toggle="modal" data-target="#myModal">Assign User Role</button>
         </div>
         <div class="col-md-4">
         	<button type="button" class="btn btn-info" data-toggle="modal" data-target="#myModal">User Role</button>
         </div>

         	
         </div>
		</div>

		<a href=".../matrix/index.html">layout</a>



  <!-- Modal -->
  <div class="modal fade" id="myModal" role="dialog">
    <div class="modal-dialog">
    
      <!-- Modal content-->
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal">&times;</button>
          <h4 class="modal-title"><center>Assign Role to User</center></h4>
        </div>
        <div class="modal-body">
        <div class="main-page signup-page">
          	<form onsubmit="AsignRoleuser(); return false;" action="" method="post" id="assign">
          	<center><h6>Select Role For User :</h6></center>
          			<div class="sign-u">
						<div class="sign-up1">
						</div>
						<div class="sign-up2">
							<label>
								<input type="radio" id="roleid" value="1" required>
								Principal
							</label><br>
							<label>
								<input type="radio" id="roleid" value="2" required>
								vice_principal
							</label><br>
							<label>
								<input type="radio" id="Gender" value="3" required>
								Dean_of_study
							</label><br>
							<label>
								<input type="radio" id="roleid" value="4" required>
								Disiplin_master
							</label><br>
							<label>
								<input type="radio" id="roleid" value="5" required>
								Secretery
							</label><br>
							<label>
								<input type="radio" id="roleid" value="7" required>
								Staff
							</label><br>
							<label>
								<input type="radio" id="roleid" value="8" required>
								Student
							</label>
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
  <?php include 'footer.php'; ?>