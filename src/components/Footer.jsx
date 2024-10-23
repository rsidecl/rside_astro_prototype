export const Footer = () => {
  return (
    <footer>
      <div className='pt-10  lg:pt-20 lg:pb-12 bg-customDarkBg1 radius-for-skewed '>
        <div className='container mx-auto px-4 w-4/5 md:w-11/12 lg:w-10/12 xl:w-4/5 2xl:w-2/3'>
          <div className='flex justify-center item-center'>
            <div className='w-full mb-16 lg:mb-0'>
              <div className='flex justify-center items-center grow basis-0'>
                <img className='w-60 ' src='/rsidenb.png' alt='' />
              </div>
              <div className='mx-auto justify-center items-center flex'>
                <a
                  className='inline-block w-10  h-10 mr-2 p-2 bg-customDarkBg2 custom-border-gray  hover:bg-gray-700 rounded-xl'
                  href='#'
                >
                  <img src='/assets/icons/ig.svg' alt='' />
                </a>
                <a
                  className='inline-block w-10  h-10 mr-2 p-2 bg-customDarkBg2 custom-border-gray  hover:bg-gray-700 rounded-xl'
                  href=''
                >
                  <img src='/assets/icons/x.svg' alt='' />
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
