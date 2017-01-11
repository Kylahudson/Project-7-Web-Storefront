/**
 * Created by kyla.hudson432 on 1/10/17.
 */
var background=document.getElementById("leftside");

background.onclick=function loop(){
var shoes=["1","2","3","4","5","6"];
shoes[0].src="shoes.jpg";
shoes[1].src="nike.jpg";
shoes[2].src="adidas.jpg";
shoes[3].src="vans.jpg";
shoes[4].src="blackshoes.jpg";
shoes[5].src="whitevans.jpg";

   var i;
    for(i=0; i<shoes.length; i++){
        if (shoes.length) {
            setTimeout(loop, 70000);
        }
    }





};
