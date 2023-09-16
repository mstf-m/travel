
import './Serv.css'


function Serv({ servs }) {
    return (
        <li>
            <a
                className='service border-8 border-[#f4f4f4] flex px-5 py-10 xl:flex-row flex-col rounded-sm'
                href={servs.URL}
            >
                <div
                    className='text-4xl text-[#01b3a7] pr-4 xl:mx-0 mx-auto pb-4'
                >
                    {servs.logo}
                </div>

                <div className='xl:text-left text-center'>
                    <h5
                        className='text-xl font-medium pb-2'
                    >
                        {servs.title}
                    </h5>

                    <p
                        className='text-sm text-[#9b9b9b]'
                    >
                        {servs.text}
                    </p>
                </div>
            </a>
        </li>
    )
}

export default Serv