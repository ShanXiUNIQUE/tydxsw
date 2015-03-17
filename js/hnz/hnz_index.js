$(function(){
	/*login Start*/ 
	var hnzLoginLink=$(".hnz_login_t>div");
	var hnzLogin=$(".hnz_login_input");
	hnzLoginLink.click(function(){
		hnzLoginLink.removeClass("hnz_login_hot");
		$(this).addClass("hnz_login_hot");
		hnzLoginLink.css("background","#007cba");
		$(this).css("background","#0391DA");
		var index=hnzLoginLink.index(this);
		hnzLogin.css({"display":"none"});
		hnzLogin.eq(index).css({"display":"block"});
		
		})
	/*login End*/
	/*star Start*/
	var hnzStarLink=$(".hnz_star_top_link a");
	var hnzStarList=$(".hnz_star_list");
	hnzStarLink.hover(function(){
		var index=hnzStarLink.index(this);
		hnzStarLink.removeClass("hnz_star_hot");
		$(this).addClass("hnz_star_hot");
		hnzStarList.css("display","none");
		hnzStarList.eq(index).css("display","block");
		})
	/*star End*/
	})