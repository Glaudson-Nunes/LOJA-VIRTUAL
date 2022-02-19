

/* FUNÇÂO PRINCIPAL IRA CONTER TODOS OS ELEMENTOS QUE CONTEM CLICKS OU AÇOES DE EVENTOS*/

onload = function Principal(){

    /* INCIO  ELEMENTOS DE CLIQEUS*/
    let butao_vestido = document.getElementById("bvestido");
    let butao_regatas = document.getElementById("bregatas");
    let butao_bermudas = document.getElementById("bbermudas");
    let butao_camisetas = document.getElementById("bcamisetas");
    let butao_calcas = document.getElementById("bcalças");
    let butao_moletons = document.getElementById("bmoletons");

    let butao2_none_vestido = document.getElementById("vestido2");
    let butao2_none_regata = document.getElementById("regatas2");
    let butao2_none_bermudas = document.getElementById("bermudas2");
    let butao2_none_camisetas = document.getElementById("camisetas2");
    let butao2_none_calcas = document.getElementById("calças2");
    let butao2_none_moletons = document.getElementById("moletons2");
    let butao_coraçao1 = document.getElementById("Bcoraçao1");
    let butao_coraoff1 = document.getElementById("coraOFF1");
    let butao_coraçao2 = document.getElementById("Bcoraçao2");
    let butao_coraoff2 = document.getElementById("coraOFF2");
    let butao_coraçao3 = document.getElementById("Bcoraçao3");
    let coraoff3 = document.getElementById("coraOFF3");
    let butao_coraçao4 = document.getElementById("Bcoraçao4");
    let coraoff4 = document.getElementById("coraOFF4");
    let butao_coraçao5 = document.getElementById("Bcoraçao5");
    let coraoff5 = document.getElementById("coraOFF5");
    let butao_coraçao6 = document.getElementById("Bcoraçao6");
    let coraoff6 = document.getElementById("coraOFF6");
    let add_desejo = document.getElementById("butao_add_desejo");
    let add_desejo2 = document.getElementById("butao_add_desejo2");


    butao_vestido.addEventListener("click",aparecer_menu_vestidos);
    butao2_none_vestido.addEventListener("click",ocultar_menu_vestidos);
    butao_regatas.addEventListener("click",aparecer_menu_regatas);
    butao2_none_regata.addEventListener("click",ocultar_menu_regatas);
    butao_bermudas.addEventListener("click",aparecer_menu_bermudas);
    butao2_none_bermudas.addEventListener("click",ocultar_menu_bermudas);
    butao_camisetas.addEventListener("click",aparecer_menu_camisetas);
    butao2_none_camisetas.addEventListener("click",ocultar_menu_camisetas);
    butao_calcas.addEventListener("click",aparecer_menu_calcas);
    butao2_none_calcas.addEventListener("click",ocultar_menu_calcas);
    butao_moletons.addEventListener("click",aparecer_menu_moletons);
    butao2_none_moletons.addEventListener("click",ocultar_menu_moletons);
    butao_coraçao1.addEventListener("click",addF1);
    butao_coraoff1.addEventListener("click",cooff1);
    butao_coraçao2.addEventListener("click",addF2);
    butao_coraoff2.addEventListener("click",cooff2);
    butao_coraçao3.addEventListener("click",addF3);
    coraoff3.addEventListener("click",cooff3);
    butao_coraçao4.addEventListener("click",addF4);
    coraoff4.addEventListener("click",cooff4);
    butao_coraçao5.addEventListener("click",addF5);
    coraoff5.addEventListener("click",cooff5);
    butao_coraçao6.addEventListener("click",addF6);
    coraoff6.addEventListener("click",cooff6);
    add_desejo.addEventListener("click",chamar_box_desejo);
    add_desejo2.addEventListener("click",chamar_box_desejo1)
     /* FIM  ELEMENTOS DE CLIQEUS*/


   

     /* INCIO  ELEMENTOS DE MOUSEMOVE E MOUSEOUT*/
    let img_visivel1 = document.getElementById("img-visivel1");
    img_visivel1.addEventListener("mousemove",trocarIMG1);
    let img_oculta1 = document.getElementById("img-oculta1");
    img_oculta1.addEventListener("mouseout",retornarIMG1);


    let img_visivel2 = document.getElementById("img-visivel2");
    img_visivel2.addEventListener("mousemove",trocarIMG2);
    let img_oculta2 = document.getElementById("img-oculta2");
    img_oculta2.addEventListener("mouseout",retornarIMG2);


    let img_visivel3 = document.getElementById("img-visivel3");
    img_visivel3.addEventListener("mousemove",trocarIMG3);
    let img_oculta3 = document.getElementById("img-oculta3");
    img_oculta3.addEventListener("mouseout",retornarIMG3);



    let img_visivel4 = document.getElementById("img-visivel4");
    img_visivel4.addEventListener("mousemove",trocarIMG4);
    let img_oculta4 = document.getElementById("img-oculta4");
    img_oculta4.addEventListener("mouseout",retornarIMG4);


    let img_visivel5 = document.getElementById("img-visivel5");
    img_visivel5.addEventListener("mousemove",trocarIMG5);
    let img_oculta5 = document.getElementById("img-oculta5");
    img_oculta5.addEventListener("mouseout",retornarIMG5);


    let img_visivel6 = document.getElementById("img-visivel6");
    img_visivel6.addEventListener("mousemove",trocarIMG6);
    let img_oculta6 = document.getElementById("img-oculta6");
    img_oculta6.addEventListener("mouseout",retornarIMG6);
     /* FIM  ELEMENTOS DE MOUSEMOVE E MOUSEOUT*/




   
}

