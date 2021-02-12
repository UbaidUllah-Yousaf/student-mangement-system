import axios from 'axios'
import React, { Component } from 'react'
import API_URL from './API_URL'


class AddStudent extends Component {
    temp=false;
    img=null;
    constructor(props) {
        super(props)
    
        this.state = {
             StudentName:'',
             Email:'',
             Phone:'',
             Course:'',
             Semester:'',
             
             

        }
    }
    
    changeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value })

    }
    submitHandler = e =>{
        e.preventDefault()
        //console.log(this.state)
        axios
        .post(API_URL+"/studentsAPI",this.state)
        .then(response => {
            console.log(response);
            window.location.reload();
        })
        .catch(error => {
            console.log(error)
            alert(error);
        })
        
    }


    showForm = () => {
        if(!this.temp){
        document.getElementById("AddStudent").classList.add("showform");
        this.temp=true;
        document.getElementById("add").style.display="none";
        document.getElementById("Students-Table").style.display="none";
      //  document.getElementById("Students-Table").style.display="none";
        document.getElementById("remove").classList.add("remove");

        }
        
    }

    hideForm = () => {

        // document.getElementById("AddStudent").classList.remove("showform");
        // document.getElementById("remove").classList.remove("remove");
        window.location.reload();

        
    }


    render() {
        const {StudentName,Email,Phone,Course,Semester} = this.state;
        return (<div><br/>
            <button id="add" onClick={this.showForm}>Add Student</button>
           <center>
               <div className="form-container">
                
                <form id="AddStudent" onSubmit={this.submitHandler}>
                <i id="remove" className="fa fa-remove" onClick={this.hideForm}></i>
                <br/><h1><strong>Add Details</strong></h1><br/>
                    <input type="text" placeholder="Add Student Name" name="StudentName" onChange={this.changeHandler} value={StudentName} />
                    <input type="text" placeholder="Add Student Course" name="Course" onChange={this.changeHandler}  value={Course} />
                    <input type="number" placeholder="Add Student Semester" name="Semester" onChange={this.changeHandler} max="8" min="1" value={Semester} />
                    <input type="number" placeholder="Add Student Phone Number" name="Phone" onChange={this.changeHandler}  value={Phone} minLength="11" maxLength="11" />
                    <input type="email" placeholder="Add Student Email" name="Email" onChange={this.changeHandler}  value={Email} />
                    <button type="submit">Submit</button>
                    
                </form>
                </div>
           </center>
           </div>
        )
    }
}

export default AddStudent;
