const qa = [{
      question: '1+1',
      answer: 2
    },
    {
      question: '2x2',
      answer: 4
    },
    {
      question: '3+3',
      answer: 6
    },
    {
      question: '4x4',
      answer: 16
    },
    {
      question: '5+5',
      answer: 10
    },
    {
      question: '6x6',
      answer: 36
    },
    {
      question: '7+7',
      answer: 14
    },
    {
      question: '8x8',
      answer: 64
    },
    {
      question: '9+9',
      answer: 18
    },
    {
      question: '10x10',
      answer: 100
    },
  ]
  // const questions = [
  //   '1+1',
  //   '2x2',
  //   '3+3',
  //   '4x4',
  //   '5+5',
  //   '6x6',
  //   '7+7',
  //   '8x8',
  //   '9+9',
  //   '10x10',
  // ]
  // const answers = [
  //   2,
  //   4,
  //   6,
  //   16,
  //   10,
  //   36,
  //   14,
  //   64,
  //   18,
  //   100
  // ]

let questions = qa.map(function(element) {
  return element.question;
});
let answers = qa.map(function(element) {
  return element.answer;
});
questionsTemp = questions.slice();
answersTemp = answers.slice();

function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

function newHTML(type) {
  return document.createElement(type.toUpperCase());
}

document.getElementById('selectQuestion').addEventListener('click', function() {
  if (questions.length == 0) {
    console.log('all questions!');
    return;
  }

  questionsTemp.forEach(function(element, index) {
    let newDiv = newHTML('div');
    newDiv.id = index;
    let newP = newHTML('p');
    let possibleAns = [];
    possibleAns.push(index);
    while (possibleAns.length < 5) {
      let toInsert = Math.floor((Math.random() * (questions.length - 1)) + 0);
      if (possibleAns.indexOf(toInsert) == -1)
        possibleAns.push(toInsert);
    }
    possibleAns = shuffleArray(possibleAns);

    newP.innerText = questions[index];
    newDiv.appendChild(newP);

    possibleAns.forEach(function(element, index) {
      let answ = newHTML('button');
      answ.className += ' buttonAns';

      answ.innerText = answers[element];
      answ.id = element;
      newDiv.appendChild(answ);
      answ.addEventListener('click', function() {
        if (newDiv.id == element)
          alert('SUCCESS');
        else
          alert('NOPE');

        newDiv.className += " disabledbutton";

      });
    });
    document.getElementById('master').appendChild(newDiv);
  }, this);
});