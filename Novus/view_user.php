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

  <div class="modal fade" id="view" role="dialog">
    <div class="modal-dialog">
    
      <!-- Modal content-->
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal">&times;</button>
          <h4 class="modal-title">Modal Header</h4>
        </div>
        <div class="modal-body">
          <p>Some text in the modal.</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
        </div>
      </div>
      
    </div>
  </div>
</div>

<?php include 'footer.php'; ?>