<?php include 'sidebar.php'; ?>
<?php include 'header.php'; ?>

		<!-- //header-ends -->
		<!-- main content start-->
			<div id="page-wrapper">
			<div class="main-page signup-page">
				<h3 class="title1">Add Book </h3>
				<p class="creating"></p>
				<div class="sign-up-row widget-shadow">
					<h5>Book Information :</h5>
					<form onsubmit="Addbook(); return false;" action="" method="post" id="assign">
					<div class="sign-u">
						<div class="sign-up1">
							<h4>Book ISBN* :</h4>
						</div>
						<div class="sign-up2">
						
								<input type="text" id="isbn" >
							
						</div>
						<div class="clearfix"> </div>
					</div>
				
					<div class="sign-u">
						<div class="sign-up1">
							<h4>Item ID* :</h4>
						</div>
						<div class="sign-up2">
						
								<input type="text" id="item_id" >
							
						</div>
						<div class="clearfix"> </div>
					</div>
					<div class="sign-u">
						<div class="sign-up1">
							<h4>Book Status* :</h4>
						</div>
						<div class="sign-up2">
						
								<input type="text" id="bookstatus" >
							
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