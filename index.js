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
let card= Math.floor((Math.random() *12)) +1
sum=card
s=s+ card + " "
let Cardresult= document.getElementById("card");
Cardresult.innerText= "card :" + s;
let sumResult= document.getElementById("sum");
sumResult.innerText="Sum :" + sum
document.getElementById("startGame").disabled = true;
}


function NewCard(){
  let card=  Math.floor((Math.random() *12)) +1
  sum+=card
  s+=card+" "
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



  }else
  {
      let showMessage= document.getElementById("message1")
      showMessage.style.color = "#EB1D36";
      showMessage.innerText=`Sorry ${person} 😭!! You have Lost ${amount}.But never Give Up.You will definetly win next time.Play Oncemore`
      document.getElementById("NewGame").disabled = true;
      document.getElementById("startGame").disabled = false;
      sum=0
      s=""
      var x = document.createElement("BUTTON");
      var t = document.createTextNode("Claim Rewards");
      x.appendChild(t);
      document.body.appendChild(x);
      x.id="claim"
      x.width="250px"
      x.border="none"
      document.getElementById("claim").innerHTML="You can contact us on 7907117234 .Additionally, you may click<a href='https://www.instagram.com/souravobl/'> here </a>"
      console.log(x.innerHTML)


}

}
