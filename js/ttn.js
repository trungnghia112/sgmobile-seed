//smartRollover.js
function smartRollover() {
	if(document.getElementsByTagName) {
		var images = document.getElementsByTagName("img");

		for(var i=0; i < images.length; i++) {
			if(images[i].src.match("_off."))
			{
				images[i].onmouseover = function() {
					this.setAttribute("src", this.getAttribute("src").replace("_off.", "_on."));
				}
				images[i].onmouseout = function() {
					this.setAttribute("src", this.getAttribute("src").replace("_on.", "_off."));
				}
			}
		}
	}
}

if(window.addEventListener) {
	window.addEventListener("load", smartRollover, false);
}
else if(window.attachEvent) {
	window.attachEvent("onload", smartRollover);
}



$(function() {
	$("ul").find("li:first-child").addClass("first");
	$("ul").find("li:last-child").addClass("last");
	var maxHeight = 0;
	function setHeight(column) {
		//Get all the element with class = col
		column = $(column);
		//Loop all the column
		column.each(function() {       
			//Store the highest value
			if($(this).height() > maxHeight) {
				maxHeight = $(this).height();;
			}
		});
		//Set the height
		column.height(maxHeight);
	}
	setHeight('.colautoheight');

	//set auto width or height for img
	var tn_img_ratio=$(".tn_img_ratio-auto").width() / $(".tn_img_ratio-auto").height();
	var tn_dv_ratio=$(".tn_dv_ratio-auto").width() / $(".tn_dv_ratio-auto").height();
	if(tn_img_ratio>=tn_dv_ratio){
		$(".tn_img_ratio-auto").css('height','100%').css('width','auto');
	}else{
		$(".tn_img_ratio-auto").css('width','100%').css('height','auto');
	}

	var width_ul = 0;
	$('.wrapMainNav > li').each(function(){ width_ul+= $(this).width(); });
	$('.wrapMainNav').css("width",width_ul);
});
