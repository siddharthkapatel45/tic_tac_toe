
    let boxes = document.getElementsByClassName('box');

const reset=()=>{
    for(element of boxes)
    {
        element.innerText="";
    }
    
}
reset();


let turn="X";
// sign change function
const change_sign=()=>{
    if(turn==="X")
    {
        let winner=document.getElementById('text')
        winner.innerHTML="<h1>player1</h1>";
    turn="0";
   
    }
    else
    {
        let winner=document.getElementById('text')
        winner.innerHTML="<h1>player2</h1>";
turn ="X";
}

}
// game logic
for(let element of boxes)
{
    element.addEventListener('click',()=>{
        if(element.innerText==='')
        {
         


       
            element.innerText=turn;
          
            
            change_sign();
            
            if(win(turn))
           {
            
             reset();
           }
        
       
      
          

        }
        
        
    })
    

}

but.addEventListener('click',()=>{
    for(element of boxes)
    {
        element.innerText="";
    }
})


const win = (player) => {
    // Loop through the 'box' elements and check their 'innerText'
    
    const boxText=document.getElementsByClassName('box');
    if (
        (boxText[0].innerText === player && boxText[1].innerText === player && boxText[2].innerText === player) ||
        (boxText[3].innerText === player && boxText[4].innerText === player && boxText[5].innerText === player) ||
        (boxText[6].innerText === player && boxText[7].innerText === player && boxText[8].innerText === player) ||
        (boxText[0].innerText === player && boxText[3].innerText === player && boxText[6].innerText === player) ||
        (boxText[1].innerText === player && boxText[4].innerText === player && boxText[7].innerText === player) ||
        (boxText[2].innerText === player && boxText[5].innerText === player && boxText[8].innerText === player) ||
        (boxText[0].innerText === player && boxText[4].innerText === player && boxText[8].innerText === player) ||
        (boxText[2].innerText === player && boxText[4].innerText === player && boxText[6].innerText === player)
    ) {
        let winner=document.getElementById('text')
      winner.innerHTML=`<h1>${player} won the game</h1>`;
        return true;
    }
   

else 


    return false;
};
let c=0;



