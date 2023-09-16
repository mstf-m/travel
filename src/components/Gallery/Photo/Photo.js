import { Splide, SplideSlide } from '@splidejs/react-splide';
import './Photo.css'



export default ({ gallery }) => {
    return (
        <div className='mx-[19px] pb-16'>
            <Splide
                options={{
                    type: 'loop',
                    perPage: 5,
                    focus: 'center',
                    autoplay: 'true',
                    rewind: true,
                }}
                aria-label="My Favorite Images"
            >
                {
                    gallery.map((item) => (
                        
                        <SplideSlide className='cursor-pointer'>
                            <img src={item.img}></img>
                        </SplideSlide>
                    ))
                }
            </Splide>
        </div>
    );
}