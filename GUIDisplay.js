/**
 * @author Reyna Dawkins
 * @version 11/07/14
 */

var values = [];
var mixedFractions = [];
var cleared = " ";

function displayValues(clicked_id)
{
	values.push(document.getElementById(clicked_id).value);
	document.getElementById("displayBox").value = values.join();
	/*if (values.length = 3) {
		var m = new MixedFraction(values[0], values[1], values[2]);
		mixedFractions.push(m);
	}*/
}

function displaySign(clicked_id)
{
	var sign = document.getElementById(clicked_id).value;
	document.getElementById("displayBox").value = values.join(" " + sign + " ");
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

/*function displayFraction()
{
	mixedFractions.push(document.getElementById(clicked_id).value);
	if (values.length = 3) {
		var m = new MixedFraction(values[0], values[1], values[2]);
		values.push(m);
	} else
	{
		
	}
	document.getElementById("displayBox").value = values.join(" ! ");
}*/

function mixedFracFocus()
{
	if (document.getElementById("mixedFractionFoc").click() == true)
	{
		MixedFraction.whole = displayValues(clicked_id);
		if (document.getElementById("mixedFractionFoc").click() == true)
		{
			MixedFraction.numerator = displayValues(clicked_id);
			if (document.getElementById("mixedFractionFoc").click() == true)
			{
				MixedFraction.denominator = displayValues(clicked_id);
			} else
			{
				MixedFraction.denominator = null;
			}
		} else
		{
			MixedFraction.numerator = null;
		}
	} else
	{
		MixedFraction.whole = null;
	} 
	
	var m = new MixedFraction(MixedFraction.whole, MixedFraction.numerator, MixedFraction.denominator);
	values.push(m);
}

function clear()
{
	document.getElementById("displayBox").value = cleared;
}