function chamar_box_desejo(){

    let box = document.getElementById("box-lista_desejo");
    box.style.display = "block";

    let add_desejo = document.getElementById("butao_add_desejo")
    add_desejo.style.display = "none";

    let add_desejo2 = document.getElementById("butao_add_desejo2");
    add_desejo2.style.display = "block";
}

function chamar_box_desejo1(){

    let box = document.getElementById("box-lista_desejo");
    box.style.display = "none";

    let add_desejo = document.getElementById("butao_add_desejo")
    add_desejo.style.display = "block";

    let add_desejo2 = document.getElementById("butao_add_desejo2");
    add_desejo2.style.display = "none";

}


function addF1(){

    let butao_coraçao1 = document.getElementById("Bcoraçao1");
    butao_coraçao1.style.display = "none";

    let btcoracaoOFF1 = document.getElementById("coraOFF1");
    btcoracaoOFF1.style.display = "block";    

    let add1 = document.getElementById("add1");
    add1.style.display = "block";

}

function cooff1(){

    let butao_coraçao1 = document.getElementById("Bcoraçao1");
    butao_coraçao1.style.display = "block";

    let btcoracaoOFF1 = document.getElementById("coraOFF1");
    btcoracaoOFF1.style.display = "none";

    let add1 = document.getElementById("add1");
    add1.style.display = "none";
    
}

function addF2(){

    let butao_coraçao2 = document.getElementById("Bcoraçao2");
    butao_coraçao2.style.display = "none";

    let butao_coraoff2 = document.getElementById("coraOFF2");
    butao_coraoff2.style.display = "block";

    let add2 = document.getElementById("add2");
    add2.style.display = "block";


}

function cooff2(){

    let butao_coraçao2 = document.getElementById("Bcoraçao2");
    butao_coraçao2.style.display = "block";

    let butao_coraoff2 = document.getElementById("coraOFF2");
    butao_coraoff2.style.display = "none";

    let add2 = document.getElementById("add2");
    add2.style.display = "none";


}


function addF3(){

    let butao_coraçao3 = document.getElementById("Bcoraçao3");
    butao_coraçao3.style.display = "none";

    let coraoff3 = document.getElementById("coraOFF3");
    coraoff3.style.display = "block";

    let add3 = document.getElementById("add3");
    add3.style.display = "block";

}

function cooff3(){

    let butao_coraçao3 = document.getElementById("Bcoraçao3");
    butao_coraçao3.style.display = "block";

    let coraoff3 = document.getElementById("coraOFF3");
    coraoff3.style.display = "none";

    let add3 = document.getElementById("add3");
    add3.style.display = "none";


}

function addF4(){

    let butao_coraçao4 = document.getElementById("Bcoraçao4");
    butao_coraçao4.style.display = "none";
    let coraoff4 = document.getElementById("coraOFF4");
    coraoff4.style.display = "block";

    let add4 = document.getElementById("add4");
    add4.style.display ="block";

}

