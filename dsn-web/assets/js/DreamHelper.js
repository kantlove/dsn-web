function postDream(sessionID, text, callbackSuccess, callbackError) {
	$.ajax({
	type: "POST",
	url: "http://dreamyday.tk:80/dream",
	data: {
		session_id: sessionID,
		text: text

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

function getDream(sessionID,dreamID,callbackSuccess,callbackError) {
	$.ajax({
		type: "GET",
		url: "http://dreamyday.tk:80/dream?session_id="+sessionID+"&dream_id="+dreamID,
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

function removeDream(sessionID, dreamID, callbackSuccess, callbackError) {
	$.ajax({
	type: "DELETE",
	url: "http://dreamyday.tk:80/dream/",
	data: {
		session_id: sessionID,
		dream_id: dreamID

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

// === Comment functions ====
function commentDream(sessionID, dreamID, text, callbackSuccess, callbackError) {
	$.ajax({
		type: "POST",
		url: "http://dreamyday.tk:80/dream/comment/",
		data: {
			session_id: sessionID,
			dream_id: dreamID,
			text: text
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

function removeCommentDream(sessionID, commentID, callbackSuccess, callbackError) {
	$.ajax({
		type: "DELETE",
		url: "http://dreamyday.tk:80/dream/comment/",
		data: {
			session_id: sessionID,
			dream_comment_id: commentID
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

// === Like functions ====
function likeDream(sessionID, dreamID, callbackSuccess, callbackError) {
	$.ajax({
		type: "POST",
		url: "http://dreamyday.tk:80/dream/like/",
		data: {
			session_id: sessionID,
			dream_id: dreamID
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

function removeLikeDream(sessionID, dreamID, callbackSuccess, callbackError) {
	$.ajax({
		type: "DELETE",
		url: "http://dreamyday.tk:80/dream/like/",
		data: {
			session_id: sessionID,
			dream_id: dreamID
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