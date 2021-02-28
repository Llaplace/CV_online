$(document).ready(function () {
  //    console.log("ready !"); 

  var competence = [
    ["langue", "anglais", "B1"],
    ["langue", "français", "B1"],
    ["informatique", "Angular", "2"],
    ["informatique", "Bio Perl", "1"],
    ["informatique", "Bootstrap", "4"],
    ["informatique", "C", "1"],
    ["informatique", "Caml", "3"],
    ["informatique", "CSS", "5"],
    ["informatique", "Django", "3"],
    ["informatique", "HTML", "5"],
    ["informatique", "Java", "3"],
    ["informatique", "Javascript", "4"],
    ["informatique", "Node js", "3"],
    ["informatique", "Perl", "2"],
    ["informatique", "PHP", "2"],
    ["informatique", "Postgres", "3"],
    ["informatique", "Python", "3"],
    ["informatique", "SQL", "4"],
    ["informatique", "Unix shell", "3"]
  ]
 
  function niveau(nb) {
    var star = "";
    switch (nb) {
      case "1":
        star = '<i class="fas fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i>'
        break;
      case "2":
        star = '<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i>'
        break;
      case "3":
        star = '<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i>'
        break;
      case "4":
        star = '<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="far fa-star"></i>'
        break;
      case "5":
        star = '<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>'
        break;

      default:
        star = '<i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i>'
        break;
    }
    return star
  }

  // remplissage tableau
  $.each(competence, function (index, elt) {
    //  console.log(elt);
    if (elt[0] == "langue") {
      var ligne = "<tr><td>" + elt[1] + "</td><td>" + elt[0] + "</td><td>" + elt[2] + "</td></tr>"
      
    } else {
       ligne = "<tr><td>" + elt[1] + "</td><td>" + elt[0] + "</td><td>" + niveau(elt[2]) + "</td></tr>"
      
    }
    $("tbody").append(ligne);
  })


  //barre de recherche sur la première colonne
  $("#myInput").on("keyup", function () {
    var value = $(this).val().toLowerCase();
    var nbValue = 0;
    $("#myTable tr").filter(function () {
      var isMatch = $(this).children(':eq(0)').text().toLowerCase().indexOf(value) > -1;
      $(this).toggle(isMatch)
      var rowCount = $('#myTable tr').length;

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
    } else {
      //filtre sur la 2eme colonne
      $("#myTable tr").filter(function () {
        $(this).toggle($(this).children(':eq(1)').text().toLowerCase().indexOf(value) > -1)
      });
    }

  }
});