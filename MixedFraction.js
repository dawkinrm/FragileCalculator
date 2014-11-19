/**
 * @author Ricky Forgey
 * @version 10/25/14
 */

var whole;
var numerator;
var denominator;

// Construct a mixed fraction object

function MixedFraction(whole, numerator, denominator)
{
	this.whole = whole;
	this.numerator = numerator;
	this.denominator = denominator;
	
	if (isNaN(numerator))
	var mf = new MixedFraction(whole, denominator);
	
	if (isNaN(denominator))
	mf = new MixedFraction(whole, numerator);

	if(isNaN(numerator) && isNaN(denominator))
	mf = new MixedFraction(whole);



}

// Get the whole number component

MixedFraction.prototype.getWhole = function()
{
	return this.whole;
};

// Get the numerator

MixedFraction.prototype.getNumerator = function()
{
	return this.numerator;
};

// Get the denominator

MixedFraction.prototype.getDenominator = function()
{
	return this.denominator;
};

// Add two MixedFraction objects

MixedFraction.prototype.add = function(whole, numerator, denominator)
{
	var finalWhole, finalDenominator, finalNumerator;

	alert("pass");
	
	finalWhole = MixedFraction.whole + whole;
	finalNumerator = MixedFraction.numerator + numerator;
	finalDenominator = MixedFraction.denominator + denominator;
	mf = new MixedFraction(finalWhole, finalNumerator, finalDenominator);
	
	return mf;
	
};

// Subtract two MixedFraction objects

MixedFraction.prototype.subtract = function(whole, numerator, denominator)
{
	mf = new MixedFraction(whole, numerator, denominator);
	
	mf.whole - whole;
	mf.numerator - numerator;
	mf.denominator - denominator;
	
	return mf;
	
};

// Multiply two MixedFraction objects

MixedFraction.prototype.multiply = function(whole, numerator, denominator)
{
	mf = new MixedFraction(whole, numerator, denominator);
	
	mf.whole * whole;
	mf.numerator * numerator;
	mf.denominator * denominator;
	
	return mf;
	
};

// Divide two MixedFraction objects

MixedFraction.prototype.divide = function(whole, numerator, denominator)
{
	mf = new MixedFraction(whole, numerator, denominator);
	
	mf.whole / whole;
	mf.numerator / numerator;
	mf.denominator / denominator;
	
	return mf;
	
};

// Return a String representation of a MixedFraction object

/*MixedFraction.prototype.toString = function()
{
	mf = new String();
	// refactoring  this -Pavan
	if(!isNaN(MixedFraction.numerator) && !isNaN(MixedFraction.denominator) && !isNaN(MixedFraction.whole))
	{
		mf = "<math>" + whole + "<mfrac> <mrow> <mi>" + numerator + "</mi> </mrow>  <mrow><mn>" + denominator + "</mn> </mrow> </mfrac></math>";
	}	
	if(isNan(MixedFraction.numerator) && isNaN(MixedFraction.denominator))
	{
		mf = "<math> <mi>" + whole "</mi> </math>";
 	}
	if(!isNaN(MixedFraction.numerator) && !isNaN(MixedFraction.denominator)
	{
		mf = " <math> <mfrac> <mrow> <mi>" + numerator + "</mi> </mrow>  <mrow><mn>" + denominator + "</mn> </mrow> </mfrac></math>"

	}	
	
	return mf;
	
};*/