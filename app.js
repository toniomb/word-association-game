const scoreDisplay = document.getElementById('score-display');
const questionDisplay = document.getElementById('question-display');

const questions = [
    {
      correct: 2,
      options: ['jury', 'assess'],
      quiz: ['value', 'estimate', 'evaluate'],
    },
    {
      correct: 2,
      options: ['trace', 'adjacent'],
      quiz: ['close', 'near', 'next'],
    },
    {
      correct: 2,
      options: ['mad', 'exotic'],
      quiz: ['foreign', 'national', 'ethnic'],
    },
    {
      correct: 1,
      options: ['forecast', 'sustainable'],
      quiz: ['assume', 'insight', 'weather'],
    },
    {
      correct: 2,
      options: ['charity', 'rapid'],
      quiz: ['fast', 'quick', 'prompt'],
    }
  ]

let score = 0;

scoreDisplay.innerText = score;

function populateQuestions(){

    questions.forEach(question => {
        const questionBox = document.createElement('div');
        questionBox.classList.add('question-box');
        
        const logoDisplay = document.createElement('h1');
        logoDisplay.innerText = "#";
        questionBox.append(logoDisplay); 

        question.quiz.forEach(tip =>{
            const tipText = document.createElement('p');
            tipText.innerText = tip;
            questionBox.append(tipText);
        });

        const questionButtons = document.createElement('div');
        questionButtons.classList.add('question-buttons');

        question.options.forEach((opt,index)=>{
            const questionButton = document.createElement('button');
            questionButton.classList.add('question-button');
            questionButton.textContent = opt;

            questionButton.addEventListener('click',(event) => checkAnswer(opt,(index + 1), question.correct, event,questionBox));

            questionButtons.append(questionButton);
        });
        
        questionBox.append(questionButtons);

        const answerDisplay = document.createElement('div');
        answerDisplay.classList.add('answer-display');
        questionBox.append(answerDisplay);

        questionDisplay.append(questionBox);
        
    })

}

populateQuestions();

function checkAnswer(option, optionIndex, correctAnswer, event, questionBox){
    console.log('optionIndex',optionIndex);
    console.log('correctAnswer',correctAnswer);
    

    if(optionIndex == correctAnswer){
        score++;
        scoreDisplay.textContent = score;
        addResult(questionBox,'Correct!','correct');
    }
    else{
        score--;
        scoreDisplay.textContent = score;
        addResult(questionBox,'Wrong!','wrong');
    }
    event.target.disabled = true;
    console.log(event);
}

function addResult(questionBox,answer, className){
    const answerDisplay = questionBox.querySelector('.answer-display');
    answerDisplay.classList.remove('wrong');
    answerDisplay.classList.remove('correct');
    answerDisplay.classList.add(className);
    answerDisplay.textContent = answer;

}