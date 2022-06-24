import React from 'react';
import axios from "axios"


const UploadImages = () => {

    // when select button is clicked
    const onSelectFile = async (event) => {
        // 1. get the file 
        const file = event.target.files[0];

        // 2. convert file
        const convertedFile = await convertToBase64(file);
        
        // 3. make post request
        const s3URL = await axios.post(
        'http://localhost:3000/api/upload',
        {
            image: convertedFile,
            imageName: file.name
        }
    );
    }

    const convertToBase64 = (file) => {
        return new Promise(resolve => {
            const reader = new FileReader();       

            // read data
            reader.readAsDataURL(file);

            // load data
            reader.onload = () => {
                resolve(reader.result);
            }
        })
    }
    return (
        <input
            type="file"
            accept="image/*"
            onChange={onSelectFile} />
    )
}

export default UploadImages;