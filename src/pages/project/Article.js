import { useState } from 'react';

import ProgressVar from '../../components/ProgressVar';

const Article = () => {
    const [ moreArt, setMoreArt ] = useState(false);

    return (
        <div className="grid w-11/12 pb-10 mx-auto sm:w-5/6 main-grid">
            <div className='px-3 art-container sm:px-10 md:px-16 lg:px-24'>
                <div className='justify-between mt-5 sm:flex'>
                    <div className='pj-art-top-left sm:w-2/3'>
                        <div className="">
                            <h3 className="text-4xl font-bold leading-normal">Disbursement of funs</h3>
                            <div className="text-xl">De <span>0x1625372828zde123332</span></div>
                        </div>
                        <div className="w-full my-5">
                        Paphius quin etiam et Cornelius senatores, ambo venenorum artibus pravis se polluisse confessi, eodem pronuntiante Maximino sunt interfecti. pari sorte etiam procurator monetae extinctus est. Sericum enim et Asbolium supra dictos, quoniam cum hortaretur passim nominare, quos vellent, adiecta religione firmarat, nullum igni vel ferro se puniri iussurum, plumbi validis ictibus interemit. et post hoe flammis Campensem aruspicem dedit, in negotio eius nullo sacramento constrictus.
                        </div>
                    </div>
                    <div className='text-right pj-art-top-right sm:mt-3'>
                        <div className="text-xl font-bold">
                            Creation XX/XX/XX
                        </div>
                        <div className='inline-grid justify-items-end'>
                            <button className="px-6 py-1 mb-2 text-xl text-black bg-yellow-400 rounded-xl sm:mb-4 sm:mt-5" type="button">Website</button>
                            <button className="px-6 py-1 mb-2 text-xl text-black bg-yellow-400 rounded-xl sm:mb-4 sm:mt-5" type="button">WhitePaper</button>
                            <button className="px-6 py-1 mb-2 text-xl text-black bg-yellow-400 rounded-xl sm:mb-4 sm:mt-5" type="button">Social Networks</button>
                        </div>
                    </div>
                </div>
                <div className='art-body'>
                    {
                        moreArt && 
                        <div className='p-4 border border-yellow-400 art-content rounded-3xl sm:p-7'>
                            <div className="mt-3 title-of-project">
                                <h2 className="mb-2 text-2xl font-bold leading-normal">Title of your project</h2>
                                <div>amque non umbratis fallaciis res age</div>
                            </div>

                            <div className="mt-3 select-your-domain">
                                <h2 className="mb-2 text-2xl font-bold leading-normal">Select your domain</h2>
                                <div>
                                    <div className="mx-1 rounded-full btn-default max-w-max">
                                        Education
                                    </div>
                                </div>
                            </div>
                            
                            <div className="mt-5 contact-person">
                                <h2 className="mb-2 text-2xl font-bold leading-normal">Contact person</h2>
                                <div className="sm:flex">
                                    <div className="flex-none input-group">
                                        <div className="font-bold">Name</div>
                                        <div className='w-80 sm:mr-5'>amque non</div>
                                    </div>
                                    <div className="flex-none input-group">
                                        <div className="font-bold">First name</div>
                                        <div className='w-80 sm:mr-5'>amque non</div>
                                    </div>
                                </div>
                                <div className="sm:flex">
                                    <div className="flex-none input-group">
                                        <div className="font-bold">Telephone</div>
                                        <div className='w-80 sm:w-96 sm:mr-5'>amque non</div>
                                    </div>
                                    <div className="flex-none input-group">
                                        <div className="font-bold">LinkedIn</div>
                                        <div className='w-80 sm:w-96 sm:mr-5'>amque non</div>
                                    </div>
                                </div>
                                <div className="sm:flex">
                                    <div className="flex-none input-group">
                                        <div className="font-bold">Email</div>
                                        <div className='w-80 sm:w-96 sm:mr-5'>amque non</div>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-3 who-are-the-key">
                                <h2 className="mb-2 text-2xl font-bold leading-normal">Who are the key people in your business and what do they do?</h2>
                                <div className="grid">
                                    
                                </div>
                            </div>

                            <div className="mt-5 how-long-age">
                                <h2 className="mb-2 text-2xl font-bold leading-normal">How long ago did you create your project?</h2>
                                <div className='w-80 sm:w-96 sm:mr-5'>amque non</div>
                            </div>

                            <div className="mt-3 project-phase">
                                <h2 className="mb-2 text-2xl font-bold leading-normal">Project phase</h2>
                                <div>
                                    <div className="mx-1 rounded-full btn-default max-w-max">
                                        Amorcage
                                    </div>
                                </div>
                            </div>

                            <div className="mt-5 who-are-you">
                                <h2 className="mb-2 text-2xl font-bold leading-normal">Who are you?</h2>
                                <div className='w-4/5'>Iamque non umbratis fallaciis res agebatur, sed qua palatium est extra muros, armatis omne circumdedit. ingressusque obscuro iam die, ablatis regiis indumentis Caesarem tunica</div>
                            </div>

                            <div className="mt-5 what-are-you-doing">
                                <h2 className="mb-2 text-2xl font-bold leading-normal">What are you doing?</h2>
                                <div className='w-4/5'>Iamque non umbratis fallaciis res agebatur, sed qua palatium est extra muros, armatis omne circumdedit. ingressusque obscuro iam die, ablatis regiis indumentis Caesarem tunica</div>
                            </div>

                            <div className="mt-5 what-are-you-doing-it">
                                <h2 className="mb-2 text-2xl font-bold leading-normal">Why are you doing it?</h2>
                                <div className='w-4/5'>Iamque non umbratis fallaciis res agebatur, sed qua palatium est extra muros, armatis omne circumdedit. ingressusque obscuro iam die, ablatis regiis indumentis Caesarem tunica</div>
                            </div>

                            <div className="mt-5 major-innovation">
                                <h2 className="mb-2 text-2xl font-bold leading-normal">What is the major innovation of your project?</h2>
                                <div className='w-4/5'>Iamque non umbratis fallaciis res agebatur, sed qua palatium est extra muros, armatis omne circumdedit. ingressusque obscuro iam die, ablatis regiis indumentis Caesarem tunica</div>
                            </div>

                            <div className="mt-5 where-do-you-do-it">
                                <h2 className="mb-2 text-2xl font-bold leading-normal">Where do you do it?</h2>
                                <div className='w-4/5'>Iamque non umbratis fallaciis res agebatur, sed qua palatium est extra muros, armatis omne circumdedit. ingressusque obscuro iam die, ablatis regiis indumentis Caesarem tunica</div>
                            </div>

                            <div className="mt-5 how-do-you-do-it">
                                <h2 className="mb-2 text-2xl font-bold leading-normal">How do you do it?</h2>
                                <div className='w-4/5'>Iamque non umbratis fallaciis res agebatur, sed qua palatium est extra muros, armatis omne circumdedit. ingressusque obscuro iam die, ablatis regiis indumentis Caesarem tunica</div>
                            </div>

                            <div className="mt-5 how-do-you-earn-money">
                                <h2 className="mb-2 text-2xl font-bold leading-normal">How do you earn money?</h2>
                                <div className='w-80 sm:w-96 sm:mr-5'>amque non</div>
                            </div>

                            <div className="mt-5 how-much-need">
                                <h2 className="mb-2 text-2xl font-bold leading-normal">How much do you need?</h2>
                                <div className='w-80 sm:w-96 sm:mr-5'>amque non</div>
                            </div>

                            <div className="mt-5 to-do-what">
                                <h2 className="mb-2 text-2xl font-bold leading-normal">To do what?</h2>
                                <div className='w-4/5'>Iamque non umbratis fallaciis res agebatur, sed qua palatium est extra muros, armatis omne circumdedit. ingressusque obscuro iam die, ablatis regiis indumentis Caesarem tunica</div>
                            </div>

                            <div className="mt-5 online-community">
                                <h2 className="mb-2 text-2xl font-bold leading-normal">Links to your online community</h2>
                                <div className="grid">
                                    
                                </div>
                            </div>
                        </div>
                    }
                    <div className='flex justify-around art-bottom-btn'>
                        <div className='flex justify-center'>
                            {
                                !moreArt && 
                                <button className="px-6 py-1 mx-2 mb-4 text-xl text-black bg-yellow-400 rounded-xl sm:mt-5" 
                                        type="button"
                                        onClick={ () => setMoreArt(true) }>See more</button>
                            }
                            <button className="px-6 py-1 mx-2 mb-4 text-xl text-black bg-yellow-400 rounded-xl sm:mt-5" type="button">Download the form</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex justify-center w-full art-card mt-7">
                <div className="w-11/12 p-5 text-center bg-yellow-400 sm:w-2/3 sm:p-7 rounded-3xl">
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