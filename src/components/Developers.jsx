import { ContactModal } from './ContactModal'
import { useState } from 'react'

export const Developers = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <div className='bg-customDarkBg1 flex flex-col items-center py-10'>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
        <div className='w-[370px] h-auto bg-card rounded-lg p-6'>
          <h1 className='text-white'>Sam Kee Tang</h1>
          <h2 className='text-gray-400 mb-4'>
            Community Manager, Web Designer
          </h2>
          <p className='text-white'>
            ¡Hola a todos! Soy Sam, el <br /> Community Manager. Mi misión es{' '}
            <br /> construir puentes entre nuestra <br /> marca y nuestra
            comunidad <br />
            global. Estoy aquí para <br /> escuchar, informar y hacer <br />
            crecer este espacio juntos. <br />
            ¡Bienvenidos a nuestra comunidad!
          </p>
        </div>

        <div className='w-[370px] h-auto bg-card rounded-lg p-6'>
          <h1 className='text-white'>Fabian Pino</h1>
          <h2 className='text-gray-400 mb-4'>CTO</h2>
          <p className='text-white'>
            ¡Saludos a todos! Soy Fabian, <br /> el CTO de R-Side. Es un honor{' '}
            <br /> liderar este equipo <br /> apasionado y visionario en <br />
            nuestra misión de la empresa. Estoy aquí para <br />
            impulsar la innovación, el <br /> crecimiento y la excelencia en{' '}
            <br />
            todo lo que hacemos. ¡Juntos, <br />
            alcanzaremos nuevos horizontes <br /> y dejaremos una marca <br />
            significativa en el mundo!
          </p>
        </div>

        <div className='w-[370px]h-auto bg-card rounded-lg p-6'>
          <h1 className='text-white'>Tomas Muñoz</h1>
          <h2 className='text-gray-400 mb-4'>Frontend Developer</h2>
          <p className='text-white'>
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

        <div className='w-[370px] h-auto bg-card rounded-lg p-6'>
          <h1 className='text-white'>Javier Figueroa</h1>
          <h2 className='text-gray-400 mb-4'>Frontend Developer</h2>
          <p className='text-white'>
            ¡Hola a todos! Soy Javier, el <br />
            responsable del Frontend. Mi <br />
            pasión es crear experiencias <br />
            digitales impactantes y <br /> amigables para nuestros usuarios.
            ¡Listo para llevar <br /> nuestra plataforma al siguiente <br />
            nivel!
          </p>
        </div>

        <div className='w-[370px] h-auto bg-card rounded-lg p-6'>
          <h1 className='text-white'>Renato Baez</h1>
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
            a trabajar juntos para llevar <br />
            nuestra visión al siguiente nivel!
          </p>
        </div>

        <div className='w-[370px] h-auto bg-card rounded-lg p-6'>
          <h1 className='text-white'>Tiseran Morgue</h1>
          <h2 className='text-gray-400 mb-4'>Diseñador UX/UI</h2>
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

      {/* Botón de "Hablemos" y Modal */}
      <div className='flex justify-center mt-8'>
        <button
          onClick={() => setIsModalOpen(true)}
          className='bg-customPrimary hover:bg-customDarkBg text-white font-bold py-2 px-4 rounded w-52 h-12'
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
