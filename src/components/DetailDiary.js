import React from 'react';
// import { useParams } from 'react';
import { Link, useNavigate,  useParams  } from 'react-router-dom';
import dummy from '../json/data.json';

function DetailDiary() {
  const db = dummy.diaries;
  const { id } = useParams();
  const selectItem = db.filter(diary => diary.id === (id/1));

  const dateFormat = (date) => {
    let arr = date.split('-');
    const [year,month,day] = arr;
    return year+'년 ' + month + '월 ' + day + '일 '
  }

  const navigator = useNavigate();

  return(
    <>
      {
        selectItem.map((item) => (
          <div key={item.id}>
            <p>{dateFormat(item.date)}</p>
            <p>내용 : {item.feeling}</p>
            <p>타이틀: {item.content}</p>
            <button onClick={() => navigator('/')}>이전</button>
            <Link to={`/edit/${id}`}>수정하기</Link>
            <button>삭제</button>
          </div>
        ))
      }
    </>
  )
}

export default DetailDiary