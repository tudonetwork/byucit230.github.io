function GetCurrentDate(){

	var date = new Date();
	var day = date.getDate();
	var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	var month = monthNames[date.getMonth()];
	var year = date.getFullYear();
	var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
	var dayName = days[date.getDay()];
	  
	document.getElementById("datefooter").innerHTML = dayName + ", "+ day + " " + month + " " + year;

}
