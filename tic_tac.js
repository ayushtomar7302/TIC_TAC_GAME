//TIC TAC TOE
 alert('start a game')
let username1=prompt('enter the name')
let username2=prompt('enter the name')
let boxes=document.querySelectorAll('.box');
let reset=document.querySelector('#reset');
let turn1=true;
let win=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
boxes.forEach((box) => {
    box.addEventListener('click',()=>{
        console.log('box was clicked');
        if (turn1==true){
            box.innerText='0';
            turn1=false;
        }else{
            box.innerText='+';
            turn1=true;
        }
        box.disabled=true;
        checkwinner();
    });
    let checkwinner=() =>{
        for(pattern of win){
             let pos1=boxes[pattern[0]].innerText;
             let pos2=boxes[pattern[1]].innerText;
             let pos3=boxes[pattern[2]].innerText;
             if(pos1!='' && pos2!='' && pos3!=''){
                if(pos1==pos2 && pos2==pos3){
             let winnerName = pos1 === '0' ? username1 : username2;
            alert(`🎉 ${winnerName} wins!`);
                
            }
            }
           
        
        }
    }
});
reset.addEventListener('click',()=>{
  //  alert('start a new game')
    location.reload()
})
let mode=document.querySelector('#mode')
let currmode='light';
mode.addEventListener('click',()=>{
    if(currmode=='light'){
        currmode='dark'
        document.querySelector('body').style.backgroundColor='black';
                document.querySelector('body').style.color='white';
                 document.querySelector('h1').style.color='white';
                
        boxes.forEach(box => {
            box.style.backgroundColor = '#afd1e7ff';
            box.style.color = 'darkred';
            box.style.border = '1px solid white';
        });
        
    }else{
        currmode='light'
            document.querySelector('body').style.backgroundColor='white';
            document.querySelector('body').style.color='black';
             document.querySelector('h1').style.color='yellow';
            
        boxes.forEach(box => {
            box.style.backgroundColor = '#040829ff';
            box.style.color = 'white';
            box.style.border = '1px solid white';
        });
    }
})
