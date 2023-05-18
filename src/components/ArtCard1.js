import { Link } from "react-router-dom";

const ArtCard1 = (props) => {
    return (
        <div className="forum-card-1 bg-yellow-100 p-5 mt-4 rounded-xl">
            <h3 className="font-bold text-xl">{ props.title }</h3>
            <div className="sm:flex justify-between text-xl">
                <div className=""><Link className="underline" to={ props.link }>{ props.contractId }</Link></div>
                <div className="">{ props.addedDate }</div>
            </div>
            <div className="forum-content mt-3">
            { props.content }
            </div>
            <button className="text-white bg-black px-7 py-2 rounded-lg" type="button">Discussion group</button>
        </div>
    )
}

export default ArtCard1;