
let in1 = document.getElementById('in1');
let in2 = document.getElementById('in2');
let in3 = document.getElementById('in3');
let in4 = document.getElementById('in4');
let in5 = document.getElementById('in5');
const resultado = document.getElementById('result');

const callButton = document.getElementById('call-program');
callButton.addEventListener('click', () => {
  // code to call another program
  // for example, redirect to another HTML page:
  window.location.href = '/GramaConversor/index.html';
});


let formato = document.getElementById('formato');
option_from = formato.value;
option_from = entrada.value;

const imagem = document.querySelectorAll(".imagem >img");

in1.addEventListener('keypress', myResult );
in2.addEventListener('keyup', myResult );
in3.addEventListener('keyup', myResult );
in4.addEventListener('keyup', myResult );
in5.addEventListener('keyup', myResult );
// resultado.addEventListener('keyup', myResult );


// option_to = areaRQ.value; 
// option_to = aP.value;
// option_to = areaCirc.value;
// option_to = r$frete.value;




// ================ funcion clearvalues   =======================
function  clearLines (n) {  
  
  if (n === 'qrc'){
    document.getElementById('qrc').style.display = '';
    document.getElementById('irr').style.display = 'none';
    document.getElementById('tri').style.display = 'none';
 }
  if (n === 'irr'){
    document.getElementById('irr').style.display = 'block';
    document.getElementById('qrc').style.display = 'block';
    document.getElementById('tri').style.display = 'block';
 }
 if (n === 'tri'){
   document.getElementById('irr').style.display = 'none';
   document.getElementById('qrc').style.display = 'block';
   document.getElementById('tri').style.display = '';
 }
}
// ------------------------------------------

// ================ funcion clearvalues   =======================
function  clearvalues () {  
   
  const collection = document.getElementsByTagName ("input");
  for (let i = 1; i < collection.length; i++) {
  collection[i].value= "";
}}
// ------------------------------------------

// =========== function  clearImg  ========
function  clearImg() {       
   document.getElementById('i0').style.display = 'none';
   document.getElementById('i1').style.display = 'none';
   document.getElementById('i2').style.display = 'none';
   document.getElementById('i3').style.display = 'none'; 
   document.getElementById('i4').style.display = 'none';
}
// ------------------------------------------

// =========== funcion strtonum   ========
function strtonum(fl){
      
  if(fl === ""){
     fl =  0;
  }else{
     fl = fl.replace(".","");
     fl = fl.replace(",",".");
     fl = parseFloat(fl);
  }
  return fl;
}

// =========== funcion  getCollection  ========
function getCollection(){
   var formato = document.getElementById('formato');
  formato.addEventListener('change',show);
   option_from = formato.value;
  const imagem = document.querySelectorAll(".imagem >img");
  
   const  imcollection = [];
 //imcollection/varrendo array e pegando imagens do src para um novo array
   for(cont=0; cont < imagem.length; cont++){  
       imcollection.push(imagem[cont].src);
       clearImg();         
   }
   return imcollection
}
  
   // ============== function  numberToBr ====================
  function numberToBr(numero) {
     var numero = numero.toFixed(2).split('.');
     numero[0] =  numero[0].split(/(?=(?:...)*$)/).join('.');
     return numero.join(',');
 }


 //============== function numtostr ====================

 function numtostr(a, e, r, t) {
  let n = ""
    , h = j = 0
    , u = tamanho2 = 0
    , l = ajd2 = ""
    , o = window.Event ? t.which : t.keyCode;
  if (13 == o || 8 == o)
      return !0;
  if (n = String.fromCharCode(o),
  -1 == "0123456789".indexOf(n))
      return !1;
  for (u = a.value.length,
  h = 0; h < u && ("0" == a.value.charAt(h) || a.value.charAt(h) == r); h++)
      ;
  for (l = ""; h < u; h++)
      -1 != "0123456789".indexOf(a.value.charAt(h)) && (l += a.value.charAt(h));
  if (l += n,
  0 == (u = l.length) && (a.value = ""),
  1 == u && (a.value = "0" + r + "0" + l),
  2 == u && (a.value = "0" + r + l),
  u > 2) {
      for (ajd2 = "",
      j = 0,
      h = u - 3; h >= 0; h--)
          3 == j && (ajd2 += e,
          j = 0),
          ajd2 += l.charAt(h),
          j++;
      for (a.value = "",
      tamanho2 = ajd2.length,
      h = tamanho2 - 1; h >= 0; h--)
          a.value += ajd2.charAt(h);
      a.value += r + l.substr(u - 2, u)
  }
  return !1
}



//  function numtostr(str,n) {

//     var elemento = document.getElementsByTagName('input')[n];
//     var valor = (elemento.value);
    

//     valor = valor + "";
//     valor = parseInt(valor.replace(/[\D]+/g, ''));
//     valor = valor + '';
//     valor = valor.replace(/([0-9]{2})$/g, ",$1");

//     if (valor.length > 6) {
//       valor = valor.replace(/([0-9]{3}),([0-9]{2}$)/g, ".$1,$2");  
//     }

//     elemento.value = valor;
//     if(valor == 'NaN') elemento.value = '';
// }
// =============== function Faixa terceiro lado triangulo  =======================

function calcularComprimentoMinMax(lado1, lado2) {
  var comprimentoMinimo = Math.abs(lado1 - lado2) + 1;
  var comprimentoMaximo = lado1 + lado2 - 1
  
  return { minimo__:  comprimentoMinimo.toFixed(1),      maximo__: comprimentoMaximo.toFixed(2) };
 
}

 //============== function ====================


