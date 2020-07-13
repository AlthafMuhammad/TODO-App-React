import React,{Component} from 'react';

class Todo extends Component{
    constructor(props){
        super(props);
        this.state={
            items: [],
            txtContent:""

        }
    }

    txtChange=(e)=>{
        this.setState({txtContent:e.target.value});
    }
    
    addItem=(e)=>{
        this.state.items.push(this.state.txtContent);
        this.setState({items:this.state.items});
    }
    
    render(){




        return(
            <div>
                <h1>TODO App</h1>
                <div>
                    <input type="text" onChange={this.txtChange}/>
                    <button onClick={this.addItem}>Add</button>
                    <br/>
                    {this.state.items.map((itm,k)=>{
                        return(
                            <>
                                <br/>
                                <li>{itm}   <button>Delete</button></li>
                            </>
                        )
                    })}
                </div>
            
            </div>
        );

        }

}




export default Todo;