import React, { useState } from 'react'
import emailjs from 'emailjs-com'

export const ContactModal = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('')
  const [successMessage, setSuccessMessage] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = e => {
    e.preventDefault()

    const templateParams = {
      email: email
    }

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
    <div className='fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50'>
      <div className='bg-customDarkBg1 bg-opacity-80 p-6 shadow-lg w-2/5 h-2/5 flex relative rounded-lg'>
        <button
          type='button'
          onClick={onClose}
          className='absolute top-4 right-4 text-white text-2xl'
        >
          &times; {/* Icono de X */}
        </button>
        <div className='w-1/2 mt-10 ml-8'>
          <h1 className='text-white text-3xl font-bold'>Dejanos tu correo</h1>
          <h2 className='text-customSecondary font-bold text-3xl'>
            Y desarrollemos tu <br /> proximo proyecto
          </h2>

          <li className='text-gray-400 mt-10 text-left ml-8'>Soluciones</li>
          <li className='text-gray-400 text-left ml-8'>Integraciones</li>
          <li className='text-gray-400 text-left ml-8'>Mantenimiento</li>
        </div>
        <div className='w-1/2 flex-col mt-10'>
          <h2 className='text-md font-bold text-left text-white mt-10'>
            Unete a las empresas que <br /> confian en nosotros.
          </h2>

          <form onSubmit={handleSubmit} className='flex flex-col items-start'>
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
              className='border rounded w-40 p-2 mt-1'
            />
            {successMessage && (
              <p className='text-green-500 mt-2'>{successMessage}</p>
            )}
            {errorMessage && (
              <p className='text-red-500 mt-2'>{errorMessage}</p>
            )}
            <button
              type='submit'
              className='bg-customPrimary hover:bg-customDarkBg text-white font-bold py-2 px-4 rounded mt-6 w-40'
            >
              Hablemos
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
