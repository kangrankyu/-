import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  //인풋을 입력받는 객체
 const [ inputs, setinputs] = useState({
  nation: "",
  goldmedal :"", 
  silvermedal : "" ,
  bronzemedal :"",

 }); 
 //인풋받은 값을 저장하는  
 const [onsave ,setonsave] = useState([]);
 //inputs 을 구조분해 할당 
 const {nation,goldmedal,silvermedal,bronzemedal} = inputs ;
   //인풋한테서 입력값을 받는 함수 
  const onChange = (e) =>{
    const {name, value} =e.target; 
    setinputs({...inputs , [name] : value})

   } 
   //클릭했을때 
   const onsave1  = ()=> { 
    setonsave([...onsave, { ...inputs }])
    setinputs({ nation: "", goldmedal: "", silvermedal: "", bronzemedal: "" }); 
  }
  const update = () => { 
    setonsave(onsave.map((date) => {
if(nation  == date.nation){ 
  return { 
   //일단 생각이않남 모르겠음 ............
  }
}else{
  return date ; 
}
      
    }
  ))}

  return (
    <>
      <div className='mainContainer'>
        <div className='olympicBox'>
        <h1>2024 파리올림픽</h1>
        </div>
        <input type="text" onChange={onChange} name='nation' value={nation} />
        <input type="number"onChange={onChange}  name='goldmedal' value={goldmedal}/>
        <input type="number" onChange={onChange}  name='silvermedal'value={silvermedal} />
        <input type="number"onChange={onChange}  name='bronzemedal'value={bronzemedal} /> 
        <button  onClick={ update} >업데이트</button>
        <button onClick={onsave1}>국가추가</button>
        {onsave.map((data, index) => (
            <div key={index}>
              <p>국가: {data.nation}</p>
              <p>금메달: {data.goldmedal}</p>
              <p>은메달: {data.silvermedal}</p>
              <p>동메달: {data.bronzemedal}</p>
              <button onClick={() => {
                let  삭제 = [...onsave]
                삭제.splice(index, 1)
                setonsave(삭제)}}>삭제</button>
            </div>
          ))}
   
      </div>
    </>
  )
}



export default App

