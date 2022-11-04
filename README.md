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

### 05. SideBar

- toggle 버튼 클릭시 class를 추가하고, 제거하여 스타일링에 변화를 줄 수 있다.
- 기존의 classList.add(), classList.remove()를 사용하는 방법보다는 classList.toggle() 방법이 보다 편리하고 단축속성에 해당한다.

  ```js
  toggleBtn.addEventListener('click', () => {
    if (sidebar.classList.contains('show-sidebar')) {
      sidebar.classList.remove('show-sidebar');
    } else {
      sidebar.classList.add('show-sidebar');
    }
    sidebar.classList.toggle('show-sidebar');
  });
  ```

  ```js
  toggleBtn.addEventListener('click', () => {
    sidebar.classList.toggle('show-sidebar');
  });
  ```

\[ Summary \]

- classList - shows/gets all classes
- toggle - toggles class

\[ Check Point \]

Q. Has it some of useful component?
A. Yes, it is useful for Sidebar on Mobile Screen.

### 06. Modal

- Modal은 웹사이트에서 광고 또는 알림, 로그인에 자주 사용되는 만큼 익숙하게 구현할 필요가 있다
- css를 살펴보면 display 속성이 아닌 visibility 속성을 이용하고 있음을 확인할 수 있다
- display:none은 해당 속성을 지닌 요소와 그 하위 요소를 모두 렌더링하지 않게 한다. 따라서 레이아웃에도 포함되지 않는다
- visibility:hiddon은 해당 속성을 지닌 요소만 보이지 않도록 하는 것이지 레이아웃은 그대로 유지된다.
- modal을 끄고 키는 버튼이 정해져 있기 때문에 classList.add(), classList.remove()를 사용했지만, 만일 하나의 버튼으로 또는 여러 개의 버튼이더라도 modal 창을 끄고 키는 것을 모두 할 수 있게 하는 것이 목적이라면 classList.toggle()을 사용하는 것도 가능하다.
- 사용자 편의를 위해 모달창의 영역이 아닌 blur처리된 공간을 클릭하여도 모달창이 사라지도록 만들어야 한다. 이를 위해 아래의 코드를 추가하여 준다.

  ```js
  window.addEventListener('click', (e) => {
    e.target === modal ? modal.classList.remove('open-modal') : false;
  });
  ```

\[ Summary \]

- 모달창은 레이아웃을 유지한 상태에서 visibility 속성과 z-index 만으로 on/off를 나타낸다.

\[ Check Point \]

Q. Has it some of useful component?
A. Yes, it is useful for Modal page.

### 07. Questions

- 반복되는 부분에 대해서는 querySelectorAll()을 이용하여 NodeList를 뽑아낸 다음 forEach를 구현할 수 있다. => 쿼리선택자 메서드를 이용하여 내부 요소에 조작을 가하는 방법!
- 이벤트가 일어나는 요소의 클래스 속성을 변경함에 있어서 해당 요소의 클래스명을 직접 DOM 조작을 가하기 보다는 부모 요소의 클래스(.question)에 클래스를 추가 또는 삭제하여 css 변화를 이끌어내는 방법도 있다.
- 강의에서의 구현 방법과 본인의 구현 방법에는 기능 구현에 있어 다음과 같은 차이가 있다.

  - My Answer: show-text 클래스를 question 클래스를 가진 요소에 직접 add, remove하여 singleQuestion에 대해 버튼 클릭이 필수적이게 구현하였다. 이를 통해 여러 개의 숨김 글을 모두 열람할 수 있다.
  - Lecture Answer: show-text 클래스를 question 클래스를 가진 요소에 toggle로 넣고, 빼는 방법을 구현하는데 특히 btn 이벤트리스너 안에서 question NodeList를 순회하여 show-text가 있는 question에는 classList.remove()메서드를 적용하여 한 번에 하나의 숨김글만 열람할 수 있게 동작시켰다.

  ```js
  const questions = document.querySelectorAll('.question');

  questions.forEach((question) => {
    const plusBtn = question.querySelector('.plus-icon');
    const minusBtn = question.querySelector('.minus-icon');

    plusBtn.addEventListener('click', () => {
      question.classList.add('show-text');
    });

    minusBtn.addEventListener('click', () => {
      question.classList.remove('show-text');
    });
  });
  ```

\[ Summary \]

