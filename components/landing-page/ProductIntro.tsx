import React from 'react'

function ProductIntro() {
  return (
    <div className='flex flex-col gap-2 items-center w-full'>
        <h1 className='text-5xl font-extrabold mt-5 mb-3 text-primary'>
            YearBook Digital
        </h1>
        <p className='text-base text-muted-foreground mb-5'>
            Seamlessly create and manage your yearbook with our innovative platform.
        </p>
        <p className='text-xl italic text-center'>
            "Capture Memories, Craft Stories, Connect Generations"
        </p>
    </div>
  )
}

export default ProductIntro
