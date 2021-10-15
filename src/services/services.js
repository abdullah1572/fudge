import axios from 'axios';

export const AddProfile = async (data) => {
    const addUser = await axios.post('http://ec2-54-218-126-72.us-west-2.compute.amazonaws.com:5001/user/addUser', data)
        .then((res) => {
            // return res;
            console.log("res",res)
            try {
            } catch (err) {
                console.log("err", err)
                // return false;
            }
        })
    return addUser
}

export const EditProfile = async (data, file) => {
    
    const send = { ...data, ipfsImageUrl: file }
    const editUser = await axios.post('http://ec2-54-218-126-72.us-west-2.compute.amazonaws.com:5001/user/editUser', send)
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






export const addToken = async (data,contractAddress, account,fileUrl,tokenId,category) => {
    const send = { ...data, contractAddress: contractAddress,walletAddress: account, imageUrl: fileUrl,tokenID:tokenId ,category:category}
    await axios.post('http://ec2-54-218-126-72.us-west-2.compute.amazonaws.com:5001/token/addToken', send)
        .then((res) => {
            return res;
        }).catch((err) => {
            console.log("err", err)
        })
}

export const addTokenAndPutOnSale = async (data,contractAddress, account,fileUrl,tokenId,category) => {
    const send = { ...data, contractAddress: contractAddress,walletAddress: account, ownerAddress: account , imageUrl: fileUrl,tokenID:tokenId ,category:category}
    await axios.post('http://ec2-54-218-126-72.us-west-2.compute.amazonaws.com:5001/token/addTokenAndPutOnSale', send)
        .then((res) => {
            return res;
        }).catch((err) => {
            console.log("err", err)
        })
}






export const AddCollection = async (data, contractAddress , account, fileUrl1) => {
    const send = { ...data, contractAddress: contractAddress, creator:account,image:fileUrl1 }
    const editUser = await axios.post('http://ec2-54-218-126-72.us-west-2.compute.amazonaws.com:5001/collection/addCollection', send)
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

export const placeBid = async (account,contractAddress, tokenID,amount) => {
    const send = { bidderAddress:account,contractAddress: contractAddress,tokenID:tokenID,amount: parseFloat(amount) }
    await axios.post('http://ec2-54-218-126-72.us-west-2.compute.amazonaws.com:5001/bid/addBid', send)
        .then((res) => {
            return res;
        }).catch((err) => {
            console.log("err", err)
        })
}