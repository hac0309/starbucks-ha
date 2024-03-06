// 검색 영역(.search) 클릭 시 input에 강제 포커스 및 제어
// 검색 영역 div와 input 찾기
const searchEl = document.querySelector('.search');
// const searchInputEl = document.querySelector('.search input') // 문서 전체에서 찾지 말고 아래와 같이 최적화
const searchInputEl = searchEl.querySelector('input');

// 검색 영역을 클릭하면 input 요소를 포커스하도록 실행

searchEl.addEventListener('click', function () { //이벤트 핸들러
  searchInputEl.focus(); // 요소에 포커스 강제 적용
});

// input 요소에 포커스되면 placeholder 추가
searchInputEl.addEventListener('focus', function () {
  searchInputEl.setAttribute('placeholder', '통합검색');
});


// input 요소에 포커스 해제(blur)되면 placeholder 초기화
searchInputEl.addEventListener('blur', function () {
  searchInputEl.removeAttribute('placeholder', '통합검색');
});

