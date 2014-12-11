function login() {
	console.log("requesting...");
					var inputUsername = document.getElementById('user_name');
					var inputPassword = document.getElementById('password');
	$.ajax({
						type: "POST",
						url: "http://dreamyday.tk:80/session/signin",
						data: {username: inputUsername.value, password: inputPassword.value},
						success: function(data, textStatus, jqXHR){
							console.log(data);
							console.log(textStatus);

							if (data.result == "success") {
								window.location = '/mainpage';
							}
						},
						error: function(xhRequest, ErrorText, thrownError) {
							console.log(xhRequest);
							console.log(ErrorText);
							console.log(thrownError);
						}
					})
					.done(function(msg){
						console.log("requested");
					});
}