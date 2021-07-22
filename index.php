<!DOCTYPE html>
<html>
<head>
	<link rel="shortcut icon" type="jpg" href="logo.jpg">
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Comaptible" content="IE=edge">
	<title>Gate Smashers</title>
	<meta name="desciption" content="">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="stylesheet" type="text/css" href="style.css">
	<script type="text/javascript" src="script.js"></script>
	<script src="https://code.jquery.com/jquery-3.2.1.js"></script>
	<script>
		$(window).on('scroll', function(){
  			if($(window).scrollTop()){
  			  $('nav').addClass('black');
 			 }else {
 		   $('nav').removeClass('black');
 		 }
		})
	</script>
</head>
<body>
<!-- Navigation Bar -->
	<header id="header">
		<nav>
			<div class="logo"><img src="logo.jpg" alt="logo"></div>
			<div class="logo-name">GATE SMASHER'S</div>
			<ul>
				<li><a class="active" href="">Home</a></li>
				<li><a href="#course">Courses</a></li>
				<li><a href="/gates/test/test.html">Mock Test</a></li>
				<li><a href="#services_section">Services</a></li>
				<li><a href="#contactus_section">Contact</a></li>
			</ul>
			<div class="srch"><input type="text" class="search" placeholder="Search here..."><img src="images/icon/search.png" alt="search" onclick=slide()></div>
			<a class="get-started" href="./login/login.php">Get Started</a>
			<img src="images/icon/menu.png" class="menu" onclick="sideMenu(0)" alt="menu">
		</nav>
		<div class="head-container">
			<div class="quote">
				<p>Take the First Step of GATE
					with Us</p>
					<h5>The most important thing about GATE Preparation is to not let the fear of failure overpower you. So folks, don't be discouraged if you are feeling a little low about your preparation. Just think why you started in the first place. Don't lose your focus, keep practicing and no one will be able to stop you.

					</h5>
				<div class="play">
					<img src="images/icon/play.png" alt="play"><span><a href="https://youtu.be/o2nkav8hyl0" target="_blank">Watch Now</a></span>
				</div>
			</div>
			<div class="svg-image">
				<img src="images/extra/svg1.jpg" alt="svg">
			</div>
		</div>
		
		</div>
	</header>


<!-- Some Popular Subjects -->
	<div class="title" id="course">
		<span>Popular Subjects on Gate Smashers</span>
	</div>
	<br><br>
	<div class="course">
		<center><div class="cbox">
		
		<div class="det"><a href="https://engineering.careers360.com/articles/gate-syllabus#GATE-Syllabus-2022-All-Subjects"><img src="images/courses/book.png">GATE Preparation</a></div>
		<div class="det"><a href="mini_project/sample_papers.html"><img src="images/courses/paper.png">Sample Papers</a></div>
		<div class="det"><a href="test/test.html"><img src="images/courses/d1.png">Daily Quiz</a></div>
		</div></center>
		<div class="cbox">
		<div class="det"><a href="subjects/cse.html"><img src="images/courses/computer.png">Computer Science and Engineering </a></div>
		<div class="det"><a href="subjects/me.html"><img src="images/courses/data.png">Mechanical Engineering</a></div>
		<div class="det"><a href="subjects/electrical.html"><img src="images/courses/algo.png">Electrical Engineering</a></div>
		<div class="det det-last"><a href="syllabus.html"><img src="images/courses/projects.png">Syllabus of GATE examination </a></div>
		</div>
	</div>

	
<!-- ABOUT -->
	<div class="diffSection" id="about_section">
		<center><p style="font-size: 50px; padding: 100px">About</p></center>
		<div class="about-content">
				<div class="side-image">
					<img class="sideImage" src="images/extra/e3.jpg">
				</div>
				<div class="side-text">
					<h2>What you think about us ?</h2>
					<p> GATE SMASHERS is an educational website platform for GATE exam learning and preparation for the students to enhance learning strategy. 
						This website makes students/users/learners to get prepared for gate examination with well structured contents for examination at one place only. 
					
						 Firstly it shows free videos and information about Computer Science and Engineering/Information Technology , Mechanical Engineering and  Electrical Engineering departments gate’s syllabus and subjects 
						 for students to get more familiarise with it. We
						  also provide notes/books for students to read and prepared.
						Website also gives predictions for colleges according to user’s test result analysis and 
						cut-off prediction for exam marks.
						After every week videos, it will have an assignment for week which makes users to be 
						 consistent in their learning process.  
						All this makes users to find exam required content easily and fastly on a GATE SMASHERS website.</p></div>
		</div>
	</div>


<!-- PORTFOLIO -->
	<div class="diffSection" id="portfolio_section">
		<center><p style="font-size: 50px; padding: 100px; padding-bottom: 40px;"></p></center>
		<div class="content">
			
		</div>
	</div>
	<div class="extra">
		<p>We're increasing this data every minute</p>
		<div class="smbox">
		<span><center><div class="data">100</div><div class="det">Enrolled Students</div></center></span>
		<span><center><div class="data">30</div><div class="det">Total Courses</div></center></span>
		<span><center><div class="data">56</div><div class="det">Previous Year Papers</div></center></span>
		<span><center><div class="data">1000</div><div class="det">Question Bank</div></center></span>
		</div>
	</div>