function cooff4(){

    let butao_coraçao4 = document.getElementById("Bcoraçao4");
    butao_coraçao4.style.display = "block";
    let coraoff4 = document.getElementById("coraOFF4");
    coraoff4.style.display = "none";

    let add4 = document.getElementById("add4");
    add4.style.display ="none";

}

function addF5(){

    let butao_coraçao5 = document.getElementById("Bcoraçao5");
    butao_coraçao5.style.display = "none";
    let coraoff5 = document.getElementById("coraOFF5");
    coraoff5.style.display = "block";

    let add5 = document.getElementById("add5");
    add5.style.display = "block";

}

function cooff5(){

    let butao_coraçao5 = document.getElementById("Bcoraçao5");
    butao_coraçao5.style.display = "block";

    let coraoff5 = document.getElementById("coraOFF5");
    coraoff5.style.display = "none";

    let add5 = document.getElementById("add5");
    add5.style.display = "none";

}

function addF6(){

    let butao_coraçao6 = document.getElementById("Bcoraçao6");
    butao_coraçao6.style.display = "none";

    let coraoff6 = document.getElementById("coraOFF6");
    coraoff6.style.display = "block";

    let add6 = document.getElementById("add6");
    add6.style.display = "block";

}

function cooff6(){

    let butao_coraçao6 = document.getElementById("Bcoraçao6");
    butao_coraçao6.style.display = "block";

    let coraoff6 = document.getElementById("coraOFF6");
    coraoff6.style.display = "none";

    let add6 = document.getElementById("add6");
    add6.style.display = "none";

}



/* INICIO DA FUNÇOES DE TROCAR DE IMAGENS AO PASSAR O MOUSE SOBRE OS ELEMENTOS*/
function trocarIMG1(){

    let img_visivel1 = document.getElementById("img-visivel1");
    img_visivel1.style.display = "none";

    let img_oculta1 = document.getElementById("img-oculta1");
    img_oculta1.style.display = "block";

    let butao_conferir = document.getElementById("conferir");
    butao_conferir.style.display = "block";
   
}

function retornarIMG1(){

    let img_visivel1 = document.getElementById("img-visivel1");
    img_visivel1.style.display = "block";

    let img_oculta1 = document.getElementById("img-oculta1");
    img_oculta1.style.display = "none";

    let butao_conferir = document.getElementById("conferir");
    butao_conferir.style.display = "none";

}

function trocarIMG2(){

    let img_visivel2 = document.getElementById("img-visivel2");
    img_visivel2.style.display = "none";


    let img_oculta2 = document.getElementById("img-oculta2");
    img_oculta2.style.display = "block";

    let butao_conferir = document.getElementById("conferir1");
    butao_conferir.style.display = "block";
    
}

function retornarIMG2(){

    let img_oculta2 = document.getElementById("img-oculta2");
    img_oculta2.style.display = "none";

    let img_visivel2 = document.getElementById("img-visivel2");
    img_visivel2.style.display = "block";

    let butao_conferir = document.getElementById("conferir1");
    butao_conferir.style.display = "none";

}


function trocarIMG3(){

    let img_visivel3 = document.getElementById("img-visivel3");
    img_visivel3.style.display = "none";

    let img_oculta3 = document.getElementById("img-oculta3");
    img_oculta3.style.display = "block";

    let butao_conferir3 = document.getElementById("conferir3");
    butao_conferir3.style.display = "block";

}

function retornarIMG3(){

    let img_visivel3 = document.getElementById("img-visivel3");
    img_visivel3.style.display = "block";

    let img_oculta3 = document.getElementById("img-oculta3");
    img_oculta3.style.display = "none";

    let butao_conferir3 = document.getElementById("conferir3");
    butao_conferir3.style.display = "none";

}

function trocarIMG4(){

    let img_visivel4 = document.getElementById("img-visivel4");
    img_visivel4.style.display = "none";

    let img_oculta4 = document.getElementById("img-oculta4");
    img_oculta4.style.display = "block";

    let butao_conferir4 = document.getElementById("conferir4");
    butao_conferir4.style.display = "block";


}


function retornarIMG4(){

    let img_visivel4 = document.getElementById("img-visivel4");
    img_visivel4.style.display = "block";

    
    let img_oculta4 = document.getElementById("img-oculta4");
    img_oculta4.style.display = "none";


    let butao_conferir4 = document.getElementById("conferir4");
    butao_conferir4.style.display = "none";


}

