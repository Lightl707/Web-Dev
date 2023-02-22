//1.What's the result of OR?
alert( null || 2 || undefined ); //2

//2.What's the result of OR'ed alerts?
alert( alert(1) || 2 || alert(3) ); //1 then 2

//3.What is the result of AND?
alert( 1 && null && 2 ); // null

//4.What is the result of AND'ed alerts?
alert( alert(1) && alert(2) ); // 1 then underfined

//5.The result of OR AND OR
alert( null || 2 && 3 || 4 ); //3

//6.Check the range between
if(age >= 14 && age <= 90);

//7.Check the range outside
if(!(age >= 14 && age <= 90));
if(age < 14 || age > 90);

//8.A question about "if"
if (-1 || 0) alert( 'first' );   //first
if (-1 && 0) alert( 'second' );
if (null || -1 && 1) alert( 'third' );  //third

//9.Check the login
let login = prompt("Enter your login:", "");

if (login === 'Admin') {

    let password = prompt('Password?', '');

    if (password === 'TheMaster') alert('Welcome!');
    else if (password === '' || password === null)  alert('Canceled');
    else alert('Wrong password');
} 
else if (userName === '' || userName === null) alert('Canceled');
else alert("I don't know you");
