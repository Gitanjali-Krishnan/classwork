//1. How many digits in a number
//2. Prime number or not
//3. How many vowels in a word

//1. 
// function a(input){
//     var b=input.toString()
//     console.log(b.length)
// }
// a(56756)

//2. 
// function a(input){

//     let flag = 0;
   
//     for(let i=2; i*i<=input; i++)
//     {
//         if(input%i==0)
//         {
//               flag = 1;

//         }
//     }
//     if(flag==0)
//     {
//         console.log("Given number is prime")

//     }
//     else{
//         console.log("Given number is composite");
//     }
// }
// a(123)

//3. 
function a(input){
    let count =0;
    for(let i=0; i<input.length; i++)
    {
        if(input[i]=="a" || input[i]=="e" || input[i]=="i" || input[i]=="o" ||input[i]=="u")
        {
                               count++;
        }
    }
    console.log('The number of vowels in the given string is', count );
}
a("vowel")