$(document).ready(function () {
  //    console.log("ready !"); 

  var competence = [
    ["langue", "anglais", "B1"],
    ["informatique", "Angular", "base"],
    ["informatique", "Bio Perl", "base"],
    ["informatique", "Bootstrap", "acquis"],
    ["informatique", "C", "base"],
    ["informatique", "Caml", "en cours"],
    ["informatique", "CSS", "acquis"],
    ["informatique", "Django", "en cours"],
    ["informatique", "HTML", "acquis"],
    ["informatique", "Java", "en cours"],
    ["informatique", "Javascript", "acquis"],
    ["informatique", "Node js", "en cours"],
    ["informatique", "Perl", "base"],
    ["informatique", "PHP", "base"],
    ["informatique", "Postgres", "en cours"],
    ["informatique", "Python", "en cours"],
    ["informatique", "SQL", "acquis"],
    ["informatique", "Unix shell", "en cours"]
  ]


  // remplissage tableau
  $.each(competence, function (index, elt) {
    //  console.log(elt);
    var ligne = "<tr><td>" + elt[1] + "</td><td>" + elt[0] + "</td><td>" + elt[2] + "</td></tr>"
      
    
    $("tbody").append(ligne);
  })


  //barre de recherche sur la première colonne
  $("#myInput").on("keyup", function () {
    var value = $(this).val().toLowerCase();
    var nbValue = 0;
    $("#myTable tr").filter(function () {
      var isMatch = $(this).children(':eq(0)').text().toLowerCase().indexOf(value) > -1;
      $(this).toggle(isMatch)

      if (isMatch) {
        nbValue++
      }
    });
    //Si pas de résultat on affiche le texte
    if (nbValue == 0) {
      $("#zeroCompetence").show();
    } else {
      console.log("ok");
      $("#zeroCompetence").hide();
    }
  });

});

//Filtre sur le type avec radio button
$(":radio").change(function () {
  if (this.checked) {
    //console.log(this.value.toLowerCase())
    var value = this.value.toLowerCase();
    if (value == "tout") {
      $("#myTable tr").show()

    } else if (value =="informatique" || value == "langue"){
      //filtre sur la 2eme colonne
      $("#myTable tr").filter(function () {
        $(this).toggle($(this).children(':eq(1)').text().toLowerCase().indexOf(value) > -1)
      });

    }else{      
      //filtre sur la 3eme colonne
      $("#myTable tr").filter(function () {
        $(this).toggle($(this).children(':eq(2)').text().toLowerCase().indexOf(value) > -1)
      });
    }

  }
});