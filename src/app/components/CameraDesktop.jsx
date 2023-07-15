import React from 'react'
import { default as NImage } from 'next/image';
import doctor from '../img/doctor.png'
function CameraDesktop() {
  return (
    <>
    <div className="camera-desktop-body d-none d-lg-block mb-5 pb-5">
      <div className="uplod-text-box mb-5">
          <h1>
            AL MED TEST
          </h1>
          <span className="text-by">BY RZP AL</span>
      </div>
      <div className="d-flex">
        
        <div className="col-6">
         
          <div className=" img-box">
            <NImage src={doctor} objectFit="cover" width={560} />
          </div>
      
        </div>
        <div className="col-6">
            <div className="mx-4 ">
                <div className="upload-text-box d-flex flex-column align-items-center justify-content-center">
                  <span className="text1">upload a photo or PDF <br /> Of Your Medical Test</span>
                  <p className="text2 mx-3">
                    It colud be ablood test result or repot of eny medical test like MRT , CT-Scan or Sonogaphy.
                  </p>
                </div>
                <form id="form1" onSubmit={submit}>
                  <div {...getRootProps()} className='input-file'>
                    <input {...getInputProps()} accept="application/pdf" />
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-image-fill" viewBox="0 0 16 16">
                      <path d="M.002 3a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-12a2 2 0 0 1-2-2V3zm1 9v1a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V9.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12zm5-6.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0z" />
                    </svg>
                    {
                      selectedFile?.name ??
                      " select File"
                    }
                  </div>
                  <div className="or-box">
                    <span className="">or</span>
                  </div>
                  <div className={`upload-camera`}>


                    <input type='file' id="imgInp" accept="image/*" capture="camera" onChange={onCameraCapture} hidden />

                    <div className="file-box mb-4">
                      <span id="file-chosen"></span>
                      <label for="imgInp" className="select-file">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-camera-fill" viewBox="0 0 16 16">
                          <path d="M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                          <path d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2zm.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z" />
                        </svg>
                        <span> Open Camera & Take Photo</span>

                      </label>
                    </div>
                    {picture && <NImage id="blah" src={picture} alt="your image" width={selectedFileDimensions.width} height={selectedFileDimensions.height} />}



                  </div>


                  <button type='submit' disabled={!selectedFile && !picture} className='btn-form'  >See The Interprertation </button>
                </form>
            </div>
        </div>
      </div>

    </div>
    </>
  )
}

export default CameraDesktop