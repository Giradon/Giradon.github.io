/* 여기부터 책의 코드를 작성해주세요 */
// span 요소 노드 가져오기
const spanEl = document.querySelector("main h2 span");
// 화면에 표시할 문장 배열
const txArr = ['사유하는 프론트엔드 개발자입니다.', '협동을 중요시하는 프론트엔드 개발자입니다.', '조화를 이루고 싶은 개발자입니다.', '인문학적 사고로 세상을 접근하는 개발자입니다.', '계속 배우려고 노력하는 개발자입니다.'];
// 배열의 인덱스 초깃값
let index = 0;
// 화면에 표시할 문장 배열에서 요소 하나 가져온 뒤, 배열로 만들기
let currentTxt = txArr[index].split("");

// 텍스트 추가하는 효과 만들기
(function(){
    const spanEl = document.querySelector("main h2 span");
    const txtArr = ['사유하는 프론트엔드 개발자입니다.', '협동을 중요시하는 프론트엔드 개발자입니다.', '조화를 이루고 싶은 개발자입니다.', '인문학적 사고로 세상을 접근하는 개발자입니다.', '계속 배우려고 노력하는 개발자입니다.'];
    let index = 0;
    let currentTxt = txtArr[index].split("");
    function writeTxt(){
      spanEl.textContent  += currentTxt.shift(); 
      if(currentTxt.length !== 0){ 
        setTimeout(writeTxt, Math.floor(Math.random() * 100));
      }else{
        currentTxt = spanEl.textContent.split("");
        setTimeout(deleteTxt, 3000);
      }
    }
    function deleteTxt(){
      currentTxt.pop();
      spanEl.textContent = currentTxt.join("");
      if(currentTxt.length !== 0){
        setTimeout(deleteTxt, Math.floor(Math.random() * 100))
      }else{
        index = (index + 1) % txtArr.length;
        currentTxt = txtArr[index].split("");
        writeTxt();
      }
    }
    writeTxt();
  })();

 /* 수직 스크롤이 발생하면 header 태그에 active 클래스 추가 및 삭제 */
const headerEl = document.querySelector("header");
window.addEventListener('scroll', function(){
  requestAnimationFrame(scrollCheck);
});
function scrollCheck(){
  let browerScrollY = window.scrollY ? window.scrollY : window.pageYOffset;
  if(browerScrollY > 0){
    headerEl.classList.add("active");
  }else{
    headerEl.classList.remove("active");
  }
}

/* move.js */
/* 애니메이션 스크롤 이동 */
const animationMove = function(selector){
    // ① selector 매개변로 이동할 대상 요소 노드 가져오기
    const targetEl = document.querySelector(selector);
    // ② 현재 브라우저의 스크롤 정보(y 값)
    const browserScrollY = window.pageYOffset;
    // ③ 이동할 대상의 위치(y 값)
    const targetScorllY = targetEl.getBoundingClientRect().top + browserScrollY;
    // ④ 스크롤 이동
    window.scrollTo({ top: targetScorllY, behavior: 'smooth' });
  };

  // 스크롤 이벤트 연결하기
const scollMoveEl = document.querySelectorAll("[data-animation-scroll='true']"); 
for(let i = 0; i < scollMoveEl.length; i++){
  scollMoveEl[i].addEventListener('click', function(e){
    const target = this.dataset.target;
    animationMove(target);
  });
}