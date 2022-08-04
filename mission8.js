var i = 0;
var a='Hello'
for (i = 0; i < 10; i++)
{
    console.log(a);
}

while(i>10){
    i++;
    console.log(a);
}

var list=[1,2,3];
for (i of list)
{
    console.log(i);
}
var iterable = [10, 20, 30];

for (var value of iterable) {
  console.log(value); // 10, 20, 30
}
var obj = {
    a: 1, 
    b: 2, 
    c: 3
};

for (var prop in obj) {
    console.log(prop, obj[prop]); // a 1, b 2, c 3
}