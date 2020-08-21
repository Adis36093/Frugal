//Login Validation
function loginValidate()
{
	User = document.getElementById("username").value;
	
	if(!User)
	{
		document.getElementById("usernameErrorMessage").style.display = "block";
	    document.getElementById("usernameErrorMessage").innerHTML = "Please enter the username";
		document.getElementById("usernameErrorMessage").style.color = "red";
		return false;
	}
	else if(!validateUser(User))
	{
		document.getElementById("usernameErrorMessage").style.display = "block";
	    document.getElementById("usernameErrorMessage").innerHTML = "Please enter valid username";
		document.getElementById("usernameErrorMessage").style.color = "red";
		return false;
	}
	
loginValidation();

function loginValidation()
{
axios.get('http://127.0.0.1:5000/Username')
.then((res)=>{console.log(response)})
.catch((err)=>alert(err));
}
}

function validateUser(myuser)
{
if(/^[a-z0-9_-]{3,15}$/.test(myuser))
{
	return true;
}
	return false;
}

function hideval2(val)
{
	document.getElementById("usernameErrorMessage").style.display = "none";
}
 


//Signup Validation
function signupValidate()
{
	User = document.getElementById("username").value;
	
	if(!User)
	{
		document.getElementById("usernameErrorMessage").style.display = "block";
	    document.getElementById("usernameErrorMessage").innerHTML = "Please enter the username";
		document.getElementById("usernameErrorMessage").style.color = "red";
		return false;
	}
	else if(!validateUser(User))
	{
		document.getElementById("usernameErrorMessage").style.display = "block";
	    document.getElementById("usernameErrorMessage").innerHTML = "Please enter valid username";
		document.getElementById("usernameErrorMessage").style.color = "red";
		return false;
	}
	
	signupValidation();
	function signupValidation()
	{
		const postSignupUrl = "http://127.0.0.1:5000/Username";
		var parms = 
		{
			Username:User
		};
		console.log(parms);

		axios
		.post(postSignupUrl, parms)
		.then(res=>{alert(res);}).catch(err => alert(err));
	}
}



function validateUser(myuser)
{
if(/^[a-z0-9_-]{3,15}$/.test(myuser))
{
	return true;
}
	return false;
}

function hideval2(val)
{
	document.getElementById("usernameErrorMessage").style.display = "none";
}


//records

var result1;
function Multiply1()
{
	var a = document.getElementById("quantity1").value;
	var b = document.getElementById("price1").value;
	result1 = a*b;
	document.getElementById("result1").value = result1;
	totalExpense();
}

var result2;
function Multiply2()
{
	var a = document.getElementById("quantity2").value;
	var b = document.getElementById("price2").value;
	result2 = a*b;
	document.getElementById("result2").value = result2;
	totalExpense();
}

var result3;
function Multiply3()
{
	var a = document.getElementById("quantity3").value;
	var b = document.getElementById("price3").value;
	result3 = a*b;
	document.getElementById("result3").value = result3;
	totalExpense();
}

var result4;
function Multiply4()
{
	var a = document.getElementById("quantity4").value;
	var b = document.getElementById("price4").value;
	result4 = a*b;
	document.getElementById("result4").value = result4;
	totalExpense();
}

var result5;
function Multiply5()
{
	var a = document.getElementById("quantity5").value;
	var b = document.getElementById("price5").value;
	result5 = a*b;
	document.getElementById("result5").value = result5;
	totalExpense();
}

var result6;
function Multiply6()
{
	var a = document.getElementById("quantity6").value;
	var b = document.getElementById("price6").value;
	result6 = a*b;
	document.getElementById("result6").value = result6;
	totalExpense();
}

var result7;
function Multiply7()
{
	var a = document.getElementById("quantity7").value;
	var b = document.getElementById("price7").value;
	result7 = a*b;
	document.getElementById("result7").value = result7;
	totalExpense();
}

var result8;
function Multiply8()
{
	var a = document.getElementById("quantity8").value;
	var b = document.getElementById("price8").value;
	result8 = a*b;
	document.getElementById("result8").value = result8;
	totalExpense();
}

var result9;
function Multiply9()
{
	var a = document.getElementById("quantity9").value;
	var b = document.getElementById("price9").value;
	result9 = a*b;
	document.getElementById("result9").value = result9;
	totalExpense();
}

