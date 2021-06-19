import React, {Component} from 'react';
import TodoItems from './Component/TodoList/TodoItems'
import AddItems from './Component/AddItems/AddItems'
class App extends Component {
  state ={
    items: [
      {id:1, name:'Asmaa', age:22},
      {id:2, name:'Ahmed', age:19},
      {id:3, name:'Mohammed', age:26}
    ]
  }
  deleteItems=(id) =>{
    let items =  this.state.items.filter(item =>{return !(item.id === id)});
    this.setState({items})
  }
  addItem=(item) =>{
    item.id= Math.random();
    let items= this.state.items;
    items.push(item);
    this.setState({items})
  }
  render(){
    return (
      <div className="App container">
          <h1 className="text-center">TodoList App</h1>
          <TodoItems items={this.state.items} deleteItems={this.deleteItems}/>
          <AddItems addItem={this.addItem}/>
      </div>
    );
  }
}
export default App;