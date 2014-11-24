function postDream(sessionID, text, callbackSuccess, callbackError) {
		$.ajax({
		type: "POST",
		url: "http://dreamyday.tk:80/dream",
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

function getDream(sessionID,dreamID,callbackSuccess,callbackError) {

	$.ajax({
		type: "GET",
		url: "http://dreamyday.tk:80/dream?sessionId="+sessionID+"&dreamId="+dreamID,
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