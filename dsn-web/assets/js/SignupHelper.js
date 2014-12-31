function signup(username, password, fullname, email, callbackSuccess, callbackError){
	console.log("requesting...");
	
	$.ajax({
		type: "POST",
		url: "http://dreamyday.tk:80/user/",
		data: {
			username: username, 
			password: password,
			fullname: fullname,
			email: email
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