import React from 'react'
// Importación de los estilos
import './worked.css'
//Importación de data
import WorkedData from 'assets/data/Worked.json'

const Worked = () => {
  const [worked, setWorked] = React.useState()

  const handleWorked = (option) => {
    setWorked(option)
  }

  return (
    <div className='worked__main'>
      <div className='worked__main--title'>
        <h1>I´ve Worked</h1>
      </div>
      <div className='worked__container'>
        <div className='worked__content-header'>
          <button onClick={() => handleWorked('Epitech')}>Epitech</button>
          <button onClick={() => handleWorked('AlySystem')}>AlySystem</button>
          <button onClick={() => handleWorked('Inatec')}>Inatec</button>
          <button onClick={() => handleWorked('UNI')}>UNI</button>
          <button onClick={() => handleWorked('Sevasa')}>Sevasa</button>
        </div>
        <div className='worked__content-body'>
          {WorkedData.map((workeds, index) => {
            return (
              <div
                className={
                  worked === workeds?.Company ? 'worked__body--title block' : 'hidden'
                } key={index}>
                <h1>
                  <span>{workeds?.Position} @</span> {workeds?.Company}
                </h1>
                <h2>{workeds?.Date}</h2>
                <p>
                 {workeds?.Assignment}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
export default Worked
