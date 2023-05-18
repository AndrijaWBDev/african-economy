import { AUTH_LOGOUT, AUTH_SUCCESS, SET_CHAIN_ID, UPDATE_WEB3, UPDATE_MINTED_NFT_COUNT, UPDATE_USER_BALANCE, UPDATE_WALLET_STATUS,  SET_NATIVE_PRICE, SET_WALLET_ADDR, CURRENT_USER, UPDATE_REFERAL_ADDRESS, UPDATE_DONATIONS, UPDATE_CAMPAIGNS } from "./action.types"

export const authSet = (payload) => dispatch => {
    dispatch({
        type: AUTH_SUCCESS,
        payload: payload
    })
}

export const authLogout = () => dispatch => {
    dispatch({
        type: AUTH_LOGOUT,
        payload: {}
    })
}

export const getCurrentUser = () => dispatch => {
    dispatch({
        type: CURRENT_USER,
        payload: {}
    })
}

export const changeWalletAddress = (address) => dispatch => {
    dispatch({
        type: SET_WALLET_ADDR,
        payload: address
    })
}

export const changeChainId = (chainId) => dispatch => {
    dispatch({
        type: SET_CHAIN_ID,
        payload: chainId
    })
}

export const updateBalanceOfUser =  (balance) => dispatch =>
{
    //UPDATE_USER_BALANCE
    dispatch({
        type: UPDATE_USER_BALANCE,
        payload: balance
    })
}

export const changeWalletStatus = (status) => dispatch => 
{
    dispatch({
        type: UPDATE_WALLET_STATUS,
        payload: status
    })
}

export const setNativePriceOnUSD = (chainId, price) => dispatch => {
    dispatch({
        type: SET_NATIVE_PRICE,
        payload: {
            [chainId]: price
        }
    })
}

export const updateMintedNFTCountAfterTrading =  (count) => dispatch =>
{
    //UPDATE_MINTED_NFT_COUNT
    dispatch({
        type: UPDATE_MINTED_NFT_COUNT,
        payload: count
    })
}

export const changeGlobalWeb3 = (object) => dispatch => {
    dispatch({
        type: UPDATE_WEB3,
        payload: object
    })
}

export const updateReferalAddress = (addr) => dispatch => {
    dispatch({
        type: UPDATE_REFERAL_ADDRESS,
        payload: addr
    })
}

export const updateDonations = (donations) => dispatch =>{
    dispatch({
        type: UPDATE_DONATIONS,
        payload: donations
    })
}

export const updateCampaigns = (data) => dispatch => {
    dispatch({
        type: UPDATE_CAMPAIGNS,
        payload: data
    })
}
