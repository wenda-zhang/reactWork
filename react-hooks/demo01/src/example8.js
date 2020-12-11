import React, {useRef, useState, useEffect} from 'react';
//useRef可以获取dom值
//也可以保存变量值textRef.current
function Example8() {
    const inputEl = useRef(null);
    const [text, setText] = useState('pangpang');
    const textRef = useRef();
    const onButtonClick = ()=>{
        inputEl.current.value = "Hello, JSPang"
    }
    const setInp = (e)=> {
        setText(e.target.value);
    }

    useEffect(()=> {
        textRef.current = text;
        console.log(textRef.current);
    })

    return (
        <>
            <input ref={inputEl} type="text"/>
            <button onClick={onButtonClick}>在input上展示文字</button>
            <br/>

            <input value={text} onChange={setInp} />
        </>
    )
}

export default Example8;