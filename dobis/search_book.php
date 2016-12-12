<?php include 'sidebar.php'; ?>
<?php include 'header.php'; ?>

<!-- //header-ends -->
<!-- main content start-->
<div id="page-wrapper">  

 <form class="form-inline" id="searchbook" onsubmit="searchBook(); return false;" method="post" role="form" style="float: right;">
  <div class="form-group">
    <label for="tittle">Title*</label>
    <input type="text" class="form-control" id="b_title">
  </div>
  <button type="submit" class="btn btn-success">Submit</button>
</form>
<br><br><br>
<center><h3 class="title1">Book Search Result</h3></center>         
<table class="table">
  <thead>
    <tr>
      <th>status</th>
      <th>title</th>
      <th>edition</th>
      <th>publisher</th>
      <th>category</th>
    </tr>
  </thead>
  <tbody id="book">

  </tbody>
</table>
</div>

<?php include 'footer.php'; ?>