"use client"
import Image from 'next/image'
import styles from './page.module.css'
import { useRef, useState } from 'react';
import Camera from './components/Camera';
export default function Home() {
   const camera = useRef(null);
  const [image, setImage] = useState(null);
  return (

     <div>
      <Camera />
    </div>
  )
}
