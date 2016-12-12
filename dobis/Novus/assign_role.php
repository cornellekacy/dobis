<?php include 'sidebar.php'; ?>
<?php include 'header.php'; ?>

		<!-- //header-ends -->
		<!-- main content start-->
			<div id="page-wrapper">
			<div class="main-page signup-page">
				<h3 class="title1">Assign User Role</h3>
				<p class="creating"></p>
				<div class="sign-up-row widget-shadow">
					<h5>Personal Information :</h5>
					<form onsubmit="AsignRoleuser(); return false;" action="" method="post" id="assign">
					<div class="sign-u">
						<div class="sign-up1">
							<h4>Role Id* :</h4>
						</div>
						<div class="sign-up2">
						
								<input type="text" id="roleid" required>
							
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
			</div>
		</div>

<?php include 'footer.php'; ?>