import React, { useState, useEffect, useContext } from 'react';
import './App.css';
  
const Context = React.createContext({age:'18',name:'jerry'});

function App() {
  const [count,setState] = useState(0)
  const ctx =useContext(Context)

  useEffect(() => {
    document.title=`您点击了了${count}次了了哦`
  }, [count])

  return (
    <div className="App">
      <header className="App-header">
       hello <br /> nihao;
      <div>年年龄:{ctx.age}岁 </div>

         <div>你点击了了{count}次</div>
          <button
           onClick={ ()=> setState(count+1)}>
            点击
          </button>
      </header>
    </div>
  );
}

export default App;
