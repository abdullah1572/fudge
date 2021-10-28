import axios from 'axios';
import { API_URL } from '../ApiURL';

export const AddProfile = async (data) => {

    const addUser = await axios.post(`${API_URL}/user/addUser`, data)
        .then((res) => {
            // return res;
            console.log("res", res)
            try {
            } catch (err) {
                console.log("err", err)
                // return false;
            }
        })
    return addUser
}

export const EditProfile = async (data, file, walletAddress) => {

    const send = { ...data, ipfsImageUrl: file, walletAddress: walletAddress }
    const editUser = await axios.post(`${API_URL}/user/editUser`, send)
        .then((res) => {
            try {
                console.log(res)
            } catch (err) {
                console.log("err", err)
                // return false;
            }
        })
    return editUser
}






export const addToken = async (data, contractAddress, account, fileUrl, tokenId, category,currency) => {
    const send = { ...data, contractAddress: contractAddress, walletAddress: account, imageUrl: fileUrl, tokenID: tokenId, category: category,currency:currency }
    await axios.post(`${API_URL}/token/addToken`, send)
        .then((res) => {
            return res;
        }).catch((err) => {
            console.log("err", err)
        })
}

export const addTokenAndPutOnSale = async (data, contractAddress, account, fileUrl, tokenId, category,currency) => {
    const send = { ...data, contractAddress: contractAddress, walletAddress: account, ownerAddress: account, imageUrl: fileUrl, tokenID: tokenId, category: category,currency:currency }
    await axios.post(`${API_URL}/token/addTokenAndPutOnSale`, send)
        .then((res) => {
            return res;
        }).catch((err) => {
            console.log("err", err)
        })
}






export const AddCollection = async (data, contractAddress, account, fileUrl1) => {
    const send = { ...data, contractAddress: contractAddress, creator: account, image: fileUrl1 }
    const editUser = await axios.post(`${API_URL}/collection/addCollection`, send)
        .then((res) => {
            console.log(res)
            try {
            } catch (err) {
                console.log("err", err)
                // return false;
            }
        })
    return editUser
}

export const placeBid = async (account, contractAddress, tokenID, amount) => {
    const send = { bidderAddress: account, contractAddress: contractAddress, tokenID: tokenID, amount: parseFloat(amount) }
    await axios.post(`${API_URL}/bid/addBid`, send)
        .then((res) => {
            return res;
        }).catch((err) => {
            console.log("err", err)
        })
}



export const AddSale = async (buyerAddress, sellerAddress, contractAddress, tokenID, price) => {

    const send = { buyerAddress: buyerAddress, sellerAddress: sellerAddress, contractAddress: contractAddress, tokenID: tokenID, price: price }
    await axios.post(`${API_URL}/sale/addSale`, send)
        .then((res) => {
            return res;
        }).catch((err) => {
            console.log("err", err)
        })


};



//order

export const AddOrder = async (ownerAddress,contractAddress,tokenID,price,currency) => {

    const send = { ownerAddress: ownerAddress, contractAddress: contractAddress,tokenID: tokenID, price: price }
    await axios.post(`${API_URL}/order/createOrder`, send)
        .then((res) => {
            return res;
        }).catch((err) => {
            console.log("err", err)
        })


};
