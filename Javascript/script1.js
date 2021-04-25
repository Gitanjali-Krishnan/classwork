// var x
// x=parseInt(prompt("One number:"))   
// var y=parseInt(prompt("Another number"))
// alert(x+y)
// alert(x-y)
// alert(x*y)
// alert(x/y)

// console.log(9|5)
// console.log(9&5)

// var x
// x=parseFloat(prompt("Radius:"))
// alert(3.14*x**2)

// var id
// id={
//     name: "Gitanjali",
//     height: 170.5,
//     class: 5
// }
// console.log(id.class)

// var rectangle
// rectangle={
//     length: 5,
//     width: 3
// }
// alert(rectangle.length*rectangle.width)

// var pass
// pass=true
// console.log

// var name='Gitanjali Krishnan'
// console.log(name.length)

// var name = "Ayush is my name \"Ayush\"" - escape sequence 
// console.log(name);

// var n
// n = String("Gitanjali")

//Comparison Operaters

// var a="Gitanjali"
// var b="gitanjali"
// console.log(a==b)

//  ==     This is a comparision operator and this operator evaluates whether two values are equal or not 
//  ===     This is a comparision operator and this evaluates whether two values and their data types are equal or not

// These are comparison operaters

// >
// <
// >=
// <=
// !=
// !==

// var age=10
// if(age>=18){console.log("You are allowed to vote")}
// if(age<18){console.log("You are not allowed to vote")}

// if(1==1){console.log("Gitanjali")}

// var length=parseInt(prompt("A side length"))
// var width=parseInt(prompt("Another side length"))
// if(length==width){
//     document.write("square")
//     var k="hello"
//     console.log(k)
// }
// if(length!==width){
//     document.write("Not a square")
// }

// var onename=prompt("First player's name")
// var morename=prompt("Second player's name")
// if(onename.length>morename.length){
//     document.write("A is the winner")
// }
// if(onename.length==morename.length){
//     document.write("There is a tie")
// }
// if(onename.length<morename.length){
//     document.write("B is the winner")
// }

// if(5<=2){console.log("Hello")}
// else{console.log("Bye")}

// if(5==5 | 1>2){
//     let b=9
//     console.log(b)
// }

// let b = 9
// console.log(b)

// Code inside if block won't be executed if -
// if(false)
// if(Empty String)
// if(0)

// var a="Gitanjali"
// var b=a.toLowerCase();
// console.log(a,b)

// if(10>5){console.log(1)}
// else if(2>1){console.log(2)}
// else{console.log(3)}
// VM249:1 1
// undefined
// if(1>5){console.log(1)}
// else if(2>1){console.log(2)}
// else{console.log(3)}
// undefined
// if(1>5){console.log(1)}
// else if(0>1){console.log(2)}
// else{console.log(3)}

// var name="abcde"
// console.log(name[0])
// VM458:2 a
// undefined
// var name="abcde"
// console.log(name[1])
// VM464:2 b
// undefined
// var name="ghghgh"
// console.log(name[3])
// VM470:2 h
// undefined
// var name="abcde"
// console.log(name[6])
// VM487:2 undefined
// undefined
// var hi="abc"
// var hello="def"
// var bonjour=hi[0]
// console.log(bonjour)
// VM900:4 a
// undefined
// var hi="abc"
// var hello="def"
// var bonjour=hi[0]+hello[1]
// console.log(bonjour)
// VM954:4 ae
// undefined
// var hi="abc"
// var hello="def"
// var bonjour=hi[0]+hello[1]+hello[2]
// console.log(bonjour)


// //var name = "Ayush Addhyan"
// var length = name.length - This is to calculate no. of characters in the string
//Index - To access any particular character or element in string or array, we can use index   varname[2]

// -    Searching



// var info = "Hello, my name is Ayush, and people call me Ayush"
//    var pos = info.indexOf("Ayush")
//    console.log(pos);   Output - 18
// var info = "Hello, my name is Ayush, and people call me Ayush"
//    var pos = info.search("Ayush")
//    console.log(pos);   Output - 18

