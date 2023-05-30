"use strict";

// Word options
let sibilants = ['s', 'sch', ''];
let initials = ['p', 'c', 'b', 'd', 'g', 'f', 'th', 'h', 'y', 'n', ''];
let medials = ['r', 'l', ''];
let vowels = ['i', 'oo', 'o', 'u', 'e', 'oi', 'or', 'ar', 'ur'];
let finals = ['b', 'mb', 'g', 'ng', 'p', 'mp', 'k', 'nk', 'ff', 'tch', 'nch', 't'];
let affixes = ['y', 'ly', 'o', 'lo', 'a', 'us', 'ar', 'or', 'ur', 'nar', 'nor', 'ini', 'ingi', 'oid', ''];

// Default name
generateName();

// Button
let button = document.getElementById('myButton');
button.onclick = function(e) {
	generateName();
}

// Creating the technobabble
function generateName() {

	// Updating status
	document.querySelector('p').innerHTML = "Loading...";
	
	// Choosing parts
	let sibilant = sibilants[Math.floor(Math.random() * sibilants.length)];
	let initial = initials[Math.floor(Math.random() * initials.length)];
	let medial = medials[Math.floor(Math.random() * medials.length)];
	let vowel = vowels[Math.floor(Math.random() * vowels.length)];
	let final = finals[Math.floor(Math.random() * finals.length)];
	let affix = affixes[Math.floor(Math.random() * affixes.length)];

	// Conditions
	
	// h, y, n cannot take sibilants or medials
	if(initial == 'h' || initial == 'y' || initial == 'n') {
		sibilant = '';
		medial = '';
	}

	// s can only exist when unvoiced plosives (p and c) are in the initial position
	if(sibilant == 's' && initial != 'p' && initial != 'c') {
		sibilant = '';
	}

	// sch can only exist if there is no initial
	if(sibilant == 'sch') {
		initial = '';
	}

	// c becomes qu when no medial is present
	if(initial == 'c' && medial == '') {
		initial = 'qu';
	}

	// medials r and l become w after alveolar consonants (d, th, s)
	if((medial == 'r' || medial == 'l') && (initial == 'd' || initial == 'th' || (initial == '' && sibilant == 's'))) {
		medial = 'w';
	}

	// Constructing the name
	let name = "" + sibilant + initial + medial + vowel + final + affix;
	document.querySelector('p').innerHTML = name;
}