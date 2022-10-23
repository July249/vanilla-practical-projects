# Vanilla Practical Projects - provided by freeCodeCamp

## Resources

---

- Youtube: https://youtu.be/3PHXvlpOkf4

- GitHub: https://github.com/john-smilga/javascript-basic-projects

- Published Page: https://www.vanillajavascriptprojects.com/

## What Do You Expect From This Project?

---

- 실용적인 Vanilla JS 프로젝트를 수행

- 15번까지는 유튜브 강좌를 통해 진행

- 16번부터는 직접 구현 후, 코드를 살펴보며 수정 작업 진행

- 재사용성이 높은 컴포넌트들을 숙지하여 "Useful Components" repo에 기록 >> 개인 사이드 프로젝트 진행시 유용하게 사용할 수 있도록 코드를 개선할 예정

- 동일한 프로젝트들로 리액트 구현도 존재함 >> 이번 프로젝트 완료 후, 리액트로 동일 프로젝트 진행할 예정임

## What Did You Get From This Project?

---

### 01. Color Flipper

- DOM API인 getElementById(), querySelector()를 활용하여 직접적인 DOM 조작 진행
- color에 textContent를 이용하여 내용 조작
- Element.style.backgroundColor를 이용하여 문서의 배경색을 조작
- randomNumber 생성하는 방법 (별도의 함수를 이용하지 않고 바로 Math.API를 이용하여 생성하였음)

\[ Summary \]

- app.js에서는 주어진 배열 안에 있는 색상만 표기가 가능하였으나, hex.js에서 hex 색코드를 직접 생성하여 랜덤한 색상 정보 뽑기가 가능하였음

\[ Check Point \]

Q. Has it some of useful component?
A. No

### 02. Counter

- DOM API인 getElementById(), querySelectorAll()를 활용하여 직접적인 DOM 조작 진행
- querySelectorAll()는 NodeList를 반환하므로 순회 메서드를 사용하여야 한다.
- 순회 메서드를 이용하여 이벤트가 발생한 요소만을 출력할 수 있다.
- 이때 event.currentTarget.classList가 사용되었다.
- contains()를 이용하여 클래스가 포함되었는지 여부를 true, false로 얻을 수 있다.
- IE에서는 NodeList.API인 forEach를 사용할 수 없다. 따라서 아래와 같이 IE에서 지원하는 JavaScript built-in: Array: forEach 메서드를 이용하여 프로토타입의 this를 생성자 함수인 Array가 아니라 items로 변경하여 동일하게 순회를 시킬 수 있다.

  ```js
  items = document.querySelectorAll('items');
  Array.prototype.forEach.call(this(=items), (item) => {
    item.addEventListener('click', () => {});
  }
  ```

\[ Summary \]

- 동일한 요소에 대해 특정 요소를 선택하고자 한다면, 일일이 변수로 선언할 필요 없이 querySelectorAll()을 이용하여 NodeList로 반환 받는다
- NodeList에서 순회를 돌며 event 발생시 event.currentTarget.classList로 정보를 받아온다
- contains()를 이용하여 할당된 요소에게 해당 클래스 이름이 있는지 없는지 true or false로 반환 받는다.
- IE와 같이 NodeList.API가 지원되지 않는 경우 Array.prototype의 메서드를 이용하여 사용할 수 있다. (하지만 forEach메서드만 살펴보았다. 다른 경우는 확인이 필요하다. map, filter, reduce 등등)

\[ Check Point \]

Q. Has it some of useful component?
A. No

### 03. Reviews

- HTML을 작성시, 개별적인 요소로 데이터를 받아서 넣어야할 (즉, 객체에서 각각의 프로퍼티 키값에 해당하는 경우) 데이터의 경우에는 넣어야할 키값을 가지는 요소에 id로 입력하는 것이 권장됨
- 이번에는 02번 Counter 예제와 다르게 prevBtn, nextBtn, randomBtn을 querySelectorAll()을 사용하지 않고 개별로 뽑아서 동작시켰다는 점이 이전 예제와의 차이점이다.
- window 전역객체에 이벤트리스너를 연결해서 'DOMContentLoaded' 이벤트가 동작하게 설정하였다. 따라서 showPerson() 함수를 DOM page가 로딩되자마자 렌더링이 되도록 하였다.
- 이벤트 버블링에 의해 버튼을 클릭하여도 전역객체인 window는 언제나 이벤트를 발생할 수 있게 된다. 따라서 버튼을 클릭하면 showPerson() 함수는 언제든 동작하게 된다. 동작하자마자 currentItem 번호의 넘버링에 변화를 주고(단항연산자 사용), currentItem을 showPerson()함수에 전달하여 (전역으로 선언한 변수이기 때문에 함수 파라미터로 등록하지 않아도 된다.) 다음 번호의 정보를 전달하여 준다.
- 버튼으로 전달된 currentItem 번호가 주어진 정보의 배열 요소 갯수를 초과하거나 음수를 가지는 경우 이를 다시 조작하기 위해 조정해주는 if 문을 추가하여 준다.

\[ Summary \]

- 이벤트 버블링을 이용하여 변화되는 정보를 바로 window 전역객체에 전달하는 DOMContentLoaded를 이용한 점은 자주 이용할 필요가 있다고 생각한다.
- 홈페이지 안의 버튼 동작을 통해서 또는 카드뉴스에서 받아지는 이벤트(clientX 또는 clientY)를 통해서 발생하는 정보 변화는 경우에 따라 충분히 재사용성이 좋은 부분이라고 본다.

\[ Check Point \]

Q. Has it some of useful component?
A. (Partially) Yes

### 04. NavBar

- toggle 버튼 클릭시 class를 추가하고, 제거하여 스타일링에 변화를 줄 수 있다.

\[ Summary \]

- classList - shows/gets all classes
- contains - checks classList for specific class
- add - add class
- remove - remove class
- toggle - toggles class

\[ Check Point \]

Q. Has it some of useful component?
A. Yes, it is useful for NavBar.

---

### 05. SideBar

### 06. Modal

### 07. Questions

### 08. Menu

### 09. Video

### 10. Scroll

### 11. Tabs

### 12. Countdown Timer

### 13. Lorem-Ipsum

### 14. Grocery Bud

### 15. Slider

### 16. Counter

### 17. Gallery

### 18. Numbers

### 19. Dark Mode

### 20. Filters

### 21. Dad Jokes

### 22. Products

### 23. Random User

### 24. Cocktails

### 25. Slider

### 26. Stripe Submenus

### 27. Pagination

### 28. Wikipedia

### 29. Comfy Store
