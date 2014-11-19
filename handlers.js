/*
 * @author Pavan Gudimetta
 */ 

function registerHandlers()
{
	document.getElementById("numberOne").addEventListener("click", displayValues("numberOne"), true);
	document.getElementById("number2").addEventListener("click", displayValues("number2"));
	/*document.getElementById("number3").addEventListener("click",stuff());
	*document.getElementById("number4").addEventListener("click",stuff());
	*document.getElementById("number5").addEventListener("click",stuff());
	*document.getElementById("number6").addEventListener("click",stuff());
	*document.getElementById("number7").addEventListener("click",stuff());
	*document.getElementById("number8").addEventListener("click",stuff());
	*document.getElementById("number9").addEventListener("click",stuff());
	*document.getElementById("number0").addEventListener("click",stuff());
	*/
	document.getElementById("mixedFractionFoc").addEventListener("click", mixedFraction("mixedFractionFoc"), true);
	
	document.getElementById("clear").addEventListener("click", clear(), true);
	//document.getElementById("reset").addEventListener("click",stuff());
	//document.getElementById("addition").addEventListener("click", add());
	//document.getElementById("subtraction").addEventListener("click", subtract());
	//document.getElementById("multiplication").addEventListener("click", multiply());
	//document.getElementById("division").addEventListener("click", divide());
	//document.getElementById("equals").addEventListener("click", results());
	//document.getElementById("backspace").addEventListener("click", stuff());
}



function clearValues()
{
	document.getElementById("clear") = 0;
}


