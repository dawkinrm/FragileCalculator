/**
 * @author Reyna Dawkins
 * @version 11/07/14
 */

var nums = [];
var mixedFractions = [];
var cleared = " ";

function getNumbers(clicked_id)
{
	if (nums.length >= 0 && nums.length <= 3)
	{
		nums.push(document.getElementById(clicked_id).value);
	} else
	{
		return null;
	}
}

function handlesAddition()
{
	var x = nums.length;
	for (i = 0; i < x; i++)
	{
		if (x > -1 && nums[i] != NaN)
		{
			mf = new MixedFraction (nums[0], nums[1], nums[2]);
		} else
		{
			return false;
		}
	}
	
	mf + 
	/*if (values.length = 3) {
		var m = new MixedFraction(values[0], values[1], values[2]);
		mixedFractions.push(m);
	}*/
}

/*
* Currently allows signs to be entered with no limit.
*/

function displaySign(clicked_id)
{
	var sign = document.getElementById(clicked_id).value;
	values.push(sign);
	document.getElementById("displayBox").value = values.join(" ");
}

/*
* Cannot seem to get this clear function to work.
*/

function clear()
{
	document.getElementById("displayBox").value = 0;
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

function mixedFracFocus()
{
	if (document.getElementById("mixedFractionFoc").click() == true)
	{
		MixedFraction.whole = displayValues(clicked_id);
		/*if (document.getElementById("mixedFractionFoc").click() == true)
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
		MixedFraction.whole = null;*/
	}
	
	var m = new MixedFraction(MixedFraction.whole, MixedFraction.numerator, MixedFraction.denominator);
	values.push(m);
	document.getElementById("displayBox").value = values.join(" ");
}