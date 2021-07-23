var images=["father.jpg","mother.jpg","coolelderson.jpg","youngerson.jpg"];
var names=["M.N. Singh","Priyanka Singh","Aarav Singh","Ayansh Singh"];
var i=0;
function next(){
    if(i>3){
        i=0;
    }
 document.getElementById("familyimage").src=images[i];
 document.getElementById("name_of_person").innerHTML=names[i];
i++;
}