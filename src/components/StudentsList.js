import React from 'react';
import axios from 'axios';
import API_URL from './API_URL';

class StudentsList extends React.Component{
    state={
        list:[],
    };

    style={
        backgroundColor:"transparent",
        color:"red",
        border:"none",
        cursor:"pointer",
    };
    

    componentDidMount(){
        axios.get(API_URL+"/studentsAPI")
        .then(res => {
            //console.log(res);
            this.setState({list:res.data});
        });

    }

    RemoveStudent = (id) => {
       //setInterval(console.log(1),1000)
        //console.log(id);
        axios
        .delete(API_URL+"/deleteStudents/"+id+"/")
        .then(res => {
            alert("Student number "+id+" has been removed successfully")
            window.location.reload();
        })
        .catch(err=>{
            console.log(err);
        })
    }
    
    validateImage=(img,name)=>{
        if(img!=null){
        return (<img width="50px" src={API_URL+img} alt={name} />);
        }
        else{
            return (<img width="50px" src="https://picsum.photos/seed/picsum/200/300" alt={name}/>);
        }
    }

    render(){
        return(
            <div id="Students-Table" className="Students">

            <br/><br/><br/>
                <h1 align="center">Welcome To Student Management System</h1>
                <br/><br/><br/>
            <table>
                <thead>
                    <tr>
                    <th>Roll#</th>
                    <th>Student Name</th>
                    <th>Course</th>
                    <th>Semester</th>
                    <th>Phone</th>
                    <th>Email</th>
                    <th>Image</th>  
                    <th>Action</th>       

                    </tr>
                </thead>
                <tbody>
                   
                    {this.state.list.map(list =>(<tr key={list.id}>
                    <td> {list.id}</td>
                    <td>{list.StudentName}</td>
                    <td>{list.Course}</td>
                    <td>{list.Semester}</td>
                    <td>{list.Phone}</td>
                    <td>{list.Email}</td>
                   
                    <td> {this.validateImage(list.Image)}</td>
                    <td>
                    <i onClick={e => this.RemoveStudent(list.id,list.StudentName)} id="remove-student" className="fa fa-remove"></i>
                    </td>
                    
                    </tr>)

                    )}
                    
                </tbody>
            </table>
            </div>
        )
    }
}

export default StudentsList;
