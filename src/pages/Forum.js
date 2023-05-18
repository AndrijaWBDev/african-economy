import ArtCard1 from "../components/ArtCard1";

function Forum() {
    return (
        <div className="w-11/12 sm:w-5/6 px-3 sm:px-10 md:px-16 lg:px-24 pb-10 grid mx-auto main-grid">
            <h1 className="font-bold text-4xl leading-normal mt-5">Forum</h1>
            
            <div className="flex inline-grid lg:justify-between lg:inline-flex">
                <div className="w-full lg:w-1/2  mb-5">
                    <h2 className="font-bold text-2xl">Submitted Projects</h2>
                    <div className="selection-status flex items-center text-2xl">
                        <button className="mr-6 sm:mr-10" type="button">All</button>
                        <button className="mr-6 sm:mr-10 text-slate-400" type="button">Approved</button>
                        <button className="mr-6 sm:mr-10 text-slate-400" type="button">Refused</button> 
                        <button className="search-icon rounded-full bg-yellow-500 text-black font-blod text-sm w-7 h-7" type="button">
                            <i className="fa fa-search"></i>
                        </button>
                    </div>

                    <div className="project-list sm:pr-6">
                        <ArtCard1 
                            link="/project/article"
                            title="Paphius quin etiam et Cornelius senatores"
                            content="Paphius quin etiam et Cornelius senatores, ambo venenorum artibus pravis se polluisse confessi, eodem pronuntiante Maximino sunt interfecti. pari sorte etiam procurator monetae extinctus est. "
                            contractId="De 0x1625372828zde123332"
                            addedDate = "05/10/2022"
                        />
                    </div>
                </div>
                <div className="w-full lg:w-1/2  mb-5">
                    <h2 className="font-bold text-2xl">Propositions</h2>
                    <div className="selection-status flex items-center text-2xl">
                        <button className="mr-6 sm:mr-10" type="button">All</button>
                        <button className="mr-6 sm:mr-10 text-slate-400" type="button">Approved</button>
                        <button className="mr-6 sm:mr-10 text-slate-400" type="button">Refused</button> 
                        <button className="search-icon rounded-full bg-yellow-500 text-black font-blod text-sm w-7 h-7" type="button">
                            <i className="fa fa-search"></i>
                        </button>
                    </div>
                    <div className="proposition-list sm:pr-6">
                        <ArtCard1 
                            link="/proposition/article"
                            title="Paphius quin etiam et Cornelius senatores"
                            content="Paphius quin etiam et Cornelius senatores, ambo venenorum artibus pravis se polluisse confessi, eodem pronuntiante Maximino sunt interfecti. pari sorte etiam procurator monetae extinctus est. Sericum enim et Asbolium supra dictos, quoniam cum hortaretur passim nominare, quos vellent, adiecta religione firmarat, nullum igni vel ferro se puniri iussurum, plumbi validis ictibus interemit. et post hoe flammis Campensem aruspicem dedit, in negotio eius nullo sacramento constrictus."
                            contractId="De 0x1625372828zde123332"
                            addedDate = "05/10/2022"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Forum;