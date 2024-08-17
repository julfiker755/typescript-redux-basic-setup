import { ReactNode } from 'react'

type TContainerProps={
    children:ReactNode
}

function Container({children}:TContainerProps){
  return (
    <div className='w-11/12 lg:max-w-7xl m-auto'>
      {children}
    </div>
  )
}

export default Container