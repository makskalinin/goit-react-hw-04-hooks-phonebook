import {useState, useEffect} from "react";
import ContactForm from "./ContactForm";
import ContactList from "./ContactList"
import './App.css'
import Filter from "./Filter";
import shortid from "shortid";

export default function App() {
    const [contacts, setContacts] = useState([
        {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
        {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
        {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
        {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
        ]);
    const [filter, setFilter] = useState('');

    useEffect(() => {
        const locStorContacts = localStorage.getItem('contacts');
        const parsedContacts = JSON.parse(locStorContacts);
        setContacts(parsedContacts)
    }, [])
   
    useEffect(() => {
        localStorage.setItem('contacts', JSON.stringify(contacts)  )
    }, [contacts])

    const addContact = ({name, number}) => {
        const newContact = {
            id: shortid.generate(),
            name,
            number
        };
        const findContact = contacts.find(contact => contact.number === newContact.number);
        if(findContact){
            alert(`Такой номер - ${number} уже записан`)
        }else{
            setContacts([newContact, ...contacts])
            }
        }

   
    

    const deleteContact = (userId) => {
        setContacts(prevContacts => prevContacts.filter(contact => contact.id !== userId))
    };

    const changeFilter = (e) => {
        setFilter(e.currentTarget.value)
      };
       
    const lowerCase = filter.toLowerCase();
    const filterContacts = contacts.filter(contact => contact.name.toLowerCase().includes(lowerCase))

    return (
    <div className="pes">  
        <h1>Phonebook</h1>
        <ContactForm onSubmit={addContact} />
        <Filter filter={filter} changeFilter={changeFilter} />
        {contacts.length > 0 ? <h2>Contacts</h2> : 'Add contacts!'}
        {contacts.length > 0 ? <ContactList contacts={filterContacts} deleteContact={deleteContact}/>: false}
    </div>
    )
}

