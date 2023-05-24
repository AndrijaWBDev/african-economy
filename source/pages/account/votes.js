import { Link } from "react-router-dom"
import SearchBox from "../../components/SearchBox";

const Votes = () => {
    return (
        <div className="grid w-5/6 px-10 pb-10 mx-auto md:px-16 lg:px-24 main-grid">
            <div className="flex mt-5">
                <Link to="/profile/upload_avatar">
                    <img src="/imgs/avatar.png" className="rounded-full" style={{ width:"148px", border: '8px solid #FFC917', height: '148px' }} alt="" />
                </Link>
                <div className="ml-4 mt-9">
                    <div className="text-xl">0x1625372828zde123332</div>
                    <button className="py-1 mt-3 text-black bg-yellow-400 rounded-lg px-7" type="button">Edit Profile</button>
                </div>
            </div>

            <div className="mt-5 profile-tabs">
                <button className="py-1 mr-8 text-2xl text-black bg-yellow-400 px-7 rounded-xl" type="button">Votes</button>
                <button className="mr-8 text-2xl" type="button">Propositions</button>
                <button className="mr-8 text-2xl" type="button">Projects Submit</button>
            </div>
            <div className="px-3 mt-3">
                <div className="flex items-center text-2xl selection-status">
                    <button className="mr-6" type="button">All</button>
                    <button className="mr-6 text-slate-400" type="button">Approved</button>
                    <button className="mr-6 text-slate-400" type="button">Refused</button>
                    <button className="text-sm text-black bg-yellow-500 rounded-full search-icon font-blod w-7 h-7" type="button">
                        <i className="fa fa-search"></i>
                    </button>
                </div>

                <div className="lists">
                    <div className="p-5 mt-4 bg-yellow-100 forum-card-2 rounded-xl">
                        <div className="flex justify-between">
                            <div>
                                <h3 className="text-xl font-bold">Disbursement of funds</h3>
                                <div className="font-bold">0x1625372828zde123332</div>
                            </div>
                            <div>
                                <div className="font-bold justify-items-end">10/10/2022</div>
                                <button className="px-5 py-1 text-black bg-yellow-400 h-9 rounded-xl" type="button">Refuse</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Votes;