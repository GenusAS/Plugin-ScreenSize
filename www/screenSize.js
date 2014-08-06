
var exec = require('cordova/exec');


var screenSize = function(window) {

	window.screenSize = function(str, callback) {
		exec(function(result) {
				callback(result);
			}, 
			function(err) {
		    	console.log("SOMETHING WENT WRONG");
		        callback('Something went wrong.');
		    }, 
		    "ScreenSize", 
		    "getSize", 
		    [str]);
	}  
}
screenSize(window);

//module.exports = screenSize;
