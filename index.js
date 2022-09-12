let person
let amount
let sum=0
s=""

function startGame()
{
person = prompt("Please enter your name");

amount = prompt("How much you want to win:");
document.getElementById("name").innerText= `${person} :$ ${amount}`
document.getElementById("NewGame").disabled =false;
let card= Math.floor((Math.random() *13)) +1
sum=card
if (card===1)
{
  s=s+ "A "
}
else if (card===11)
{
  s=s+ "J "
}
else if (card===12)
{
  s=s+ "Q "
}
else if (card===13)
{
  s=s+ "K "
}
else {
s=s+ card + " "
}
let Cardresult= document.getElementById("card");
Cardresult.innerText= "card :" + s;
let sumResult= document.getElementById("sum");
sumResult.innerText="Sum :" + sum
document.getElementById("startGame").disabled = true;
}


function NewCard(){
  let card=  Math.floor((Math.random() *12)) +1
  if (card===1)
  {
    s=s+ "A "
  }
  else if (card===11)
  {
    s=s+ "J "
  }
  else if (card===12)
  {
    s=s+ "Q "
  }
  else if (card===13)
  {
    s=s+ "K "
  }
  else{
    s+=card+" "
  }
  sum+=card

  let Cardresult= document.getElementById("card");
  Cardresult.innerText= "card :" + s;
  let sumResult= document.getElementById("sum");
  sumResult.innerText="Sum :" + sum
  if (sum <21){

    let showMessage= document.getElementById("message1")
    showMessage.innerText = "Do you want to pick another Card?"
  }else if (sum===21) {
    let showMessage= document.getElementById("message1")
     showMessage.style.color = "#FBDF07";
    showMessage.innerText= `${person}!You won $ ${amount} 🥰! Please play once more once more!`
    document.getElementById("NewGame").disabled = true;
    document.getElementById("startGame").disabled = false;
    Cardresult.innerText= "Your cards :" + s;
    s=""
    let win=document.getElementById("winmsg")
    win.innerHTML='<a href="https://www.instagram.com/souravobl/">Claim your rewards!</a>'



  }else
  {
      let showMessage= document.getElementById("message1")
      showMessage.style.color = "#EB1D36";
      showMessage.innerText=`Sorry ${person} 😭!! You have Lost ${amount} $.But never Give Up.You will definetly win next time.Play Oncemore`
      document.getElementById("NewGame").disabled = true;
      document.getElementById("startGame").disabled = false;
      sum=0
      s=""
      let win=document.getElementById("winmsg")

  win.innerHTML='<a  href="https://www.linkedin.com/in/sourav-mondal-992975170/">You can ask him how to win!</a>'


}

}
