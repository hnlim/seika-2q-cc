import Swiper, { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

//////////////////////////////////////////////////
// Swiper 1
//////////////////////////////////////////////////

const swiper1 = new Swiper(".swiper-1", {
  modules: [Navigation, Pagination],
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next-1",
    prevEl: ".swiper-button-prev-1",
  },
  pagination: {
    el: ".swiper-pagination-1",
  },
});

let swiperTitle1 = document.getElementById("swiper-title-1");
let slideNo1 = swiper1.realIndex;
let text1 = document.createTextNode("スライド" + slideNo1 + "を表示しています");
swiperTitle1.appendChild(text1);

swiper1.on("slideChange", function () {
  text1.remove();
  slideNo1 = swiper1.realIndex;
  text1 = document.createTextNode("スライド" + slideNo1 + "を表示しています");
  swiperTitle1.appendChild(text1);
});

//////////////////////////////////////////////////
// Swiper 2
//////////////////////////////////////////////////

const swiper2 = new Swiper(".swiper-2", {
  modules: [Navigation, Pagination],
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next-2",
    prevEl: ".swiper-button-prev-2",
  },
  pagination: {
    el: ".swiper-pagination-2",
  },
});

let swiperTitle2 = document.getElementById("swiper-title-2");
let slideNo2 = swiper2.realIndex;

let akita = "秋田犬";
let doberman = "ドーベルマン";
let kaiken = "甲斐犬";

let text2 = document.createTextNode(akita);
swiperTitle2.appendChild(text2);

swiper2.on("slideChange", function () {
  text2.remove();
  slideNo2 = swiper2.realIndex;
  console.log(slideNo2);

  if (slideNo2 == 0) {
    text2 = document.createTextNode(akita);
  } else if (slideNo2 == 1) {
    text2 = document.createTextNode(doberman);
  } else if (slideNo2 == 2) {
    text2 = document.createTextNode(kaiken);
  }
  swiperTitle2.appendChild(text2);
});

//////////////////////////////////////////////////
// JustValidate
//////////////////////////////////////////////////

import JustValidate from "just-validate";
const validator = new JustValidate("#basic_form");

validator
  .addField("#basic_name", [
    {
      rule: "required",
      errorMessage: "入力値がありません",
    },
    {
      rule: "minLength",
      value: 3,
    },
    {
      rule: "maxLength",
      value: 15,
    },
  ])
  .addField("#basic_email", [
    {
      rule: "required",
      errorMessage: "入力値がありません",
    },
    {
      rule: "email",
    },
  ])
  .addField("#basic_password", [
    {
      rule: "required",
      errorMessage: "入力値がありません",
    },
    {
      rule: "password",
    },
  ])
  .addField("#basic_age", [
    {
      rule: "required",
      errorMessage: "入力値がありません",
    },
    {
      rule: "number",
    },
    {
      rule: "minNumber",
      value: 18,
    },
    {
      rule: "maxNumber",
      value: 150,
    },
  ])
  .addField("#basic_address", [
    {
      rule: "required",
      errorMessage: "入力値がありません",
    },
  ])
  .onSuccess(onSuccess);

function onSuccess(event) {
  event.preventDefault();
  let formData = new FormData(event.target);
  console.log(formData.get("username"));
  console.log(formData.get("email"));
  console.log(formData.get("password"));
  console.log(formData.get("age"));
  console.log(formData.get("address"));
}
