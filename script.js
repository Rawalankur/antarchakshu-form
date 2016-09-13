
	
//jQuery time
var current_fs, next_fs, previous_fs; //fieldsets
var left, opacity, scale; //fieldset properties which we will animate
var animating; //flag to prevent quick multi-click glitches


var memberName = "";
var memberEmail = "";
var memberContact = "";
var memberAmount = "";
var memberCategory = "";
var memberDetails = "";


$("#students-container").hide();
$("#members-container").hide();
$("#delegates-details").hide();
$("#members-details").hide();
$("#students-details").hide();
$("#summary-content").hide();



$(".next").click(function(){
	if(animating) return false;
	animating = true;
	
	current_fs = $(this).parent();
	next_fs = $(this).parent().next();
	
	//activate next step on progressbar using the index of next_fs
	$("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");
	
	//show the next fieldset
	next_fs.show(); 
	//hide the current fieldset with style
	current_fs.animate({opacity: 0}, {
		step: function(now, mx) {
			//as the opacity of current_fs reduces to 0 - stored in "now"
			//1. scale current_fs down to 80%
			scale = 1 - (1 - now) * 0.2;
			//2. bring next_fs from the right(50%)
			left = (now * 50)+"%";
			//3. increase opacity of next_fs to 1 as it moves in
			opacity = 1 - now;
			current_fs.css({
        'transform': 'scale('+scale+')',
        'position': 'absolute'
      });
			next_fs.css({'left': left, 'opacity': opacity});
		}, 
		duration: 800, 
		complete: function(){
			current_fs.hide();
			animating = false;
		}, 
		//this comes from the custom easing plugin
		easing: 'easeInOutBack'
	});
});

$(".previous").click(function(){
	if(animating) return false;
	animating = true;
	
	current_fs = $(this).parent();
	previous_fs = $(this).parent().prev();
	
	//de-activate current step on progressbar
	$("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");
	
	//show the previous fieldset
	previous_fs.show(); 
	//hide the current fieldset with style
	current_fs.animate({opacity: 0}, {
		step: function(now, mx) {
			//as the opacity of current_fs reduces to 0 - stored in "now"
			//1. scale previous_fs from 80% to 100%
			scale = 0.8 + (1 - now) * 0.2;
			//2. take current_fs to the right(50%) - from 0%
			left = ((1-now) * 50)+"%";
			//3. increase opacity of previous_fs to 1 as it moves in
			opacity = 1 - now;
			current_fs.css({'left': left});
			previous_fs.css({'transform': 'scale('+scale+')', 'opacity': opacity});
		}, 
		duration: 800, 
		complete: function(){
			current_fs.hide();
			animating = false;
		}, 
		//this comes from the custom easing plugin
		easing: 'easeInOutBack'
	});
});





$(".member-category-links").on("click", function(e) {
	e.preventDefault();

	$(".member-category-links").removeClass("member-category-link-active");
	$(this).addClass("member-category-link-active");
});


var categorySelectFlag = 1;

$("#delegates-category-select").on("click", function(e) {
	e.preventDefault();

	if (categorySelectFlag) {
		$("#delegates-category-box").css({"border":"1px solid #2ecc71"});
		$("#delegates-category-box").css({"background":"#2ecc71"});
		$("#delegates-category-box").css({"color":"white"});
		$("#delegates-category-select").css({"color":"white"});
		$("#delegates-category-select").css({"margin-left": 20 + "px"});
		$("#delegates-category-select").text("X");
		$("#member-category-members").css({"pointer-events":"none"});
		$("#member-category-students").css({"pointer-events":"none"});
		$("#member-category-members").css({"color":"#ccc"});
		$("#member-category-students").css({"color":"#ccc"});
		memberAmount = $("#delegate-price").text();
		memberCategory = "DELEGATE";
		console.log("Amount: " + memberAmount + ", Category:" + memberCategory);
		$("#delegates-details").show();
		$("#default-details").hide();
		categorySelectFlag = 0;
	} else {
		$("#delegates-category-box").css({"border":"1px solid #ccc"});
		$("#delegates-category-box").css({"background":"#F2F2F2"});
		$("#delegates-category-box").css({"color":"black"});
		$("#delegates-category-select").css({"color":"#2ecc71"});
		$("#delegates-category-select").css({"margin-left": 0 + "px"});
		$("#delegates-category-select").text("BOOK");
		$("#member-category-members").css({"pointer-events":"auto"});
		$("#member-category-students").css({"pointer-events":"auto"});
		$("#member-category-members").css({"color":"#686868"});
		$("#member-category-students").css({"color":"#686868"});
		$("#delegates-details").hide();
		$("#default-details").show();
		categorySelectFlag = 1;
		memberAmount = "";
		memberCategory = "";
		console.log("Amount: " + memberAmount + ", Category:" + memberCategory);
		$("#delegates-details-box").val("");
	}
	
});