// var info = "Hello, my name is Ayush, and people call me Ayush"
//    var pos = info.indexOf("Ayush", 20)
//    console.log(pos);   Output - 18

// var info = "Hello, my name is Ayush, and people call me Ayush"
//    var pos = info.lastIndexOf("Ayush")
//    console.log(pos);   Output - 44
   


//    Extracting parts of the string

// var a="My name is Gitanjali Krishnan. I am ten years old and I live in North America. Gitanjali is my name. "
// var b=a.replace("Gitanjali" , "Ayush")
// console.log(b)

// var a="My name is Gitanjali Krishnan. I am ten years old and I live in North America. Gitanjali is my name. "
// var b=a.replace("Gitanjali" , "Ayush")
// console.log(b)
// My name is Ayush Krishnan. I am ten years old and I live in North America. Gitanjali is my name. 
// undefined
// var a="My name is Gitanjali Krishnan. I am ten years old and I live in North America. Gitanjali is my name. "
// var b=a.replace(/Gitanjali/g , "Ayush")
// console.log(b)
// VM132:3 My name is Ayush Krishnan. I am ten years old and I live in North America. Ayush is my name. 

// var a=8
// var b=5
// console.log(a+b)

// document.write("Nina ")
// document.write("Gitanjali ","Nina" ,"Josephine")
// var a="A",b="B",c="C",d="D"
// console.log(a+b+c+d)

// var b="k"
// var people=["Nina","Josephine","Eliot","Weis","Gitanjali",5,4,2,6,7]
// document.write(people)

// console.log(people.length)

// var anything=["Nina","Josephine",74,"Weis",56]
// console.log(anything)
// anything.sort()
// console.log(anthing)

// push()
// pop()
// shift()
// unshift()

// arr.push(9)
// arr.push("ghyjtgdhfhjd")
// arr.push(4)

// arr.pop()
// console.log(arr)

// var arr=[3,4,5,7,3,6,1]
// console.log(arr)
// arr.unshift(30)
// console.log(arr)

// switch(2+3)
// {
//         case 3:
//             console.log("a");
//          break;


//         case 5:
//             console.log("b");
//             console.log("Another Statement")
//             break;
        

//         case 7:
//           console.log("c");
//            break;


//         default:
//             console.log("d");

// }

// while(condition){code}

// Infinite Loop
// var i = 2;

// while(i > 1)
// {
//     console.log(i);

// }
// console.log("Ayush");
// console.log("Gitanjali");

// var i = "Gitanjali"
// var count = 7

// while(count<=11)
// {
//     console.log(i);
//      count = count + 1;
    
// }

// var i =1;
//         while(i<=100)
//         {
//               document.write(i + " ");
//                i = i + 1;
             
//         }

// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta http-equiv="X-UA-Compatible" content="IE=edge">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
// </head>
// <body>
//     <div id="display">                


//     </div>
     
//     <script>
        
        
        
        
//       var number = parseInt(prompt("Enter the number : "))
     

//       var i = 1;
//       while(i<=10)
//       {   var temp = number * i;
//           //document.write(number.toString() + " x " + i.toString() +" = " + temp.toString());
//           document.getElementById("display").innerHTML += number.toString() + " x " + i.toString() +" = " + temp.toString() + "<br>"
//           i = i+1;

//       }








//     </script>


// </body>

// swapping
// var a=5
// var b=12
// var temp = a
// a = b
// b = temp
// console.log(a,b)

// var i=5
// while(i<101)
// {
//     console.log(i)
//     i=i+5
// }

// 1. while(condition) {
//     code
// }

// 2. do{
//     code
// } 
// while(condition)

//// for(intialization; condition; expression)
// {
//     code 
// }


// for(var i=0; i<5; i=i+1)
// {
//     console.log(i);
// // for(intialization; condition; expression)
// // {
// //     code 
// // }


// for(var i=0; i<5; i=i+1)
// {
//     console.log(i);

// }

// }

