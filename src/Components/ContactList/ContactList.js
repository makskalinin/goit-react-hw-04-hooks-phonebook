import React from "react";
import './ContactList.css'

export default function ContactList({contacts, deleteContact}) {

    return(
        <>
        <ul className="ContactList">
    {contacts.map(({id, name, number}) => (
        <li key={id}className="Item">
            <p className="text">{name}:</p>
            <p className="text-1">{number}</p>
            <button onClick={() => deleteContact(id)} className="Delete__btn">Удалить</button>
            </li>
    ))}
        </ul>
        </>
    )
    
}