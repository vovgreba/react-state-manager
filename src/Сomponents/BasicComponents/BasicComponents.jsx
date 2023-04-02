import React from "react";
import styles from './BasicComponents.module.css'

export function InputWidthLabel(props) {
  return(
    <div className={`${styles.form_contact} ${props.className || ''}`} >
      <label htmlFor={props.name}>{props.label}</label>
      <input defaultValue={props.defaultValue} onChange={props.onChange}  type={props.type} id={props.name} />
    </div>
  )
}
export function TextArea(props) {
  return(
    <>
      <label htmlFor="textarea">{props.name}</label>
      <textarea defaultValue={props.defaultValue} onChange={props.onChange} id="textarea" ></textarea>
    </>
  )
}

export function Button(props) {
  return(
    <button onClick={props.onClick} type='button' className={props.className}>{props.label}</button>
  )
}

export function Input(props) {
  
  return (
   <input defaultValue={props.defaultValue} onChange={props.onChange} className={props.className} placeholder={props.placeholder}/>
  );
}