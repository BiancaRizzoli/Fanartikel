
<?php
$servername = "localhost";
$username = "root";
$password = "AwesomePassword";
$dbname = "fanartikel";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

$sql = "SELECT Bezeichnung, Preis, BildShownFirst, BildShownSecond FROM artikel";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
    }
} else {
    echo "Nothing in the Database";
}
$conn->close();
?>


	<div id="primary" class="content-area">
		<main id="main" class="site-main" role="main">

				<head>
<title>Fanartikel</title>
<!-- for-mobile-apps -->
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta name="keywords" content="Classic Style Responsive web template, Bootstrap Web Templates, Flat Web Templates, Android Compatible web template, 
Smartphone Compatible web template, free webdesigns for Nokia, Samsung, LG, SonyEricsson, Motorola web design" />
<script type="application/x-javascript"> addEventListener("load", function() { setTimeout(hideURLbar, 0); }, false);
		function hideURLbar(){ window.scrollTo(0,1); } </script>
<!-- //for-mobile-apps -->
<link href="css/bootstrap.css" rel="stylesheet" type="text/css" media="all" />
<link href="css/style.css" rel="stylesheet" type="text/css" media="all" />
<!-- js -->
<script src="js/jquery.min.js"></script>
<!-- //js -->
<!-- cart -->
<script src="js/simpleCart.min.js"></script>
<!-- cart -->
<!-- for bootstrap working -->
<script type="text/javascript" src="js/bootstrap-3.1.1.min.js"></script>
<!-- //for bootstrap working -->
<!-- animation-effect -->
<link href="css/animate.min.css" rel="stylesheet"> 
<script src="js/wow.min.js"></script>
<script>
 new WOW().init();
</script>
<!-- //animation-effect -->
<link href='//fonts.googleapis.com/css?family=Cabin:400,500,600,700' rel='stylesheet' type='text/css'>
<link href='//fonts.googleapis.com/css?family=Lato:400,100,300,700,900' rel='stylesheet' type='text/css'>
</head>
	
<body>
<!-- header -->
	<div class="header">
			<div class="header-grid">
					<div class="container">
				<div class="header-left animated wow fadeInLeft" data-wow-delay=".5s">
					<ul>
						<li><i class="glyphicon glyphicon-envelope" ></i><a href="mailto:info@example.com">@example.com</a></li>
						<li><i class="glyphicon glyphicon-earphone" ></i>+1234 567 892</li>
						
					</ul>
				</div>
				<div class="header-right animated wow fadeInRight" data-wow-delay=".5s">
				<div class="header-right2">
					<div class="cart box_1">
						<a href="checkout.html">
							<h3> <div class="total">
								<span class="simpleCart_total"></span> (<span id="simpleCart_quantity" class="simpleCart_quantity"></span> items)</div>
								<img src="images/cart.png" alt="" />
							</h3>
						</a>
						<p><a href="javascript:;" class="simpleCart_empty">Delete Sum</a></p>
						<div class="clearfix"> </div>
					</div>	
				</div>
				<div class="clearfix"> </div>
				</div>
				<div class="clearfix"> </div>
			</div>
			</div>
			<div class="container">
			<div class="logo-nav">
				
					<nav class="navbar navbar-default">
					<!-- Brand and toggle get grouped for better mobile display -->
					<div class="navbar-header nav_2">
						<button type="button" class="navbar-toggle collapsed navbar-toggle1" data-toggle="collapse" data-target="#bs-megadropdown-tabs">
							<span class="sr-only">Toggle navigation</span>
							<span class="icon-bar"></span>
							<span class="icon-bar"></span>
							<span class="icon-bar"></span>
						</button>
						 <div class="navbar-brand logo-nav-left wow fadeInLeft animated" data-wow-delay=".5s">
							<h1 class="animated wow pulse" data-wow-delay=".5s"><a href="index.html">Fandom<span>World</span></a></h1>
						</div>

					</div> 
					<div class="collapse navbar-collapse" id="bs-megadropdown-tabs">
						<ul class="nav navbar-nav">
							<li ><a href="index.php" class="act">Alles</a></li>
							<li><a href="mine.php">In Besitz</a></li>
							<li><a href="wishlist.php">Wunschliste</a></li>
							<!-- Mega Menu -->
							<li class="dropdown active">
								<a href="#" class="dropdown-toggle" data-toggle="dropdown">Fandoms<b class="caret"></b></a>
								<ul class="dropdown-menu">
												<li><a href="products.html"><img  src="images/Doctor_Who_logo_2014.png" class=mydropdownimages></a></li>
												<li><a href="products.html"><img  src="images/Harry_Potter_logo_klein.png" class=mydropdownimages></a></li>
												<li><a href="products.html">Supernatural</a></li>
												<li><a href="products.html">Der Herr der Ringe</a></li>
								</ul>
							</li>
						</ul>
					</div>
					</nav>
				</div>
				
		</div>
	</div>
<!-- //header -->
<!--banner-->
<div class="banner-top">
	<div class="container">
		<h2 class="animated wow fadeInLeft" data-wow-delay=".5s">Fanartikel</h2>
		<div class="clearfix"> </div>
	</div>
