export const Footer = () => {
  return (
    <footer>
      <div className='pt-10 lg:pt-20 lg:pb-12 bg-customDarkBg1 radius-for-skewed'>
        <div className='container mx-auto px-4 w-full max-w-6xl'>
          <div className='flex flex-col items-center'>
            <div className='mb-16 lg:mb-0'>
              <div className='flex justify-center'>
                <img className='w-60' src='/rsidenb.png' alt='Logo' />
              </div>
              <div className='flex justify-center mt-4 lg:mr-14'>
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
            </div>
          </div>
          <p className='lg:text-center text-sm text-gray-400 border-t border-[rgb(255,255,255,0.2)] pt-12 mt-16 hidden lg:block'>
            &copy; 2024. RSIDE.
          </p>
        </div>
      </div>
    </footer>
  )
}
