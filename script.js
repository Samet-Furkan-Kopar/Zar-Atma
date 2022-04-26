var zarbir=document.getElementById("oyuncubir").children[3];
var sallabir=document.getElementById("oyuncubir").children[4]
var zariki=document.getElementById("oyuncuiki").children[3];
var sallaiki=document.getElementById("oyuncuiki").children[4];
var skorbir=document.getElementById("skorbir").children[3];
var skoriki=document.getElementById("skoriki").children[3];

sallaiki.disabled=true;
var skrbir=0,skriki=0;
var sira=0;
var rnd=0;
var oyunbitti=false;
///deneme
function salla(oyuncu){
    if(!oyunbitti){
        sira=oyuncu;
        zarsalla=setInterval(zar,150);
    }
  
}


var zar =function(){
    
    rnd=Math.ceil(Math.random()*6);

    if(sira===1){
        sallabir.disabled=true;
        switch(rnd){    
            case 1:
            zarbir.src="resim/zar1.png";
            break;
            case 2:
            zarbir.src="resim/zar2.png";
            break;
            case 3:
            zarbir.src="resim/zar3.png";
            break;
            case 4:
            zarbir.src="resim/zar4.png";
            break;
            case 5:
            zarbir.src="resim/zar5.png";
            break;
            case 6:
            zarbir.src="resim/zar6.png";
            break;
        }
    }

   else if (sira===2){
       sallaiki.disabled=true;
        switch(rnd){    
            case 1:
            zariki.src="resim/zar1.png";
            break;
            case 2:
            zariki.src="resim/zar2.png";
            break;
            case 3:
            zariki.src="resim/zar3.png";
            break;  
            case 4:
            zariki.src="resim/zar4.png";
            break;
            case 5:
            zariki.src="resim/zar5.png";
            break;
            case 6:
            zariki.src="resim/zar6.png";
            break;
        }
    }
}
function at(){
    clearInterval(zarsalla);
    if(sira===1){
        skrbir+=rnd;
        skorbir.innerHTML=skrbir;
       if(skrbir>50)
            {oyunbitti=true;
            alert("Oyunun Kazananı 1 Kumaralı Oyuncudur.");
        }

        sallaiki.disabled=false;
    }
    if(sira===2){
        skriki+=rnd;
        skoriki.innerHTML=skriki;
        if(skoriki>50){
            oyunbitti=true;
            alert("Oyunun Kazananı 2 Kumaralı Oyuncudur.");
        }

        sallabir.disabled=false;
    }

}