function trocarIMG5(){

    let img_visivel5 = document.getElementById("img-visivel5");
    img_visivel5.style.display = "none";

    let img_oculta5 = document.getElementById("img-oculta5");
    img_oculta5.style.display = "block";

    let butao_conferir5 = document.getElementById("conferir5");
    butao_conferir5.style.display = "block";


}

function retornarIMG5(){

    let img_visivel5 = document.getElementById("img-visivel5");
    img_visivel5.style.display = "block";

    let img_oculta5 = document.getElementById("img-oculta5");
    img_oculta5.style.display = "none";

    let butao_conferir5 = document.getElementById("conferir5");
    butao_conferir5.style.display = "none";

}

function trocarIMG6(){

    let img_visivel6 = document.getElementById("img-visivel6");
    img_visivel6.style.display = "none";

    let img_oculta6 = document.getElementById("img-oculta6");
    img_oculta6.style.display = "block";

    let butao_conferir6 = document.getElementById("conferir6");
    butao_conferir6.style.display = "block";


}

function retornarIMG6(){

    let img_visivel6 = document.getElementById("img-visivel6");
    img_visivel6.style.display = "block";

    let img_oculta6 = document.getElementById("img-oculta6");
    img_oculta6.style.display = "none";

    let butao_conferir6 = document.getElementById("conferir6");
    butao_conferir6.style.display = "none";

}
/* FIM DA FUNÇOES DE TROCAR DE IMAGENS AO PASSAR O MOUSE SOBRE OS ELEMENTOS*/



/* INICIO DAS FUNÇÔES DO BOX OPÇOES, OCULTAR E DEIXAR VISIVEL OS MENU*/
function aparecer_menu_vestidos(){

    let menu_vestido = document.getElementById("vestido");
    menu_vestido.style.display="block";
    
    let butao_vestido = document.getElementById("bvestido");
    butao_vestido.style.display = "none";

    let butao2_none_vestido = document.getElementById("vestido2");
    butao2_none_vestido.style.display = "block";


    let menu_regata = document.getElementById("regata");
    let menu_bermuda = document.getElementById("bermuda");
    let menu_camiseta = document.getElementById("camiseta");
    let menu_calca = document.getElementById("calça");
    let menu_moleton = document.getElementById("moleton");
    menu_regata.style.display = "none";
    menu_bermuda.style.display="none";
    menu_camiseta.style.display = "none";
    menu_calca.style.display = "none";
    menu_moleton.style.display = "none";
}

function ocultar_menu_vestidos(){

    let menu_vestido = document.getElementById("vestido");
    menu_vestido.style.display="none";
  

    let butao_vestido = document.getElementById("bvestido");
    butao_vestido.style.display = "block";

    let butao2_none_vestido = document.getElementById("vestido2");
    butao2_none_vestido.style.display = "none";
}

function aparecer_menu_regatas(){

    let menu_regata = document.getElementById("regata");
    menu_regata.style.display = "block";

    let butao_regatas = document.getElementById("bregatas");
    butao_regatas.style.display = "none";


    let butao2_none_regata = document.getElementById("regatas2");
    butao2_none_regata.style.display = "block";


    let menu_vestido = document.getElementById("vestido");
    let menu_bermuda = document.getElementById("bermuda");
    let menu_camiseta = document.getElementById("camiseta");
    let menu_calca = document.getElementById("calça");
    let menu_moleton = document.getElementById("moleton");
    menu_bermuda.style.display="none";
    menu_camiseta.style.display = "none";
    menu_calca.style.display = "none";
    menu_moleton.style.display = "none";
    menu_vestido.style.display="none";
    



}

function ocultar_menu_regatas(){

    let menu_regata = document.getElementById("regata");
    menu_regata.style.display = "none";


    let butao_regatas = document.getElementById("bregatas");
    butao_regatas.style.display = "block";


    let butao2_none_regata = document.getElementById("regatas2");
    butao2_none_regata.style.display = "none";
}

