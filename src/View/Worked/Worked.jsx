import React from 'react'
// Importación de los estilos
import './worked.css'

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
          <button onClick={() => handleWorked('Sevasa')}>Savasa</button>
          <button onClick={() => handleWorked('UNI')}>UNI</button>
        </div>
        <div className='worked__content-body'>
          <div className={worked === 'Epitech' ? 'worked__body--title block' : 'hidden'}>
            <h1>
              <span>Frontend Developer @</span> Epitech
            </h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
             
            </p>
          </div>
          <div className={worked === 'AlySystem' ? 'worked__body--title block' : 'hidden'}>
            <h1>
              <span>Frontend Developer @</span> AlySystem
            </h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Worked
