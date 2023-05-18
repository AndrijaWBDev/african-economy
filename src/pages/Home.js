import { makeStyles } from '@mui/styles';
import { useNavigate } from 'react-router-dom';

import styles from '../assets/themeStyle';
const useStyles = makeStyles(styles);

function Home() {
    const classes = useStyles();
    const navigate = useNavigate();

    return (
        <div className="w-5/6 lg:px-24 pb-10 grid mx-auto">
            <div className="flex justify-center mt-8">
                <img src="./imgs/logo.png" width={395} alt="" />
            </div>
            <div className="text-2xl sm:text-3xl md:text-6xl">
                <div className="flex justify-center text-white">
                    Invest in web3 to develop
                </div>
                <div className="flex justify-center text-white">
                    the &nbsp;<span className={classes.clr_1}> African economy</span>
                </div>
                <div className="flex justify-center">
                    <button type="button" className={
                        'text-white font-bold ' + classes.bg_clr_1 + ' '
                        + classes.btn
                    } style={{ margin: '50px 0 50px 0' }} onClick={() => { navigate("/about") }}>See more</button>
                </div>
            </div>
        </div>
    )
}

export default Home;