  var a = 24;
  var b = 9;
  var hour = 60;
  var quarter = 4;
  var array = [2,4,5,199,39,12,1];
  var count = 9;

  var car = {
    wheels: 4,
    passengers: 4,
    mileage: 20300,
    cost: 49928
  }

  var spaceship = {
    wheels: 18,
    rooms: 21,
    passengers: 29909394895803589193049389,
    cost: 0
  }

  var objectArray = [car, spaceship];

  //PART I

  //Function 1
  //Create a function that adds variables a and b, then divides them by 11.
function func1(num1, num2){
  var sum = (num1 + num2)/11;
  console.log(sum);
}
func1(a, b);

  //Function 2
  //Create a function that will console.log a value of 18.
function func2(){
  console.log(18);
}
func2();

  //Function 3
  //Create a function that will console.log the last element of the array by accessing the value from the array.
function func3(){
  var total = array[6];
  console.log(array[6]);
}
func3();


  //Function 4
  //Create a function that can divide hours by quarters, then add 10 to that result.
function func4(){
  var total = hour/quarter +10;
  console.log(total);
}
func4();

  //Function 5
  //Create a function that will multiply the 2nd and 3rd element from the array, then subtract 5 from that result.
function func5(){
var total = array[2] * array[3] - 5;
console.log (total);
}
func5();

  //Function 6
  //Create a function that will subtract the number of car wheels from the number of spaceship wheels.
function func6(){
  var total = spaceship.wheels - car.wheels;
  console.log(total);

}
func6();

  //PART II

  //Function 7
  //Create a function and using a for loop, iterate through the array. In this loop, increment the count of the variable count.
function func7(){
  for (var i = 0; 9<array.length; i++){
    count++;
  }
  console.log(count);
}
func7();
  //Function 8
  //Create a function and using a for loop, iterate through the objectArray. In this loop, increment the count of the passengers for the 1st element in the objectArray.
function func8(){
  for (var i=0 ; i<objectArray.length; i++){
    car.passengers++;
  }
  return(car.panssengers);
}
var x = func8();
console.log(x);
  //Function 9
  //Create a function that adds the 1st and 6th element of the array.
function func9(){
var result = array[0] + array[5];
return result
}
var y = func9();
console.log(y);