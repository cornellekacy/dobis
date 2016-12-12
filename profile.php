<?php include 'sidebar.php'; ?>
<?php include 'header.php'; ?>


		<!-- //header-ends -->
		<!-- main content start-->
		<div id="page-wrapper">
		<center><h3 class="title1">User Profile Settings</h3></center>
		<div class="row">
			<div class="col-md-4">
				<p></p>
			</div>
			<div class="col-md-4">
            <div class="imageupload panel panel-default">
                <div class="panel-heading clearfix">
                    <h3 class="panel-title pull-left">Upload Image</h3>
                    <div class="btn-group pull-right">
                        <button type="button" class="btn btn-default active">File</button>
                        <button type="button" class="btn btn-default">URL</button>
                    </div>
                </div>
                <form onsubmit="Userphotoedit(); return false;" action="" method="post" id="pic">
                <div class="file-tab panel-body">
                    <label class="btn btn-default btn-file">
                        <center><span>Browse</span></center>
                        <!-- The file is stored here. -->
                        <input type="file" name="image-file" id="fileinput">
                    </label>
                    <button type="button" class="btn btn-default">Remove</button><br>
                </div>
                <div class="url-tab panel-body">
                    <div class="input-group">
                        <input type="text" class="form-control hasclear" placeholder="Image URL">
                        <div class="input-group-btn">
                            <button type="button" class="btn btn-default">Submit</button>
                        </div>
                    </div>
                    <button type="button" class="btn btn-default">Remove</button>
                    <!-- The URL is stored here. -->
                    <input type="text" name="image-url">
                </div>
            </div>
						<div class="form-group">
					    <label for="username" style="font-size: small;">Username:</label>
					    <input type="text" class="form-control" id="username" required="">
					  </div>

            <!-- bootstrap-imageupload method buttons. -->
						<center><input type="submit" class="btn btn-info" value="Upload picture"></center>
            </form>
			</div>
			<div class="col-md-4">
				<p></p>
			</div>
		</div>
		<hr>
<div class="row">
<div class="col-md-6">
	<div class="panel panel-default">
  <div class="panel-heading" style="background-color: #4F52BA; color: #fff;"><center>Update Account</center></div>
  <div class="panel-body">
	<form onsubmit="updateUser(); return false;" action="" method="post" id="password">
  <div class="row-fluid">
    <div class="col-md-6">
        <div class="form-group">
        <label for="username" style="font-size: small;">Username</label>
        <input type="text" class="form-control" id="username">
    </div>
   </div>
  <div class="col-md-6">
      <div class="form-group">
      <label for="fname" style="font-size: small;">Firstname</label>
      <input type="text" class="form-control" id="fname">
    </div>
  </div>
  </div>
    <div class="row-fluid">
    <div class="col-md-6">
        <div class="form-group">
        <label for="lname" style="font-size: small;">Lastname</label>
        <input type="text" class="form-control" id="lname">
    </div>
   </div>
  <div class="col-md-6">
      <div class="form-group">
      <label for="email" style="font-size: small;">Email</label>
      <input type="email" class="form-control" id="email">
    </div>
  </div>
  </div>
      <div class="row-fluid">
    <div class="col-md-6">
        <div class="form-group">
        <label for="createdby" style="font-size: small;">CreatedBy</label>
        <input type="text" class="form-control" id="createdby">
    </div>
   </div>
  <div class="col-md-6">
      <div class="form-group">
      <label for="modifyby" style="font-size: small;">ModifBy</label>
      <input type="text" class="form-control" id="modifyby">
    </div>
  </div>
  </div>
  <center><button type="submit" class="btn btn-default"
  style="background-color: #6164C1;
  color: #fff;
  font-weight: bold;">Submit</button></center>
</form>
</div>
</div>
</div>
<div class="col-md-2">

</div>
<div class="col-md-4">
<div class="panel panel-default">
  <div class="panel-heading" style="background-color: #4F52BA; color: #fff;"><center>Change Password</center></div>
  <div class="panel-body">


	<form onsubmit="change_password(); return false;" action="" method="post" id="change">
  <div class="form-group">
    <label for="username" style="font-size: small;">Username:</label>
    <input type="text" class="form-control" id="username" required="">
  </div>
  <div class="form-group">
    <label for="password" style="font-size: small;">New Password:</label>
    <input type="password" class="form-control" id="password" required="">
  </div>
  <button type="submit" class="btn btn-default"
  style="background-color: #6164C1;
  color: #fff;
  font-weight: bold;">Submit</button>
</form>
</div>
</div>
</div>

</div>
		</div>


<?php include 'footer.php'; ?>
