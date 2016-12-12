<?php include 'sidebar.php'; ?>
<?php include 'header.php'; ?>

<!-- //header-ends -->
<!-- main content start-->
<div id="page-wrapper">
	<div class="main-page signup-page">
		<h3 class="title1">View Book Location</h3>
		<p class="creating"></p>
		<div class="sign-up-row widget-shadow">
			<h5>Shelf Number  :</h5>
			<form onsubmit="viewB_location(); return false;" action="" method="post" id="title">
				<div class="sign-u">
					<div class="sign-up1">
						<h4>Book Title* :</h4>
					</div>
					<div class="sign-up2">

						<input type="text" id="l_title">

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
					<th>Title</th>
					<th>Edition</th>
					<th>Publisher</th>
					<th>Shelf Name</th>
				</tr>
			</thead>
			<tbody id="location">
			</tbody>
		</table>
	</div>
</div>

<?php include 'footer.php'; ?>
