import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import ProgressVar from '../components/ProgressVar';

function Propositions() {
    useEffect(() => {
        
    }, []);

    const [ showSubmitProposition, setShowSubmitProposition ] = useState(false);

    const onClickToggleSubmitDiv = (flag) => {
        flag===1 ? setShowSubmitProposition(true) : setShowSubmitProposition(false);
    }


    return (
        <div className="grid w-11/12 px-3 pb-10 mx-auto sm:w-5/6 sm:px-10 md:px-16 lg:px-24 main-grid">
            <div className="justify-between header-part sm:flex">
                <div className="w-full mt-5 heading">
                    <h1 className="text-4xl font-bold leading-normal">Propostions</h1>
                    {
                        showSubmitProposition && 
                        <div className="relative bg-yellow-400 submit-form p-7 sm:p-10 rounded-3xl">
                            <button className="absolute submit-close-btn top-5 right-5"
                                    onClick={() => onClickToggleSubmitDiv(0) }
                                    ><i className="text-xl fa fa-window-close"></i></button>
                            <h3 className="mb-2 text-3xl font-bold">Submit</h3>
                            <div className="checkbox-item">
                                <input type="checkbox" id="disbursement_of_funds"  />
                                <label htmlFor="disbursement_of_funds" className="ml-3">Disbursement of funds</label>
                            </div>
                            <div className="checkbox-item">
                                <input type="checkbox" id="liquidation"  />
                                <label htmlFor="liquidation" className="ml-3">Liquidation of our participation in a project</label>
                            </div>
                            <div className="checkbox-item">
                                <input type="checkbox" id="distribution"  />
                                <label htmlFor="distribution" className="ml-3">Distribution of dividends</label>
                            </div>
                            <textarea className="w-full h-56 indent-2"></textarea>
                            <button className="px-6 py-1 mt-5 mb-4 text-2xl text-white bg-black rounded-lg" type="button">submit</button>
                        </div>
                    }
                    <div className="flex items-center text-2xl selection-status">
                        <button className="mr-6" type="button">All</button>
                        <button className="mr-6 text-slate-400" type="button">Approved</button>
                        <button className="mr-6 text-slate-400" type="button">Refused</button> 
                        <button className="text-sm text-black bg-yellow-500 rounded-full search-icon font-blod w-7 h-7" type="button">
                            <i className="fa fa-search"></i>
                        </button>
                    </div>
                </div>
                { 
                    !showSubmitProposition && 
                    <div className="mt-5 sm:mt-10">
                        <button className="flex items-center p-1 bg-yellow-400 rounded-3xl" 
                            onClick={() => onClickToggleSubmitDiv(1)}>
                            <i className="fa fa-plus-circle text-7xl"></i>
                            <span className="mx-10 text-xl font-bold">Submit</span>
                        </button>
                    </div>
                }
            </div>

            <div className="proposition-list">

            <div className="flex justify-between p-2 mt-5 bg-yellow-100 rounded-lg md:p-5 ppt-card">
                    <div className="w-2/3">
                        <h4 className="text-xl font-bold md:text-2xl">Disbursement of funds</h4>
                        <div className="text-md md:text-xl">De <Link className="underline" to="/proposition/article">0x1625372828zde123332</Link></div>

                        <ProgressVar
                            className="text-right sm:mt-[-15px]"
                            width="width: 100%;"
                            progress="70"
                            varStyle={{}}
                        />

                        <button className="px-6 py-1 mt-5 mb-4 text-xl text-black bg-yellow-400 rounded-lg md:text-2xl" type="button">See more</button>
                    </div>
                    <div className="relative w-1/3 text-right">
                        <div className="ttp-right-top">
                            <h4 className="text-xl font-bold md:text-2xl">Creation XX/XX/XX</h4>
                            <button className="px-5 mb-4 text-xl font-bold text-black bg-yellow-400 rounded-lg" type="button">J-14</button>
                        </div>
                        <div className="absolute bottom-0 right-0 ttp-right-bottom">
                            <button className="px-6 py-1 mb-4 text-xl font-bold text-black bg-yellow-400 rounded-lg md:text-3xl" type="button">Valider</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Propositions;