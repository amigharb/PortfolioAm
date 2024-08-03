
import "./App.css";
import HeaderComp from "./components/HeaderComp";
import Bac from "./components/Bac";
import Bachelor from "./components/Bachelor";
import Logod from "./components/Logod";
import Master from "./components/Master";

function App() {
  return(
    <>
<div className= 'main'>
  <HeaderComp />
  <div className='body-container'>
          <div className='left'>
          <section className='projects'>
            <h1><Logod /></h1>
              <h2>********************BAC & Grades Statements********************</h2>
              <article>
              <Bac />
              <h2>********************Bachelor Degre's & Grades Statements********************</h2>
              <Bachelor />
              <h2>********************Master Degre's & Grades Statements********************</h2>
              <Master />

            
              </article>
             
            </section>
            
      </div>
  </div>
  </div>
  </>
  
   );
}

export default App;
