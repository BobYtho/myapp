

import React from 'react';
import MyFirstComponent from '../components/MyFirstComponent';
import Card from '../components/Card';

class NewApp extends React.Component {
constructor(props){
    super(props);
    this.state = {appText: "New App State Text",todolist:[]}


    }
    handleUpdateAppText = () =>  {
        this.setState({
            appText: "New App Text Updated!!",
            todolist: []
        })

    }

    handlePostData = () => {
        let dataToSave = { title: "Save Title", description: "Save Description",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu3EMsr-8AjBp-m_febOvDMpIQowfMaMwhDw&usqp=CAU" }
        fetch('http://localhost:3001/todo_list', {method: "POST", mode:"cors", headers: { "Content-Type": "application/json"}, body: JSON.stringify(dataToSave)})
        .then(response => response.json())
        .then(data => {console.log(data)});
        }


    fetchMethod = () =>{
        fetch("http://localhost:3001/todo_list").then(response =>response.json()).then((data)=> { 
            console.log(data)
            this.setState({todolist: data})
        });
      }
    render() {
        return  (
            <React.Fragment>
            <div>
            <button onClick={this.fetchMethod}> function </button>
                 <div>Hello from NewApp   </div>
                 <MyFirstComponent newAppText={"text from NewApp"} />
                 

                 {this.state.todolist.map((element)=>{
                    console.log("todolist: ", element)
                    let elementJSON = JSON.parse(element["data"])
                    let elementJSON1 = elementJSON["image"]
                    console.log("elementJSON: ", elementJSON1)
                    //return element["data"]
                    return <Card
                            title={elementJSON["title"]}
                            descripcion={elementJSON["description"]}
                            image={elementJSON["image"]}
                            ></Card>
                 })}
            </div>
            <button onClick={this.handlePostData}> function </button>
                 <div>Hello from handlePost   </div>

              
            </React.Fragment>
            
              );
    }
}
export default NewApp;