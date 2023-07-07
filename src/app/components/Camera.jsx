import {default as NImage} from 'next/image';
import React, { useCallback, useState } from 'react'
import { useDropzone } from 'react-dropzone';
import doctor from '../img/doctor.png'

const Camera = () => {
    const [picture, setPicture] = useState('')
    const [selectedFile, setSelectedFile] = useState(undefined)
    const [selectedFileDimensions, setSelectedFileDimensions] = useState({width: 0, height: 0})

    const getBase64Representation = (file) =>
        new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = (error) => reject(error);
        });
    const getBase64Strings = useCallback(async (file) => {
        setIsLoading(true);
        const base64Strings = await  getBase64Representation(file)
        return base64Strings; 
    }, []);
    const onDrop = useCallback(acceptedFiles => {
        if (acceptedFiles.length > 0) {
            const [file] = acceptedFiles
            if(file) setSelectedFile(file )
        }
    }, [])

    const onCameraCapture = e => {
        if (!e.target.files || e.target.files.length === 0) {
            setPicture(undefined)
            return
        }
        const reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        reader.onload = (e) => {
            const image = new Image()
            image.src = e.target.result;
            image.onload = () => {
                const {
                    height,
                    width
                } = image;
                const ratio = width / height
                let newW = 400
                let newH = 400 * ratio
                if(ratio < 1)
                    [newH, newW] = [newW, newH]
                

                setSelectedFileDimensions({width: newW, height: newH})
                setPicture(image.src)
            };
        }
    }

    const { getRootProps, getInputProps } = useDropzone({ onDrop })
    return (
        <>
        <section className="Camera-upload-body">
        <div className='upload-box'>
                <div className="head-upload">
                    <div className="text-box">
                        <h1>
                            AL MED TEST
                        </h1>
                        <span className="text-by">BY RZP AL</span>
                    </div>
                    <div className="">
                            <img src={doctor} alt="" />
                    </div>
                    <div className="text-box">
                        <span className="text1">upload a photo or PDF <br /> Of Your Medical Test</span>
                        <p className="text2">
                            It colud be ablood test result or repot of eny medical test like MRT , CT-Scan or Sonogaphy.
                        </p>
                    </div>
                    
                </div>


                <form id="form1">
                    <div {...getRootProps()}  className='input-file'>
                        <input {...getInputProps()} accept="application/pdf" />

                        {
                            selectedFile?.name ??
                            " select File"

                        }
                    </div>
                    <div className="or-box">
                        <span className="">or</span>
                    </div>
                    <div className="">
                            <input type='file' id="imgInp" accept="image/*" capture="camera" onChange={onCameraCapture} />
                            {picture && <NImage id="blah" src={picture} alt="your image" width={selectedFileDimensions.width} height={selectedFileDimensions.height} />}
                    </div>


                    <button type='submit' disabled={!selectedFile && !picture} className='btn-form' >See The Interprertation </button>
                </form>
        </div>
        </section>

        </>

    )
}
export default Camera