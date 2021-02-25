$(document).ready(function () {
    //    console.log("ready !"); 
  
    var experience = 
     {
         "1": {
             "nom": "Laboratoire UMR1092",
             "date": "avril 2019 -juin 2019",
             "lieu": "Universite de limoges, Limoges France",
             "type": "Stage",
             "mission": "Stage",
         },
         "2": {
            "nom": "MCDonald's",
            "date": "juillet 2018",
            "lieu": "Aurillac, France",
            "type": "Emploi saisonnier",
            "mission": "équipière polyvalente",
        },
        "3": {
            "nom": 'Association du spectacle "hier un village"',
            "date": "2017",
            "lieu": "Flagnac, France",
            "type": "bénévole",
            "mission": "préparation de buffet",
        }
     }
    
  



    $.each(experience, function (indexInArray, elt) { 
        //console.log(indexInArray);
        //console.log(elt.nom)

        var textC = 
        '<\p><p class="fw-bold">Lieu : </p><p>' + elt.lieu 
        + '</p><p class="fw-bold">Type : </p><p>' + elt.type   
        + '</p><p class="fw-bold">Mission  : </p><p>' + elt.mission             
        + '</p>';

        var nomA = elt.nom+" | "+elt.date;

         var button = "#button"+indexInArray
         $(button).text(nomA) 

         var divText = "#textA"+indexInArray
         $(divText).html(textC);
    });

     

  });