let btns= document.querySelectorAll(".btn");
let para=document.querySelector("p");
let tx=document.querySelector("win");
let new1=document.querySelector(".main");
let cur="X"
btns.forEach(btn=>{btn.onclick=()=>{
   if (btn.innerText==""){
    if(cur=="X"){
        btn.innerText=cur;
        cur="O"
    }
    else{
        btn.innerText=cur;
        cur="X"
    }
    checkwin();
}
};});
let re=document.querySelector("#res");
re.onclick=()=>{
 btns.forEach((val)=>{
    val.innerText="";
    cur="X"
 });
};
let re1=document.querySelector("#res1");
re1.onclick=()=>{
 btns.forEach((val)=>{
   para.style.visibility="hidden"
    new1.style.visibility="visible"
    val.innerText="";
    tx.innerText=""
  para.style.margin="0%"
    cur="X"
 });
};
let winp=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]
const checkwin=()=>{
    for(let p of winp){
     if (btns[p[0]].innerText=="X" && btns[p[1]].innerText=="X" && btns[p[2]].innerText=="X"){
        tx.prepend("Congratulation ! X wins")
        new1.style.visibility="hidden"
        para.style.margin="25%"
        para.style.visibility="visible"
        btns.disable;

     }
     else if(btns[p[0]].innerText=="O" && btns[p[1]].innerText=="O" && btns[p[2]].innerText=="O"){
      tx.prepend("Congratulation ! O wins")
        new1.style.visibility="hidden"
        para.style.margin="25%"
        para.style.visibility="visible"
        btns.disable;
     }
    }
}