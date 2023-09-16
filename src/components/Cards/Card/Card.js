
function Card({ data }) {

    return (
        <li className='card md:translate-y-[-30px]'>
            <a href={data.link}>
                <img className='card-img' src={data.img}></img>
            </a>
            <h5>{data.title}</h5>
        </li>
    )
}

export default Card