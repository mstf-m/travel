import Photo from './Photo/Photo'
import { useState } from "react"
import photo1 from './photo-1.jpg'
import photo2 from './photo-2.jpg'
import photo3 from './photo-3.jpg'
import photo4 from './photo-4.jpg'
import photo5 from './photo-5.jpg'
import photo6 from './photo-6.jpg'
import photo7 from './photo-7.jpg'
import Wrapper from '../../hoc/Wrapper'

function Gallery(){

    const photos=
        [
            {
                id: 0,
                img: photo1, 
                URL: '#',
            },
            {
                id: 1,
                img: photo2, 
                URL: '#',
            },
            {
                id: 2,
                img: photo3, 
                URL: '#',
            },
            {
                id: 3,
                img: photo4, 
                URL: '#',
            },
            {
                id: 4,
                img: photo5, 
                URL: '#',
            },
            {
                id: 5,
                img: photo6, 
                URL: '#',
            },
            {
                id: 6,
                img: photo7, 
                URL: '#',
            },

        ]

    return (
        <Wrapper>
            <h6 className="text-center font-semibold pt-7 text-xl">Gallery</h6>
            <Photo gallery={photos} />
        </Wrapper>
    )
}

export default Gallery