$(document).ready(function () {
    //    console.log("ready !"); 
  
    var info_P = 
     {
        
            "1": {
                "nom": " Linkedin",
                "lien": "https://www.linkedin.com/in/lisa-laplace-090742183/",
            },
            "2": {
                "nom": " Github",
                "lien": "github.com/Llaplace/",
            }
        }
       
     
   
   
   
       $.each(info_P, function (indexInArray, elt) { 
   
           var textI = 
           '<p class="fw-bold">Nom : </p><p>' + elt.nom 
           + '</p><br><p class="fw-bold"> Lien : <a href="'+elt.lien
           +'" class="link-primary">'+elt.lien
           +'</a>' 
           + '</p>';
   
           var col = "#col"+indexInArray
           $(col).html(textI) 
       });

     

  });