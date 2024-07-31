let queNo = document.querySelectorAll('.queNo');
let question = document.getElementById('question-show');
let options = document.querySelectorAll('.option');
let answer = document.querySelectorAll('.answer');
let goTONextQuestion = document.getElementById('next-que');
let optionContainer = document.querySelectorAll('.options');
let optOne = optionContainer[0].firstElementChild;
let optTwo = optionContainer[0].firstElementChild.nextElementSibling;
let optThree = optionContainer[0].firstElementChild.nextElementSibling.nextElementSibling;
let optFour  = optionContainer[0].lastElementChild;
const questionWithOptions = [
  {
  que:"What is CSS ?",
  a: 'Style Sheet',
  b: 'Cascading Sheet',
  c:'Cascading Style Sheet',
  d:'None'
},
{
  que:'Which team won T20Worldcup 2024 ?',
  a:'India',
  b:'England',
  c:'Australia',
  d:'Newzeland'
},
{
  que:'HTML stands for ?',
  a:'Hypertext Transfer Markup Language',
  b:'Hypertext Markup Language',
  c:'XML',
  d:'None of these.'
},
{
  que:"What is JS ?",
  a: 'Java Script',
  b: 'Java',
  c:'Style Sheet',
  d:'Programming Language'
}
];

let queNumber = 0;
let queCount = 1;
let finalMarks = [];




function quiz(){
  queNumber++;
  queCount++;
  totalQuesCount(queCount);
  let ques =  questionWithOptions[queNumber];
  let {que,a,b,c,d} = ques;
  question.innerText = que;
  answer[0].innerText = a;
  answer[1].innerText = b;
  answer[2].innerText = c;
  answer[3].innerText = d;
  //TO Remove attributes
  optOne.removeAttribute('id','ansOne');
  optOne.removeAttribute('id','opt1');
  optTwo.removeAttribute('id','ansTwo');
  optTwo.removeAttribute('id','opt2');
  optThree.removeAttribute('id','ansThree');
  optThree.removeAttribute('id','opt3');
  optFour.removeAttribute('id','ansFour');
  optFour.removeAttribute('id','opt4');
}


function totalQuesCount(quesNo){
 queNo[0].innerText = quesNo;
 queNo[1].innerText = quesNo;
 createSubmitBtn(quesNo)

}

//create a child
function createSubmitBtn(num){
  if(num == 4){
    let submitBtn = document.createElement('submit');
    submitBtn.id = 'submit-btn';
    let text = document.createTextNode('Submit');
    submitBtn.appendChild(text) ;
    goTONextQuestion.replaceWith(submitBtn);
    console.log(submitBtn)
    newId = submitBtn;
    newId.addEventListener('click',function(){
      let div = document.createElement('div');
      div.id = 'main-heading';
      let header = document.createElement('div');
      header.id = 'header';
      let anotherDiv = document.createElement('div');
      anotherDiv.id = 'heading-top';
      let para = document.createElement('p');
      para.id = 'heading';
      let text = document.createTextNode('Quiz App');
      para.appendChild(text);
      anotherDiv.appendChild(para);
      header.appendChild(anotherDiv);
      div.appendChild(header);
      document.getElementById('main-heading').replaceWith(div);
      let displayScore = document.createElement('div');
      displayScore.className = "scoredisplay";
      let marksShown =  document.createElement('p');
      let texts = document.createTextNode(`Your sore 100 out of ${scoreGet[0]}`);
      marksShown.appendChild(texts);
      displayScore.appendChild(marksShown);
      document.querySelector('.prt').replaceWith(displayScore);
      calculateMarks(marksObtained);
      let texts2 = document.createTextNode(`Your sore 100 out of ${scoreGet[0]}`);
      texts.replaceWith(texts2)
    })
  }
}
//Question 1 and Marks Obtained
let marksObtained = []
function questionOneOptionA(){
  if(queNumber === 0){
    optOne.setAttribute('id','ansOne');
    optThree.setAttribute('id','opt3');
    optTwo.removeEventListener('click',questionOneOptionB);
    optThree.removeEventListener('click',questionOneOptionC);
    optFour.removeEventListener('click',questionOneOptionD);
    optOne.removeEventListener('click',questionOneOptionA);
    console.log('que1, clicked1');
   
    
  }
 
  
}
function questionOneOptionB(){
  if(queNumber == 0){
    optTwo.setAttribute('id','ansTwo');
    optThree.setAttribute('id','opt3');
    optTwo.removeEventListener('click',questionOneOptionB);
    optThree.removeEventListener('click',questionOneOptionC);
    optFour.removeEventListener('click',questionOneOptionD);
    optOne.removeEventListener('click',questionOneOptionA);
    console.log('que1,ckicked2')
 }
  
}
function questionOneOptionC(){
  if(queNumber == 0){
    optThree.setAttribute('id','opt3');
    optTwo.removeEventListener('click',questionOneOptionB);
    optThree.removeEventListener('click',questionOneOptionC);
    optFour.removeEventListener('click',questionOneOptionD);
    optOne.removeEventListener('click',questionOneOptionA);
    marksObtained.push(10);
   // console.log(marksObtained);
    let [score1] = marksObtained;
    
    document.getElementById('score-gain').innerText = score1
   
 }}
