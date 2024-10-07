import React from 'react'

const Box = (props) => {
  console.log('props', props)
  return (
   <div>
     <div className='box'>
        <h1>{props.title}</h1>
        <img className='item-img' src={props.item && props.item.img}/> 
        {/* userSelect의 초기값은 null로 설정되어 있으므로, Box 컴포넌트가 처음 렌더링될 때 item prop은 null입니다. Box 컴포넌트가 처음 렌더링되면 item의 값이 null인 상태로 전달됩니다.
            그래서 -> 조건부 렌더링을 써야하는데: props.item 이 false (null) 이면 props.item.img 여기도 실행이 안됨. -> props.item이 있으면 true면 props.item.img 이것도 true */}
        <h2>WIN</h2>
    </div>


   </div>
  )
}

export default Box