function retornarObjeto() {
  return { nome: "João", idade: 25 };
}



 //============== function numtostr ====================
   function calcHypotenuse(a, b) {
   hTN =( Math.sqrt((a * a) + (b * b)));
   return hTN.toFixed(2)
}
 //============== function numtostr ====================

//---------------------------------------------
// ================ Funcao show ======   
// ____________________________________________
function show() {
  clearvalues ();
  var pic = getCollection();
 

  if (option_from === "quad") {
      clearLines('qrc');
      clearImg();
      imagem.src = pic[0];
      document.getElementById("i0").style.display = 'block';
     
      document.getElementById("in1").placeholder = "Lado 1";
      document.getElementById("in2").placeholder = "Lado 2"
     }
          
          
  if (option_from === "ret") {
     clearImg();
     imagem.src = pic[1]; 
      document.getElementById('i1').style.display = 'block';

      document.getElementById("in1").placeholder = "Lado Maior";
      document.getElementById("in2").placeholder = "Lado Menor";
  }
  
  if (option_from === "cir") {
      clearImg();
      imagem.src = pic[2];
      document.getElementById("i2").style.display = 'block';

      document.getElementById("in1").placeholder = "Diametro Menor";
      document.getElementById("in2").placeholder = "Diametro Maior";
  }
          
  if (option_from === "irr") {
      // clearLines("irr");
      clearImg();
      imagem.src = pic[3];
      document.getElementById('i3').style.display = 'block';
      clearLines('irr');
      document.getElementById("in1").placeholder = "Lado 1";
      document.getElementById("in2").placeholder = "Lado 2";
      document.getElementById("in3").placeholder = "Lado 3";
      document.getElementById("in4").placeholder = "Lado 4";
      document.getElementById("in5").placeholder = "Hipotenusa";
  
  }
  if (option_from === "tri") {
      clearImg();
      imagem.src = pic[4];
     document.getElementById("i4").style.display = 'block';
     clearLines('tri');
     document.getElementById("in1").placeholder = "Lado 1";
     document.getElementById("in2").placeholder = "Lado 2";
     document.getElementById("in3").placeholder = "Lado 3";
     

}
}
   
//---------------------------------------------
// XXXXX Funcao Saidade Dados XXXXXXXXX
// ___________________________________________
 function myResult(){

      var in1TN = strtonum(in1.value);
      var in2TN =  strtonum(in2.value);
      var in3TN =  strtonum(in3.value);
      var in4TN =  strtonum(in4.value);
      var in5TN =  strtonum(in5.value);
   
      if(option_from === "quad"  || option_from === "ret") {
       
        if (in1TN !== 0 && in2TN !== 0){
          var areaRQTN = (in1TN*in2TN);
          resultado.value=numberToBr(areaRQTN);
      
  	  }}
   
      if(option_from === "cir") {
         if (in1TN !== 0 && in2TN !== 0){
         var areaCTN = Math.PI*(in1TN*in2TN);
         resultado.value=numberToBr(areaCTN);
       
         }}
     
     if(option_from === "irr") {     
        //  Fomula Heron
        // perimetroTiangulo = l1+l2+l3;
        // semiPerimetro = sP (l1+l2+l3)/2;
        // Area Triangulo Heron = Math.sqrt(sP(sP-l1)(sP)(sP))
        var faixaIrr = calcularComprimentoMinMax(in1TN, in2TN);
        resultado.value = JSON.stringify(faixaIrr);

        if (in1TN !== 0 && in2TN !== 0 && in3TN !== 0 && in4TN !== 0 && in5TN !== 0){
        
          // var hTN = Math.hypot(parseFloat(in1TN), parseFloat(in2TN));


          var sPT1TN = (in1TN/2 + in2TN/2 + in5TN/2);   
           var aT1 = (sPT1TN*((sPT1TN-in1TN)*(sPT1TN-in2TN)*(sPT1TN-in5TN)));
          var areaT1 = Math.sqrt(aT1);

          var sPT2TN = (in3TN/2 + in4TN/2 + in5TN/2);
          var aT2 = (sPT2TN*(sPT2TN-in3TN)*(sPT2TN-in4TN)*(sPT2TN-in5TN));
          var areaT2 = Math.sqrt(aT1);
          var aTotal = (areaT1 + areaT2);

          var aTotBr = numberToBr(aTotal);
          resultado.value = (aTotBr);
        

        }}

        if(option_from === "tri") {     
          //  Fomula Heron
          // perimetroTiangulo = l1+l2+l3;
          // semiPerimetro = sP (l1+l2+l3)/2;
          // Area Triangulo Heron = Math.sqrt(sP(sP-l1)(sP)(sP))
          var faixaTri = calcularComprimentoMinMax(in1TN, in2TN);
          resultado.value = JSON.stringify(faixaTri);
         
          if (in1TN !== 0 && in2TN !== 0 && in3TN !== 0){

           var PT1TN  = (in1TN + in2TN + in3TN);
           var sPT1TN = (PT1TN/2);
             
        
           var aT1 = (sPT1TN*((sPT1TN-in1TN)*(sPT1TN-in2TN)*(sPT1TN-in3TN)));
           var areaT1 = (Math.sqrt(aT1)).toFixed(2);
            // var areaT1Br = numtobr(areaT1);
            // var aT2 = (sPT2TN*(sPT2TN-in3TN)*(sPT2TN-in4TN)*(sPT2TN-in5TN));
            // var areaT2 = Math.sqrt(aT1);
            // var aTotal = areaT1 + areaT2;
            // resultado.value = aT1;
          
            resultado.value = areaT1;
          
  
      
      
      }
    }
  }
