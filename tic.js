let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#reset-btn");
let newGameButton=document.querySelector("#new-btm");
let msgcontain=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let turnO=true;//playerX,playerO

const winpattern=[  [0,1,2],
                  [3,4,5],
                  [6,7,8],
                  [0,3,6],
                  [1,4,7],
                  [2,5,8],
                  [0,4,8],
                  [2,4,6]];

  
                       

  boxes.forEach((box) =>{
    box.addEventListener("click",() =>{
        console.log("box was clicked");
        if(turnO === true){//player o
        box.innerText="O";
         turnO=false;
        }else{// player x
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;
        checkwinner();
    });
}); 
                          
 //reset game
 const resetGame=()=>{ 
    turnO=true;
          enableBoxe();
           msgcontain.classList.add("hide");     
      }    


//anable game once winner
const enableBoxe = () =>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};

//disable game once winner
    const disableBoxes = () =>{
        for(let box of boxes){
            box.disabled=true;
        }
    };

    //msg-printer
  
   const showWinner =(winner) =>{
      msg.innerText=`congratulations,Winner is ${winner}`;
      msgcontain.classList.remove("hide");
      disableBoxes();

   }              
  


   //check-the-pattern-winner
  const checkwinner=()=>{
    for(let pattern of winpattern){
        // console.log(pattern);
        let pos1val=boxes[pattern[0]].innerText;
        let pos2val=boxes[pattern[1]].innerText;
        let pos3val=boxes[pattern[2]].innerText;
    if(pos1val != "" &&pos2val != "" && pos3val != ""){
    if(pos1val === pos2val && pos2val === pos3val){
        console.log("winner");
      showWinner(pos1val);
    }
   }
}
  };

  newGameButton.addEventListener("click",resetGame);
  reset.addEventListener("click",resetGame);
  