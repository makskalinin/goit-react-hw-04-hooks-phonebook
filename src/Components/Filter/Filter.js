import React, {Component} from "react"
import './Filter.css'
export default function Filter({filter, changeFilter}) {
    
    return(
        <div className="Filter_container">
        <label className="Filter_label">
            <input
            placeholder="Find contacts by name"
            className="Filter_input"
            type='text'
            name="filter"
            value={filter}
            onChange={changeFilter}
            ></input>
        </label>
        </div>
    )

}