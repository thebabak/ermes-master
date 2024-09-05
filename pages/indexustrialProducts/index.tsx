import GetInTochBox from '@/Components/GetInTochBox/GetInTochBox'
import IndustrialPage from '@/Components/IndustrialPage/IndustrialPage'
import InProductsHeader from '@/Components/InProductsHeader/InProductsHeader'
import React, { useState } from 'react'

function index() {

 const [selectedindustrialTitle, setSelectedindustrialTitle] = useState(
   "Production Process Machinery"
 );
  return (
   <div className="relative">
      <InProductsHeader />

      <IndustrialPage
          selectedindustrialTitle={selectedindustrialTitle}
          setSelectedindustrialTitle={setSelectedindustrialTitle}
        />
      
      <GetInTochBox />
    </div>
  )
}

export default index