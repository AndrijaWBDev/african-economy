import { useEffect, useState } from "react";

const ProgressVar = (props) => {
    let pVarRef
    const [progressVarWidth, setProgressVarWidth] = useState(0);

    useEffect(() => {
        const varWidth = pVarRef.clientWidth * props.progress / 100;
        setProgressVarWidth(varWidth);
    }, [props, pVarRef]);

    const pStatus = props.statusStyle ? {...props.statusStyle} : {};
    const pClass = props.className ? props.className : '';
    const pVarWidth = props.width ? props.width : '100%';

    return (
        <div className={"progress-cover " + pClass}>
            <div className="progress-status" style={pStatus}>
                <span>{ props.progress }</span>% de Vote
            </div>
            <div className="progress-var rounded-full bg-yellow-500 p-1.5"
                 style={{ width: pVarWidth }}
                 ref={node => { pVarRef = node; }}>
                <div className="bg-yellow-300 rounded-full progress" style={{ width:progressVarWidth+'px', height:'26px' }}></div>
            </div>
        </div>        
    );
}

export default ProgressVar;