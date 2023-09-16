

function Contacts({ contacts }) {
    return (
        <div className="lg:max-w-[14rem] md:col-span-2 lg:col-span-1 mx-auto sm:mx-0">
            <h6 className="text-base font-medium tracking-wide text-[#ffffff] pb-4">CONTACT US</h6>
            <ul className="flex flex-col md:flex-row lg:flex-col md:gap-8 lg:gap-0">
                {
                    contacts.map((item) => (

                        <li className="flex py-2" key={item.id}>
                            <span className="pr-4 text-2xl text-[#01b3a7]">{item.icon}</span>
                            <a className="text-[#ffffff] text-sm tracking-wide hover:text-[#01b3a7] ease-out duration-200" href={item.urlContact}>{item.text}</a>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Contacts