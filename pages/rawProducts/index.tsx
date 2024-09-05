import GetInTochBox from '@/Components/GetInTochBox/GetInTochBox'
import RawPage from '@/Components/RawPage/RawPage';
import RwProductsHeader from '@/Components/RwProductsHeader/RwProductsHeader';
import React, { useState } from 'react'

function index() {
  const [selectedRawTitle, setSelectedRawTitle] =
  useState("Plastic Industries");
  return (
    <div className="relative">
      <RwProductsHeader />

      <RawPage
          selectedRawTitle={selectedRawTitle}
          setSelectedRawTitle={setSelectedRawTitle}
        />
      <GetInTochBox />
    </div>
  )
}

export default index