// function a(){
//     var people=["Nina","Josephine","Eliot","Weis","Gitanjali","Nina","Josephine","Eliot","Weis","Gitanjali","Nina","Josephine","Eliot","Weis","Gitanjali"]
   
//     var j = people.length;
//     for(var i=0; i<j; i++)
//     {
//         console.log(people[i]);
//     }
// }
// a()

// function b(name){
//     console.log(name)
// }
// b("II")

// var car={
//     color:"red",
//     speed: 100,
//     gear: [3,2,4,1]
// }
// console.log(car.gear[0])

// console.log(Math.PI)
// console.log(Math.sqrt(4))
// console.log(Math.floor(5.6))
// console.log(Math.ceil(3.2))
// console.log(Math.round(4.5))

// console.log(Math.floor(78.56))

// console.log(Math.abs(3.5))

// console.log(Math.pow(0.5,3))
// console.log(Math.max(5,7,65,89,3))
// console.log(Math.min(5,7,65,89,3))

// console.log(Math.random())
// var a=Math.random()
// console.log(Math.floor(a*11))
// var i =0
// while(i<10)
// {
//    console.log(i);
//    i++;
//    break
//    console.log(45)
// }
// console.log("Gitanjali");

// function a(){
//     console.log("Gitanjali")
//     if(1==1)
//     {
//         clearInterval(b);
//     }
// }
// var b = setInterval(a,2000)

// var i =0
// while(i<10)
// {
//    console.log(i);
//    i++;
//    if(i==4){
//        continue
//    }
//    console.log(456)
// }
// console.log("Gitanjali");

// function a(){
//     console.log(4526)
// }

// setTimeout(a,10000)

// Math.floor(Math.random()*k) //Gives Random Integers from 0 to k-1
// Math.floor(Math.random()*(max-min)) + min //Gives Random Integers from min to max-1        
// Math.floor(Math.random()*(max-min)) + min +1//Gives Random Integers from min to max          

// var a=[1,5,4,7,7,34,8,9,46] 
// a.sort()
// console.log(a)
// a.sort(function(m,n){return m-n}) // This will sort the array in ascending order
// console.log(a)
// a.sort(function(m,n){return n-m}) // This will sort the array in descending order
// console.log(a)

// var Gitanjali={height:121,weight:83,fwriter:"JK Rowling"}
// var Ayush={height:180,weight:121,fwriter:"Chetan B"}
// console.log()

// var d=new Date();
// console.log(d.getHours())
// console.log(d.getMinutes())
// console.log(d.getMilliseconds())
// console.log(d.getMonth())
// console.log(d.getDay())
// console.log(d.getFullYear())

// function a(){
//     console.log("Gitanjali")
// }
// a()

// function b(a,b){
//     return a+b
// }
// var a=b(3,4)
// console.log(a)

// sum = ()=>{
//     console.log("Ayush");
// }
// sum()

// a=(k)=>{
//     if(k%2==0){
//         console.log("The number is even. ")
//     }
//     else{
//         console.log("The number is odd. ")
//     }
// }
// a(565267625465625)

// function binary(k){
//     var s=""
//     while(k!=0){
//         if(k%2==0){
//             s="0"+s
//         }
//         else{s="1"+s}
//         k=Math.floor(k/2)
//     }
// return s;
// }
// var temp = binary(435463);
// var lindex = temp.length - 1;
// if(temp[lindex] =="1")
// {
//      console.log("The number is odd");
// }
// else
// {
//    console.log("The number is even")
// }

// template litirals

// var a="Gitanjali"
// var b=10
// console.log(`My name is ${a} and I am ${b} years old. `)

// var a={b:"Gitanjali",c:10,d:[5,4,6]}
// console.log(a.d[2])

//JSON

// var a={fname:"Gitanjali",lname:"Krishnan"}
// var b = JSON.stringify(a);

// console.log(b.fname);

// var c = JSON.parse(b);

// console.log(b)
// console.log(c);

// console.log(typeof(b));

// var a={s:"something",n:3542}
// var b=JSON.stringify(a);

// var c=JSON.parse(b)

// console.log(c)

