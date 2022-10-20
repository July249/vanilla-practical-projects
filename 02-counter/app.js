// set initial count
let count = 0;

// select value and buttons
const value = document.getElementById('value');
const btns = document.querySelectorAll('.btn');

// This "forEach" method is one of the NodeList.APIs
// Not Array.prototype!
// But you can make it by using call()
btns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    // console.log(e.currentTarget.classList);
    const styles = e.currentTarget.classList;
    /* contains()는 포함 여부를 판단하여 true, false를 반환한다 */
    if (styles.contains('decrease')) {
      count--;
    } else if (styles.contains('increase')) {
      count++;
    } else {
      count = 0;
    }
    /* positive, zero, negative에 따라 value의 색상 정보를 변경 */
    if (count > 0) {
      value.style.color = 'limegreen';
    } else if (count < 0) {
      value.style.color = 'coral';
    }
    /* span 요소에 count 값을 텍스트로 넣는다 */
    value.textContent = count;
  });
});