</div>
	<!--content-->
		<div class="product">
			<div class="container">
						<div class="col-md-3 product-bottom">
			<!--categories-->
			<div class="categories animated wow fadeInUp animated" data-wow-delay=".5s" >
					<h3>Categories</h3>
					<ul class="cate">
						<li><i class="glyphicon glyphicon-menu-right" ></i><a href="products.html">Bekleidung</a> <span>(15)</span></li>
						<li><i class="glyphicon glyphicon-menu-right" ></i><a href="products.html">Schmuck</a> <span>(13)</span></li>
						<li><i class="glyphicon glyphicon-menu-right" ></i><a href="products.html">Küche & Wohnen</a> <span>(21)</span></li>
						<li><i class="glyphicon glyphicon-menu-right" ></i><a href="products.html">Taschen</a> <span>(9)</span></li>
						<li><i class="glyphicon glyphicon-menu-right" ></i><a href="products.html">Schreibwahren</a> <span>(14)</span></li>
						<li><i class="glyphicon glyphicon-menu-right" ></i><a href="products.html">Filmrepliken</a> <span>(23)</span></li>
						<li><i class="glyphicon glyphicon-menu-right" ></i><a href="products.html">Bücher</a> <span>(3)</span></li>

					</ul>
				</div>
		<!--//menu-->
			<!--colors-->
			<div class="colors animated wow fadeInLeft animated" data-wow-delay=".5s" >
					<h3>Colors</h3>

                                        <div class="color-top">
                                            <ul>
												<li><a href="#"><i></i></a></li>
												<li><a href="#"><i class="color1"></i></a></li>
												<li><a href="#"><i class="color2"></i></a></li>
												<li><a href="#"><i class="color3"></i></a></li>
												<li><a href="#"><i class="color4"></i></a></li>
												<li><a href="#"><i class="color5"></i></a></li>
												<li><a href="#"><i class="color6"></i></a></li>
												<li><a href="#"><i class="color7"></i></a></li>
											</ul>
                                        </div>
                                    </div>
	 </div>
	 <div class="col-md-9 animated wow fadeInRight" data-wow-delay=".5s">
						
						


						<?php
			$servername = "localhost";
			$username = "root";
			$password = "AwesomePassword";
			$dbname = "fanartikel";

			// Create connection
			$conn = new mysqli($servername, $username, $password, $dbname);
			// Check connection
			if ($conn->connect_error) {
				die("Connection failed: " . $conn->connect_error);
			} 

			$sql = "SELECT Bezeichnung, Preis, BildShownFirst, BildShownSecond FROM artikel";
			$result = $conn->query($sql);

			if ($result->num_rows > 0) {
				// output data of each row
				while($row = $result->fetch_assoc()) {
					echo '
					<div class="col-sm-4 item-grid simpleCart_shelfItem">
						<div class="grid-pro">
							<div  class=" grid-product " >
								<figure>		
									<a href="single.html">';
										if(!empty($row["BildShownSecond"])) {
								   
										echo '<div class="grid-img">
											<img  src="images/'.$row["BildShownSecond"].'" class="img-responsive" alt="">
										</div>';
										}
										echo '
										<div class="grid-img">
											<img  src="images/'.$row["BildShownFirst"].'" class="img-responsive"  alt="">
										</div>			
									</a>		
								</figure>	
							</div>
							<div class="women">
								<div class = bezeichnung><h6><a href="single.html">'.$row["Bezeichnung"].'</a></h6></div>
								<p ><em class="item_price">'.$row["Preis"].'€</em></p>
								<p ><a href="#" data-text="Add To Cart" class="but-hover1 item_add">Add To Cart</a></p>
								<a href="#" class="wishheart"><img src="images/ll.png" alt=""></a>
							</div>
						</div>
					</div>
';
				}
			} else {
				echo "0 results";
			}
			$conn->close();
			?>

					<div class="clearfix"></div>
					</div>
					<div class="clearfix"></div>
	
				<!--//products-->

<!-- footer -->
	<div class="footer">
		<div class="container">
		<div class="footer-top">
		<div class="clearfix"> </div>
		</div>
			<div class="footer-grids">
				<div class="col-md-4 footer-grid animated wow fadeInLeft" data-wow-delay=".5s">
					<h3>About Me</h3>
					<p>I'm awesome<span>Don't tell me otherwise</span></p>
				</div>
				<div class="col-md-4 footer-grid animated wow fadeInLeft" data-wow-delay=".6s">
					<h3>Contact Info</h3>
					<ul>
						<li><i class="glyphicon glyphicon-map-marker" ></i>Musterstraße 13 <span>Kempten</span></li>
						<li class="foot-mid"><i class="glyphicon glyphicon-envelope" ></i><a href="mailto:info@example.com">info@example.com</a></li>
						<li><i class="glyphicon glyphicon-earphone" ></i>+1234 567 567</li>
					</ul>
				</div>
				<div class="clearfix"> </div>
			</div>
		</div>
	</div>
<!-- //footer -->
</body>

		</main><!-- .site-main -->
	</div><!-- .content-area -->


