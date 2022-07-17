import './List.css'

import { useRef, useEffect } from 'react'

function List(props) {
  
  const itemsArray = []
  for (let key in props.children) {
    itemsArray.push(
      <li key={key} className="list__item">
        <span className="list__item-name">{key}</span>
        <span className="list__item-value">{props.children[key]}</span>
      </li>
    )
  }
  
  const listContainerRef = useRef(null)
  
  useEffect( () => {
    const listElement = listContainerRef.current
    const ob = new ResizeObserver((entities) => {
      for (let entity of entities) {
        console.log(entity.target.clientHeight)
        props.onResize(entity.target.clientHeight)
      }
    })
    ob.observe(listElement)
    
    return ( () => {
      ob.unobserve(listElement)
    })
    
    
  }, [])
      
  return (
    <ul className="list" ref={listContainerRef}>
      { itemsArray }
    </ul>
  );
}


export default List;
