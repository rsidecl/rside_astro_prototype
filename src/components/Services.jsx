export const Services = () => {
  return (
    <div className='bg-customDarkBg1 w-full flex flex-col md:flex-row mx-4 md:mx-10 lg:mx-40 mt-10'>
      <div className='flex-1'>
        <h1 className='text-customSecondary font-bold text-2xl my-6'>
          Impulsa el Desarrollo de tu <br /> Sitio o Aplicación
        </h1>
        <h1 className='text-4xl text-white font-bold my-6'>
          Servicios Integrales para <br /> un Desarrollo Exitoso de <br />
          Principio a Fin.
        </h1>
        <h3 className='text-white text-lg my-6'>
          Nos Importa Ofrecer Diseño, <br /> Implementación, Lanzamiento y{' '}
          <br />
          Mantenimiento continuo para tu proyecto
        </h3>
        <a href=''>
          <button className='bg-customPrimary hover:bg-customDarkBg text-white font-bold py-2 px-4 rounded w-full sm:w-52 h-12 mt-10'>
            Hablemos
          </button>
        </a>
      </div>
      <div className='flex-1 flex justify-center'>
        <img
          className='w-full max-w-md mt-10 lg:mr-40'
          src='/assets/images/yamete2.jpg'
          alt='Servicio'
        />
      </div>
    </div>
  )
}
