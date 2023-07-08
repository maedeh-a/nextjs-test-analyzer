"use client"
import { useRef, useState } from 'react';
import Camera from './page/Camera';
import Interpretation from './page/Interpretation';
export default function Home() {
   const camera = useRef(null);
  const [image, setImage] = useState(null);
  return (

     <div>
      {/* <Camera /> */}
      <Interpretation/>
    </div>
  )
}
