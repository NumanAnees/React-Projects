import React,{useState} from 'react'

const Listtodo = () => {
    const itemsArray=[{
        name : "Apple",
    },
    {
        name : "Mango",
    },{
        name : "Banana",
    },
] 
    const [items,SetItems]=useState([]);
    const [item,SetItem] = useState("");
    const [id,SetId] = useState(1);
    const [updateId,SetUpdateId] = useState(0);
    const handleChange = (e) =>{
        e.preventDefault();
        SetItem(e.target.value);
    }
    const handleAdd = () =>{
        if(updateId){
        SetItems(
        items.map((elem) => {
          if (elem.id === updateId) {
            return { ...elem, name: item };
          }
          return elem;
        })
      );
    }
    else{
        SetId(id+1);
        const objItem = {
            name : item,
            id: id
        }
        SetItems([...items,objItem]);
       }
    SetItem("");

    }
    const handleDelete = (id) =>{
        SetItems(items.filter((item)=>{
            return id != item.id;
        }))
    }
    const handleUpdate = (id) =>{
        const UpdateItem =  items.find((item)=>{
            if(item.id == id){
             return item;   
            }
        });
        SetItem(UpdateItem.name);
         SetUpdateId(UpdateItem.id);

    }
  return (
    <>
    <div className='mt-2 '>
    <input type="text" name="item" value={item} onChange={(e)=>handleChange(e)} />
    <button className='btn btn-success m-2' onClick={handleAdd}>Add</button>
    </div>
    <ul className='mt-2'>
    {items.map((item)=>{
        return (
        <>
        <li>
        {item.name}
        <button className='btn btn-danger m-2 btn-sm' onClick={()=>handleDelete(item.id)}>Delete</button>
        <button className='btn btn-info m-2 btn-sm' onClick={()=>handleUpdate(item.id)} >Update</button>
        </li>
        </>
        )

    })}
    </ul>
    </>
  )
}

export default Listtodo