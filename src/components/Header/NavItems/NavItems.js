

function NavItems(props){

    const items = [
        {id:0, title: 'Home'},
        {id:1, title: 'About'},
        {id:2, title: 'typography'},
        {id:3, title: 'Contact Us'},
    ]

    return(
        <ul className={props.Type}>
            {items.map((item)=>{
                return (
                    <li className={props.TypeLi} key={`Navitem-${item.id}`}>{item.title}</li>
                )
            })}
        </ul>
    )
}

export default NavItems