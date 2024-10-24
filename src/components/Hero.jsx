export const Hero = () => {
  return (
    <section
      className='w-full flex flex-col justify-center items-center bg-customDarkBg1 hero-bg-gradient'
      id='home'
    >
      <div className='w-full max-w-4xl flex flex-col justify-center items-center pt-16 text-center'>
        <div className='text-customSecondary text-sm sm:text-base mb-6 sm:mt-32 mt-16 font-bold'>
          Explora un Nuevo Mundo de Oportunidades con Nosotros
        </div>

        <div className='text-4xl sm:text-5xl lg:text-6xl font-bold tracking-wide text-white px-4 sm:px-8 md:px-12 lg:px-4'>
          <span className='md:inline'>
            Impulsa tu Negocio con las Herramientas Más Innovadoras
          </span>
        </div>

        <div className='text-customGrayText text-sm lg:text-base xl:text-lg sm:text-base mt-10 px-4 sm:px-12'>
          Soluciones Personalizadas para Convertir tus Ideas en Realidad
        </div>

        <div className='mt-10'>
          <a href=''>
            <button className='bg-customPrimary hover:bg-customDarkBg text-white font-bold py-2 px-4 rounded w-full sm:w-52 h-12'>
              Hablemos
            </button>
          </a>
        </div>

        <div className='mt-10 w-full'>
          <img
            className='rounded-lg w-full h-auto'
            src='/assets/images/ciniespic.jpg'
            alt='Descripción de la imagen'
          />
        </div>

        <div className='flex flex-wrap justify-center gap-4 mt-10'>
          <img
            className='w-20 h-auto'
            src='/assets/icons/umce.svg'
            alt='logo umce'
          />
          <img
            className='w-20 h-auto'
            src='assets/icons/cinies.svg'
            alt='logo cinies'
          />
          <img
            className='w-20 h-auto'
            src='/assets/icons/umce.svg'
            alt='logo umce'
          />
          <img
            className='w-20 h-auto'
            src='assets/icons/cinies.svg'
            alt='logo cinies'
          />
          <img
            className='w-20 h-auto'
            src='/assets/icons/umce.svg'
            alt='logo umce'
          />
          <img
            className='w-20 h-auto'
            src='assets/icons/cinies.svg'
            alt='logo cinies'
          />
          <img
            className='w-20 h-auto'
            src='/assets/icons/umce.svg'
            alt='logo umce'
          />
          <img
            className='w-20 h-auto'
            src='assets/icons/cinies.svg'
            alt='logo cinies'
          />
        </div>
      </div>
    </section>
  )
}