- querySelectorAll()을 통해 NodeList를 뽑아내어 내부 요소를 순회 및 선택하는 방법이 document 내의 모든 요소를 찾는 것보다 훨씬 성능적인 이슈에서 좋은 방법이라는 점을 확인할 수 있다

\[ Check Point \]

Q. Has it some of useful component?
A. Yes, it is useful for repeatly list item case.

### 08. Menu

- 전역객체인 window에 DOMContentLoaded(브라우저가 HTML을 전부 읽고 DOM 트리를 완성하는 즉시 발생합니다. 이미지 파일이나 스타일시트 등의 기타 자원은 기다리지 않음)이벤트를 적용하여 문서가 모두 load 되었을 때 displayBtns, displayMenuItems 함수가 동작하도록 하였다.
- displayMenuItems()
  : 데이터(여기서는 json 파일로 데이터를 분리시키지 않고 app.js 파일에 넣어져 있다)가 저장된 배열에서 각 요소들을 map메서드를 이용하여 순회를 돌며 요소 안의 프로퍼티 값들을 HTML로 변환한 뒤, sectionCenter에 innerHTML을 이용하여 넣어준다.

  ```js
  function displayMenuItems(menuItems) {
    let displayMenu = menuItems
      .map((item) => {
        return `
          <article class="menu-item">
            <img src="${item.img}" alt="menu item" class="photo" />
            <div class="item-info">
              <header>
                <h4>${item.title}</h4>
                <h4 class="price">$${item.price}</h4>
              </header>
              <p class="item-text">
                ${item.desc}
              </p>
            </div>
          </article>
        `;
      })
      .join('');

    sectionCenter.innerHTML = displayMenu;
  }
  ```

- index.html 파일 안에 직접적으로 버튼을 생성하는 것은 추가되는 데이터의 새로운 메뉴 카테고리에 동적으로 반응하지 못하는 한계를 가지게 된다. 따라서 주어지는 데이터에 따라 동적으로 생성되는 메뉴 버튼 기능을 구현하기 위해 displayMenuBtns 함수를 생성한다.

  1. 현재 데이터에 있는 카테고리를 동적으로 생성하기 위해 배열을 생성한다. values의 default를 ['all']로 설정하였음을 주목하라! 이는 우선적으로 모든 데이터 목록을 보여주기 위함이다

  ```js
  const categories = menu.reduce(
    (values, item) => {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ['all']
  );
  ```

  2. categories에 저장된 데이터를 map메서드를 이용하여 html로 변환한 뒤, container에 innerHTML로 전달하여 웹 페이지에 렌더링한다.

  ```js
  const categoryBtns = categories
    .map((category) => {
      return `
    <button type="button" class="filter-btn" data-id="${category}">${category}</button>
  `;
    })
    .join('');

  container.innerHTML = categoryBtns;
  ```

  3. 버튼들을 document에서 querySelectorAll()을 이용하여 NodeList로 잡아온 뒤, 이벤트가 발생한 버튼에 대한 메뉴 카테고리 필터링 기능을 구현한다.

  ```js
  const filterBtns = document.querySelectorAll('.filter-btn');

  filterBtns.forEach((btn) => {
    btn.addEventListener('click', function (e) {
      // console.log(e.currentTarget.dataset.id);
      const category = e.currentTarget.dataset.id;
      const menuCategory = menu.filter(
        (menuItem) => menuItem.category === category
      );
      category === 'all'
        ? displayMenuItems(menu)
        : displayMenuItems(menuCategory);
    });
  });
  ```

\[ Summary \]

- 선언된 Node 변수에 innerHTML을 이용하여 여러 요소를 한꺼번에 넣어주고자 하는 경우, 데이터에 map()메서드를 이용하여 html로 반환하는 방법에 대해 숙지하여야 한다. 또한 join('') 메서드를 추가하여야 함을 잊지 말자.
- NodeList에는 map 메서드를 사용할 수 없음에 유의하라! 만일 사용하고 싶다면 `Array.prototype.map.call(this)`를 이용하는 방법을 사용해야한다.

- 굳이 배열을 새로이 생성하여 값을 하나씩 생성할 필요가 없이 reduce 메서드를 이용하여 간편하게 기존 데이터 배열에서 원하는 데이터만 배열로 추출할 수 있다

\[ Check Point \]

Q. Has it some of useful component?
A. Yes, it is useful.

### 09. Video

---

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
