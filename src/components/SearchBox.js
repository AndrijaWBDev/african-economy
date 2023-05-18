const SearchBox = (props) => {
    const pVarWidth = props.width ? props.width : "360px";

    return(
        <div className="progress-var rounded-full bg-yellow-500 p-1 flex"
                style={{ width: pVarWidth }}
                >
            <input type="text" className="progress rounded-full indent-2" style={{ width:'95%', height:'26px' }} />
            <i className="fa fa-search" style={{padding: '5px'}}></i>
        </div>
    )
}

export default SearchBox;