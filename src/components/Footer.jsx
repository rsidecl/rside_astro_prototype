export const Footer = () => {
  return (
    <footer>
      <section className='bg-customDarkBg1  border-t-2   border-[rgb(255,255,255,0.2)] w-2/3  mx-auto mt-10'>
        <div className='mx-auto '>
          <a href='/'>
            <img className='w-60 mx-auto' src='/rsidenb.png' alt='Logo' />
          </a>
        </div>
        <div className='flex justify-center mt-4  mr-10 '>
          <a
            className='inline-block w-10 h-10 mr-2 p-2 bg-customDarkBg2 custom-border-gray hover:bg-gray-700 rounded-xl'
            href='#'
          >
            <img src='/assets/icons/ig.svg' alt='Instagram' />
          </a>
          <a
            className='inline-block w-10 h-10 mr-2 p-2 bg-customDarkBg2 custom-border-gray hover:bg-gray-700 rounded-xl'
            href='#'
          >
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
