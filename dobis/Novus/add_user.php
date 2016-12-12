<?php include 'sidebar.php'; ?>
<?php include 'header.php'; ?>

<!-- //header-ends -->
<!-- main content start-->
<div id="page-wrapper">
	<div class="main-page signup-page">
		<h3 class="title1">Add User</h3>
		<p class="creating"></p>
		<div class="sign-up-row widget-shadow">
			<h5>Personal Information :</h5>
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
		</div>
	</div>
</div>

<?php include 'footer.php'; ?>