$(document).ready(function () {
    //    console.log("ready !"); 
  
    var info_P = 
     {
        
            "1": {
                "nom": " Laplace",
                "prenom": "Lisa",
                "dateN": "24 mai 1999",
                "tel": "0617763106",
                "mail": "lisa.laplace12@gmail.com",
                "nationalite": "française",
                "permis": "permis B",
                "texte": "Ego vero sic intellego, Patres conscripti, nos hoc tempore in provinciis decernendis perpetuae pacis habere oportere rationem. Nam quis hoc non sentit omnia alia esse nobis vacua ab omni periculo atque etiam suspicione belli?",
            }
        }
       
     
   
   
   
       $.each(info_P, function (indexInArray, elt) { 
   
           var textI = 
           '<\p><p class="fw-bold">Nom : </p><p>' + elt.nom 
           + '</p><p class="fw-bold">Prenom : </p><p>' + elt.prenom   
           + '</p><p class="fw-bold">Date de naissance  : </p><p>' + elt.dateN  
           + '</p><p class="fw-bold">Nationalité : </p><p>' + elt.nationalite  
           + '</p><p class="fw-bold">Numéro de téléphone : </p><p>' + elt.tel   
           + '</p><p class="fw-bold">Mail : </p><p>' + elt.mail   
           + '</p><p class="fw-bold">Permis : </p><p>' + elt.permis  
           + '</p>';
   

            $("#info").html(textI);
            $("#textInfo").html(elt.texte);
       });

     

  });