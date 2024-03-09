import './App.css';
import CreateDiary from './components/CreateDiary'
import DiaryList from './components/DiaryList'
import DetailDiary from './components/DetailDiary'
import UpdateDiary from './components/UpdateDiary'
import React, {useRef, useState} from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

function App() {

  const today = new Date();
  //YYYY-MM-DD
  const todayStr = `${today.getFullYear()}-${today.getMonth()+1}-${today.getDate()}`;

  const initialState = {
    inputs: {
      date: todayStr,
      feeling: '좋음',
      content: '',
    },
    notes: [
      {
        id: 1,
        date: "2024-03-03",
        feeling: "나쁨",
        content: "예시입니다."
      },
      {
        id: 2,
        date: "2024-03-06",
        feeling:"나쁨",
        content:"예시입니다."
      },
      {
        id: 3,
        date: "2024-03-09",
        feeling:"나쁨",
        content:"예시입니다."
      }
    ]
  }

  const feelings = ['좋음','보통','나쁨'];

  const [inputs, setInputs] =useState(initialState.inputs);
  const [db, setDb] = useState(initialState.notes);
  const { feeling, content } = inputs;

  const nextId = useRef(4);


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
  return (
    <div className="container">
      <Routes>
        <Route exact path="/" element={ <DiaryList db={db}></DiaryList>} />
        <Route path="/diary/:id" element={<DetailDiary db={db}></DetailDiary>}></Route>
        <Route path="/diary/:id" element={<UpdateDiary db={db}></UpdateDiary>}></Route>
        <Route path="/create" element={ <CreateDiary
            feeling={feeling}
            content={content}
            feelings={feelings}
            onChange={onChange}
            today={today}
            createDiary={createDiary}
          ></CreateDiary>}>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
