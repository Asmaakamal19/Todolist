import React from 'react';
import './TodoItems.css'
const TodoItems =(props) => {
    const {items, deleteItems}=props;
    let length = items.length;
    const Listitems = length ?(
        items.map((item) =>{
            return(
                <div key={item.id}>
                    <span className="name">{item.name}</span>
                    <span className="age">{item.age}</span>
                    <span className="action icon" onClick={() =>deleteItems(item.id)}>&times;</span>
                </div>
            )
        })
    ):(
        <p className="text-center">There is no items to show</p>
    )
    return(
        <div className="listitems">
            <div>
                <span className="name title">Name</span>
                <span className="age title">Age</span>
                <span className="action title">Action</span>
            </div>
            {Listitems}
        </div>
    )
}
export default TodoItems;