// const test=()=>{

//     alert("test");


// }


const allA=document.querySelectorAll('li');


// allA.forEach(a=>a.addEventListener('click',()=>{console.log("test")}));
allA.forEach((a)=>{
    a.addEventListener('click',()=>{console.log("test")});


})




const btn=document.querySelectorAll('button');

btn.forEach((b)=>{

    btn[0].addEventListener('click',()=>{console.log("test")});
    btn[1].addEventListener('click',()=>{console.log("test1")});
    btn[2].addEventListener('click',()=>{console.log("test2")});


})
