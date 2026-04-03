$(function(){

    
    //Enrada


    var botoes = $(".botao");
    var titiulo = $(".h1");
    var subtitulo = $("#subtitulo");
    var icones = $("svg");
    var fundo = $("body");
    var botao_modoEscuro = $("#modoEscuro");


    var modoEscuro = false

    //Processamento

    botao_modoEscuro.click(()=>{

         if (modoEscuro == false){

        botoes.css("background-color", "black" )
        botoes.css("color", "white")

        modoEscuro = true;

       

        }else{
        botoes.css("background-color", "white" )
        botoes.css("color", "black")

        modoEscuro = false;
        }


    })





});
    //Sair
