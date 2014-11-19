/**
 * @author Ricky Forgey
 * @version 10/25/14
 */

/**
 * MixedFractionFactory - Utility class that can be used to create MixedFraction objects
 */

// Encapsulation of a whole number component

function wholeNumber(section) {
	this.whole = section.whole;
}

// Encapsulation of a fractional component

function fraction(section) {
	this.numerator = section.numerator;
	this.denominator = section.denominator;
}

// Create a MixedFraction object piece by piece

function MixedFractionFactory() {}
MixedFractionFactory.prototype.createWhole = function createMixedFraction(section) {
	var parentClass = null;
	
	if (section.id === 'whole') {
		parentClass = WholeNumber;
	}
	else if (section.id === 'fraction') {
		parentClass = Fraction;
	}
	
	if (parentClass === null) {
		return false;
	}
	
	return new parentClass(section);
	
};

function mixedFracFactory(values)
{
	for (i=0; i<values.length; i++)
	{
		whole = values[i];
		i++;
		numerator = values[i];
		i++;
		denominator = values[i];
		i++;
		
		var m = new MixedFraction(whole, numerator, denominator);
	}
}
