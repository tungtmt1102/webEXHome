
//function SlideImaes----------------------------------------------------------
//----------------------------------------------------------
//----------------------------------------------------------
$(document).ready(function() {
    var arrImages=0;
	starImg=$("img.slide:first").attr("arrImages");
	endImg=$("img.slide:last").attr("arrImages");
	$("img.slide").each(function() {
        if($(this).is(':visible'))
		arrImages=$(this).attr("arrImages");
    });
	$("#next").click(function(){
		if(arrImages==endImg){
			arrImages=-1;
			}
		next=++arrImages;
		$("img.slide").hide();
		$("img.slide").eq(next).show();
	});
	$("#prev").click(function(){
		if(arrImages==0){
			arrImages=endImg;
			prev=arrImages++;
			}
		prev=--arrImages;
		$("img.slide").hide();
		$("img.slide").eq(prev).show();
	});
	setInterval(function(){
		$("#next").click();
		},2000)
});

//action submit----------------------------------------------------
//------------------------------------------------------------------
//----------------------------------------------------------------------

function notifiCation(){
	alert("ban da submit thanh cong");
}