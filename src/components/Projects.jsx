export const Projects = () => {
  return (
    <div className='flex flex-col md:flex-row bg-customDarkBg1 mx-4 md:mx-10 lg:mx-40'>
      <div className='flex-1 bg-customDarkBg1 text-sm sm:text-base mb-6 sm:mt-32 mt-16 font-bold'>
        <h2 className='text-customSecondary text-4xl'>
          Proyectos Personalizados para <br /> Impulsar tu Éxito
        </h2>
        <h1 className='text-white text-6xl my-6'>
          Cuidamos Cada Detalle <br /> para el Éxito de tu <br /> Negocio
        </h1>
        <h3 className='text-gray-400 text-2xl my-6 space-y-4 '>
          Ser el aliado estratégico que impulsa <br />
          el éxito de nuestros clientes, <br />
          cuidando cada detalle y transformando <br />
          ideas en soluciones web innovadoras y <br />
          personalizadas. Nos comprometemos a <br />
          entender profundamente las <br />
          necesidades de cada proyecto, creando <br />
          plataformas dinámicas y efectivas que <br />
          potencien el crecimiento y la <br />
          competitividad de cada negocio.
        </h3>
      </div>
      <div className='flex-1 mt-10 md:mt-20 mx-auto rounded-lg'>
        <div className='flex'>
          <div className='bg-customDarkBg2 h-96 w-80 py-4 px-4 mb-10 mr-10 rounded-lg'>
            <img
              className='w-24 h-24 rounded-lg mx-auto mb-4'
              src='/assets/icons/settings.svg'
              alt='Proyecto 1'
            />
            <h1 className='text-customSecondary text-xl mb-4'>
              Atencion Personalizada y a <br />
              medida
            </h1>
            <p className='text-white'>
              Nos enfocamos en entender y <br />
              satisfacer las necesidades <br />
              únicas de cada cliente, <br />
              brindando un servicio cercano y <br />
              dedicado a lo largo de todo el proyecto.
            </p>
          </div>
          <div className='bg-customDarkBg2 h-96  w-80 mt-20 rounded-lg py-2 px-4 '>
            <img
              className='w-24 h-24 rounded-lg mx-auto'
              src='/assets/icons/visualcod.svg'
              alt='Proyecto 2'
            />
            <h1 className='text-customSecondary text-xl mb-4'>
              Desarrollo Integral
            </h1>
            <p className='text-white'>
              Ofrecemos soluciones completas,
              <br />
              desde la concepción de la idea <br />
              hasta su implementación y <br />
              mantenimiento, garantizando <br />
              calidad en cada etapa del proceso.
            </p>
          </div>
        </div>
        <div className='flex'>
          <div className='bg-customDarkBg2 h-96 w-80 py-4 px-4 mb-10 mr-10 rounded-lg '>
            <img
              className='w-24 h-24 rounded-lg mx-auto mb-4'
              src='/assets/icons/screens.svg'
              alt='Proyecto 3'
            />
            <h1 className='text-customSecondary text-xl mb-4'>
              Versatilidad y Adaptabilidad
            </h1>
            <p className='text-white'>
              Nos ajustamos a las necesidades <br />
              de cada proyecto, adaptándonos <br />
              a diferentes plataformas, <br />
              tecnologías y estilos para <br />
              entregar resultados óptimos.
            </p>
          </div>
          <div className='bg-customDarkBg2 h-96  w-80 mt-20 rounded-lg py-2 px-4'>
            <img
              className='w-24 h-24 rounded-lg mx-auto mb-4'
              src='/assets/icons/pincel.svg'
              alt='Proyecto 4'
            />
            <h1 className='text-customSecondary text-xl mb-4'>
              Diseño moderno y dinamico
            </h1>
            <p className='text-white'>
              Creamos interfaces atractivas y <br />
              funcionales que combinan <br />
              tendencias actuales con <br />
              elementos interactivos, <br />
              mejorando la experiencia del <br />
              usuario en cada visita.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
