/**
 * @author Etienne Birriel Hernandez
 * 
 * just insert the correct fraction/fraction factory parts (like the .numer  .denom   createFraction()    )
 */

var firstInput;
var secondInput;

function results(firstInput, secondInput)
{
	while (firstInput.numer >= firstInput.denom)	
	{
		firstInput.whole++;
		firstInput.numer = (firstInput.numer - firstInput.denom);
	}
	
	while (secondInput.numer >= secondInput.denom)	
	{
		secondInput.whole++;
		secondInput.numer = (secondInput.numer - secondInput.denom);
	}
	
	firstInput.improper = parseInt(firstInput.denom * firstInput.whole) + parseInt(firstInput.numer);
	secondInput.improper = parseInt(secondInput.denom * secondInput.whole) + parseInt(secondInput.numer);
}
 
function multiply(firstInput, secondInput)
{
  var multiNumerator;
  var multiDenominator;
  var result;
  
  multiNumerator = firstInput.improper * secondInput.improper;
  multiDenominator = firstInput.denom * secondInput.denom;
  
  return result = /*fraction js*/createFraction(multiNumerator + "/" + multiDenominator);
}
 
function divide(firstInput, secondInput)
{
	var divNumerator;
	var divDenominator;
	var result;
	
	divNumerator = firstInput.improper * secondInput.denom;
	divDenominator = firstInput.denom * secondInput.improper;
	
	return result = createFraction(divNumerator + "/" + divDenominator);
}

function add(firstInput, secondInput)
{
	var addWholeNumber;
	var addNumerator;
	var addDenominator;
	var result;
	
	addWholeNumber = firstInput.whole + secondInput.whole;
	addNumerator = (firstInput.numer * secondInput.denom) + (secondInput.numer * firstInput.denom);
	addDenominator = firstInput.denom * secondInput.denom;
	
	return result = createFraction(addWholeNumber + " " + addNumerator + "/" + addDenominator);
}
 
function subtract(firstInput, secondInput)
{
	var subWholeNumber;
	var subNumerator;
	var subDenominator;
	var result;
	
	subWholeNumber = firstInput.whole - secondInput.whole;
	subNumerator = (firstInput.numer * secondInput.denom) - (secondInput.numer * firstInput.denom);
	subDenominator = firstInput.denom * secondInput.denom;
	
	return result = createFraction(subWholeNumber + " " + subNumerator + "/" + subDenominator); 
	
}

function findGCD(num1, num2)
{
	if (!num2)
	{
		return num1;
	}
	else
	{
		return findGCD(num2, num1 % num2);
	}
}

function reduce(input)
{
	var x = findGCD(input.numer, input.denom);
	while (input.numer >= input.denom)
	{
		input.whole++;
		input.numer = input.numer - input.denom;
	}
	
	if (x != 1)
	{
		input.numer = input.numer / x;
		input.denom = input.denom / x;
	}
}

function toString(input)
{
	var ii;
	
	if (input.whole ==0)
	{
		ii = "<math><sup>" + input.numer + "</sup>&frasl;<sub>" + input.denom + "</sub></math>";
	}
	else if (input.numer == 0 )
	{
		ii = "<math>" + input.whole + "</math>"
		
	}
	else
	{
		ii = "<math>" + input.whole + " " + "<sup>" + input.numer + "</sup>&frasl;<sub>" + input.denom + "</sub></math>";
	}
	return ii;
}