<!-- TEAM -->
<div class="diffSection" id="team_section">
	<center><p style="font-size: 50px; padding-top: 100px; padding-bottom: 60px;">We're the Creators</p></center>
	<div class="totalcard">
		<div class="card">
			<center><img src="gayatri.jpeg"></center>
			<center><div class="card-title">Gayatri Gajbhiye</div>
			<div id="detail">
				<p>“ You can teach a student a lesson for a day; but if you can teach him to learn by creating curiosity, he will continue the learning process as long as he lives “</p>
				<div class="duty"></div>
				<a href="https://www.linkedin.com/in/gayatri-gajbhiye-5072871b7" target="_blank"><button class="btn-gayatri">Follow +</button></a>
			</div>
			</center>
		</div>
		<div class="card">
			<center><img src="namrata.jpeg"></center>
			<center><div class="card-title">Namrata Patil</div>
			<div id="detail">
				<p>“ Real education should consist of drawing the goodness and the best out of our own students. What better books can there be than the book of humanity “</p>
				<div class="duty"></div>
				<a href="https://www.linkedin.com/in/namratapatil2022" target="_blank"><button class="btn-namrata">Follow +</button></a>
			</div>
			</center>
		</div>

		<div class="card">
				<center><img src="ruchika.jpeg"></center>
				<center><div class="card-title">Ruchika Jadhav</div>
				<div id="detail">
					<p>"We need to bring learning to people instead of people to learning. We don't care what Students know, we care what they do. It's all about performance" </p>
					<div class="duty"></div>
					<a href="www.linkedin.com/in/ruchika-jadhav-6362a0216" target="_blank"><button class="btn-ruchika">Follow +</button></a>
				</div>
			</center>
		
		</div>
	</div>
</div>		




<!-- SERVICES -->
	<div class="service-swipe">
		<div class="diffSection" id="services_section">
		<center><p style="font-size: 50px; padding: 100px; padding-bottom: 40px; color: #fff;">Services</p></center>
		</div>
		<a href="https://engineering.careers360.com/articles/gate-syllabus#GATE-Syllabus-2022-All-Subjects"><div class="s-card"><img src="images/icon/computer-courses.png"><p>Free Online GATE Courses</p></div></a>
		<a href="/gates/index.php"><div class="s-card"><img src="images/icon/brainbooster.png"><p>Building Concepts for GATE Exams</p></div></a>
		<a href="#course"><div class="s-card"><img src="images/icon/online-tutorials.png"><p>Online Video Lectures</p></div></a>
		<a href="#course"><div class="s-card"><img src="images/icon/papers.jpg"><p>Sample Papers of Previous Years Exams</p></div></a>
		
		<a href="#contactus_section"><div class="s-card"><img src="images/icon/discussion.png"><p>Discussion with Our Tutors & Mentors</p></div></a>
		<a href="/gates/test/test.html"><div class="s-card"><img src="images/icon/q1.png"><p>Brain Teasing Questions to Improve IQ</p></div></a>
		<a href="#contactus_section"><div class="s-card"><img src="images/icon/help.png"><p>24x7 Online Support</p></div></a>
	</div>

<!-- Reviews by Students -->
<div id="makeitfull">
	<a href="#review_section"><img src="images/icon/makeitfull.png"></a>
</div>
<div class="review">
	<div class="diffSection" id="review_section">
		<center><p style="font-size: 40px; padding: 100px; padding-bottom: 40px; color: #2E3D49;">What the Students Say About Us?</p></center>
	</div>
	<div class="rev-container">
		<div class="rev-card">
			<div class="identity">
				<img src="g1.jpg"><p>Garima Shende</p>
				<h6>Computer Science and Engineering</h6>
				<div class="rating"><img src="images/icon/star.png"><img src="images/icon/star.png"><img src="images/icon/star.png"><img src="images/icon/star.png"><img src="images/icon/star.png"></div>
			</div>
			<div class="rev-cont">
				<p id="title">Review:</p>
				<p id="content">
					The courses done wonders for me, I literally started from 0 and in 90 days I became competent enough to crack any gate exams.Thank you so much for your efforst.I am looking forward for more upgrades and new courses. You guys have done a great work</p>
			</div>
		</div>
		<div class="rev-card">
			<div class="identity">
				<img src="b1.jpg"><p>Sameer Khan</p>
				<h6>Electrical Engineering</h6>
				<div class="rating"><img src="images/icon/star.png"><img src="images/icon/star.png"><img src="images/icon/star.png"><img src="images/icon/star.png"><img src="images/icon/star.png"></div>
			</div>
			<div class="rev-cont">
				<p id="title">Review:</p>
				<p id="content">
					Very satisfied. All the content are just amazing. The way of teaching is just mind blowing.thanl you so much.Everything here is on the fingertips also the design and interface makes it addictive and a great place to learn.	</p>
			</div>
		</div>
		<div class="rev-card">
			<div class="identity">
				<img src="b2.jpg"><p>Dipanshu Kale</p>
				<h6>Mechanical Engineering</h6>
				<div class="rating"><img src="images/icon/star.png"><img src="images/icon/star.png"><img src="images/icon/star.png"><img src="images/icon/star.png"><img src="images/icon/star.png"></div>
			</div>
			<div class="rev-cont">
				<p id="title">Review:</p>
				<p id="content">
					Amazing Platform for preparation of Gate Exam . it provides quiz videos and all that needed. Gate Smashers is a massive library of knowledge and experience for people who want to appear for Gate Exam.Thank you so much</p>
			</div>
		</div>
		<div class="rev-card">
			<div class="identity">
				<img src="g2.jpg"><p>Sonali Joshi</p>
				<h6>Information Technology</h6>
				<div class="rating"><img src="images/icon/star.png"><img src="images/icon/star.png"><img src="images/icon/star.png"><img src="images/icon/star.png"><img src="images/icon/star.png"></div>
			</div>
			<div class="rev-cont">
				<p id="title">Review:</p>
				<p id="content">
					I just want to say thank you , The main thing that helped me was the quizesi got after this course . The website is real smooth. It helped me a lot during my gate preparation. Thank you for your efforts.</p>
			</div>
		</div>
	</div>
