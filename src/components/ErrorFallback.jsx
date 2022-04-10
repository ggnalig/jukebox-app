import React from 'react';

const ErrorFallback = () => {
  return (
    <>
      <div className="flex flex-col justify-center align-middle items-center h-screen">
        <h6 className='text-2xl font-semibold'>404</h6>
        <h6>Kami sedang mengalami masalah teknis dan sedang memperbaikinya.</h6>
      </div>
    </>
  )
}

export default ErrorFallback
