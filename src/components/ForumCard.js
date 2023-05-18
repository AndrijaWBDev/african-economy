import { Link } from "react-router-dom";

const ForumCard = (props) => {
    return(
        <div className="forum-card-2 bg-yellow-100 p-5 mt-4 rounded-xl">
            <div className="fc-header flex justify-between">
                <div>
                    <div className="answer-to text-sm font-bold"><Link className="underline" to="/">{ props.answerId }</Link></div>
                    <h3 className="font-bold text-xl">{ props.title }</h3>
                    <div className="font-bold"><Link className="underline" to="/">{ props.myId }</Link></div>
                </div>
                <div className="fc-date justify-items-end font-bold">{ props.date }</div>
            </div>
            <div className="fc-content flex justify-between items-end mt-4">
                <div>
                { props.content }
                </div>
                <button className="text-white bg-black h-9 px-7 py-1 rounded-full" type="button">Reply</button>
            </div>
        </div>
    )
}

export default ForumCard;