var result10;
function Multiply10()
{
	var a = document.getElementById("quantity10").value;
	var b = document.getElementById("price10").value;
	result10 = a*b;
	document.getElementById("result10").value = result10;
	totalExpense();
}

var result11;
function Multiply11()
{
	var a = document.getElementById("quantity11").value;
	var b = document.getElementById("price11").value;
	result11 = a*b;
	document.getElementById("result11").value =result11;
	totalExpense();
}

var result12;
function Multiply12()
{
	var a = document.getElementById("quantity12").value;
	var b = document.getElementById("price12").value;
	result12 = a*b;
	document.getElementById("result12").value = result12;
	totalExpense();
}

var result13;
function Multiply13()
{
	var a = document.getElementById("quantity13").value;
	var b = document.getElementById("price13").value;
	result13 = a*b;
	document.getElementById("result13").value = result13;
	totalExpense();
}

var result14;
function Multiply14()
{
	var a = document.getElementById("quantity14").value;
	var b = document.getElementById("price14").value;
	result14 = a*b;
	document.getElementById("result14").value = result14;
	totalExpense();
}

var result15;
function Multiply15()
{
	var a = document.getElementById("quantity15").value;
	var b = document.getElementById("price15").value;
	result15 = a*b;
	document.getElementById("result15").value = result15;
	totalExpense();
}

var result16;
function Multiply16()
{
	var a = document.getElementById("quantity16").value;
	var b = document.getElementById("price16").value;
	result16 = a*b;
	document.getElementById("result16").value = result16;
	totalExpense();
}

var result17;
function Multiply17()
{
	var a = document.getElementById("quantity17").value;
	var b = document.getElementById("price17").value;
	result17 = a*b;
	document.getElementById("result17").value = result17;
	totalExpense();
}

var result18;
function Multiply18()
{
	var a = document.getElementById("quantity18").value;
	var b = document.getElementById("price18").value;
	result18 = a*b;
	document.getElementById("result18").value = result18;
	totalExpense();
}

var result19;
function Multiply19()
{
	var a = document.getElementById("quantity19").value;
	var b = document.getElementById("price19").value;
	result19 = a*b;
	document.getElementById("result19").value = result19;
	totalExpense();
}

var result20;
function Multiply20()
{
	var a = document.getElementById("quantity20").value;
	var b = document.getElementById("price20").value;
	result20 = a*b;
	document.getElementById("result20").value = result20;
	totalExpense();
}

function totalExpense()
{
	var local = result1;
	var local = result2;
	var local = result3;
	var local = result4;
	var local = result5;
	var local = result6;
	var local = result7;
	var local = result8;
	var local = result9;
	var local = result10;
	var local = result11;
	var local = result12;
	var local = result13;
	var local = result14;
	var local = result15;
	var local = result16;
	var local = result17;
	var local = result18;
	var local = result19;
	var local = result20;

	var expense = result1 + result2 + result3 + result4 + result5 + result6 + result7 + result8 + result9 + result10 + result11 + result12 + result13 + result14 + result15 + result16 + result17 + result18 + result19 + result20
    document.getElementById("totalExpenseOfTheDay").value = expense;

}

var btn = document.getElementById("total");
btn.addEventListener("click", Multiply1);
btn.addEventListener("click", Multiply2);
btn.addEventListener("click", Multiply3);
btn.addEventListener("click", Multiply4);
btn.addEventListener("click", Multiply5);
btn.addEventListener("click", Multiply6);
btn.addEventListener("click", Multiply7);
btn.addEventListener("click", Multiply8);
btn.addEventListener("click", Multiply9);
btn.addEventListener("click", Multiply10);
btn.addEventListener("click", Multiply11);
btn.addEventListener("click", Multiply12);
btn.addEventListener("click", Multiply13);
btn.addEventListener("click", Multiply14);
btn.addEventListener("click", Multiply15);
btn.addEventListener("click", Multiply16);
btn.addEventListener("click", Multiply17);
btn.addEventListener("click", Multiply18);
btn.addEventListener("click", Multiply19);
btn.addEventListener("click", Multiply20);
btn.addEventListener("click", totalExpense);

	
	

	
	