import {useState} from "react";
import './ContactForm.css'

export default function ContactForm({onSubmit}){

    const [name, setName] = useState('');
    const [number, setNumber] = useState('')
   

const handleInputChangeName = e => {
    // console.log(e.currentTarget)
    setName(e.currentTarget.value)
};
const handleInputChangeNumber = e => {
    setNumber(e.currentTarget.value)
};
    
const handleSubmit = event => {
    event.preventDefault()
    onSubmit({name, number})
   setName('');
   setNumber('');
};

    return (
<form onSubmit={handleSubmit} className="FormContact">
    <label className="Label"> 
<input
className="Input"
  type="text"
  name="name"
  value={name}
  onChange={handleInputChangeName}
  placeholder="Name"
  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
  required
/></label> 
<label className="Label">
<input
  className="Input"
  type="tel"
  name="number"
  value={number}
  onChange={handleInputChangeNumber}
  placeholder="Number"
  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
  required
/></label>
<button type="submit" className="InputBtn">Add contact</button>
</form>
    )

}