function questionOneOptionD(){
  if(queNumber == 0){
    optThree.setAttribute('id','opt3');
    optFour.setAttribute('id','ansFour')
    optTwo.removeEventListener('click',questionOneOptionB);
    optThree.removeEventListener('click',questionOneOptionC);
    optFour.removeEventListener('click',questionOneOptionD);
    optOne.removeEventListener('click',questionOneOptionA);
    console.log('que1,ckicked4')
 }}
// Question 2

function questionTwoOptionA(){
  if(queNumber === 1){
    optOne.setAttribute('id','opt1');
    optOne.removeEventListener('click',questionTwoOptionA);
    optTwo.removeEventListener('click',questionTwoOptionB);
    optThree.removeEventListener('click',questionTwoOptionC);
    optFour.removeEventListener('click',questionTwoOptionD);
    marksObtained.push(20);
    //console.log(marksObtained);
    let newMarks = marksObtained.reduce((prevScore,crrScore)=>{
       return prevScore+crrScore;
    })
    document.getElementById('score-gain').innerText = newMarks;
  }}
function questionTwoOptionB(){
  if(queNumber === 1){
    optOne.setAttribute('id','opt1');
    optTwo.setAttribute('id','ansTwo');
    optOne.removeEventListener('click',questionTwoOptionA);
    optTwo.removeEventListener('click',questionTwoOptionB);
    optThree.removeEventListener('click',questionTwoOptionC);
    optFour.removeEventListener('click',questionTwoOptionD);
    console.log('answer2 clicked')
  }}
function questionTwoOptionC(){
  if(queNumber === 1){
    optOne.setAttribute('id','opt1');
    optThree.setAttribute('id','ansThree');
    optOne.removeEventListener('click',questionTwoOptionA);
    optTwo.removeEventListener('click',questionTwoOptionB);
    optThree.removeEventListener('click',questionTwoOptionC);
    optFour.removeEventListener('click',questionTwoOptionD);
  }}
function questionTwoOptionD(){
  if(queNumber === 1){
    optOne.setAttribute('id','opt1');
    optFour.setAttribute('id','ansFour');
    optOne.removeEventListener('click',questionTwoOptionA);
    optTwo.removeEventListener('click',questionTwoOptionB);
    optThree.removeEventListener('click',questionTwoOptionC);
    optFour.removeEventListener('click',questionTwoOptionD);
    console.log('que2 4clicked')
  }
}
function questionThreeOptionA(){
  if(queNumber === 2){
    optOne.setAttribute('id','ansOne');
    optTwo.setAttribute('id','opt2');
    optOne.removeEventListener('click',questionThreeOptionA);
    optTwo.removeEventListener('click',questionThreeOptionB);
    optThree.removeEventListener('click',questionThreeOptionC);
    optFour.removeEventListener('click',questionThreeOptionD);
    console.log('option3 ans1')

  }
}
function questionThreeOptionB(){
  if(queNumber === 2){
    optTwo.setAttribute('id','opt2');
    optOne.removeEventListener('click',questionThreeOptionA);
    optTwo.removeEventListener('click',questionThreeOptionB);
    optThree.removeEventListener('click',questionThreeOptionC);
    optFour.removeEventListener('click',questionThreeOptionD);
    marksObtained.push(30);
    let newMarks = marksObtained.reduce((prevScore,crrScore)=>{
      return prevScore+crrScore;
   })
    document.getElementById('score-gain').innerText = newMarks
  }}
