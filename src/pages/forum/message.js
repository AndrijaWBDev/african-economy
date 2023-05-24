import ForumCard from "../../components/ForumCard";

const Message = () => {
    return(
        <div className="w-5/6 px-10 md:px-16 lg:px-24 pb-10 grid mx-auto main-grid">
            <h1 className="font-bold text-4xl leading-normal mt-5">Forum / <span className="text-xl">Selected topic</span></h1>

            <div className="forum-lists">
                <ForumCard 
                    answerId="0x1625372828zde123332"
                    title="Paphius quin etiam et Cornelius senatores"
                    myId="De 0x1625372828zde123332"
                    date="10/10/2022"
                    content="Paphius quin etiam et Cornelius senatores, ambo venenorum artibus pravis se polluisse confessi, eodem pronuntiante Maximino sunt interfecti. pari sorte etiam procurator monetae extinctus est. Sericum enim et Asbolium supra dictos, quoniam cum hortaretur passim nominare, quos vellent, adiecta religione firmarat, nullum igni vel ferro se puniri iussurum, plumbi validis ictibus interemit. et post hoe flammis Campensem aruspicem dedit, in negotio eius nullo sacramento constrictus."
                    />
                
                <ForumCard 
                    answerId="0x1625372828zde123332"
                    title="Paphius quin etiam et Cornelius senatores"
                    myId="De 0x1625372828zde123332"
                    date="10/10/2022"
                    content="Paphius quin etiam et Cornelius senatores, ambo venenorum artibus pravis se polluisse confessi, eodem pronuntiante Maximino sunt interfecti. pari sorte etiam procurator monetae extinctus est. Sericum enim et Asbolium supra dictos, quoniam cum hortaretur passim nominare, quos vellent, adiecta religione firmarat, nullum igni vel ferro se puniri iussurum, plumbi validis ictibus interemit. et post hoe flammis Campensem aruspicem dedit, in negotio eius nullo sacramento constrictus."
                    />

                <div className="reply-form text-right">
                    <textarea className="input-default w-full rounded-3xl mt-5" style={{ height: "150px" }}></textarea>
                    <button className="text-white bg-black h-9 px-8 py-1 rounded-xl" type="button">Send</button>
                </div>
                
            </div>
        </div>
    )
}

export default Message;