$("#members-category-select").on("click", function(e) {
	e.preventDefault();

	if (categorySelectFlag) {
		$("#members-category-box").css({"border":"1px solid #2ecc71"});
		$("#members-category-box").css({"background":"#2ecc71"});
		$("#members-category-box").css({"color":"white"});
		$("#members-category-select").css({"color":"white"});
		$("#members-category-select").css({"margin-left": 20 + "px"});
		$("#members-category-select").text("X");
		$("#member-category-delegates").css({"pointer-events":"none"});
		$("#member-category-students").css({"pointer-events":"none"});
		$("#member-category-delegates").css({"color":"#ccc"});
		$("#member-category-students").css({"color":"#ccc"});
		$("#members-details").show();
		$("#default-details").hide();
		memberAmount = $("#member-price").text();
		memberCategory = "HCPAI/ACM/CSI Member";
		categorySelectFlag = 0;
		console.log("Amount: " + memberAmount + ", Category:" + memberCategory);
	} else {
		$("#members-category-box").css({"border":"1px solid #ccc"});
		$("#members-category-box").css({"background":"#F2F2F2"});
		$("#members-category-box").css({"color":"black"});
		$("#members-category-select").css({"color":"#2ecc71"});
		$("#members-category-select").css({"margin-left": 0 + "px"});
		$("#members-category-select").text("BOOK");
		$("#member-category-delegates").css({"pointer-events":"auto"});
		$("#member-category-students").css({"pointer-events":"auto"});
		$("#member-category-delegates").css({"color":"#686868"});
		$("#member-category-students").css({"color":"#686868"});
		$("#members-details").hide();
		$("#default-details").show();
		categorySelectFlag = 1;
		memberAmount = "";
		memberCategory = "";
		console.log("Amount: " + memberAmount + ", Category:" + memberCategory);
		$("#members-details-box").val("");
	}
	
});


$("#students-category-select").on("click", function(e) {
	e.preventDefault();

		

	if (categorySelectFlag) {
		$("#students-category-box").css({"border":"1px solid #2ecc71"});
		$("#students-category-box").css({"background":"#2ecc71"});
		$("#students-category-box").css({"color":"white"});
		$("#students-category-select").css({"color":"white"});
		$("#students-category-select").css({"margin-left": 20 + "px"});
		$("#students-category-select").text("X");

		$("#member-category-delegates").css({"pointer-events":"none"});
		$("#member-category-members").css({"pointer-events":"none"});
		$("#member-category-delegates").css({"color":"#ccc"});
		$("#member-category-members").css({"color":"#ccc"});
		$("#students-details").show();
		$("#default-details").hide();
		memberAmount = $("#student-price").text();
		memberCategory = "STUDENT MEMBER";
		categorySelectFlag = 0;
		console.log("Amount: " + memberAmount + ", Category:" + memberCategory);
	} else {
		$("#students-category-box").css({"border":"1px solid #ccc"});
		$("#students-category-box").css({"background":"#F2F2F2"});
		$("#students-category-box").css({"color":"black"});
		$("#students-category-select").css({"color":"#2ecc71"});
		$("#students-category-select").css({"margin-left": 0 + "px"});
		$("#students-category-select").text("BOOK");
		$("#member-category-delegates").css({"pointer-events":"auto"});
		$("#member-category-members").css({"pointer-events":"auto"});
		$("#member-category-delegates").css({"color":"#686868"});
		$("#member-category-members").css({"color":"#686868"});
		$("#students-details").hide();
		$("#default-details").show();
		categorySelectFlag = 1;
		memberAmount = "";
		memberCategory = "";
		console.log("Amount: " + memberAmount + ", Category:" + memberCategory);
		$("#students-details-box").val("");
	}


});



$("#member-category-delegates").on("click", function(e) {
	e.preventDefault();

	$(".member-details-title").text("For Industry Delegates & Other Members");
	$("#delegates-container").fadeIn(150);
	$("#members-container").hide();
	$("#students-container").hide();
});


$("#member-category-members").on("click", function(e) {
	e.preventDefault();

	$(".member-details-title").text("For HCPAI/ACM/CSI Members");
	$("#delegates-container").hide();
	$("#members-container").fadeIn(150);
	$("#students-container").hide();
});


$("#member-category-students").on("click", function(e) {
	e.preventDefault();

	$(".member-details-title").text("For Student Members");
	$("#delegates-container").hide();
	$("#members-container").hide();
	$("#students-container").fadeIn(150);
});








$(".member-category-select").on("hover", function(e) {
	$(".member-category-select").css({"color":"orange"});
});


$("#contact-button").on("click", function(e) {
	e.preventDefault();

	memberName = $("#member-name").val();
	memberEmail = $("#member-email").val();
	memberContact = $("#member-contact").val();

	console.log("Name: " + memberName + " , " + "Email: " + memberEmail + " , " + "Contact: " + memberContact);
});


$("#details-button").on("click", function(e) {
	e.preventDefault();

	$("#summary-default").hide();
	$("#summary-content").show();

	if (memberCategory === "") {
		memberDetails = "Unavailable";
	} else if (memberCategory === "HCPAI/ACM/CSI Member") {
		memberDetails = $("#members-details-box").val();
		$("#summary-entity").text("Membership ID");
	} else if (memberCategory === "STUDENT MEMBER") {
		memberDetails = $("#students-details-box").val();
		$("#summary-entity").text("Institute");
	} else {
		memberDetails = $("#delegates-details-box").val();
		$("#summary-entity").text("Organization");
	}

	console.log(memberDetails);	

	$("#summary-name").text(memberName);
	$("#summary-contact").text(memberContact);
	$("#summary-email").text(memberEmail);
	$("#summary-category").text(memberCategory);
	$("#summary-details").text(memberDetails);
	$("#summary-price").text(memberAmount);
});





/* ==================== New Features Baked In ======================= */




















