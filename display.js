/**
 * @author Reyna Dawkins
 * @version 11/17/14
 */
 
var mixedFractions = [];
var values = [];
/*var signs = ["+", "-", "*", "/"];
var whole = document.getElementsByClassName("whole");
var numerator = document.getElementsByClassName("numer");
var denominator = document.getElementsByClassName("denom");*/

function updateDisplay(clicked_id)
{
	mixedFractions.push(document.getElementById(clicked_id).value);
	document.getElementById("mixedFracFoc").onclick() = function()
	{
		showDenom(clicked_id);
	});
	if (clicked_id == "mixedFracFoc")
	{
		mixedFractions.push(document.getElementById(clicked_id).value);
	}
}
	
	if (isNaN(mixedFractions[1]) && isNaN(mixedFractions[2]))
	{
		showWhole();
	}
	/*var mf = new MixedFraction(whole, numerator, denominator);
	
	mf.whole = document.getElementById(clicked_id).value;
	MixedFraction.numerator = showNumer(clicked_id);
	MixedFraction.denominator = showDenom(clicked_id);
	
	mixedFractions.push(x);*/

	/*showWhole(clicked_id);
	document.getElementById("mixedFracFoc").addEventListener("click", function()
	{
				showNumer(clicked_id);
				document.getElementById("mixedFracFoc").addEventListener("click", function()
				{
					showDenom(clicked_id);
				});
	});*/
}

function showWhole(clicked_id)
{
	var w = document.getElementById(clicked_id).value;
	if (isNaN(w))
	{
		return false;
	} else
	{
		values.push(document.getElementById(clicked_id).value);
		return w;
	}
	
	/*wholes.push(document.getElementById(clicked_id).value);
	for (i = 0; i < wholes.length; i++)
	{
		if(isNaN(wholes[i]))
		{
			wholes[i] = " ";
		}
		whole[i].innerHTML = wholes[i];
	}*/
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

function clear()
{
  document.getElementsByClassName("whole").innerHTML(" ");
  document.getElementsByClassName("numer").innerHTML(" ");
  document.getElementsByClassName("denom").innerHTML(" ");
}