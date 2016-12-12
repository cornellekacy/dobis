<?php include 'sidebar.php'; ?>
<?php include 'header.php'; ?>

		<!-- //header-ends -->
		<!-- main content start-->
		<div id="page-wrapper">
			<div class="main-page signup-page">
				<h3 class="title1">Add Book Info</h3>
				<p class="creating"></p>
				<div class="sign-up-row widget-shadow">
					<h5>Book Information :</h5>
					<form onsubmit="addAuthor(); return false;" action="" method="post" id="author">
					<div class="sign-u">
						<div class="sign-up1">
							<h4>Book ISBN* :</h4>
						</div>
						<div class="sign-up2">
						
								<input type="text" id="isbn">
							
						</div>
						<div class="clearfix"> </div>
					</div>
				
					<div class="sign-u">
						<div class="sign-up1">
							<h4>Firstname* :</h4>
						</div>
						<div class="sign-up2">
						
								<input type="text" id="fname">
							
						</div>
						<div class="clearfix"> </div>
					</div>
					<div class="sign-u">
						<div class="sign-up1">
							<h4>Lastname* :</h4>
						</div>
						<div class="sign-up2">
						
								<input type="text" id="lname">
							
						</div>
						<div class="clearfix"> </div>
					</div>
					<div class="sign-u">
						<div class="sign-up1">
							<h4>Other Name1* :</h4>
						</div>
						<div class="sign-up2">
						
								<input type="text" id="othername">
							
						</div>
						<div class="clearfix"> </div>
					</div>
					<div class="sign-u">
						<div class="sign-up1">
							<h4>Other Name2* :</h4>
						</div>
						<div class="sign-up2">
						
								<input type="text" id="othername1">
							
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