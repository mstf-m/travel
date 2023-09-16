


function Person({ people }) {
    return (
        <li className='flex flex-col items-center'
        >
            <div className="hover:-translate-y-3 ease-out duration-200 cursor-pointer rounded-full"><img src={people.img}></img></div>

            <div className='flex flex-col items-center py-10 px-12 bg-[#f7f7f7] rounded-t-md'>
                <h6 className="text-base font-semibold cursor-pointer hover:text-[#01b3a7] ease-out duration-200"><a src={people.URL}>{people.name}</a></h6>
                <span className="py-2 text-[#01b3a7] text-sm">{people.title}</span>
                <span className="text-lg font-medium hover:text-[#01b3a7] cursor-pointer ease-out duration-200">{people.phone}</span>
            </div>

        </li>
    )
}

export default Person