</div>

<!-- CONTACT US -->
	<div class="diffSection" id="contactus_section">
		<center><p style="font-size: 50px; padding: 100px">Contact Us</p></center>
		<div class="csec"></div>
		<div class="back-contact">
			<div class="cc">
			<form action="mailto:smashersgate@gmail.com" method="post" enctype="text/plain">
				<label>First Name <span class="imp">*</span></label><label style="margin-left: 185px">Last Name <span class="imp">*</span></label><br>
				<center>
				<input type="text" name="" style="margin-right: 10px; width: 175px" required="required"><input type="text" name="lname" style="width: 175px" required="required"><br>
				</center>
				<label>Email <span class="imp">*</span></label><br>
				<input type="email" name="mail" style="width: 100%" required="required"><br>
				<label>Message <span class="imp">*</span></label><br>
				<input type="text" name="message" style="width: 100%" required="required"><br>
				<label>Additional Details</label><br>
				<textarea name="addtional"></textarea><br>
				<button type="submit" id="csubmit">Send Message</button>
			</form>
			</div>
		</div>
	</div>


<!-- FEEDBACK -->
	<div class="title2" id="feedBACK">
		<span>Give Feedback</span>
		<div class="shortdesc2">
			<p>Please share your valuable feedback to us</p>
		</div>
	</div>

	<div class="feedbox">
		<div class="feed">
			<form action="mailto:smashersgate@gmail.com" method="post" enctype="text/plain">
				<label>Your Name</label><br>
				<input type="text" name="" class="fname" required="required"><br>
				<label>Email</label><br>
				<input type="email" name="mail" required="required"><br>
				<label>Additional Details</label><br>
				<textarea name="addtional"></textarea><br>
				<button type="submit" id="csubmit">Send Message</button>
			</form>
		</div>
	</div>

<!-- Sliding Information -->
	<marquee style="background: linear-gradient(to right, #FA4B37, #DF2771); margin-top: 50px;" direction="left" onmouseover="this.stop()" onmouseout="this.start()" scrollamount="20"><div class="marqu">“Education is the passport to the future, for tomorrow belongs to those who prepare for it today.”    &nbsp; "attitude, not your aptitude, will determine your altitude.” &nbsp;      “If you think education is expensive, try ignorance.” &nbsp; “The only person who is educated is the one who has learned how to learn …and change.”</div></marquee>
<!-- FOOTER -->
	<footer>
		<div class="footer-container">
			<div class="left-col">

			<div class="logonf">GATE SMASHERS</div>
				<div class="logo"></div>
				<div class="social-media">
					<a href="#"><img src="images/icon\fb.png"></a>
					<a href="#"><img src="images/icon\insta.png"></a>
					<a href="#"><img src="images/icon\tt.png"></a>
					<a href="#"><img src="images/icon\ytube.png"></a>
					<a href="#"><img src="images/icon\linkedin.png"></a>
				</div><br><br>
				<p class="rights-text">Copyright © 2021 Created By Gayatri Gajbhiye, Namrata Patil and Ruchika Jadhav All Rights Reserved.</p>
				<br><p><img src="images/icon/location.png"> Priyadarshini Institute of Engineering and Technology<br>Nagpur, Maharashtra-440019</p><br>
				<p><img src="images/icon/phone.png"> +91-9579642546<br><img src="images/icon/mail.png">&nbsp; smashersgate@gmail.com</p>
			</div>
			<div class="right-col">
				<h1 style="color: #fff">Our Newsletter</h1>
				<div class="border"></div><br>
				<p>Enter Your Email to get our News and updates.</p>
				<form class="newsletter-form">
					<input class="txtb" type="email" placeholder="Enter Your Email">
					<input class="btn" type="submit" value="Submit">
				</form>
			</div>
		</div>
	</footer>

</body>
</html>