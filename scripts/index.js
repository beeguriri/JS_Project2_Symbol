/* 중복코드는 간단하게 처리하는법 고민
// 각 이미지 표시 함수 만들기
const showFlower = () => {

    const imgView1 = document.querySelector("#imgView1");
    const txtWrap = document.querySelector(".twtWrap");
    const imgViewText = document.querySelector("#imgViewText");
    //요소에 들어있는 이미지를 바꿔주면 됨 (img src(속성)을 고치면 됨) 
    //참고로 innerHTML은 <시작태그>innerHTML 영역<종료태그> 내에 있는 값을 고치는거

    imgView1.setAttribute("src", "./images/cityFlower.png"); 
    imgViewText.innerHTML = "동백꽃";
    txtWrap.style.display = "block";
};

const showBird = () => {
    const imgView1 = document.querySelector("#imgView1");
    const imgViewText = document.querySelector("#imgViewText");

    imgView1.setAttribute("src", "./images/cityBird.png");
    imgViewText.innerHTML = "갈매기"
};

const showFish = () => {
    const imgView1 = document.querySelector("#imgView1");
    const imgViewText = document.querySelector("#imgViewText");

    imgView1.setAttribute("src", "./images/cityFish.png");
    imgViewText.innerHTML = "고등어"
};
*/

//하나의 함수로 처리
const show = (idx) => {     //인수를 받아서 함수 처리

    const pngName = ['cityFlower', 'cityBird', 'cityFish'];
    const txt = ['동백꽃', '갈매기', '고등어'];

    console.log(pngName[idx], txt[idx]);

    const imgView1 = document.querySelector("#imgView1");
    const txtWrap = document.querySelector(".txtWrap");
    const imgViewText = document.querySelector("#imgViewText");

    imgView1.setAttribute("src", `./images/${pngName[idx]}.png`); 
    imgViewText.innerHTML = txt[idx];
    txtWrap.style.display = "block";

};

//DOM 로드 후
document.addEventListener ("DOMContentLoaded", () => {

    const imgIconItems = document.querySelectorAll(".imgIconItem");
    console.log(imgIconItems)
    for (let [k, item] of imgIconItems.entries()) {
        console.log(item, k);
        item.addEventListener("mouseover", ()=>show(k));
    };

    /* 중복코드는 간단하게 처리하는법 고민
    const imgIcon1 = document.querySelector("#imgIcon1");    //ID로 잡기
    const imgIcon2 = document.getElementById("imgIcon2");    //클래스로 잡기
    const imgIcon3 = document.querySelector("#imgIcon3");    

    imgIcon1.addEventListener("mouseover", () => show(0));    //마우스가 올라가면 -> 액션 : 함수
    imgIcon2.addEventListener("mouseover", () => show(1));
    imgIcon3.addEventListener("mouseover", () => show(2));
*/



});