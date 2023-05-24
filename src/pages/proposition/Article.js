import ProgressVar from '../../components/ProgressVar';

const Article = () => {
    return (
        <div className="grid w-11/12 px-3 pb-10 mx-auto sm:w-5/6 sm:px-10 md:px-16 lg:px-24 main-grid">
            <div className="justify-between mt-5 header-selection sm:flex">
                <div className="">
                    <h3 className="text-4xl font-bold leading-normal">Disbursement of funs</h3>
                    <div className="text-xl">De <span>0x1625372828zde123332</span></div>
                </div>
                <div className="text-xl font-bold">
                    Creation XX/XX/XX
                </div>
            </div>
            <div className="w-full my-5">
            Paphius quin etiam et Cornelius senatores, ambo venenorum artibus pravis se polluisse confessi, eodem pronuntiante Maximino sunt interfecti. pari sorte etiam procurator monetae extinctus est. Sericum enim et Asbolium supra dictos, quoniam cum hortaretur passim nominare, quos vellent, adiecta religione firmarat, nullum igni vel ferro se puniri iussurum, plumbi validis ictibus interemit. et post hoe flammis Campensem aruspicem dedit, in negotio eius nullo sacramento constrictus.
            </div>
            <div className="flex justify-center w-full art-card">
                <div className="w-11/12 p-4 text-center bg-yellow-400 sm:w-2/3 sm:p-7 rounded-3xl">
                    <div className="text-3xl font-bold art-card-title">Voting ends in 10 days</div>
                    
                    <ProgressVar
                        className="mt-2 text-center"
                        width="100%"
                        progress="75"
                        statusStyle={{}}
                        varStyle={{}}
                        />
                    
                    <div className="">
                        <button className="px-6 py-1 mt-5 mb-4 mr-5 text-2xl text-white bg-black rounded-xl" type="button">Approve</button>
                        <button className="px-6 py-1 mt-5 mb-4 text-2xl text-white bg-black rounded-xl" type="button">Refuse</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Article;