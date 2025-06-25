
import { useState } from 'react';
function App(){
  const [text, setText] = useState('');

  const handleTextChange = (event) => {
    // React 会自动传给这个函数一个“事件对象 (event)”
    // 这个对象包含了关于本次事件的所有信息

    // 1. 获取输入框的最新内容
    // event.target.value 是一个固定用法，就是指“触发这个事件的那个元素(target)的当前值(value)”
    const newText = event.target.value;

    // 为了方便理解，我们可以把它打印出来看看
    console.log('输入框的内容现在是:', newText);

    // 2. 用获取到的新内容去更新 state
    // 这是向 React 下达的命令：“请将 text 状态更新为 newText 这个新值！”
    setText(newText);
  };
  
  return(
    <div>
      <h1>字符数计算器</h1>
      
      {/* 连接记忆/改变和界面 */}
      {/* 添加交互，改变记忆 */}
      <textarea placeholder="在这里输入内容..." 
      onChange={handleTextChange}  value={text}>  </textarea>
      <div className="counter">
        {text.length}
      </div>
    </div>
  );
}
export default App;
