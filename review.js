 count = 0;
 last_sort = "";
 	all_user = [];
	function user_add() {
		user_details ={}
		console.log(all_user);
		user_details["id"] = ++count;
		user_details["user"] = $("#name_user").val();
		
		user_details["email"] = $("#email").val();


		all_user.push(  user_details);
	
		$("#user_table").append(make_row(user_details));
}


$(document).ready(function(){

	$("#click_id").click(function (){
		console.log(this);

		sort_table("id");
	});
	$("#click_name").click(function (){
		console.log(this);

		sort_table("user");
	});
	$("#click_email").click(function (){
		console.log(this);

		sort_table("email");
	});
});

function sort_table( value ) {
	console.log(value);
	console.log(last_sort)

	if (last_sort == value)
	{	
		last_sort = ""
		all_user.sort(function(x,y) { return y[value] > x[value] ? 1 : 0 });
	}
	else {
		all_user.sort(function(x,y) { return x[value] > y[value] ? 1 :0 });
		last_sort = value;			
	}

	redesign();
}

function redesign() {
	console.log($(all_user).length)

	$("#user_table tr.data").detach();


	for(var id = 0; id < $(all_user).length; id++)
	{		
		$("#user_table").append(make_row(all_user[id]));
	}
}

function make_row(details){
	var new_row = $("<tr />").attr("id", details["id"]).addClass("data");
	var id_row = $("<td / >").attr("id", "rec_id").text(details["id"]);
	var user = $("<td / >").attr("id", "user_id").text(details["user"]);
	var email = $("<td / >").attr("id", "email_id").text(details["email"]);
	id_row.appendTo(new_row);
	user.appendTo(new_row);  
	email.appendTo(new_row);

	return(new_row);



}








