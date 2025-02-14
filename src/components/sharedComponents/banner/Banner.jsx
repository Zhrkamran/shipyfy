import { useEffect, useState } from "react"
import { getHomeBanners } from "../../../services/Api"


function Banner({placement}) {
  const [banners,setBanners]=useState([])
  useEffect(()=>{
    async function getDataBanner() {
        const data=await getHomeBanners(placement)
        setBanners(data)
    }
    getDataBanner()
  },[])

  return (
     
        banners.map((item) => (
            <img key={item.id} src={item.image} className="h-full w-full object-cover"/>
         ))
    
  )
}

export default Banner