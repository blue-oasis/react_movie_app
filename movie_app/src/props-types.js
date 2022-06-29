import React from "react";
import PropTypes from 'prop-types';
//prop-types 예시파일
function Food({ name, pic, rating }) {
  return (
  <div>
  <h1>I like {name}</h1>
  <h4>{rating}/5.0</h4>
  <img src={pic} alt={name} />
  </div>
  );
}

const foodLike = [
  {
    id: 1,
    name: '초밥',
    image: 'https://www.google.co.kr/imgres?imgurl=https%3A%2F%2Frimage.gnst.jp%2Flivejapan.com%2Fpublic%2Farticle%2Fdetail%2Fa%2F00%2F00%2Fa0000370%2Fimg%2Fbasic%2Fa0000370_main.jpg%3F20201002142956%26q%3D80%26rw%3D750%26rh%3D536&imgrefurl=https%3A%2F%2Flivejapan.com%2Fko%2Farticle-a0000370%2F&tbnid=Ilx-Isuzox810M&vet=12ahUKEwi1wunvhM_4AhVeRvUHHbXSBJoQMygBegUIARCPAg..i&docid=4hdLbgCqRWLtsM&w=750&h=536&q=%EC%B4%88%EB%B0%A5&ved=2ahUKEwi1wunvhM_4AhVeRvUHHbXSBJoQMygBegUIARCPAg',
    rating: 5,
  },
  {
    id: 2,
    name: '고기',
    image: 'https://www.google.co.kr/imgres?imgurl=https%3A%2F%2Fpost-phinf.pstatic.net%2FMjAyMDEyMThfMTg5%2FMDAxNjA4MjUwMzAxNzg5.79FkjNoPae2GYC1rsL4KcwQx1A-u8z1RN808yB1tjv8g.r0pEs6IiPMvxY7nH_oi2rXvvQXANKYg3dvK4nGavKw8g.JPEG%2FIM_food02.jpg%3Ftype%3Dw1200&imgrefurl=https%3A%2F%2Fkormedi.com%2F1329381%2F%25EB%258F%25BC%25EC%25A7%2580%25EA%25B3%25A0%25EA%25B8%25B0-%25EC%2598%2581%25EC%2596%2591%25EC%2586%258C%25EB%258A%2594-%25EC%259C%25A1%25EC%25A6%2599%25EC%2597%2590-%25EA%25B5%25AD%25EB%2582%25B4%25EC%2582%25B0-%25EB%2583%2589%25EC%259E%25A5%25EC%259C%25A1%2F&tbnid=h9e-11U533uyQM&vet=12ahUKEwjJ_-SRhc_4AhXPFYgKHcLzBG8QMygEegUIARDlAQ..i&docid=Q_qeC-tTR4BwIM&w=728&h=484&q=%EA%B3%A0%EA%B8%B0&ved=2ahUKEwjJ_-SRhc_4AhXPFYgKHcLzBG8QMygEegUIARDlAQ'
    , rating: 5,
  },
  {
    id: 3,
    name: '크로플',
    image: 'https://mblogthumb-phinf.pstatic.net/MjAyMDAzMTNfMjQ2/MDAxNTg0MDUxMDk0MjE2.9PA634x5ARVb1b0Uej8_qBY6FlrMU7g5iUCjNnVu7zUg.DKljJABjrthmCZTudEXaUvWvRelJ1le7RKq5rdGISd0g.JPEG.hee81hoo/%ED%81%AC%EB%A1%9C%ED%94%8C%EB%A7%8C%EB%93%A4%EA%B8%B0.jpg?type=w800'
    , rating: 5,
  },
];


function App() {
  return(
  <div>
    {foodLike.map(dish => (
      <Food key={dish.id} name={dish.name} pic={dish.image} rating={dish.rating} />
    ))}
  </div>
  );
}

Food.prototype = { //타입 검사
  name: PropTypes.string.isRequired, //string, 필수
  pic: PropTypes.string.isRequired,
  rating: PropTypes.number, // number, 필수아님
};

export default App;
