//using selectors inside the element

// Lecture Answer => question-text가 보이고 있어도 다른 question-text가 열리면 기존에 열람하던 글이 다시 off 됨
const questions = document.querySelectorAll('.question');

questions.forEach((question) => {
  const btn = question.querySelector('.question-btn');

  btn.addEventListener('click', () => {
    questions.forEach((item) => {
      if (item !== question) {
        item.classList.remove('show-text');
      }
    });

    question.classList.toggle('show-text');
  });
});

// My Answer => .question-text의 display 속성을 on/off 하기 위해서는 꼭 버튼을 눌러야함
/* const questions = document.querySelectorAll('.question');

questions.forEach((question) => {
  const plusBtn = question.querySelector('.plus-icon');
  const minusBtn = question.querySelector('.minus-icon');

  plusBtn.addEventListener('click', () => {
    question.classList.add('show-text');
  });

  minusBtn.addEventListener('click', () => {
    question.classList.remove('show-text');
  });
}); */

// traversing the dom

/* const btns = document.querySelectorAll('.question-btn');

btns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    const question = e.currentTarget.parentElement.parentElement;

    question.classList.toggle('show-text');
  });
}); */
