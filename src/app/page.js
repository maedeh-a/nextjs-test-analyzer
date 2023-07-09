"use client"
import { useState } from 'react';
import Camera from './page/Camera';
import Interpretation from './page/Interpretation';
export default function Home() {
  const [data, setData] = useState(null);
  return (

    <div>
      {!data ? <Camera setData={setData} /> :
        <Interpretation data={data}/>}
    </div>
  )
}
