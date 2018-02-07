$(document).ready(function(){
	$("#movie").keyup(function(){
		var searchText = ($("#movie").val());
		if(searchText.length === 0){
			$("#info").text("please input information");
			$("#info").css("color","red");
			$("#submit").attr("disabled",true);
		}
		else if(!(/^[A-Z a-z 0-9]+$/g).exec(searchText)){
			$("#info").text("please input alphabets space or numbers");
			$("#info").css("color","red");
			$("#submit").attr("disabled",true);
		}
		else{
			$("#info").text("validate search");
			$("#info").css("color","green");
			$("#submit").attr("disabled",false);
		}

	});


});
