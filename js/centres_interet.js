$(document).ready(function () {
    //    console.log("ready !"); 
  
    var centre_I = 
     {
         "1": {
            "nom": "Lecture",
             "texte": "1000 livres en 2",
         },
         "2": {
            "nom": "Sport",
            "texte": "step, bachata, danse",
        },
        "3": {
            "Arts": "Lecture",
            "texte": 'peinture, diy',
        }
     }
    
  



    $.each(centre_I, function (indexInArray, elt) { 
        //console.log(indexInArray);

        var textM = "<p>"+elt.texte+"</p>"

        
        var label = "#label"+indexInArray
        $(label).text(elt.nom);

         var modal = "#modal"+indexInArray
         $(modal).html(textM) 

    });

     

  });