export const Hero = () => {
  return (
    <section
      className='w-full  flex justify-center items-center bg-customDarkBg1    hero-bg-gradient '
      id='home'
    >
      <div className='w-full md:w-[800px] xl:w-[900px] flex flex-col justify-center items-center pt-16 md:pt-16 lg:pt-20 text-center'>
        <div className='text-customSecondary text-sm sm:text-base  mb-6 sm:mt-32 mt-16  font-bold'>
          Explora un Nuevo Mundo de Oportunidades con Nosotros
        </div>

        <div className='text-5xl sm:text-6xl lg:text-7xl xl:text-7xl font-bold tracking-wide  text-white  px-8 sm:px-8 md:px-20 lg:px-4'>
          <span className='md:inline'>
            Impulsa tu Negocio con las Herramientas Más Innovadoras{' '}
          </span>
        </div>

        <div className='text-customGrayText text-sm lg:text-base xl:text-lg sm:text-base mt-10 px-12 sm:px-48 '>
          Soluciones Personalizadas para Convertir tus Ideas en Realidad
        </div>
        <div>
          <a href=''>
            <button className=' bg-customPrimary hover:bg-customDarkBg text-white font-bold py-2 px-4 rounded w-52 h-12 mt-10'>
              Hablemos
            </button>
          </a>
        </div>
        <div className='mt-10 w-full h-full'>
          <img
            className='rounded-lg w-full h-full'
            src='/assets/images/ciniespic.jpg'
            alt=''
          />
        </div>
        <div className='flex justify-center gap-14 mt-10  '>
          <img src='/assets/icons/umce.svg' alt='logo umce' />
          <img src='assets/icons/cinies.svg' alt='logo cinies' />
          <img src='/assets/icons/umce.svg' alt='logo umce' />
          <img src='assets/icons/cinies.svg' alt='logo cinies' />
          <img src='/assets/icons/umce.svg' alt='logo umce' />
          <img src='assets/icons/cinies.svg' alt='logo cinies' />
          <img src='/assets/icons/umce.svg' alt='logo umce' />
          <img src='assets/icons/cinies.svg' alt='logo cinies' />
        </div>
      </div>
    </section>
  )
}
