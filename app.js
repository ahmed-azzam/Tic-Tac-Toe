var vSq1, vSq2, vSq3, vSq4, vSq5, vSq6, vSq7, vSq8, vSq9;
// var sq1 = $("#s1");
// var sq2 = $("#s2");
// var sq3 = $("#s3");
// var sq4 = $("#s4");
// var sq5 = $("#s5");
// var sq6 = $("#s6");
// var sq7 = $("#s7");
// var sq8 = $("#s8");
// var sq9 = $("#s9");

var tic = "X";
count = 0;
win = false;

$("td").click((e) => {
	if (e.target.textContent === "") {
		e.target.textContent = tic;
		count++;
		tic === "X" ? (tic = "O") : (tic = "X");

		vSq1 = $("#s1")[0].innerHTML;
		vSq2 = $("#s2")[0].innerHTML;
		vSq3 = $("#s3")[0].innerHTML;
		vSq4 = $("#s4")[0].innerHTML;
		vSq5 = $("#s5")[0].innerHTML;
		vSq6 = $("#s6")[0].innerHTML;
		vSq7 = $("#s7")[0].innerHTML;
		vSq8 = $("#s8")[0].innerHTML;
		vSq9 = $("#s9")[0].innerHTML;

		if ((vSq1, vSq2, vSq3 === "X") || (vSq1, vSq2, vSq3 === "O")) {
			winner();
		} else if ((vSq4, vSq3, vSq6 === "X") || (vSq4, vSq3, vSq6 === "O")) {
			winner();
		} else if ((vSq7, vSq8, vSq9 === "X") || (vSq7, vSq8, vSq9 === "O")) {
			winner();
		} else if ((vSq1, vSq4, vSq1 === vSq7)) {
		} else if (vSq2 === vSq5 && vSq2 === vSq8) {
		} else if (vSq3 === vSq6 && vSq3 === vSq9) {
		} else if (vSq1 === vSq5 && vSq1 === vSq9) {
		} else if (vSq3 === vSq5 && vSq3 === vSq7) {
		}
	}
});

function winner() {
	if (count % 2 === 1) {
		$("h2").text("X is the Winner");
	} else {
		$("h2").text("O is the Winner");
	}
}
// vSq1, vSq2, vSq3
// vSq4, vSq3 vSq6
// vSq7, vSq8, vSq9

// vSq1, vSq4, vSq7
// vSq2, vSq5, vSq8
// vSq3, vSq6, vSq9

// vSq1, vSq5, vSq9
// vSq3, vSq5, vSq7

var arrXinput = [[], [], []];
var arrOinput = [[], [], []];

var arrX = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9],
];

var arrO = [
	[11, 22, 33],
	[44, 55, 66],
	[77, 88, 99],
];

var arrXRes = [6, 15, 24, 18, 12];
var arrORes = [66, 165, 264, 198, 132];
