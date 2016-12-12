    <?php
    session_start();

    if (empty($_SESSION['user_id'])) {
        header('location: index.php');
    }
    ?>
    <!DOCTYPE HTML>
    <html>
    <head>
        <title>DOBIS | Library System</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="keywords" content="Novus Admin Panel Responsive web template, Bootstrap Web Templates, Flat Web Templates, Android Compatible web template,
        SmartPhone Compatible web template, free WebDesigns for Nokia, Samsung, LG, SonyEricsson, Motorola web design" />
        <script type="application/x-javascript"> addEventListener("load", function() { setTimeout(hideURLbar, 0); }, false); function hideURLbar(){ window.scrollTo(0,1); } </script>
        <!-- Bootstrap Core CSS -->
        <link href="css/bootstrap.css" rel='stylesheet' type='text/css' />
        <link href="css/bootstrap-imageupload.css" rel='stylesheet' type='text/css' />
        <!-- Custom CSS -->
        <script src="js/jquery-1.11.1.min.js"></script>
        <link href="css/style.css" rel='stylesheet' type='text/css' />
        <link href="css/sweetalert.css" rel='stylesheet' type='text/css' />
        <!-- <script src="js/bootstrap.js"> </script> -->
        <script src="js/bootstrap-imageupload.js"> </script>
        <!-- <script src="js/dobis.js"> </script> -->

        <!-- <script src="js/jquery-2.2.3.min.js"></script> -->




        <!-- font CSS -->
        <!-- font-awesome icons -->
        <link href="css/font-awesome.css" rel="stylesheet">
        <!-- //font-awesome icons -->
        <!-- js-->

        <script src="js/modernizr.custom.js"></script>
        <!--//webfonts-->
        <!--animate-->
        <link href="css/animate.css" rel="stylesheet" type="text/css" media="all">
        <script src="js/wow.min.js"></script>
        <script>
            new WOW().init();
        </script>

        <!--//end-animate-->
        <!-- Metis Menu -->
        <script src="js/metisMenu.min.js"></script>
        <script src="js/custom.js"></script>
        <link href="css/custom.css" rel="stylesheet">
        <!--//Metis Menu -->
        <style>
            .imageupload {
                margin: 20px 0;
            }
        </style>
    </head>
    <body class="cbp-spmenu-push">
        <div class="main-content">
            <!--left-fixed -navigation-->
            <div class=" sidebar" role="navigation">
                <div class="navbar-collapse">
                    <nav class="cbp-spmenu cbp-spmenu-vertical cbp-spmenu-left" id="cbp-spmenu-s1">
                        <ul class="nav" id="side-menu">
                            <li>
                                <a href="home.php"><i class="fa fa-home nav_icon"></i>Home</a>
                            </li>
                            <?php if(in_array("Principal", $_SESSION["user_roles"])): ?>
                              <li>
                            <a href="#"><i class="fa fa-user nav_icon"></i>Registration
                            <span class="nav-badge">1</span> <span class="fa arrow"><span class="fa arrow"></span></a>
                            <ul class="nav nav-second-level collapse">
                            <li>
                            <a href="add_user.php">Add User</a>
                            </li>
                            <li>
                            <a href="add_user.php">Add Teacher</a>
                            </li>
                            <li>
                            <a href="add_user.php">Add Student</a>
                            </li>
                            </ul>
                            <!-- /nav-second-level -->
                            </li>
                            <li class="">
                            <a href="#"><i class="fa fa-book nav_icon"></i>Manage User
                            <span class="nav-badge">2</span> <span class="fa arrow"><span class="fa arrow"></span></a>
                            <ul class="nav nav-second-level collapse">
                            <li>
                            <a href="assign_role.php">Set Permisions</a>
                            </li>
                            <li>
                            <a href="view_user.php">View User</a>
                            </li>
                            </ul>
                            <!-- /nav-second-level -->
                            </li>
                            <li>
                            <a href="#"><i class="fa fa-book nav_icon"></i>Register Books
                            <span class="nav-badge">5</span> <span class="fa arrow"><span class="fa arrow"></span></a>
                            <ul class="nav nav-second-level collapse">
                            <li>
                            <a href="add_location.php">Add Location</a>
                            </li>
                            <li>
                            <a href="add_item.php">Add items</a>
                            </li>
                            <li>
                            <a href="add_book.php">Add Books</a>
                            </li>
                            <li>
                            <a href="add_info.php">Add book info</a>
                            </li>
                            <li>
                            <a href="book_author.php">Add Author</a>
                            </li>

                            </ul>
                            <!-- //nav-second-level -->
                            </li>
                            <li class="">
                            <a href="#"><i class="fa fa-eye nav_icon"></i>Manage Books
                            <span class="nav-badge">6</span> <span class="fa arrow"><span class="fa arrow"></span></a>
                            <ul class="nav nav-second-level collapse">
                            <li>
                            <a href="view_book.php">View All Books</a>
                            </li>
                            <li>
                            <a href="view_borrowed.php">View Borrowed Books</a>
                            </li>
                            <li>
                            <a href="situation.php">View Situation</a>
                            </li>
                            <li>
                            <a href="view_item.php">View Items</a>
                            </li>
                            <li>
                            <a href="return_book.php">Return Book</a>
                            </li>
                            <li>
                            <a href="borrow_book.php">Borrow Book</a>
                            </li>
                            </ul>
                            <!-- /nav-second-level -->
                            </li>
                            <li class="">
                            <a href="#"><i class="fa fa-book nav_icon"></i>Register CD
                            <span class="nav-badge">2</span> <span class="fa arrow"><span class="fa arrow"></span></a>
                            <ul class="nav nav-second-level collapse">
                            <li>
                            <a href="add_cd.php">Add CD</a>
                            </li>
                            <li>
                            <a href="add_cd_info.php">add CD info </a>
                            </li>
                            </ul>
                            <!-- /nav-second-level -->
                            </li>
                            <li class="">
                            <a href="#"><i class="fa fa-book nav_icon"></i>Manage CD
                            <span class="nav-badge">2</span> <span class="fa arrow"><span class="fa arrow"></span></a>
                            <ul class="nav nav-second-level collapse">
                            <li>
                            <a href="view_cd.php">View CD</a>
                            </li>
                            <li>
                            <a href="view_location.php" class="chart-nav">view Book location</a>
                            </li>
                            </ul>
                            <!-- /nav-second-level -->
                            </li>
                            <li class="">
                            <a href="#"><i class="fa fa-book nav_icon"></i>View Department
                            <span class="nav-badge">2</span> <span class="fa arrow"><span class="fa arrow"></span></a>
                            <ul class="nav nav-second-level collapse">
                            <li>
                            <a href="department.php" class="chart-nav"><i class="fa fa-bar-chart nav_icon"></i>Views Departmental books</a>
                            </li>
                            <li>
                            <a href="department_cd.php" class="chart-nav"><i class="fa fa-bar-chart nav_icon"></i>Views Departmental CD</a>
                            </li>
                            </ul>
                            <!-- /nav-second-level -->
                            </li>
<?php endif; ?>
<?php if(in_array("", $_SESSION["user_roles"])): ?>

<?php endif; ?>

    <!-- 						<li>
                                <a href="department.php" class="chart-nav"><i class="fa fa-bar-chart nav_icon"></i>Views Departmental books</a>
                            </li>
                            <li>
                                <a href="department_cd.php" class="chart-nav"><i class="fa fa-bar-chart nav_icon"></i>Views Departmental CD</a>
                            </li>

                            <li>
                                <a href="department_cd.php" class="chart-nav"><i class="fa fa-bar-chart nav_icon"></i>view Book location</a>
                            </li> -->

                        </ul>
                        <div class="clearfix"> </div>
                        <!-- //sidebar-collapse -->
                    </nav>
                </div>
            </div>
