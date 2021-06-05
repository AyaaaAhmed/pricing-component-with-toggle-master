let myToggle = document.getElementById("switch");
let myPricessArray = Array.from(document.querySelectorAll(".price"));


myToggle.addEventListener("click",function(){
    if(myToggle.checked){
        if (myPricessArray[0].innerHTML.length == 6){
            for (let i = 0; i < myPricessArray.length; i++){
                myPricessArray[i].innerHTML = ((Number(myPricessArray[i].innerHTML)/10).toFixed(2)).toString();
             }
        }
    }
    else if(myPricessArray[0].innerHTML.length == 5){
        for (let i = 0; i < myPricessArray.length; i++){
            myPricessArray[i].innerHTML = (Number(myPricessArray[i].innerHTML)*10).toFixed(2).toString();
        }
    }
});
