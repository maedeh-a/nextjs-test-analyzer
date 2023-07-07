import {default as NImage} from 'next/image';
import React, { useCallback, useState } from 'react'
import { useDropzone } from 'react-dropzone';

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
        <form id="form1">
            <div {...getRootProps()} style={{ border: "1px solid #ddd", padding: 16, marginBottom: 6 }}>
                <input {...getInputProps()} accept="application/pdf" />
                
                {
                    selectedFile?.name ??
                    "Drag or select the PDF file here"

                }
            </div>
            <input type='file' id="imgInp" accept="image/*" capture="camera" onChange={onCameraCapture} />
            {picture && <NImage id="blah" src={picture} alt="your image" width={selectedFileDimensions.width} height={selectedFileDimensions.height} /> }

            <button type='submit' disabled={!selectedFile && !picture} >Submit</button>
        </form>
    )
}
export default Camera