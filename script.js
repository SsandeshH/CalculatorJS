let currentInput="";
let result="";

function display(value){
    document.querySelector(".screen").textContent=value;
}

let boxes=document.querySelectorAll(".box");
boxes.forEach(box => {
    box.addEventListener("click",function(event){
        let id=event.target.id;
        
        if(id === "AC"){
            // console.log("clicked");
            currentInput="";
            result="";
            display("");
        }else if(id === "="){
            result=eval(currentInput);
            display(result);
        }else{
            currentInput+=id;
            display(currentInput);
        }
    })

});
