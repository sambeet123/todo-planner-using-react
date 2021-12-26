import React, {useState} from 'react'
import "./style.css"

const Todo = () => {
    const [inputData, setinputData] = useState("");
    const [Items,setItems] = useState([])
    const addItem=() =>{
        if(!inputData){
            alert("Please add something to proceed");

        }else{
            const myNewdata={
                id:new Date().getTime().toString(),
                name: inputData,
            };
            setItems([...Items, myNewdata])
            setinputData("");
        }
    }
    const deleteItem = (index)=>{
        const updatedItems = Items.filter((curElem)=>{
            return curElem.id != index; 
        })
        setItems(updatedItems);
    };
    const removeALL =(()=>{
        setItems([]);
    });

    
    return (
        <>
            <div className='main-div'>
                <div className='child-div'> 
                    <figure>
                        <img src="https://media.istockphoto.com/photos/to-do-list-text-on-notepad-picture-id1285308242?b=1&k=20&m=1285308242&s=170667a&w=0&h=K-UO77yYEQAKjRNLhgXADlyRIqrPkB8sC-4mKcyMgC4=" alt="images" />
                        <figcaption><h1>Welcome to your todo list. Now start adding items.</h1></figcaption>
                    </figure>
                        <div className='addItems'>
                            <input type="text" placeholder='Start adding Items to cart' className='form-control' 
                            value={inputData} onChange={(event)=>setinputData(event.target.value) } />
                            <i class="fa fa-plus add-btn" onClick={addItem}></i>
                        </div>
                        {/*show our items*/}

                        <div className='showItems'>
                            {
                                Items.map((curElem)=>{
                                    return(
                                        <div className='eachItem' key={curElem.id}>
                                <h2>{curElem.name}</h2>
                                <div className='todo-btn'>
                                <i class="far fa-edit add-btn"></i>
                                <i class="far fa-trash-alt add-btn" onClick={()=> deleteItem(curElem.id)}></i>

                                </div>

                            </div>

                                    )

                                })
                            }
                            
                        </div>
                        <div className='showItem'>
                            <button className='btn effect04' data-sm-link-text="Remove ALL Items" onClick={removeALL}>
                                <span>Today's Plan</span>

                            </button>

                        </div>

                </div>
            </div>
            
        </>
    )
}

export default Todo
