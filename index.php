
	<!DOCTYPE html>
	<html>
		<head>
			<title>ANTARCHAKSHU | The Eye Within</title>
			<meta name="viewport" content="width=device-width, initial-scale=1.0">
			<link rel="stylesheet" type="text/css" href="style.css">
			<link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css">
		</head>

		<body>
				<div id="logo">
					<h1> Antarchakshu | </h1>
					<p style="color: grey;"> <strong>Event Registration</strong></p>
				</div>
				<!-- multistep form -->
				<form id="msform" action="registered.php" method="post">
				  <!-- progressbar -->
				  <ul id="progressbar">
				    <li class="active progressbar-text">Hello</li>
				    <li class="progressbar-text">Volunteer</li>
				    <li class="progressbar-text">Thanks</li>
				  </ul>
				  <!-- fieldsets -->
				   <fieldset>
				    <h2 class="fs-title">DO YOU CARE? </h2>
				    <h3 class="fs-subtitle">do you believe blah blah blah...</h3>
			
				    <input id="contact-button" type="button" name="next" class="next action-button" value="Continue" enabled/>
				  </fieldset>


				  <fieldset>
				  	 <h2 class="fs-title">VOLUNTEER</h2>
				    <h3 class="fs-subtitle">Little things done right</h3>
				    
				    <input class="contact-box" id="member-name" type="text" name="name" placeholder="Your Name" />
				   
				    <input class="contact-box" id="member-roll" type="text" name="roll" placeholder="Your Roll No" />
				   
				    <input class="contact-box" id="member-contact" type="tel" name="contact" placeholder="Your Contact Number" />

				    <input type="button" name="previous" class="previous action-button" value="Previous" />
				    <input type="button" name="next" class="next action-button" value="Next" />
				  </fieldset>


				  <fieldset>
				    <h2 class="fs-title">Thank You</h2>
				    <h3 class="fs-subtitle">Just one more step. Register!</h3>
				 
				
				    
				    <input type="button" name="previous" class="previous action-button" value="Previous" />
				    <input type="submit" name="submit" class="submit action-button" value="Register" />
				  </fieldset>
				</form>


				<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
				<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.3/jquery.easing.min.js"></script>
				<script type="text/javascript" src="script.js"></script>
		</body>
	</html>