import Container from '@/components/Container/Container'
import React from 'react'
import Product from './Product'
import Sidebar from '../../components/SidebarDropdown'
import Tab from './Tab'

const Page1 = () => {
  return (
    <div>
      {/* SECTION */}
      <div className='bg-primary'>
        <Container>
          <div className='flex gap-2 max-xl:flex-col h-[132px] justify-between max-xl:justify-center items-center'>
            <div className='text-white text-semibold text-[36px]'>Шини і диски</div> 
            <Tab/>
          </div>
        </Container>
        </div>

        <Container className='flex max-md:flex-col max-md:items-center gap-8'>
          {/* LEFT */}
          <div className='mt-16'>
            <Sidebar/>
          </div>
          {/* RIGHT */}
          <Product/>
        </Container>
    </div>
  )
}

export default Page1