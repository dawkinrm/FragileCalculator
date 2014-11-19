/**
 * @author Reyna Dawkins
 * @version 11/17/14
 */
 
var wholes = [];
var numers = [];
var denoms = [];
var signs = ["+", "-", "*", "/"];
var whole = document.getElementsByClassName("whole");
var numerator = document.getElementsByClassName("numer");
var denominator = document.getElementsByClassName("denom");

var w, n, d;

function updateDisplay()
{
	for (i = 0; i < wholes.length; i++)
	{
		whole[i].focus();
		showWhole(clicked_id);
	}
	document.getElementById("mixedFracFoc").onclick = function()
	{
		showNumer(clicked_id);
			document.getElementById("mixedFracFoc").onclick = function()
		{
			showDenom(clicked_id);
		});
	});
}

function showWhole(clicked_id)
{
	wholes.push(document.getElementById(clicked_id).value);
	for (i = 0; i < wholes.length; i++)
	{
		if(isNaN(wholes[i]))
		{
			wholes[i] = " ";
		}
		whole[i].innerHTML = wholes[i];
	}
}

function showNumer(clicked_id)
{
	numers.push(document.getElementById(clicked_id).value);
	for (i = 0; i < numers.length; i++)
	{
		if(isNaN(numers[i]))
		{
			numers[i] = " ";
		}
		document.getElem("").focus();
		numerator[i].innerHTML = numers[i];
	}
}

function showDenom(clicked_id)
{
	denoms.push(document.getElementById(clicked_id).value);
	for (i = 0; i < denoms.length; i++)
	{
		if(isNaN(denoms[i]))
		{
			denoms[i] = " ";
		}
		denominator[i].innerHTML = denoms[i];
	}
}