let count=0;
let p1=0;
let p2=0;
let ifwinp1=1;
let ifwinp2=1;
function showfn(id,num) {
let div2= document.getElementById(id);
if (count<9){
    let c=div2.innerText;
if(c==""){
if(count%2==0) {
    div2.innerText="0";
    p1+=num;
        // if(p1>15) p1-=num;
    ifwinp1++;
    // if(p1=="123" || p1=="456" || p1== "789"  ||  p1=="147" ||  p1=="258"||  p1== "369" || p1== "159" || p1== "357" ) {
    // if((p1==6 ||  p1==15  || p1==24 ||  p1==12  || p1==18) && ifwin>=3 ){
    if(ifwinp1>3){
    if(p1==15) {
        let div3= document.getElementById("r");
        div3.innerText="P1 is the fukin winner";
        count=10;
    }
    else{
        p1-=num;
    }
}
}
else{
    div2.innerHTML="1";
    p2+=num;
    ifwinp2++;
    // if((p2=="123" || p2=="456" || p2== "789"  ||  p2=="147" ||  p2=="258"||  p2== "369" || p2== "159" || p2== "357")) {
        // if((p2==6 ||  p2==15  || p2==24 ||  p2==12  || p2==18) && ifwin>=3 ) {
        if(ifwinp2>3){
        if(p2==15 ){
        let div3= document.getElementById("r");
        div3.innerText="P2 is winner";
        count=10;
    }
    else p2-=num;
}
}
}
count++;
}
}
