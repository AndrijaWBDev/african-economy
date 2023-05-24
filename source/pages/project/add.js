import {
    useEffect, useState
} from "react";
import { PROJECT_DOMAINS } from "../../config";

const AddProject = () => {

    const [title, setTitle] = useState("");
    const [domain, setDomain] = useState("");
    const [contactPersonLastName, setContactPersonLastName] = useState("");
    const [contactPersonFirstName, setContactPersonFirstName] = useState("");
    const [contactPersonTelephone, setContactPersonTelephone] = useState("");
    const [contactPersonLinkedIn, setContactPersonLinkedIn] = useState("");
    const [contactPersonEmail, setContactPersonEmail] = useState("");
    const [keyPeoplesArray, setKeyPeoplesArray] = useState([]);
    const [keyPeopleLastName, setKeyPeopleLastName] = useState("");
    const [keyPeopleFirstName, setKeyPeopleFirstName] = useState("");
    const [keyPeopleTelephone, setKeyPeopleTelephone] = useState("");
    const [keyPeopleLinkedIn, setKeyPeopleLinkedIn] = useState("");
    
    const [refresh, setRefresh] = useState(false);

    const onAddToKeyPeoplesArr =  () => {
        let temp = keyPeoplesArray;
        temp.push({
            lastname: keyPeopleLastName,
            firstname: keyPeopleFirstName,
            telephone: keyPeopleTelephone,
            linkedin: keyPeopleLinkedIn
        });
        console.log("temp = ", temp);
        setKeyPeoplesArray(temp);
        setRefresh(!refresh);
    }

    return (
        <div className="grid w-11/12 px-3 pb-10 mx-auto sm:w-5/6 sm:px-10 md:px-16 lg:px-24 main-grid">
            <h1 className="mt-5 text-4xl font-bold leading-normal">Projects</h1>

            <div className="mt-3 title-of-project">
                <h2 className="mb-2 text-2xl font-bold leading-normal">Title of your project</h2>
                <input type='text' className="input-default w-80 sm:w-96 sm:mr-5" 
                    value={title} onChange={(e) => {setTitle(e.target.value)}}
                />
            </div>

            <div className="mt-3 select-your-domain">
                <h2 className="mb-2 text-2xl font-bold leading-normal">Select your domain</h2>
                <div className="flex flex-wrap">
                {
                    PROJECT_DOMAINS.map((item, index) => (
                        <button type="button" className="mx-1 mb-2 rounded-full btn-default" key={index}
                            onClick={() => setDomain(item)}
                        >
                            {item}
                        </button>
                    ))
                }
                </div>
            </div>
            
            <div className="mt-5 contact-person">
                <h2 className="mb-2 text-2xl font-bold leading-normal">Contact person</h2>
                <div className="flex flex-wrap">
                    <div className="flex-none input-group">
                        <div className="font-bold">Name</div>
                        <input type="text" className="input-default sm:mr-5" value={contactPersonLastName} onChange={(e) => setContactPersonLastName(e.target.value)} />
                    </div>
                    <div className="flex-none input-group">
                        <div className="font-bold">First name</div>
                        <input type="text" className="input-default sm:mr-5" value={contactPersonFirstName} onChange={(e) => setContactPersonFirstName(e.target.value)} />
                    </div>
                </div>
                <div className="flex flex-wrap">
                    <div className="flex-none input-group">
                        <div className="font-bold">Telephone</div>
                        <input type="text" className="input-default w-80 sm:w-96 sm:mr-5" value={contactPersonTelephone} onChange={(e) => setContactPersonTelephone(e.target.value)} />
                    </div>
                    <div className="flex-none input-group">
                        <div className="font-bold">LinkedIn</div>
                        <input type="text" className="input-default w-80 sm:w-96 sm:mr-5" value={contactPersonLinkedIn} onChange={(e) => setContactPersonLinkedIn(e.target.value)} />
                    </div>
                </div>
                <div className="flex">
                    <div className="flex-none input-group">
                        <div className="font-bold">Email</div>
                        <input type="email" className="input-default w-80 sm:w-96 sm:mr-5" value={contactPersonEmail} onChange={(e) => setContactPersonEmail(e.target.value)} />
                    </div>
                </div>
            </div>

            <div className="mt-3 who-are-the-key">
                <h2 className="mb-2 text-2xl font-bold leading-normal">Who are the key people in your business and what do they do?</h2>
                {
                    keyPeoplesArray.length>0 && keyPeoplesArray.map((item, index) => (
                        <div key={index} >
                            {item.lastname + ", " + item.firstname + ", " + item.telephone + ", " + item.linkedin}
                        </div>
                    ))
                }
                <div className="grid">
                    <div>
                        <i className="text-2xl fa fa-plus-circle"></i>
                        <span className="ml-2 font-bold">Add a person</span>
                    </div>
                    <div className="person-info card-box sm:ml-8">
                        <div className="flex flex-wrap">
                            <div className="flex-none input-group">
                                <div className="font-bold">Name</div>
                                <input type="text" className="input-default w-60 sm:mr-5" value={keyPeopleLastName} onChange={(e) => setKeyPeopleLastName(e.target.value)} />
                            </div>
                            <div className="flex-none input-group">
                                <div className="font-bold">Fast Name</div>
                                <input type="text" className="input-default w-60 sm:mr-5" value={keyPeopleFirstName} onChange={(e) => setKeyPeopleFirstName(e.target.value)} />
                            </div>
                        </div>
                        <div className="flex flex-wrap">
                            <div className="flex-none input-group">
                                <div className="font-bold">Telephone</div>
                                <input type="text" className="input-default w-80 sm:mr-5" value={keyPeopleTelephone} onChange={(e) => setKeyPeopleTelephone(e.target.value)} />
                            </div>
                            <div className="flex-none input-group">
                                <div className="font-bold">LinkedIn</div>
                                <input type="text" className="input-default w-80 sm:mr-5" value={keyPeopleLinkedIn} onChange={(e) => setKeyPeopleLinkedIn(e.target.value)}/>
                            </div>
                        </div>
                        <div>
                            <button className="py-2 text-white bg-black rounded-lg px-7" type="button" onClick={() => { onAddToKeyPeoplesArr() }} >add</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-5 how-long-age">
                <h2 className="mb-2 text-2xl font-bold leading-normal">How long ago did you create your project?</h2>
                <input type='number' className="input-default w-80 sm:w-96 sm:mr-5" />
            </div>

            <div className="mt-3 project-phase">
                <h2 className="mb-2 text-2xl font-bold leading-normal">Project phase</h2>
                <div>
                    <button type="button" className="mx-1 mb-2 rounded-full btn-default">
                        Amorcage
                    </button>
                </div>
            </div>

            <div className="mt-5 who-are-you">
                <h2 className="mb-2 text-2xl font-bold leading-normal">Who are you?</h2>
                <textarea className="w-full input-default" style={{height: '131px'}}></textarea>
            </div>

            <div className="mt-5 what-are-you-doing">
                <h2 className="mb-2 text-2xl font-bold leading-normal">What are you doing?</h2>
                <textarea className="w-full input-default" style={{height: '131px'}}></textarea>
            </div>

            <div className="mt-5 what-are-you-doing-it">
                <h2 className="mb-2 text-2xl font-bold leading-normal">Why are you doing it?</h2>
                <textarea className="w-full input-default" style={{height: '131px'}}></textarea>
            </div>

            <div className="mt-5 major-innovation">
                <h2 className="mb-2 text-2xl font-bold leading-normal">What is the major innovation of your project?</h2>
                <textarea className="w-full input-default" style={{height: '131px'}}></textarea>
            </div>

            <div className="mt-5 where-do-you-do-it">
                <h2 className="mb-2 text-2xl font-bold leading-normal">Where do you do it?</h2>
                <textarea className="w-full input-default" style={{height: '131px'}}></textarea>
            </div>

            <div className="mt-5 how-do-you-do-it">
                <h2 className="mb-2 text-2xl font-bold leading-normal">How do you do it?</h2>
                <textarea className="w-full input-default" style={{height: '131px'}}></textarea>
            </div>

            <div className="mt-5 how-do-you-earn-money">
                <h2 className="mb-2 text-2xl font-bold leading-normal">How do you earn money?</h2>
                <input type='text' className="input-default w-80 sm:w-96 sm:mr-5" />
            </div>

            <div className="mt-5 how-much-need">
                <h2 className="mb-2 text-2xl font-bold leading-normal">How much do you need?</h2>
                <input type='text' className="input-default w-80 sm:w-96 sm:mr-5" />
            </div>

            <div className="mt-5 to-do-what">
                <h2 className="mb-2 text-2xl font-bold leading-normal">To do what?</h2>
                <textarea className="w-full input-default" style={{height: '131px'}}></textarea>
            </div>

            <div className="mt-5 online-community">
                <h2 className="mb-2 text-2xl font-bold leading-normal">Links to your online community</h2>
                <div className="grid">
                    <div>
                        <i className="text-2xl fa fa-plus-circle"></i>
                        <span className="ml-2 font-bold">Add a link</span>
                    </div>
                    <div className="person-info card-box sm:ml-8 w-max">
                        <div className="flex">
                            <div className="flex-none input-group">
                                <div className="font-bold">Title</div>
                                <input type="text" className="input-default w-60" />
                            </div>
                        </div>
                        <div className="flex">
                            <div className="flex-none input-group">
                                <div className="font-bold">Link</div>
                                <input type="text" className="input-default w-80" />
                            </div>
                        </div>
                        <div>
                            <button className="py-2 text-white bg-black rounded-lg px-7" type="button">add</button>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="inline-grid mt-6 form-btns">
                <button className="py-2 mb-5 font-bold text-black bg-yellow-400 rounded-lg px-7" type="button">View the form</button>
                <button className="py-2 mb-5 font-bold text-black bg-yellow-400 rounded-lg px-7" type="button">Send the form</button>
            </div>

        </div>
    );
};

export default AddProject;