// function upDate(previewPic){
    
//     var language=previewPic.lang;
//     console.log(language);

//     var bengali=document.getElementsByClassName("bengali");
//     var english=document.getElementsByClassName("english");

//     if(language=="bn"){
//         for (element of bengali) {
//             element.style.display="inline-block";
//         }
//         for (element of english) {
//             element.style.display="none";
//         }
//     }else if(language=="en"){
//         for (element of english) {
//             element.style.display="inline-block";
//         }
//         for (element of bengali) {
//             element.style.display="none";
//         }

//     }
// }


// for changing language

$(".languageEnglish").on("click",function () {
  $(".bengali").css("display", "none");
  $(".english").css("display", "inline-block");
});
$(".languageBengali").on("click",function () {
  $(".english").css("display", "none");
  $(".bengali").css("display", "inline-block");
});

window.onresize = function() {
    if (window.innerWidth >= 768) {
     $(".header-img").css("display", "none"); 
     $(".navigationBar").css("display", "block"); 

 	}
 	else{
 		 $(".header-img").css("display", "block"); 
 	}
 	if (window.innerWidth < 768) {
 		var display=document.getElementsByClassName("nav1");
 		// console.log(display[0].style.display);
 		if(display[0].style.display=="block"){
 			 $(".navigationBar").css("display", "none"); 
 		} 
 	}

    
}


// for changing Navigation

$(".hamburger").on("click",function () {
  $(".nav2").css("display", "none");
  $(".nav1").css("display", "block");
});
$(".custom").on("click",function () {
  $(".nav1").css("display", "none");
  $(".nav2").css("display", "block");
});

// for vertical scrolling

jQuery(function($) {
  var theDiv;
  
  theDiv = $("#theDiv");
  
  $("#btnDown").click(function() {
    theDiv.scrollTop(theDiv.scrollTop() + 160);
  });
  $("#btnUp").click(function() {
    var top = Math.max(theDiv.scrollTop() - 160, 0);
    theDiv.scrollTop(top);
  });
});




// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("nav");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
