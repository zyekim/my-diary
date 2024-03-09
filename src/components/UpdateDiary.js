import React from 'react';


// 오늘 날짜 렌더
// 좋음 보통 나쁨 선택
// 텍스트에어리아 인풋


function CreateDiary({feeling, content, dateFormat,feelings,onChange,createDiary}) {

  return(
    <>
      <button className="backBtn">뒤로가기</button>
      <h4>{dateFormat}</h4>
      <h2>오늘 어떤일이 있었어요?</h2>
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