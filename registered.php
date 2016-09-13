

	<?php
			$name = $_POST["name"];
			$rollNo = $_POST["roll"];
			$email = $_POST["contact"];

			$servername = "localhost";
			$username = "root";
			$password = "password";
			$dbname = "chakku";

			// Create connection
			$conn = new mysqli($servername, $username, $password, $dbname);
			// Check connection
			if ($conn->connect_error) {
			    die("Connection failed: " . $conn->connect_error);
			} 

			$sql = "INSERT INTO users (name, roll, email)
			VALUES ('$name', '$roll', '$email')";

			if ($conn->query($sql) === TRUE) {
			    
			} else {
			    echo "Error: " . $sql . "<br>" . $conn->error;
			}

			$conn->close();
	?>

	<!DOCTYPE html>
	<html>
		<head>
			<title>ANTARCHAKSHU | The Eye Within</title>
			<meta name="viewport" content="width=device-width, initial-scale=1.0">
			<link rel="stylesheet" type="text/css" href="style.css">
			<link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css">
		</head>

		<body>


				<div id="wrapper">
					<h2>Thank you</h2>
					<p>You have been registered. Please close this tab.</p>
				</div>

				

				<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
				<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.3/jquery.easing.min.js"></script>
				<script type="text/javascript" src="script.js"></script>
		</body>
	</html>