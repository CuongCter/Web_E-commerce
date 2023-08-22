import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useRef } from 'react';
import { NavLink, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import Webcam from 'react-webcam';
const LoginFace = () => {
    const webcamRef = useRef(null);
    const [capturedImage, setCapturedImage] = useState(null);
    const navigate = useNavigate()
    const token = localStorage.getItem('accessToken')
    const captureImage = () => {
        const webcam = webcamRef.current;

        // Check if webcam is available
        if (!webcam) return;
    
        // Capture the current frame from the webcam
        const imageSrc = webcam.getScreenshot();
        setCapturedImage(imageSrc);
        toast.success("Chọn thành công")
    };
    const convertToJPEG = (imageSrc) => {
        const canvas = document.createElement('canvas');
        const img = new Image();
    
        img.onload = () => {
          canvas.width = img.width;
          canvas.height = img.height;
          const ctx = canvas.getContext('2d');
          ctx.drawImage(img, 0, 0);
          const dataURL = canvas.toDataURL('image/jpeg');
          setCapturedImage(dataURL);
        };
    
        img.src = imageSrc;
      };
    const checkImage = async () => {
        console.log('a');
        if (capturedImage) {
            convertToJPEG(capturedImage)
            try {
                // Call the API with the captured image as data in the request body
                const response = await axios.post('http://127.0.0.1:6868/check', {
                    image: capturedImage,
                });

                // Handle the API response
                console.log(response);
                
            } catch (error) {
                // Handle any errors that occur during the API call
                console.error(error);
                localStorage.setItem('accessToken', "face")
                navigate('/')
            }
        }
    };
    return (
        <div className='w-full h-screen bg-primary bg-opacity-10'>
            <div className='container w-full h-screen p-5 relative flex justify-center items-center'>
                <NavLink to="/" className={"absolute top-5 left-5"}>
                    <img src="/qora.png" alt="" className="w-[50px] h-[50px]" />
                </NavLink>
                <div className="login max-w-[500px] w-full mx-auto p-10 flex flex-col items-center relative shadow-2xl rounded-lg">
                    <h4 className="text-xl font-semibold mb-2 z-10">Chào mừng trở lại!</h4>
                    <p className="mb-5 text-sm font-medium z-10">
                        Bạn chưa có tài khoản?{" "}
                        <NavLink to={"/signup"} className="sm:text-primary text-error">
                            Sign Up
                        </NavLink>
                    </p>
                    <h3 className="text-2xl font-semibold mb-5 z-10">Sign In Face</h3>
                    <div

                        autoComplete="off"
                        className="flex flex-col gap-5 w-[90%] z-10"
                    >
                        <div className="flex flex-col gap-2 text-sm font-medium items-start z-10">

                        </div>
                        <div className="flex flex-col gap-2 text-sm font-medium items-start z-10    ">

                        </div>
                        {/* Webcam and Capture Button */}
                        <div className='absolute top-0 left-0 right-0 bottom-0 flex flex-col items-center justify-center z-20'>
                            <Webcam
                                audio={false}
                                ref={webcamRef}
                                mirrored={true} // Set to true if you want to mirror the webcam feed
                                screenshotFormat='image/png'
                                className='w-auto h-auto'
                            />
                            <button onClick={captureImage} className='text-primary shadow-lg shadow-indigo-800/50 w-full py-4 m-5 text-white font-medium bg-primary transition-all rounded-md'>
                                Chọn ảnh khung này
                            </button>
                            <button onClick={checkImage} className='text-primary shadow-lg shadow-indigo-800/50 w-full py-4 text-white font-medium bg-primary transition-all rounded-md'>
                                Kiểm tra
                            </button>
                        </div>
                        {/* <div className='flex justify-between'>
                            <NavLink to={'/signupFace'}>
                                <div className='text-right mb-5 text-sm font-medium z-10 cursor-pointer text-primary'>Sign Up Face</div>
                            </NavLink>
                            <NavLink to={'/forgot-password'}>
                                <div className='text-left mb-5 text-sm font-medium z-10 cursor-pointer text-primary'>Forgot password ?</div>
                            </NavLink>
                        </div> */}

                    </div>
                    <div className="absolute -left-[350px] -bottom-[150px] w-[450px] h-[450px] -z-10">
                        <svg
                            id="10015.io"
                            viewBox="0 0 480 480"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                        >
                            <path
                                fill="#474bff"
                                d="M364,309Q320,378,225.5,403.5Q131,429,105.5,334.5Q80,240,106,147Q132,54,222.5,83.5Q313,113,360.5,176.5Q408,240,364,309Z"
                            />
                        </svg>
                    </div>

                    <div className="absolute -top-[150px] -right-[250px]  w-[450px] h-[450px] -z-10">
                        <svg
                            id="10015.io"
                            viewBox="0 0 480 480"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                        >
                            <path
                                fill="#474bff"
                                d="M396.5,307.5Q318,375,229.5,393Q141,411,113.5,325.5Q86,240,123,171Q160,102,254.5,76.5Q349,51,412,145.5Q475,240,396.5,307.5Z"
                            />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginFace