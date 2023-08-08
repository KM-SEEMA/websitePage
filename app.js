var list=document.querySelectorAll(".box")

for(let i=0;i<list.length;i++){
    list[i].addEventListener("click",()=>{
    for(let j=0;j<list.length;j++){
        if(list[j].classList.contains("selectedBox")){
            list[j].classList.remove("selectedBox");
            list[j].children[0].children[0].checked=false;
        }
    }
    list[i].classList.add("selectedBox");
    list[i].children[0].children[0].checked=true;
})
}