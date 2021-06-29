function executarAcao() {
    var nome=document.getElementById("nome").value;
    var idade=document.getElementById("idade").value;

     if (idade>=18) {
       
         window.location.href ="https://espetaculosonline.com/teatro-adulto";
         alert("Boa diversão!")
        } 
     
       else if (idade< 18) {
           window.location.href ="https://espetaculosonline.com/teatro-infantil";
           alert("Boa diversão!")

         }
        else{
          console.log ("assista a Conferência dos pássaros")
          
        }
        }          
      