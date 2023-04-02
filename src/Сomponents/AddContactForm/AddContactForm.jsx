import React from "react";
import { Button, InputWidthLabel, TextArea } from '../BasicComponents/BasicComponents'
import styles from './AddContactForm.module.css'
import avatarImage from './Images/contact-avatar.png'
import closeImage from './Images/Close.svg'
import shapeImage from './Images/Shape.svg'
import { useStore } from "./store";



function ContactForm() {
  const store = useStore((state) => state.dateForm)
  const updateStore = useStore((state) => state.updateObject)
  
  
  function hundleChange(e) {
    updateStore(e.target.value, e.target.id)
    console.log(store)
  }
  
  return(
    <form className={styles.contactForm}>
      <div className={styles.contactForm_contactName}>
        < InputWidthLabel onChange={hundleChange} defaultValue={store.name} name='name' type='text' label='Ім’я'/>
        < InputWidthLabel onChange={hundleChange} defaultValue={store.surname}name='surname' type='text' label='Прізвище'/>
      </div>
      < InputWidthLabel onChange={hundleChange} defaultValue={store.tel}className={styles.contactForm_telephone} name='tel' type='tel' label='Телефон'/>
      <TextArea defaultValue={store.textarea} onChange={hundleChange} name='Опис:'/>
      <div className={styles.contactForm_manager}>
        <img  className={styles.contactForm_shape_image} src={shapeImage} alt="shape"/>
        <Button className={styles.contactForm_button} label='Додати контакт'/>
      </div>
    </form>

  )
}


function AddContactForm(props) {


  function closeForm() {
    props.setShowForm(!props.ShowForm)
  }


  return(
    <div className={styles.addContactForm_container}>
      <div className={styles.addContactForm_block}>
        <img className={styles.addContactForm_close} onClick={closeForm} src={closeImage} alt="close-img"/>
        <div className={styles.addContactForm_avatar}>
          <img src={avatarImage} alt='avatar'/>
        </div>
        <ContactForm />    
      </div>
    </div>

  )
}

export default AddContactForm