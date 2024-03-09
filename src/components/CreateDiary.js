import React from 'react';
import {Link} from 'react-router-dom';


// 오늘 날짜 렌더
// 좋음 보통 나쁨 선택
// 텍스트에어리아 인풋


function CreateDiary({feeling, today, content, feelings,onChange,createDiary}) {

  const dateFormat = today.getFullYear()+ '년 ' + (today.getMonth()+1) + '월 ' + today.getDate() + '일';
  return(
    <>
      <Link to="/" className="backBtn">뒤로가기</Link>
      <h4>{dateFormat}</h4>
      <h2>👂오늘 어떤일이 있었어요?</h2>
      <div className="feelings">
        {
          feelings.map((item,feelIdx) => {
            return (
              <label key={feelIdx}>
                <input
                  name="feeling"
                  id={feelIdx}
                  type="radio"
                  value={item}
                  defaultChecked={feeling === item ? true : false}
                  onChange={onChange}
                />
                {item}
              </label>
              )
            })
        }
      </div>
      <textarea name="content" id="addDiary" cols="30" rows="10" value={content} onChange={onChange}></textarea>
      <button onClick={createDiary}>등록</button>

    </>
  )
}

export default CreateDiary;