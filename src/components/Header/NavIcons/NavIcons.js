import { FaFacebookF } from 'react-icons/fa'
import { AiOutlineTwitter } from 'react-icons/ai'
import { AiOutlineGooglePlus } from 'react-icons/ai'
import { RxInstagramLogo } from 'react-icons/rx'


function NavItems(props){

    const icons = [
        {id:0, icon: <FaFacebookF></FaFacebookF> },
        {id:1, icon: <AiOutlineTwitter></AiOutlineTwitter> },
        {id:2, icon: <AiOutlineGooglePlus></AiOutlineGooglePlus> },
        {id:3, icon: <RxInstagramLogo></RxInstagramLogo> },
    ]

    return(
        <ul className={props.Type}>
            {icons.map((item)=>{
                return (
                    <li className={props.TypeLi} key={`Navicon-${item.id}`}>{item.icon}</li>
                )
            })}
        </ul>
    )
}

export default NavItems