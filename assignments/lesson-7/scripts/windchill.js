
function doWildChill(ws, temp){

/* A program to Calculate de wind chill
* Input: User will enter the Temperature and wind speed
* Processing: get the Temperature and wind speed and convert to float.
* Check if the vars have any value and then call the function to calculate the wind chill.
* Output: Show to the user the Wind Chill in Fahrenheit.
*/

	if(ws && temp){
		var wC = windChill(temp, ws);
		document.getElementById("output-windchill").innerHTML = wC + " ºF";
	}
}

function windChill(tempF, speed){

	var f = 35.74 + 0.6215 * tempF - 35.75 * Math.pow(speed, 0.16) + 0.4275 * tempF * Math.pow(speed, 0.16);

	return Math.round(f);
}
