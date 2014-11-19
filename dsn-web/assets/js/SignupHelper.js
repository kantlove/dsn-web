function signup(username, password, fullname, email, callbackSuccess, callbackError){
	console.log("requesting...");
	var inputUsername = document.getElementById('user_name');
	var inputFullname = document.getElementById('fullname');
	var inputEmail = document.getElementById('email');
	var inputPassword = document.getElementById('password');
	
	$.ajax({
		type: "POST",
		url: "http://dreamyday.tk:80/user/",
		data: {
			username: inputUsername.value, 
			password: inputPassword.value,
			fullname: inputFullname.value,
			email: inputEmail.value
		},
		success: function(data, textStatus, jqXHR){
			// Check if callbackSuccess is a function
			if (typeof(callbackSuccess) == "function") {
				callbackSuccess(data, textStatus, jqXHR);
			}
		},
		error: function(xhRequest, ErrorText, thrownError) {
			// Check if callbackError is a function
			if (typeof(callbackError) == "function") {
				callbackError(xhRequest, ErrorText, thrownError);
			}
		}
	})
	.done(function(msg){
		console.log("requested");
	});
}