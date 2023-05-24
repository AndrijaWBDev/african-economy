const UploadAvatar = () => {
    return(
        <div className="w-5/6 px-10 md:px-16 lg:px-24 pb-10 grid mx-auto main-grid">
            <div className="flex mt-5">
                <img src="/imgs/avatar.png" className="rounded-full" width={148} style={{border:'8px solid #FFC917', height:'148px'}} alt="" />
                <div className="mt-9 ml-4">
                    <div className="text-xl">0x1625372828zde123332</div>
                    
                </div>
            </div>

            <div className="drag-drop-area flex justify-center mt-8">
                <div className="w-11/12 bg-yellow-400 rounded-3xl py-10">
                    <div className="flex justify-center text-black text-4xl">
                        <i className="fa fa-plus-circle text-2xl leading-tight" style={{fontSize:"150px"}}></i>
                    </div>
                    <div className="flex justify-center text-black text-4xl">
                        Drag and drop a picture
                    </div>
                </div>
            </div>
            <div className="flex justify-center mt-5 mb-10">
                <button className="text-black font-bold bg-yellow-400 px-7 py-2 rounded-xl text-3xl" type="button">Find a picture un your computer</button>
            </div>
        </div>
    );
}

export default UploadAvatar;