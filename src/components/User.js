import React, { Component } from 'react'

import UserConsumer from '../context'

 class User extends Component {
    state={
         isVisible:false,
     }

   onClickEvent=(e)=>{
        this.setState(
            {
                    isVisible: !this.state.isVisible,
            }
                
          )
    } 

    onDeletePersonel=(dispatch,e)=>{
        const {id}= this.props;
        //dispatch
        dispatch({type:"DELETE_USER",payload:id});
    }

    render() {
      
        const{name,department,salary}=this.props;
        return(
            <UserConsumer>
            {
                value=>{
                    const {dispatch}=value;
                    return (
                        <div className="col-md-8 mb-4">
                           { 
                             <div className="card bg-light mb-3" >
                                <div className="card-header d-flex justify-content-between">
                                    <h4 className="d-inline" style={{cursor:"pointer"}} >  {this.props.name} <i className="fas fa-chevron-down" onClick={this.onClickEvent}></i></h4> 
                                   
                                    <i className="far fa-trash-alt" onClick={this.onDeletePersonel.bind(this,dispatch)} style={{cursor: "pointer"}}  ></i>
                                </div>
                               { 
                                   this.state.isVisible ? <div className="card-body">
                                    <p className="card-text"> Salary: {this.props.salary} </p> 
                                    <p className="card-text"> Department: {this.props.department}  </p>              
                                </div> : null
                            }
                             </div>
                            }
                           
                        </div>
                    )
                }
            }
            </UserConsumer>
    
        )  
        
      
    }
}
export default User;

