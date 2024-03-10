import React,{useState,useRef} from 'react';
import RadioButton from './RadioButton'
import {Link, useNavigate} from 'react-router-dom';
import dummy from '../json/data.json';

// 오늘 날짜 렌더
// 좋음 보통 나쁨 선택
// 텍스트에어리아 인풋


function CreateDiary() {

  const today = new Date();
  // YYYY-MM-DD
  const todayStr = `${today.getFullYear()}-${today.getMonth()+1}-${today.getDate()}`;


  const initialState = {
    inputs: {
      date: todayStr,
      feeling: '좋음',
      content: '',
    },
    diaries : dummy.diaries
  }

  const feelings = dummy.feelings;

  const [inputs, setInputs] =useState(initialState.inputs);
  const [db, setDb] = useState(initialState.diaries);
  const { feeling, content } = inputs;

  const nextId = useRef(dummy.diaries.length);


  const onChange = (e) =>{
    const {name, value} = e.target;
    setInputs({
      ...inputs,
      [name]:value
    })
  }

  const navigate = useNavigate();

  const createDiary = () =>{
    if(!content){
      alert('오늘의 일기를 입력하세요')
    }else {
      window.confirm('등록하시겠습니까?');

      const newDiary = {
        id: nextId.current + 1,
        date: todayStr,
        feeling,
        content,
      }

      setDb([...db,newDiary]);
      // setState는 비동기로 동작하기 때문에 배열이 즉시 업데이트 되지 않을 수있다.
      // 콜백함수로 확인가능함 (db=> db.concat(newDiary))
      nextId.current +=1;
      // 초기화
      setInputs(initialState.inputs);
      navigate('/');
    }
  }
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
              <RadioButton key={feelIdx} item={item} onChange={onChange} feeling={feeling}/>
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