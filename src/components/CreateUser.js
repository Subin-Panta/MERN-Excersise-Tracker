import React , {useContext}from 'react'
import { exContext } from '../context'

export default function CreateUser() {
    const{username,
        onChangeusername,
        onSubmitUsername}=useContext(exContext)
    return (
        <div>
            <h3>Create New Use</h3>
            <form onSubmit={onSubmitUsername}>
               <div className="form-group"> 
                <label>Username: </label>
                <input  type="text"
                    required
                    className="form-control"
                    value={username}
                    onChange={onChangeusername}
                    />
               </div>
               <div className="form-group">
                   <input type="submit" value="Create User" className="btn btn-primary" />
               </div>
            </form>
        </div>
    )
}
