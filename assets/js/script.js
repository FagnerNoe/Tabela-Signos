function signos(){
    
    var data = parseInt(document.getElementById("datas").value);    
    var select = document.getElementById("meses_selecao");
    var mes = select.options[select.selectedIndex].value;     


        if( (data >= 21 && mes == "janeiro" ) | ( data <=18 && mes =="fevereiro")){
         document.getElementById('nome_signo').innerHTML = "Aquario";
         document.getElementById('imagem').setAttribute('src','assets/img/aquario.webp');
         document.getElementById('info').innerHTML = "É criativo, inteligente e mentalmente dinâmico.Como signo de ar, dá uma importância imensa as amizades,muito mais do que ao amor";
         
        }else if((data >= 19 && mes == "fevereiro") || (data <=20 && mes == "marco")){
        document.getElementById('nome_signo').innerHTML = "Peixes"; 
        document.getElementById('imagem').setAttribute('src','assets/img/peixe.webp')
        document.getElementById('info').innerHTML = "É reservado , tem muita empatia, gosta de ajudar o próximo e tem muitas caracteristicas."
    }
         else if((data >= 21 && mes == "marco") || (data <=20 && mes == "abril")){
        document.getElementById('nome_signo').innerHTML = "Áries"; 
        document.getElementById('imagem').setAttribute('src','assets/img/aries.jpg')
        document.getElementById('info').innerHTML ="É sincera , independente, competitiva e cheia de energia" ;
    }
         else if((data >= 21 && mes == "abril") || (data <=20 && mes == "maio")){
        document.getElementById('nome_signo').innerHTML = "Touro"; 
        document.getElementById('imagem').setAttribute('src','assets/img/touro.webp')
         document.getElementById('info').innerHTML = "O Touro, que pertence ao elemento Terra, é possessivo, teimoso mas realista. ";
    }
         else if((data >=21  && mes == "maio") || (data <= 20 && mes == "junho")){
        document.getElementById('nome_signo').innerHTML = "Gêmeos"; 
        document.getElementById('imagem').setAttribute('src','assets/img/gemeos.jfif')
        document.getElementById('info').innerHTML = " São Pessoas inteligentes ,comunicativas, curiosas, gostam de ouvir o ponto de vista das outras pessoas, são flexíveis e amam trocas.";
    }
         else if((data >= 21 && mes == "junho") || (data <=22 && mes == "julho")){
        document.getElementById('nome_signo').innerHTML = "Câncer"; 
        document.getElementById('imagem').setAttribute('src','assets/img/cancer.jpg')
        document.getElementById('info').innerHTML = "Romântico, sonhador ,fiel, cuidadoso e muito dedicado a familia " ;
    }
         else if((data >= 23 && mes == "julho") || (data <= 22 && mes == "agosto")){
        document.getElementById('nome_signo').innerHTML = "Leão"; 
        document.getElementById('imagem').setAttribute('src','assets/img/leao.webp')
        document.getElementById('info').innerHTML = "É alegre, brincalhão, exuberante e criativo,muito sociáceis";
    }
         else if((data >= 23 && mes == "agosto") || (data <= 22 && mes == "setembro")){
        document.getElementById('nome_signo').innerHTML = "Virgem"; 
        document.getElementById('imagem').setAttribute('src','assets/img/virgem.webp')
        document.getElementById('info').innerHTML = "Inteligente, detalhista ,metodicos, organizados , discretos e perfeccionistas" ;
    }
         else if((data >= 23 && mes == "setembro") || (data <= 22 && mes == "outubro")){
        document.getElementById('nome_signo').innerHTML = "Libra"; 
        document.getElementById('imagem').setAttribute('src','assets/img/libra.webp')
        document.getElementById('info').innerHTML = "Pessoas Diplomaticas, Justiceiras, pacificas e sociáveis" ;
    }
         else if((data >= 23 && mes == "outubro") || (data <=21  && mes == "novembro")){
        document.getElementById('nome_signo').innerHTML = "Escorpião"; 
        document.getElementById('imagem').setAttribute('src','assets/img/escorpiao.jpg')
        document.getElementById('info').innerHTML = "É misterioso , pouco adaptável , conservador, intenso";   
    }
         else if((data >= 22 && mes == "novembro") || (data <= 21 && mes == "dezembro")){
        document.getElementById('nome_signo').innerHTML = "Sagitário"; 
        document.getElementById('imagem').setAttribute('src','assets/img/sagitario.jpg')
        document.getElementById('info').innerHTML = "É Positivo, Espontâneo e tem bom humor" ;
    }
         else if((data >= 22 && mes == "dezembro") || (data <= 20  && mes == "janeiro")){
        document.getElementById('nome_signo').innerHTML = "Capricórnio"; 
        document.getElementById('imagem').setAttribute('src','assets/img/capricornio.jpg')
        document.getElementById('info').innerHTML = "É coerente , disciplinado , sério e responsável";
    }
         
    
        }  

        
   document.getElementById('descobrir').addEventListener('click',signos);

   