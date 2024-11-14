export const Footer = () => {
  return (
    <footer>
      <section className='bg-customDarkBg1  border-t-2   border-[rgb(255,255,255,0.2)] w-2/3  mx-auto mt-10'>
        <div className='mx-auto '>
          <a href='/'>
            <img
              className='w-40 mx-20 lg:mx-auto'
              src='/rsidenb.png'
              alt='Logo'
            />
          </a>
        </div>
        <div className='flex justify-center gap-4 mb-10 lg:mr-10 '>
          <a href='https://www.instagram.com/rsideweb/'>
            <img src='/assets/icons/ig.svg' alt='Instagram' />
          </a>
          <a href='https://x.com/?lang=es'>
            <img src='/assets/icons/x.svg' alt='X' />
          </a>
        </div>
      </section>
      <div>
        <div className=' flex justify-between my-4 mx-4'>
          <p className='text-gray-400 text-left'>Politicas y privacidad</p>
          <p className='text-gray-400 text-right'>© 2024  [R] - Side </p>
        </div>
      </div>
    </footer>
  )
}
