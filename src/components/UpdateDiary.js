import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import RadioButton from './RadioButton';
import dummy from '../json/data.json';

// 오늘 날짜 렌더
// 좋음 보통 나쁨 선택
// 텍스트에어리아 인풋


function UpdateDiary() {

  const {feelings, diaries}  = dummy;
  const { id } = useParams();
  let goBack = useNavigate();
  const selectItem = diaries.filter(diary => diary.id === (id/1));
  const [ inputs, setInputs ] = useState({
    feeling: '',
    content: '',
  })

  let onChange = (e) => {
    const { name, value } = e.target.value
    setInputs({
      ...inputs,
      [name]: value
    })
    console.log(inputs);
  }

  return(
    <>
      <button className="backBtn" onClick={() => goBack(-1)}>뒤로가기</button>
      <h2>수정하기</h2>
      {
        selectItem.map((item) => (
          <div key={item.id}>
            <p>날짜: {item.date}</p>
            {
              feelings.map((feeling,feelIdx) => {
                return (
                  <RadioButton key={feelIdx} item={feeling} onChange={onChange} feeling={item.feeling}/>
                )
              })
            }
            <textarea name="content" id="updateDiary" cols="30" rows="10" value={item.content} onChange={(e) => onChange(e)}></textarea>
            <button>수정</button>
          </div>
        ))
      }
    </>
  )
}

export default UpdateDiary;