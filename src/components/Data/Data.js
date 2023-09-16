import tour1 from '../Tours/tour-1.jpg'
import tour2 from '../Tours/tour-2.jpg'
import { IoIosStar } from 'react-icons/io'
import { IoIosStarOutline } from 'react-icons/io'
import { IoIosStarHalf } from 'react-icons/io'

const toursData=[
    {
        id: 0,
        img: tour1,
        title: 'Benidorm, Spain',
        rating: <div className='flex text-yellow-400'><IoIosStar></IoIosStar><IoIosStar></IoIosStar><IoIosStar></IoIosStar><IoIosStar></IoIosStar><IoIosStarOutline></IoIosStarOutline></div>,
        reviews: '4 customer reviews',
        text: 'Benidorm is a buzzing resort with a big reputation for beach holidays. Situated in sunny Costa Blanca, the town is one of the original Spanish beach resorts...',
        URL: '#',
        price: '$790',
        // count: 0
    },

    {
        id: 1,
        img: tour2,
        title: 'Mauritius Island, Africa',
        rating: <div className='flex text-yellow-400'><IoIosStar></IoIosStar><IoIosStar></IoIosStar><IoIosStar></IoIosStar><IoIosStar></IoIosStar><IoIosStarHalf></IoIosStarHalf></div>,
        reviews: '5 customer reviews',
        text: 'The beautiful and inviting island nation of Mauritius is an ideal ‘flop and drop’ at the conclusion of your safari. Indulge in the delightful scents of the fragrant...',
        URL: '#',
        price: '$890',
        // count: 0
    }
]

export default toursData