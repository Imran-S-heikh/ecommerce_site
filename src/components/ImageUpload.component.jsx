import React from 'react'
import { Button } from '@material-ui/core';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import { useRef } from 'react';

export default function ImageUpload({onUpload,fullWidth}) {

    const inputRef = useRef();

    const imageHandler = event => {
        if(event.target.files){
            const file = event.target.files[0];
            const fileReader = new FileReader();
            fileReader.onload = ()=>{
                onUpload(file,fileReader.result)
            }
            fileReader.readAsDataURL(file);
        }
    }

    const handler = ()=>{
        inputRef.current.click();
    }

    return (
        <div>
            <input 
                onChange={imageHandler} 
                ref={inputRef} 
                style={{display: 'none'}} 
                type="file" 
                name="image"
                accept=".jpeg,.jpg,.png"
                />
            <Button fullWidth={fullWidth} onClick={handler} variant="contained" color="secondary" startIcon={<CloudUploadIcon/>} >Upload</Button>
        </div>
    )
}
