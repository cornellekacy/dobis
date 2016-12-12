<?php include 'sidebar.php'; ?>
<?php include 'header.php'; ?>

<!-- //header-ends -->
<!-- main content start-->
<div id="page-wrapper">
	<div class="main-page signup-page">
		<h3 class="title1">View Books Based On Department </h3>
		<p class="creating"></p>
		<div class="sign-up-row widget-shadow">
			<h5>Category Type :</h5>
			<form onsubmit="viewDep_books(); return false;" action="" method="post" id="cat">
				<div class="sign-u">
					<div class="form-group">
						<label for="selector1" class="col-sm-2 control-label">Category*</label>
						<div class="col-sm-8"><select name="category" id="category" class="form-control1">
							<option>Select...</option>
							<option>ART</option>
							<option>PSc</option>
							<option>SMS</option>
							<option>FSc</option>
							<option>LSc</option>
						</select></div>
					</div>
					<div class="clearfix"> </div>
				</div>
				<div class="sub_home">
					<input type="submit" value="View">
					<div class="clearfix"> </div>
				</form>
			</div>
		</div> 
		<table class="table">
			<thead>
				<tr>
					<th>Status</th>
					<th>Title</th>
					<th>Edition</th>
					<th>Publisher</th>
				</tr>
			</thead>
			<tbody id="department">

			</tbody>
		</table>
	</div>
</div>
<?php include 'footer.php'; ?>