function aparecer_menu_bermudas(){

    let menu_bermuda = document.getElementById("bermuda");
    menu_bermuda.style.display = "block";

    let butao_bermudas = document.getElementById("bbermudas");
    butao_bermudas.style.display = "none";


    let butao2_none_bermudas = document.getElementById("bermudas2");
    butao2_none_bermudas.style.display = "block";

    let menu_vestido = document.getElementById("vestido");
    let menu_regata = document.getElementById("regata");
    let menu_camiseta = document.getElementById("camiseta");
    let menu_calca = document.getElementById("calça");
    let menu_moleton = document.getElementById("moleton");
    menu_regata.style.display = "none";
    menu_camiseta.style.display = "none";
    menu_calca.style.display = "none";
    menu_moleton.style.display = "none";
    menu_vestido.style.display = "none";


}

function ocultar_menu_bermudas(){

    let menu_bermuda = document.getElementById("bermuda");
    menu_bermuda.style.display = "none";

    let butao_bermudas = document.getElementById("bbermudas");
    butao_bermudas.style.display = "block";


    let butao2_none_bermudas = document.getElementById("bermudas2");
    butao2_none_bermudas.style.display = "none";    
}

function aparecer_menu_camisetas(){

    let menu_camiseta = document.getElementById("camiseta");
    menu_camiseta.style.display = "block";

    let butao_camisetas = document.getElementById("bcamisetas");
    butao_camisetas.style.display = "none";

    let butao2_none_camisetas = document.getElementById("camisetas2");
    butao2_none_camisetas.style.display = "block";

    let menu_regata = document.getElementById("regata")
    let menu_vestido = document.getElementById("vestido");
    let menu_bermuda = document.getElementById("bermuda");
    let menu_calca = document.getElementById("calça");
    let menu_moleton = document.getElementById("moleton");
    menu_bermuda.style.display="none";
    menu_calca.style.display = "none";
    menu_moleton.style.display = "none";
    menu_vestido.style.display="none";
    menu_regata.style.display = "none";

}

function ocultar_menu_camisetas(){

    let menu_camiseta = document.getElementById("camiseta");
    menu_camiseta.style.display = "none";

    let butao_camisetas = document.getElementById("bcamisetas");
    butao_camisetas.style.display = "block";

    let butao2_none_camisetas = document.getElementById("camisetas2");
    butao2_none_camisetas.style.display = "none";


}

function aparecer_menu_calcas(){

    let menu_calca = document.getElementById("calça");
    menu_calca.style.display = "block";

    let butao_calcas = document.getElementById("bcalças");
    butao_calcas.style.display = "none";

    let butao2_none_calcas = document.getElementById("calças2");
    butao2_none_calcas.style.display = "block";


    let menu_bermuda = document.getElementById("bermuda");
    let menu_vestido = document.getElementById("vestido");
    let menu_regata = document.getElementById("regata");
    let menu_camiseta = document.getElementById("camiseta");
    let menu_moleton = document.getElementById("moleton");
    menu_regata.style.display = "none";
    menu_camiseta.style.display = "none";
    menu_moleton.style.display = "none";
    menu_vestido.style.display = "none";
    menu_bermuda.style.display = "none";


}

function ocultar_menu_calcas(){

    let menu_calca = document.getElementById("calça");
    menu_calca.style.display = "none";

    let butao_calcas = document.getElementById("bcalças");
    butao_calcas.style.display = "block";

    let butao2_none_calcas = document.getElementById("calças2");
    butao2_none_calcas.style.display = "none";

}

function aparecer_menu_moletons(){


    let menu_moleton = document.getElementById("moleton");
    menu_moleton.style.display = "block";

    let butao_moletons = document.getElementById("bmoletons");
    butao_moletons.style.display = "none";

    let butao2_none_moletons = document.getElementById("moletons2");
    butao2_none_moletons.style.display = "block";


    let menu_vestido = document.getElementById("vestido");
    let menu_regata = document.getElementById("regata");
    let menu_camiseta = document.getElementById("camiseta");
    let menu_calca = document.getElementById("calça");
    
    menu_regata.style.display = "none";
    menu_camiseta.style.display = "none";
    menu_vestido.style.display = "none";
    menu_calca.style.display = "none";
   

}

function ocultar_menu_moletons(){

    let menu_moleton = document.getElementById("moleton");
    menu_moleton.style.display = "none";

    let butao_moletons = document.getElementById("bmoletons");
    butao_moletons.style.display = "block";

    let butao2_none_moletons = document.getElementById("moletons2");
    butao2_none_moletons.style.display = "none";


}/* FIM DAS FUNÇÔES DO BOX OPÇOES, OCULTAR E DEIXAR VISIVEL OS MENU*/