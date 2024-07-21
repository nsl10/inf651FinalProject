//connect to ids in header
var Bidding = document.getElementById("Bidding");
var Shopping = document.getElementById("Shopping");
var About = document.getElementById("About");
var ContactUs = document.getElementById("ContactUs");
// connect to paragraphs
var BiddingParagraph = document.getElementById("BiddingParagraph");
var ShoppingParagraph = document.getElementById("ShoppingParagraph");
var AboutParagraph = document.getElementById("AboutParagraph");
var ContactUsParagraph = document.getElementById("ContactUsParagraph");
Bidding.addEventListener("click", pClick);
Shopping.addEventListener("click", pClick);
About.addEventListener("click", pClick);
ContactUs.addEventListener("click", pClick);

// show or hide section based off of which header was clicked
function pClick() {
	var paraId = this.attributes["data-para"].value;
	var para = document.getElementById(paraId);

//header clicked becomes "" while all others become "hide"
	if (para.className === "hide") {

		BiddingParagraph.className = "hide"
		ShoppingParagraph.className = "hide"
		AboutParagraph.className = "hide"
		ContactUsParagraph.className = "hide"

		para.className = "";
		BiddingParagraphLine.className = BiddingParagraph.className
		ShoppingParagraphLine.className = ShoppingParagraph.className
		AboutParagraphLine.className = AboutParagraph.className
		ContactUsParagraphLine.className = ContactUsParagraph.className
	}
	else {
	}
	};