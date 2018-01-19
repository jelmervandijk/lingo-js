var answer = words[Math.floor(Math.random()*words.length)];
var answerArray = answer.split(''); 
var typedWord = "";
var rowCounter = 0;

console.log(answer);

var checkBtn = document.getElementById('check');

checkBtn.setAttribute("onclick", "check();");

function Start() {
    var res = answer.charAt(0)
    document.getElementById("letter0_0").value = res;
} 

function check(){
  getTypedWord();
  for(var i = 0; i < answer.length; i++){
    if (typedWord[i] === answer[i]) {
      document.getElementById('letter'+rowCounter+'_' + i).style.backgroundColor = 'red';
    }
        else {
                for (var j = 0; j < answer.length; j++) {
                if (i!=j){
                  if (typedWord[j] === answer[i]) {
                    document.getElementById('letter'+rowCounter+'_' + i).style.backgroundColor = 'yellow';
                  }

                  
                }
              }
            }
      }
  if (typedWord === answer) {
    console.log('gewonnen');
    alert('gewonnen');
    for (var k = 0; k < answer.length; k++) {
      document.getElementById('letter'+rowCounter+'_' + k).style.backgroundColor = 'red';
    }
    return;
  }
  for(var i = 0; i < answer.length; i++){
    if (typedWord[i] === answer[i]) {
      document.getElementById('letter'+rowCounter+'_' + i).style.backgroundColor = 'red';
      if(document.getElementById('letter'+(rowCounter+1)+'_' + i) != null) {
        document.getElementById('letter'+(rowCounter+1)+'_' + i).value = document.getElementById('letter'+rowCounter+'_' + i).value;            
        document.getElementById('letter'+(rowCounter+1)+'_' + i).style.backgroundColor = document.getElementById('letter'+rowCounter+'_' + i).style.backgroundColor;
        }
    }
  }

  
  rowCounter++;
}
function getTypedWord(){
  typedWord = "";
 for (var i = 0; i < answer.length; i++) {
  if(document.getElementById('letter'+ rowCounter +'_' + i) != null) {
    typedWord += document.getElementById('letter'+ rowCounter +'_' + i).value;
   }
  }
 }


