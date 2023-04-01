import React from "react";


function Forms(props) {
  return(
    <form>
      <div className={styles.form_contactName}>
        < InputForm name='name' type='text' label='Ім’я'/>
        < InputForm name='surname' type='text' label='Прізвище'/>
      </div>
      < InputForm className={styles.telephone} name='tel' type='tel' label='Телефон'/>
      <label for="textarea">Опис:</label>
      <textarea id="textarea" ></textarea>
      <div className={styles.contactManager}>
        <img  className={styles.shape_image} src={shapeImage} alt="shape"/>
        <Button className={styles.button_contact} label='Додати контакт'/>
      </div>
    </form>
  )
}