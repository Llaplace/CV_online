$(document).ready(function () {
    //    console.log("ready !"); 
  
    var formation = 
     {
         "1": {
             "nom": "LICENCE INFORMATIQUE",
             "annee": "2020-2021",
             "lieu": "Université Champollion, Albi, France",
             "avis": "J'ai bien aimé",
             "competences":"SQL,javascript"
         },
         "2": {
            "nom": "DUT BIOINFORMATIQUE",
            "annee": "2017-2019",
            "lieu": "Aurillac, France",
            "avis": "J'ai bien aimé",
            "competences":"SQL,javascript,C, Perl"
        },
        "3": {
            "nom": "LICENCE INFORMATIQUE",
            "annee": "2017",
            "lieu": "Decazeville, France",
            "avis": "J'ai bien aimé",
            "competences":"cours de base"
        }
     }
    
  


     //Ajout des informations
    $.each(formation, function (indexInArray, elt) { 
        //console.log(indexInArray);
        //console.log(elt.nom)

        var textC = 
        '<\p><p class="fw-bold">Lieu : </p><p>' + elt.lieu 
        + '</p><p class="fw-bold">Avis : </p><p>' + elt.avis   
        + '</p><p class="fw-bold">Compétences apprises : </p><p>' + elt.competences             
        + '</p>';

        var nomA = elt.nom+" | "+elt.annee;

         var button = "#button"+indexInArray
         $(button).text(nomA) 

         var divText = "#textA"+indexInArray
         $(divText).html(textC);
    });

     

  });