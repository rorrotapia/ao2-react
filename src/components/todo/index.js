import React, {useState} from "react";

const TodoList = () => {
  const [list, setList] = useState([
    {name: 'toot', 'edit': false},
    {name: 'toto', 'edit': false}
  ])
  const [valueInput, setValueInput] = useState('')

  const addList = () => {
    if (valueInput) {
      setList([...list, {name: valueInput, edit: false}])
    }
    //reset
    setValueInput('')
  }

  const removeList = (item) => {
    const array = list.filter((e) => {
      return e !== item
    })
    setList(array)
  }

  const editList = (item) => {
    const array = list.filter((e) => {
      if (e === item) {
        e.edit = true;
      }
      return e;
    })
    setList(array)
  }

  const saveValue = (item) => {
    const array = list.filter((e) => {
      if (e === item) {
        e.edit = false;
      }
      return e;
    })
    setList(array)
  }

  const editValue = (index, newValue) => {
    const array = list.filter((e,key) => {
      if (key === index) {
        e.name = newValue;
      }
      return e;
    })
    setList(array)
  }


  return (
    <div>
      <ol>
        { list.map((item, index) => {
          return (
            <li key={index}>
              {item.edit ? (<input type="text" value={item.name} onChange={(e) => editValue(index, e.target.value)}/>) : (<span>{item.name}</span>)}

              <button onClick={() => removeList(item)}>x</button>
              {item.edit ? (<button onClick={() => saveValue(item)}>enregistrer</button>) : (<button onClick={() => editList(item)}>modifier</button>)}
            </li>
          );
        })}
      </ol>

      <input type="text" defaultValue={valueInput} onChange={(e) => setValueInput(e.target.value)}/>
      <button onClick={addList}>Ajouter</button>
    </div>
  );
}

export default TodoList;