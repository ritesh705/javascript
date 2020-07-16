let grade = function ()
{
	let marks = document.getElementById("marksId").value;
	let fullMarks = document.getElementById("fullMarksId").value;
	var perc = (marks / fullMarks) * 100
	var grade = ' '
	if (perc >= 90) {
		var grade = 'A'
	}
	else if (perc >=80) {
		var grade = 'B'
	}
	else if (perc >= 70) {
		var grade = 'C'
	}
	else if (perc >= 60) {
		var grade = 'D'
	}
	else if (perc >= 50) {
		var grade = 'E'
	}
	else
	{
		var grade = 'F'
	}
	let result = `Your grade is ${grade} and percentage is ${perc}`;
	// document.write(result); 
	document.getElementById("display").innerHTML = result;
}