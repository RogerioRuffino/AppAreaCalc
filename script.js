
let in1 = document.getElementById('in1');
let in2 = document.getElementById('in2');
let in3 = document.getElementById('in3');
let in4 = document.getElementById('in4');
let in5 = document.getElementById('in5');
const resultado = document.getElementById('result');

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

 function numtostr(str,n) {

    var elemento = document.getElementsByTagName('input')[n];
    var valor = elemento.value;

    valor = valor + '';
    valor = parseInt(valor.replace(/[\D]+/g, ''));
    valor = valor + '';
    valor = valor.replace(/([0-9]{2})$/g, ",$1");

    if (valor.length > 6) {
      valor = valor.replace(/([0-9]{3}),([0-9]{2}$)/g, ".$1,$2");  
    }

    elemento.value = valor;
    if(valor == 'NaN') elemento.value = '';
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
      imagem.src = pic[0];
      document.getElementById("i0").style.display = 'block';
     
      document.getElementById("in1").placeholder = "Lado 1";
      document.getElementById("in2").placeholder = "Lado 2"
     }
          
          
  if (option_from === "ret") {
      imagem.src = pic[1]; 
      document.getElementById('i1').style.display = 'block';

      document.getElementById("in1").placeholder = "Lado Maior";
      document.getElementById("in2").placeholder = "Lado Menor";
  }
  
  if (option_from === "cir") {
      imagem.src = pic[2];
      document.getElementById("i2").style.display = 'block';

      document.getElementById("in1").placeholder = "Diametro Maior";
      document.getElementById("in2").placeholder = "Diametro Maior";
  }
          
  if (option_from === "irr") {
      // clearLines("irr");
      imagem.src = pic[3];
      document.getElementById('i3').style.display = 'block';
      clearLines('irr');
      document.getElementById("in1").placeholder = "Lado 1";
      document.getElementById("in2").placeholder = "Lado 2";
      document.getElementById("in3").placeholder = "Lado 3";
      document.getElementById("in4").placeholder = "Lado 4";
      document.getElementById("in5").placeholder = "Diagonal Maior";
  
  }
  if (option_from === "tri") {
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

        if (in1TN !== 0 && in2TN !== 0 && in3TN !== 0 && in4TN !== 0 && in5TN !== 0){
        
          // var hTN = Math.hypot(parseFloat(in1TN), parseFloat(in2TN));


          var sPT1TN = (in1TN/2 + in2TN/2 + in5TN/2);   
          var aT1 = (sPT1TN*((sPT1TN-in1TN)*(sPT1TN-in2TN)*(sPT1TN-in5TN)));
          var areaT1 = Math.sqrt(aT1);

          var sPT2TN = (in3TN/2 + in4TN/2 + in5TN/2);
          var aT2 = (sPT2TN*(sPT2TN-in3TN)*(sPT2TN-in4TN)*(sPT2TN-in5TN));
          var areaT2 = Math.sqrt(aT1);
          var aTotal = areaT1 + areaT2
        
          resultado.value = aTotal.toFixed(2);
        

        }}

        if(option_from === "tri") {     
          //  Fomula Heron
          // perimetroTiangulo = l1+l2+l3;
          // semiPerimetro = sP (l1+l2+l3)/2;
          // Area Triangulo Heron = Math.sqrt(sP(sP-l1)(sP)(sP))
  
          if (in1TN !== 0 && in2TN !== 0 && in3TN !== 0){
          
            // var hTN = Math.hypot(parseFloat(in1TN), parseFloat(in2TN));
  
  
            var sPT1TN = (in1TN/2 + in2TN/2 + in3TN/2);   
         
  
            var sPT2TN = (in3TN/2 + in4TN/2 + in3TN/2);
            var aT1 = (sPT1TN*((sPT1TN-in1TN)*(sPT1TN-in2TN)*(sPT1TN-in3TN)));
            var areaT1 = Math.sqrt(aT1);
            // var aT2 = (sPT2TN*(sPT2TN-in3TN)*(sPT2TN-in4TN)*(sPT2TN-in5TN));
            // var areaT2 = Math.sqrt(aT1);
            // var aTotal = areaT1 + areaT2
          
            resultado.value = areaT1.toFixed(2);
          
  
      
      
      }}
    }
  