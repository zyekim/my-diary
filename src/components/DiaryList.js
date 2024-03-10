import React from 'react';
import {Link} from 'react-router-dom';
import dummy from '../json/data.json';

function Diary({diary}) {
  // console.log(diary.id);
  return (
    <li>
      <Link to={`/diary/${diary.id}`}>
        <span>{diary.date}</span>
        <span>{diary.feeling}</span>
      </Link>
    </li>
  )
}

function DiaryBooks(){
const db = dummy.diaries;

  return (
    <>
      <h2>내마음 저장소</h2>
      <ul>
        {db.map((diary) => <Diary diary={diary} key={diary.id}/>)}
      </ul>
      <Link to="/create">추가하기</Link>
    </>
  )
}

export default DiaryBooks;