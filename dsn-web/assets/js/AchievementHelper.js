// === Main functions ===
function postAchievement(sessionID, dreamID, text, callbackSuccess, callbackError) {
	$.ajax({
		type: "POST",
		url: "http://dreamyday.tk:80/achievement/",
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

function getAchievement(sessionID, achievementID, callbackSuccess, callbackError) {
	$.ajax({
		type: "GET",
		url: "http://dreamyday.tk:80/achievement?session_id="+sessionID+"&achievement_id="+achievementID,
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

function removeAchievement(sessionID, achievementID, callbackSuccess, callbackError) {
	$.ajax({
		type: "DELETE",
		url: "http://dreamyday.tk:80/achievement/",
		data: {
			session_id: sessionID,
			achievement_id: achievementID
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

// === Comment functions ===
function commentAchievement(sessionID, achievementID, text, callbackSuccess, callbackError) {
	$.ajax({
		type: "POST",
		url: "http://dreamyday.tk:80/achievement/comment/",
		data: {
			session_id: sessionID,
			achievement_id: achievementID,
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

function removeCommentAchievement(sessionID, commentID, callbackSuccess, callbackError) {
	$.ajax({
		type: "DELETE",
		url: "http://dreamyday.tk:80/achievement/comment/",
		data: {
			session_id: sessionID,
			achievement_comment_id: commentID
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

// === Like functions ===
function likeAchievement(sessionID, achievementID, callbackSuccess, callbackError) {
	$.ajax({
		type: "POST",
		url: "http://dreamyday.tk:80/achievement/like/",
		data: {
			session_id: sessionID,
			achievement_id: achievementID
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

function removeLikeAchievement(sessionID, achievementID, callbackSuccess, callbackError) {
	$.ajax({
		type: "DELETE",
		url: "http://dreamyday.tk:80/achievement/like/",
		data: {
			session_id: sessionID,
			achievement_id: achievementID
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