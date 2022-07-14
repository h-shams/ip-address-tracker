import './List.css'

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
  
  return (
    <ul className="list">
      { itemsArray }
    </ul>
  );
}


export default List;
