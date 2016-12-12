<?php include 'sidebar.php'; ?>
<?php include 'header.php'; ?>

<!-- //header-ends -->
<!-- main content start-->
<div id="page-wrapper">  

 <form class="form-inline" id="searchitem" onsubmit="searchItem(); return false;" method="post" role="form" style="float: right;">
 <div class="form-group">
  <label for="item_title">Select Item*</label>
  <select class="form-control" id="item_title">
    <option>Select...</option>
    <option>book</option>
    <option>cd</option>
  </select>
</div>
  <div class="form-group">
    <label for="tittle">Title*</label>
    <input type="text" class="form-control" id="title">
  </div>
  <button type="submit" class="btn btn-default">Search</button>
</form>
<br><br><br>

<center><h3 class="title1">Search Result</h3></center>         
<table class="table">
  <thead>
    <tr>
      <th>Item</th>
      <th>Price</th>
      <th>Shelf Name</th>
      <th>Title</th>
    </tr>
  </thead>
  <tbody id="search">

  </tbody>
</table>
</div>

<?php include 'footer.php'; ?>