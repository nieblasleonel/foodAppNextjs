"use client"
import Image from 'next/image';
import { useRef, useState } from 'react';
import style from './image-picker.module.css';

export default function ImagePicker({ label, name }) {

    const [pickedImage, setPickedImage] = useState();
    const imageInputRef = useRef();

    const handlePick = () => {
        imageInputRef.current.click();
    }

    const handleImageChange = (event) => {
        const file = event.target.files[0];

        if (!file) {
            setPickedImage(null);
            return;
        }

        const fileReader = new FileReader();
        fileReader.onload = () => {
            setPickedImage(fileReader.result)
        }
        fileReader.readAsDataURL(file);

    }
    return (
        <div className={style.picker}>
            <label htmlFor={name}>{label}</label>
            <div className={style.controls}>
                <div className={style.preview}>
                    {!pickedImage && <p>No image picked yet.</p>}
                    {pickedImage && <Image src={pickedImage} alt="The image selected by the user." fill/>}
                </div>
                <input
                    className={style.input}
                    type='file'
                    id={name}
                    accept="image/png, image/jpeg"
                    name={name}
                    ref={imageInputRef}
                    onChange={handleImageChange}
                    required
                />
                <button className={style.button} type="button" onClick={handlePick}>Pick an Image</button>
            </div>
        </div>
    )
}
