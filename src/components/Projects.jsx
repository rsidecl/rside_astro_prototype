export const Projects = () => {
  return (
    <div className='flex flex-col lg:flex-row bg-customDarkBg1 mx-4 md:mx-10 lg:mx-32 xl:mx-60'>
      <div className='flex-1 text-sm sm:text-base mb-6 sm:mt-16 lg:mt-32 font-bold'>
        <h2 className='text-customSecondary text-lg sm:text-xl lg:text-2xl'>
          Proyectos Personalizados para <br /> Impulsar tu Éxito
        </h2>
        <h1 className='text-white text-2xl sm:text-3xl lg:text-4xl my-4 lg:my-6'>
          Cuidamos Cada Detalle <br /> para el Éxito de tu <br /> Negocio
        </h1>
        <h3 className='text-gray-400 text-base sm:text-lg lg:text-xl my-4 lg:my-6 leading-relaxed space-y-2'>
          Ser el aliado estratégico que impulsa <br />
          el éxito de nuestros clientes, cuidando <br />
          cada detalle y transformando ideas en <br />
          soluciones web innovadoras y <br />
          personalizadas. Nos comprometemos a <br />
          entender profundamente las <br />
          necesidades de cada proyecto, creando <br />
          plataformas dinámicas y efectivas que <br />
          potencien el crecimiento y la <br />
          competitividad de cada negocio.
        </h3>
      </div>

      <div className='flex-1 mt-6 lg:mt-10 mx-auto rounded-lg'>
        <div className='flex flex-col md:flex-row items-center md:items-stretch gap-6'>
          <div className='bg-customDarkBg2 h-auto w-full md:w-72 lg:w-80 py-4 px-4 rounded-lg'>
            <img
              className='w-16 h-16 lg:w-24 lg:h-24 rounded-lg mx-auto mb-4'
              src='/assets/icons/settings.svg'
              alt='Proyecto 1'
            />
            <h1 className='text-customSecondary text-lg sm:text-xl mb-4 text-center'>
              Atención Personalizada y a <br />
              medida
            </h1>
            <p className='text-gray-400 text-sm sm:text-base'>
              Nos enfocamos en entender y satisfacer las <br />
              necesidades únicas de cada cliente, brindando <br />
              un servicio cercano y dedicado a lo largo de <br />
              todo el proyecto.
            </p>
          </div>

          <div className='bg-customDarkBg2 h-auto w-full md:w-72 lg:w-80 py-4 px-4 mt-6 md:mt-0 rounded-lg'>
            <img
              className='w-16 h-16 lg:w-24 lg:h-24 rounded-lg mx-auto mb-4'
              src='/assets/icons/visualcod.svg'
              alt='Proyecto 2'
            />
            <h1 className='text-customSecondary text-lg sm:text-xl mb-4 text-center'>
              Desarrollo Integral
            </h1>
            <p className='text-gray-400 text-sm sm:text-base'>
              Ofrecemos soluciones completas, desde la <br />
              concepción de la idea hasta su implementación <br />
              y mantenimiento, garantizando calidad en <br />
              cada etapa del proceso.
            </p>
          </div>
        </div>

        <div className='flex flex-col md:flex-row items-center md:items-stretch gap-6 mt-6'>
          <div className='bg-customDarkBg2 h-auto w-full md:w-72 lg:w-80 py-4 px-4 rounded-lg'>
            <img
              className='w-16 h-16 lg:w-24 lg:h-24 rounded-lg mx-auto mb-4'
              src='/assets/icons/screens.svg'
              alt='Proyecto 3'
            />
            <h1 className='text-customSecondary text-lg sm:text-xl mb-4 text-center'>
              Versatilidad y Adaptabilidad
            </h1>
            <p className='text-gray-400 text-sm sm:text-base'>
              Nos ajustamos a las necesidades de cada <br />
              proyecto, adaptándonos a diferentes <br />
              plataformas, tecnologías y estilos para <br />
              entregar resultados óptimos.
            </p>
          </div>

          <div className='bg-customDarkBg2 h-auto w-full md:w-72 lg:w-80 py-4 px-4 mt-6 md:mt-0 rounded-lg'>
            <img
              className='w-16 h-16 lg:w-24 lg:h-24 rounded-lg mx-auto mb-4'
              src='/assets/icons/pincel.svg'
              alt='Proyecto 4'
            />
            <h1 className='text-customSecondary text-lg sm:text-xl mb-4 text-center'>
              Diseño Moderno y Dinámico
            </h1>
            <p className='text-gray-400 text-sm sm:text-base'>
              Creamos interfaces atractivas y funcionales que <br />
              combinan tendencias actuales con elementos <br />
              interactivos, mejorando la experiencia del <br />
              usuario en cada visita.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
