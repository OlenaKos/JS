function CalculateCalories(obj)
{
var age = parseInt(obj.txtAge.value);
alert(age);
var isMan = obj.sexMan.checked;
alert(isMan);
var weight = parseInt(obj.txtWeight.value);
var height = parseInt(obj.txtHeight.value);
var activity = obj.lstActivity.value;
alert(weight);
alert(height);
alert(activity);

var activityCoef = 0.0;
switch(activity){
case 'veryHigh':
	activityCoef = 1.9;
	break;
case 'high':
	activityCoef = 1.725;
	break;
case 'average':
	activityCoef = 1.55;
	break;
case 'low':
	activityCoef = 1.375;
	break;
case 'veryLow':
	activityCoef = 1.2;
	break;

}
alert(activityCoef);

var isFormula1 = obj.formula1.checked;
var isResCal = obj.resCal.checked;

var res = 0;

if (isFormula1 == true)
{
if (isMan == true)
{
 res = 10 * weight + 6,25 * height - 5 * age + 5;
alert("res = " + res)
}
else
{

}

}
else
{

}

}