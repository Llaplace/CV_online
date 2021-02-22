$(document).ready(function () {
//    console.log("ready !"); 

var competence = [
    ["informatique","SQL","2 ans"],
    ["informatique","C","2 ans"],
    ["informatique","Perl","2 ans"],
    ["langue","anglais","2 ans"],
    ["langue","français","2 ans"],
    ["biologie","NCBI","2 ans"],
    ["biologie","génomique","2 ans"],
]

$.each(competence, function(index,elt){
    console.log(elt);
    var ligne = "<tr><td>"+elt[1]+"</td><td>"+elt[0]+"</td><td>"+elt[2]+"</td></tr>"
    $("tbody").append(ligne);
})


});