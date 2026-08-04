// this : it is a keyword which refer us current context or valu in the objects key or object 
const user={
    username:"rushi",
    price:99,
    welcomemesaage: function (){
        console.log(` ${this.username} welcome to website`);// here this key word taek the current 
        // value of the username 
           console.log(this);// it wil give us a whole object becaue it refers a current values in the object 

        

    }
}
user.welcomemesaage();
// if i change this usernme to sam 
user.username="sam"
user.welcomemesaage();// now sam will be at the place of rushi because this give  us current value 
console.log(this)// empty object because it dont have any current context but if i do consol.log(this)in browser
// it will give us and output as a window object 
function chai(){
    let username="rsk"
    console.log(this.username);// it wil give us an output of undefine so we cant used it in function for currnt context of variables 
    console.log(this);// it will give us so much values 
}
chai();

// arrow function : we can store the func in variable and represent using arrwo 
const chaiiii=()=>{
    let name="rushi"
    console.log(this.name);// undefined 
    console.log(this);// we will get and output of empty object 
}
chaiiii();
// implcit return means no nedd to have { function written in this and no need of return key work}
const addtwo= (n1,n2)=> (n1+n2)
console.log(addtwo(3,4));// output will be 7 