import React, { useState } from 'react'
import emailjs from 'emailjs-com'

export const ContactModal = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('')
  const [successMessage, setSuccessMessage] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = e => {
    e.preventDefault()

    const templateParams = { email }

    emailjs
      .send(
        'service_opcy5jc',
        'template_kb9eepp',
        templateParams,
        'FjMmE3ExnQVdhZ8BZ'
      )
      .then(
        response => {
          console.log('Correo enviado!', response.status, response.text)
          setSuccessMessage('¡Correo enviado con éxito!')
          setEmail('')
          setErrorMessage('')
        },
        err => {
          console.error('Error al enviar el correo:', err)
          setErrorMessage('Error al enviar el correo. Inténtalo de nuevo.')
        }
      )
  }

  if (!isOpen) return null

  return (
    <div className='fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-90'>
      <div className='bg-customDarkBg1 bg-opacity-80 p-6 shadow-lg w-full sm:w-3/4 md:w-2/3 lg:w-2/5 h-auto flex flex-col md:flex-row relative rounded-lg'>
        <button
          type='button'
          onClick={onClose}
          className='absolute top-4 right-4 text-white text-2xl'
        >
          &times; {/* Icono de X */}
        </button>

        {/* Sección Izquierda */}
        <div className='md:w-1/2 mt-6 md:mt-10 md:ml-8'>
          <h1 className='text-white text-xl sm:text-2xl lg:text-3xl font-bold'>
            Déjanos tu correo
          </h1>
          <h2 className='text-customSecondary font-bold text-xl sm:text-2xl lg:text-3xl mt-4'>
            Y desarrollemos tu <br /> próximo proyecto
          </h2>
          <ul className='text-gray-400 mt-6 ml-6 md:ml-8 space-y-2'>
            <li>Soluciones</li>
            <li>Integraciones</li>
            <li>Mantenimiento</li>
          </ul>
        </div>

        {/* Sección Derecha */}
        <div className='md:w-1/2 flex flex-col mt-6 md:mt-10 md:ml-4 items-start'>
          <h2 className='text-md font-bold text-left text-white mx-auto mt-6 md:mt-10'>
            Únete a las empresas que <br /> confían en nosotros.
          </h2>

          <form
            onSubmit={handleSubmit}
            className='flex flex-col mx-auto items-start mt-4'
          >
            <label htmlFor='email' className='text-white mt-2'>
              E-mail:
            </label>
            <input
              type='email'
              id='email'
              value={email}
              placeholder='E-mail'
              onChange={e => setEmail(e.target.value)}
              required
              className='border rounded w-full sm:w-52 p-2 mt-1'
            />
            {successMessage && (
              <p className='text-green-500 mt-2'>{successMessage}</p>
            )}
            {errorMessage && (
              <p className='text-red-500 mt-2'>{errorMessage}</p>
            )}
            <button
              type='submit'
              className='bg-customPrimary hover:bg-customDarkBg text-white font-bold py-2 px-4 rounded mt-6 w-full sm:w-52'
            >
              Hablemos
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

