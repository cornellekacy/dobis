<?php include 'sidebar.php'; ?>
<?php include 'header.php'; ?>

		<!-- //header-ends -->
		<!-- main content start-->
		<div id="page-wrapper">
			<div class="main-page signup-page">
				<h3 class="title1">Return Book</h3>
				<p class="creating"></p>
				<div class="sign-up-row widget-shadow">
					<h5>Book Information :</h5>
					<form onsubmit="addSitution(); return false;" action="" method="post" id="author">
					<div class="sign-u">
						<div class="sign-up1">
							<!-- <h4>Issue Date* :</h4> -->
						</div>
						<div class="sign-up2">
						
								<input type="hidden" id="issue">
							
						</div>
						<div class="clearfix"> </div>
					</div>
				
					<div class="sign-u">
						<div class="sign-up1">
							<!-- <h4>Returned Date* :</h4> -->
						</div>
						<div class="sign-up2">
						
								<input type="hidden" id="return_date">
							
						</div>
						<div class="clearfix"> </div>
					</div>
					<div class="sign-u">
						<div class="sign-up1">
							<h4>Due Date* :</h4>
						</div>
						<div class="sign-up2">
						
								<input type="text" id="due">
							
						</div>
						<div class="clearfix"> </div>
					</div>
					<div class="sign-u">
						<div class="sign-up1">
							<h4>Fine* :</h4>
						</div>
						<div class="sign-up2">
						
								<input type="text" id="fine">
							
						</div>
						<div class="clearfix"> </div>
					</div>
					<div class="sign-u">
						<div class="sign-up1">
							<h4>Remark* :</h4>
						</div>
						<div class="sign-up2">
						
								<input type="text" id="remark">
							
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
remark
<?php include 'footer.php'; ?>