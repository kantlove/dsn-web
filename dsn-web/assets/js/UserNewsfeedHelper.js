function getNewsfeedDream(sessionID,dreamID,callbackSuccess,callbackError) {
	$.ajax({
		type: "GET",
		url: "http://dreamyday.tk:80/user/newsfeed?session_id="+sessionID,
		success: function (data,textStatus,jqXHR){
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