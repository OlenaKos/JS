function CalculateCalories(obj)
{
var isMan = obj.sexMan.checked;
alert(isMan);
var activity = obj.lstActivity.value;
var isFormula1 = obj.formula1.checked;
var isResCal = obj.resCal.checked;
var isHeightS = obj.heightS.checked;
var isWeightK = obj.weightK.checked;
var age = parseInt(obj.txtAge.value);
var weight = parseInt(obj.txtWeight.value);
if (isWeightK == false)
{
weight *= 0.453592;
}
var height = parseInt(obj.txtHeight.value);
if (isHeightS == false)
{
height *= 30.48;
}

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


var res = 0;

if (isFormula1 == true)
{
	if (isMan == true)
	{
 		res = (10 * weight + 6,25 * height - 5 * age + 5) * (activityCoef);
	}
	else
	{
 		res = (10 * weight + 6,25 * height - 5 * age - 161) * (activityCoef);
	}
}
else
{
	if (isMan == true)
	{
 		res = (88,36 + (13,4 * weight) + 4,8 * height - 5,7 * age) * (activityCoef);
	}
	else
	{
 		res = (44,76 + (9,2 * weight) + 3,1 * height - 4,3 * age) * (activityCoef);

	}
}

if (isResCal  == false)
{
res *= 4,1868;
}
alert("res = " + res)

}