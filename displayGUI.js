/**
 * @author Reyna Dawkins
 * @version 11/07/14
 */

var values = [];
var numbers = document.getElementsByTagName("mn");
var numerator = document.getElementsByClassName("numer");
var denominator = document.getElementsByClassName("denom");

function displayValues(clicked_id)
{
	values.push(document.getElementById(clicked_id).value);
	for (i = 0; i < values.length; i++)
	{
		if(isNaN(values[i]))
		{
			values[i] = " ";
		}
		
		/*if (document.getElementById("mixedFracFoc").click() === true)
		{
			numerator[i].innerHTML = values[i];
			if (document.getElementById("mixedFracFoc").click() == true)
			{
				denominator[i].innerHTML = values[i];
			}
		} else
		{
		whole[i].innerHTML = values[i];
		}*/
		
		numbers[i].innerHTML = values[i];
	}
}

/*
* Currently allows signs to be entered with no limit.
*/

function displaySign(clicked_id)
{
	display = numbers[i].innerHTML;
	values.push(document.getElementById(clicked_id).value);
	for (i = 0; i < values.length; i++)
	{
		if(isNaN(values[i]))
		{
			values[i] = " ";
		}
		document.getElementById("displayBox").innerHTML = display + values;
	}
}

/*
* Cannot seem to get this clear function to work.
*/

function clear()
{
	document.getElementById("displayBox").innerHTML = "0";
}

/* Got an idea sometime this afternoon to attempt to implement a function
 * that would only be implemented when the fraction focus button was hit
 * have not gotten the chance to flesh this out - it's probably the same
 * thing as mixedFracFocus, but I wanted something that would, differentiate
 * between whether a single, whole number was pressed and whether a fraction
 * was pressed.
 * 
 * Naturally, this may be something to handle within the initial function,
 * but I have not taken the time to look into this.
 */

function displayFraction()
{
	var x = values.length - 1;
	if (x > -1 && values[x] != NaN)
	{
		mixedFractions.push(values[x]);
	} else
	{
		displayValues(clicked_id);
	}
	if (mixedFractions.length = 3) {
		var m = new MixedFraction(mixedFraction[0]);
		values.push(m);
	} else
	{
		
	}
	document.getElementById("displayBox").value = values.join(" ! ");
}

/*
* It seems like this function is only taking and displaying the denominator value.
* Will continue looking into this and refining it as MixedFraction gets completed and
* feedback is given.
*/
	
	/*var m = new MixedFraction(MixedFraction.whole, MixedFraction.numerator, MixedFraction.denominator);
	values.push(m);
	document.getElementById("displayBox").value = values.join(" ");
}*/