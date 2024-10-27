import { ContactModal } from './ContactModal'
import { useState } from 'react'

export const Developers = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  return (
    <div className=' bg-customDarkBg1  justify-center '>
      <div
        className='bg-customDarkBg1 flex  justify-center
      '
      >
        <div className='w-[370px] h-[440px] bg-card rounded-lg mx-12 my-12 px-10 py-10'>
          <h1 className='text-white'>Sam Kee Tang</h1>
          <h2 className='text-gray-400 mb-4'>
            Community Manager, Web Designer
          </h2>
          <p className='text-white'>
            !Hola a todos! Soy Sam, el <br /> Community Manager. Mi mision es{' '}
            <br /> construir puentes entre nuestra <br /> marca y nuestra
            comunidad <br />
            global. Estoy aqui para <br /> escuchar, informar y hacer <br />
            crecer este espacio juntos. <br />
            !Bienvenidos a nuestra comunidad!{' '}
          </p>
        </div>
        <div className='w-[370px] h-[440px] bg-card rounded-lg mx-12 my-12 px-10 py-10'>
          <h1 className='text-white'> Fabian Pino </h1>
          <h2 className='text-gray-400  mb-4'>CTO</h2>
          <p className='text-white'>
            !Saludos a todos! Soy Fabian, <br /> el CTO de R-Side. es un honor{' '}
            <br /> liderar este equipo <br /> apasiando y visionario en <br />
            nuestra mision de mision de la <br /> empresa Estoy aqui para <br />{' '}
            impulsar de la innoavacion, el <br /> crecimiento y la excelencia en{' '}
            <br />
            todo lo que hacemos. !Juntos, <br />
            alcanzaremos nuevos horizontes <br />y dejaremos una marca <br />
            significativa en el mundo!.{' '}
          </p>
        </div>
        <div className='w-[370px] h-[440px] bg-card rounded-lg mx-12 my-12 px-10 py-10'>
          <h1 className='text-white'>Tomas Muñoz</h1>
          <h2 className='text-gray-400 mb-4'>Fronted Developer</h2>
          <p className='text-white'>
            {' '}
            ¡Saludos, mundo digital! Soy <br />
            Tomás, el desarrollador de <br /> código en R-Side. Mi pasión <br />{' '}
            por la programación se une a la <br /> visión de nuestro equipo para{' '}
            <br /> crear tecnología innovadora y <br /> emocionante. Estoy listo
            para <br />
            sumergirme en el código y <br />
            construir las bases que harán <br />
            realidad nuestras ideas. <br /> ¡Juntos, daremos vida a la magia{' '}
            <br /> digital!
          </p>
        </div>
      </div>
      <div className='bg-customDarkBg1  flex justify-center'>
        <div className='w-[370px] h-[440px] bg-card rounded-lg mx-12 my-12 px-10 py-10'>
          <h1 className='text-white'>Javier Figueroa</h1>
          <h2 className='text-gray-400 mb-4'>Fronted Developer</h2>
          <p className='text-white'>
            ¡Hola a todos! Soy Javier, el <br />
            responsable del Frontend. Mi <br />
            pasión es crear experiencias
            <br />
            digitales impactantes y <br /> amigables para nuestros usuarios.
            ¡Listo para llevar <br /> nuestra plataforma al siguiente <br />{' '}
            nivel!
          </p>
        </div>
        <div className='w-[370px] h-[440px] bg-card rounded-lg mx-12 my-12 px-10 py-10'>
          <h1 className='text-white'> Renato Baez</h1>
          <h2 className='text-gray-400 mb-4'>Backend Developer</h2>
          <p className='text-white'>
            ¡Hola a todos! Soy Renato, el <br />
            responsable del Backend en <br />
            R-Side. Mi objetivo es <br />
            construir una base sólida y <br /> confiable para nuestras <br />
            plataformas, asegurando un <br />
            rendimiento óptimo y una <br />
            experiencia sin contratiempos <br />
            para nuestros usuarios. ¡Vamos <br />
            a trabajar juntos para llevar <br /> nuestra visión al siguiente
            nivel!
          </p>
        </div>
        <div className='w-[370px] h-[440px] bg-card rounded-lg mx-12 my-12 px-10 py-10'>
          <h1 className='text-white'>Tiseran Morgue</h1>
          <h2 className='text-gray-400 mb-4'> Diseñador UX/UI</h2>
          <p className='text-white'>
            ¡Hola a todos! Soy Tiseran, el <br />
            diseñador UX/UI de [R]-Side. Me <br />
            encanta explorar la intersección <br /> entre la estética y la{' '}
            <br />
            funcionalidad para crear <br />
            experiencias digitales <br /> impactantes. Estoy emocionado de{' '}
            <br /> trabajar juntos para dar vida a <br /> nuestra visión y
            llevar nuestras <br /> ideas al siguiente nivel. ¡Bienvenidos a{' '}
            <br />
            nuestro mundo creativo!
          </p>
        </div>
      </div>
      <div className='flex justify-center'>
        <button
          onClick={() => setIsModalOpen(true)}
          className='bg-customPrimary hover:bg-customDarkBg text-white font-bold py-2 px-4 rounded w-52 h-12 mt-10'
        >
          Hablemos
        </button>
      </div>
      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  )
}
