import { React, useState } from "react";

import Navbar from "./components/Navbar/Navbar";
import { FetchData } from "./Redux/api";

import styles from './App.module.css'
import { Button } from "./components/BasicComponents/BasicComponents";

function App() {
  const [click, setClick] = useState(0);
  const [showData, setShowData] = useState(false);

  function numberClick() {
    setClick(click + 1);
  }
  function fetchData() {
    setShowData(!showData)
  }


  return (
    <main>
      <Navbar number = {click}/>
      
      <Button className={styles.main_button_click} onClick = {numberClick} label='Click button'/>
      <Button className={styles.main_button_click} onClick = {fetchData} label='Fetch Data'/>
      <div className={styles.main_data}>
        {showData && <FetchData />}
      </div>
    </main>
  );
}

export default App;
