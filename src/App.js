import { React, useState } from "react";

import Navbar from "./Сomponents/Navbar/Navbar";
import { FetchData } from "./Redux/api";

import styles from './App.module.css'
import { Button } from "./Сomponents/BasicComponents/BasicComponents";
import AddContactForm from "./Сomponents/AddContactForm/AddContactForm";
import { useStore } from "./store";



function App() {
  const [click, setClick] = useState(0);
  const [showData, setShowData] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const updateClick = useStore(state => state.incrementNumber)


  function numberClick() {
    const count = click + 1
    setClick(count);
    updateClick(count)
  }
  
  function fetchData() {
    setShowData(!showData)
  }

  function clickForm() {
    setShowForm(!showForm)
  }


  return (
    <main>
      <Navbar number = {click}/>
      
      <Button className={styles.main_button_click} onClick = {numberClick} label='Click button'/>
      <Button className={styles.main_button_click} onClick = {fetchData} label='Fetch Data'/>
      <Button className={styles.main_button_click} onClick = {clickForm} label='Clock Form'/>

      {showForm && <AddContactForm setShowForm={setShowForm} ShowForm={showForm} />}
      <div className={styles.main_data}>
        {showData && <FetchData />}
      </div>
    </main>
  );
}

export default App;
