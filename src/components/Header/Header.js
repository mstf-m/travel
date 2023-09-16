import './Header.css'
import { RxHamburgerMenu } from 'react-icons/rx'
import { useState } from 'react'
import { motion, AnimatePresence } from "framer-motion"
import NavItems from './NavItems/NavItems'
import NavIcons from './NavIcons/NavIcons'

function Header() {

    const [ShowNav, setShowNav] = useState(false)

    return (

        <div className="header bg-slate-800 fixed top-0 z-10 w-full">

            <span className='md:hidden block p-6 text-white text-2xl' onClick={() => { setShowNav(!ShowNav) }}><RxHamburgerMenu></RxHamburgerMenu></span>
            <AnimatePresence onExitComplete={true} >
                {ShowNav &&
                    <motion.div initial={{ x: -300 }}
                        animate={{ x: 0 }}
                        transition={{
                            duration: 0.8,
                            ease: [0, 0.71, 0.2, 1.01]
                        }}
                        exit={{
                            x: -300,
                            transition: {
                                duration: 1
                            }
                        }}
                        className='flex flex-col w-[270px] fixed z-10 left-0 h-[200vh] bg-white md:hidden'>

                        {/* <ul className='flex justify-center text-black text-xl py-6'>
                            <li className='p-2'><a className='' href='#'><FaFacebookF></FaFacebookF></a></li>
                            <li className='p-2'><a className='' href='#'><AiOutlineTwitter></AiOutlineTwitter></a></li>
                            <li className='p-2'><a className='' href='#'><AiOutlineGooglePlus></AiOutlineGooglePlus></a></li>
                            <li className='p-2'><a className='' href='#'><RxInstagramLogo></RxInstagramLogo></a></li>
                        </ul> */}

                        <NavIcons
                            Type='flex justify-center text-black text-xl py-6'
                            TypeLi='p-2 hover:text-[#01B3A7] cursor-pointer'
                        ></NavIcons>

                        <hr></hr>

                        {/* <ul className='pt-4'>
                            <li className='py-4 pl-3 hover:bg-[#01B3A7] hover:text-white ease-out duration-150'>Home</li>
                            <li className='py-4 pl-3 hover:bg-[#01B3A7] hover:text-white ease-out duration-150'>About</li>
                            <li className='py-4 pl-3 hover:bg-[#01B3A7] hover:text-white ease-out duration-150'>typography</li>
                            <li className='py-4 pl-3 hover:bg-[#01B3A7] hover:text-white ease-out duration-150'>Contact Us</li>
                        </ul> */}

                        <NavItems
                            Type='pt-4'
                            TypeLi='py-4 pl-3 hover:bg-[#01B3A7] hover:text-white ease-out duration-150'
                        ></NavItems>

                    </motion.div>}
            </AnimatePresence>


            <div className='md:container flex justify-between'>
                {/* <ul className='text-slate-50 text-lg font-body md:flex hidden'>
                    <li className='headNav'>Home</li>
                    <li className='headNav'>About</li>
                    <li className='headNav'>typography</li>
                    <li className='headNav'>Contact Us</li>
                </ul> */}

                <NavItems
                    Type='text-slate-50 text-lg font-body md:flex hidden'
                    TypeLi='headNav'
                ></NavItems>

                {/* <ul className='items-center text-slate-50 text-xl md:flex hidden'>
                    <li className='p-2'><a className='' href='#'><FaFacebookF></FaFacebookF></a></li>
                    <li className='p-2'><a className='' href='#'><AiOutlineTwitter></AiOutlineTwitter></a></li>
                    <li className='p-2'><a className='' href='#'><AiOutlineGooglePlus></AiOutlineGooglePlus></a></li>
                    <li className='p-2'><a className='' href='#'><RxInstagramLogo></RxInstagramLogo></a></li>
                </ul> */}

                <NavIcons
                    Type='items-center text-slate-50 text-xl md:flex hidden'
                    TypeLi='p-2  hover:text-[#01B3A7] cursor-pointer'
                ></NavIcons>
            </div>
        </div>

    );
}

export default Header;