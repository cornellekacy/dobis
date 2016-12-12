<?php include 'sidebar.php'; ?>
<?php include 'header.php'; ?>

<!-- //header-ends -->
<!-- main content start-->
<div id="page-wrapper">  

 <form class="form-inline" id="searchitem" onsubmit="searchUsers(); return false;" method="post" role="form" style="float: right;">
  <div class="form-group">
    <label for="tittle">Username*</label>
    <input type="text" class="form-control" id="username">
  </div>
  <button type="submit" class="btn btn-primary"><span class="glyphicon glyphicon-search"></span>Search</button>
</form>
<br><br><br>

<center><h3 class="title1">User Search Result</h3></center>         
<table class="table">
  <thead>
    <tr>
      <th>Username</th>
      <th>Firstname</th>
      <th>Lastname</th>
      <th>Email</th>
      <th>Edit</th>
      <th>Update</th>
      <th>Delete</th>
    </tr>
  </thead>
  <tbody id="finduser">

  </tbody>
</table>
</div>

<?php include 'footer.php'; ?>