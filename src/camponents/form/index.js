import React, { Component } from 'react'

export default function Query(props){

        return (
        <div style={{display: "flex", justifyContent: "center"}} className="form-group mx-sm-3 mb-2">
        <form>
          <input style={{width: "20vw"}}
            value={props.firstname}
            name="firstname"
            onChange={props.updateAsEntered}
            type="text"
            className="form-control"
            placeholder="First Name"
          />
        </form>
          <button onClick={props.filter} className="btn btn-primary mb-2">
          Confirm identity
          </button>
        </div>
        )

}