function questionThreeOptionC(){
  if(queNumber === 2){
    optTwo.setAttribute('id','opt2');
    optThree.setAttribute('id','ansThree');
    optOne.removeEventListener('click',questionThreeOptionA);
    optTwo.removeEventListener('click',questionThreeOptionB);
    optThree.removeEventListener('click',questionThreeOptionC);
    optFour.removeEventListener('click',questionThreeOptionD);
}
  
}
function questionThreeOptionD(){
  if(queNumber === 2){
    optTwo.setAttribute('id','opt2');
    optFour.setAttribute('id','ansFour');
    optOne.removeEventListener('click',questionThreeOptionA);
    optTwo.removeEventListener('click',questionThreeOptionB);
    optThree.removeEventListener('click',questionThreeOptionC);
    optFour.removeEventListener('click',questionThreeOptionD);
    console.log('option3 ans4')

  }
}
function questionFourOptionA(){
  if(queNumber === 3){
    optFour.setAttribute('id','opt4');
    optOne.setAttribute('id','ansOne');
    optOne.removeEventListener('click',questionFourOptionA);
    optTwo.removeEventListener('click',questionFourOptionB);
    optThree.removeEventListener('click',questionFourOptionC);
    optFour.removeEventListener('click',questionFourOptionD);
    console.log('option4 ans1')

  }
}
function questionFourOptionB(){
  if(queNumber === 3){
    optFour.setAttribute('id','opt4');
    optTwo.setAttribute('id','ansTwo');
    optOne.removeEventListener('click',questionFourOptionA);
    optTwo.removeEventListener('click',questionFourOptionB);
    optThree.removeEventListener('click',questionFourOptionC);
    optFour.removeEventListener('click',questionFourOptionD);
    console.log('option4 ans12')

  }
}
function questionFourOptionC(){
  if(queNumber === 3){
    optFour.setAttribute('id','opt4');
    optThree.setAttribute('id','ansThree');
    optOne.removeEventListener('click',questionFourOptionA);
    optTwo.removeEventListener('click',questionFourOptionB);
    optThree.removeEventListener('click',questionFourOptionC);
    optFour.removeEventListener('click',questionFourOptionD);
    console.log('option4 ans3')

  }
}
function questionFourOptionD(){
  if(queNumber === 3){
    optFour.setAttribute('id','opt4');
    optOne.removeEventListener('click',questionFourOptionA);
    optTwo.removeEventListener('click',questionFourOptionB);
    optThree.removeEventListener('click',questionFourOptionC);
    optFour.removeEventListener('click',questionFourOptionD);
    marksObtained.push(40);
    let newMarks = marksObtained.reduce((prevScore,crrScore)=>{
      return prevScore+crrScore;
   })
  document.getElementById('score-gain').innerText = newMarks
}}
let scoreGet = [];
function calculateMarks(score){
   let totalMarksObtained =  score.reduce((prev,crr)=>{
       return prev+crr;
   },0)
   
   scoreGet.push(totalMarksObtained);
}
//optOne.addEventListener('click',toNext)
optOne.addEventListener('click',questionOneOptionA);
optTwo.addEventListener('click',questionOneOptionB);
optThree.addEventListener('click',questionOneOptionC);
optFour.addEventListener('click',questionOneOptionD);
//Next question2 event
optOne.addEventListener('click',questionTwoOptionA);
optTwo.addEventListener('click',questionTwoOptionB);
optThree.addEventListener('click',questionTwoOptionC);
optFour.addEventListener('click',questionTwoOptionD);
// Next question3 event
optOne.addEventListener('click',questionThreeOptionA);
optTwo.addEventListener('click',questionThreeOptionB);
optThree.addEventListener('click',questionThreeOptionC);
optFour.addEventListener('click',questionThreeOptionD);
// Next question4 
optOne.addEventListener('click',questionFourOptionA);
optTwo.addEventListener('click',questionFourOptionB);
optThree.addEventListener('click',questionFourOptionC);
optFour.addEventListener('click',questionFourOptionD);


//goTONextQuestion.addEventListener('click',calculateMarks);
goTONextQuestion.addEventListener('click',quiz);


