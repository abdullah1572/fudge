import React, { useState, useCallback } from "react";
import { IpfsStorage } from "../../IPFSStorage/ipfs";
import { useWeb3React } from "@web3-react/core";
import { addToken, addTokenAndPutOnSale } from "../../services/services";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { MintPro } from "../../hooks/Mint";
import { toast } from "react-toastify";
import { ApproveForAll } from "../../hooks/FudgeBuyAndSale";
import { BNBSalePrice, FudgeSalePrice } from "../../hooks/FudgeBuyAndSale";
import "./create.scss";
import Header from "../header/Header";
import { Backdrop } from "@material-ui/core";
import { GetAllNftsAndDetails } from "../../redux/action";
import { useDispatch } from "react-redux";
import MyLoader from "../Loader/MyLoader";
import environment from "../../utils/Environment";
import useWeb3 from '../../hooks/useWeb3';
import { BlueMoonProContract } from '../../utils/contractHelpers'

const Create = () => {
  const tokenAddr = environment.BlueMoonPro;
  const web3 = useWeb3();
  const dispatch = useDispatch();
  const { account, active } = useWeb3React();
  const [open, setOpen] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [dropDown, setDropDown] = useState("Choose Category");
  const [fudgeDropDown, setFudgeDropDown] = useState("FUDGE");
  const [fileUrl, updateFileUrl] = useState(``);
  const { mintPro } = MintPro(fileUrl);
  const contract = BlueMoonProContract(tokenAddr, web3);
  const [loaderText, setloaderText] = useState(
    "Please Wait. Transaction in Process!"
  );
  const [allFormData, setAllFormData] = useState({
    formData: {
      price: "",
      nftName: "",
      description: "",
      royalties: "",
      putOnMarketplace: false,
    },
  });
  const handleChange = (e) => {
    const { formData } = allFormData;
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    formData[e.target.name] = value;
    setAllFormData({ formData });
  };

  const [imageUrlError, setImageUrlError] = useState({});
  const [chooseCategory, setChooseCategory] = useState({});
  const formValidation = useCallback(() => {
    const imageUrlError = {};
    const chooseCategory = {};
    let isValid = true;
    if (fileUrl === ``) {
      imageUrlError.urlError = "Image is Required";
      isValid = false;
    }
    if (dropDown === "Choose Category") {
      chooseCategory.category = "Category is Required";
      isValid = false;
    }
    setImageUrlError(imageUrlError);
    setChooseCategory(chooseCategory);
    return isValid;
  }, [fileUrl, dropDown]);

  // const [tokenId, setTokenId] = useState('')
  const { ApproveAllTokenID } = ApproveForAll();
  const { BNBSale } = BNBSalePrice();
  const { FudgeSale } = FudgeSalePrice();
  const Item = [
    {
      itemList: "Art",
    },
    {
      itemList: "Photography",
    },
    {
      itemList: "Games",
    },
    {
      itemList: "Sports",
    },
    {
      itemList: "Memes",
    },
  ];

  const FudgeToken = [
    {
      token: "BNB",
      logo: "/pegify/bnb-logo.png",
    },
    {
      token: "FUDGE",
      logo: "/pegify/fudge-logo1.png",
    },
  ];
  // src/assets/bnb-logo.png
  const delay = (ms) => new Promise((res) => setTimeout(res, ms));
  const handleSubmit = useCallback(async () => {
    formValidation();
    if (account) {
      if (
        allFormData.formData.nftName === "" ||
        allFormData.formData.description === "" ||
        fileUrl === "" ||
        dropDown === "Choose Category" ||
        allFormData.formData.royalties === ""
      ) {
        toast.warning("Fill the required Fileds", {
          position: "top-right",
          autoClose: 2000,
        });
        return;
      }
      if (allFormData.formData.price === "0") {
        toast.warning("Price Greater than 0", {
          position: "top-right",
          autoClose: 2000,
        });
        return;
      }
      if (allFormData.formData.royalties === "0") {
        toast.warning("Royalties Greater than 0", {
          position: "top-right",
          autoClose: 2000,
        });
        return;
      }
      try {
        if (allFormData.formData.putOnMarketplace) {
          const getPrice = allFormData.formData.price;
          setOpen(true);
          setloaderText("Waiting for NFT mint");
          // await delay(3000)
          const tokenID = await mintPro();
          if (tokenID) {
            // setOpen(false)
          }
          setloaderText("Waiting for Marketplace Approval");
          const approve = await ApproveAllTokenID();
          //  console.log("approve",approve.status)
          if (approve.status) {
            // setOpen(false)
          }
          if (fudgeDropDown === "FUDGE") {
            const fudgeSale = await FudgeSale(tokenID, getPrice);
            setloaderText("Puuting NFT on Marketplace");
            // await delay(3000)
            if (fudgeSale.status) {
              await addTokenAndPutOnSale(
                allFormData.formData,
                environment.BlueMoonPro,
                account,
                fileUrl,
                tokenID,
                dropDown,
                fudgeDropDown
              );
              toast.success("Created Item Successfully", {
                position: "top-center",
                autoClose: 5000,
              });
              setOpen(false);
              dispatch(GetAllNftsAndDetails());
            } else {
              toast.error("Can not put on sale", {
                position: "top-center",
                autoClose: 5000,
              });
              setOpen(false);
            }
          } else {
            setloaderText("Puuting NFT on Marketplace");
            // await delay(3000)
            const sale = await BNBSale(tokenID, getPrice);
            if (sale.status) {
              await addTokenAndPutOnSale(
                allFormData.formData,
                environment.BlueMoonPro,
                account,
                fileUrl,
                tokenID,
                dropDown,
                fudgeDropDown
              );
              toast.success("Created Item Successfully", {
                position: "top-center",
                autoClose: 5000,
              });
              setOpen(false);
              dispatch(GetAllNftsAndDetails());
            } else {
              toast.error("Can not put on sale", {
                position: "top-center",
                autoClose: 5000,
              });
              setOpen(false);
            }
          }
        } else {
          setOpen(true);
          setloaderText("Waiting fo NFT mint");
          // const tokenId = await mintPro();
          const mint = await contract.methods
            .mint(account, fileUrl)
            .estimateGas({ from: account })
            .then(async () => {
              try {
                const mint0 = contract.methods
                  .mint(account, fileUrl)
                  .send({ from: account })
                  .catch((e) => {
                    console.log("disconnect", e);
                    console.log("disconnect");
                    setOpen(false);
                  });
                contract.events
                  .Transfer()
                  .on("connection", () => {
                    console.log("connected");
                  })
                  .on("data", (data) => {
                    console.log("data.returnValues.tokenId", data.returnValues.tokenId)
                    addToken(
                        allFormData.formData,
                        environment.BlueMoonPro,
                        account,
                        fileUrl,
                        data.returnValues.tokenId,
                        dropDown,
                        fudgeDropDown
                      );
                      toast.success("Created Item Successfully", {
                        position: "top-center",
                        autoClose: 5000,
                      });
                      setOpen(false);
                  })
                  .on("error", (error, receipt) => {
                    console.log("disconnect", error);
                    console.log("disconnect");
                    setOpen(false);
                  });
              } catch (e) {
                setOpen(false);
                console.log("disconnect");
              }
            })
            .catch((err) => {
              setOpen(false);
              toast.error("Your NFT Not created!", {
                position: "top-center",
                autoClose: 5000,
              });
              console.log("err", err);
            });
          // await delay(3000)
          await console.log('---------', mint)
        }
      } catch (err) {
        setOpen(false);
        console.log("errrrrr==========", err);
        toast.error("User Denied Transaction", {
          position: "top-center",
          autoClose: 5000,
        });
      }
    } else {
      toast.error("Please Connect the wallet", {
        position: "top-right",
        autoClose: 5000,
      });
      setOpen(false);
    }
  }, [
    ApproveAllTokenID,
    BNBSale,
    FudgeSale,
    account,
    allFormData.formData,
    dropDown,
    fileUrl,
    formValidation,
    mintPro,
  ]);

  async function onChange(e) {
    const file = e.target.files[0];
    setToggle(true);
    // updateFileUrl("salman")
    IpfsStorage(file)
      .then((res) => {
        updateFileUrl(res);
        console.log("==========>", res);
        setOpen(false);
      })
      .catch((e) => {
        console.log("==========>", e);
      });
  }

  const Remove = () => {
    updateFileUrl("");
    setToggle(false);
  };
  return (
    <>
      <Backdrop className="loader" sx={{ color: "#fff" }} open={open}>
        {" "}
        <h1>{loaderText}</h1>
        {/* <CircularProgress color="inherit" style={{ marginLeft: 20 }} /> */}
        <MyLoader toggle={open} />
      </Backdrop>

      <section className="creates">
        <div className="container">
          <Header />
          <div className="row  ptb">
            <div className="col-sm-12">
              <div className="inner-head">
                <h2>Lets create your NFT</h2>
              </div>
            </div>
          </div>
          <ValidatorForm className="form-contact">
            <div className="row">
              <div className="col-sm-3 d-block d-sm-none d-md-none d-lg-none d-xl-none">
                <h5>Preview</h5>
                <div className="main-privew-div">
                  {fileUrl ? (
                    <img
                      src={fileUrl}
                      style={{ borderRadius: 20 }}
                      width="220px"
                      height="310px"
                    />
                  ) : (
                    <h6>Upload file to preview you NFT</h6>
                  )}
                </div>
              </div>
              <div className="col-sm-9">
                <h5>Upload File</h5>
                <div className="inner-content text-center">
                  <div className="row pt160">
                    <div className="col-sm-12">
                      {fileUrl ? (
                        <button
                          type="button"
                          className="close-iconsss"
                          onClick={Remove}
                        >
                          <div className="icons-image-close">
                            <i class="far fa-times-circle"></i>
                          </div>
                        </button>
                      ) : (
                        <div>
                          <h4 className="grey ptb20">
                            PNG, GIF, WEBP, MP4 or MP3. Max 100mb.
                          </h4>
                          <label
                            for="file"
                            className="custom-file-upload btn-common-2"
                          >
                            UPLOAD FILE <i className="fa fa-cloud-upload"></i>
                          </label>
                          <input
                            className="input-fields form-control"
                            name="first"
                            id="file"
                            type="file"
                            onChange={onChange}
                          />
                        </div>
                      )}

                      {Object.keys(imageUrlError).map((key) => {
                        return (
                          <p className="inputErrors">{imageUrlError[key]}</p>
                        );
                      })}
                      <div className="">
                        {!fileUrl ? (
                          <MyLoader toggle={toggle} />
                        ) : (
                          <img
                            className="img-uploader-mm img-fluid"
                            src={fileUrl}
                            style={{ marginTop: 20, borderRadius: 30 }}
                            width="400px"
                            height="400px"
                          />
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row ptb20">
                  <div className="col-sm-12 p-0">
                    <div className="inner-inpt">
                      <div className="form-group">
                        <div className="inner-logo-b">
                          {/* <div className="form-group main-text-feild-head">
                            <label For="name">Price</label>
                            <TextValidator
                              fullWidth
                              type="number"
                              name="price"
                              min="0"
                              // value={allFormData.formData.price}
                              value={
                                allFormData.formData.price &&
                                Math.max(0, allFormData.formData.price)
                              }
                              onChange={handleChange}
                              variant="outlined"
                              placeholder="Enter Price"
                              className="input-fields"
                              validators={["required"]}
                              errorMessages={["Price is required"]}
                            />
                          </div> */}
                          <div className="sdsdsd">
                            <button
                              className="button-discov"
                              type="button"
                              id="dropdownMenuButton "
                              data-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              {fudgeDropDown}
                              {/* <img src={fudgeDropDown}  /> */}
                              <i class="pl-2 fas fa-chevron-down"></i>
                            </button>
                            <div
                              className="dropdown-menu"
                              aria-labelledby="dropdownMenuButton"
                            >
                              {FudgeToken.map((elem) => {
                                return (
                                  // <a className="dropdown-item" onClick={() => setDropDown(elem.itemList)}>{elem.itemList}</a>
                                  <a
                                    className="dropdown-item items"
                                    onClick={() => setFudgeDropDown(elem.token)}
                                  >
                                    {" "}
                                    <img
                                      src={elem.logo}
                                      alt=""
                                      className="widdd mr-2"
                                    />
                                    {elem.token}
                                  </a>
                                );
                              })}
                            </div>
                            {/* {Object.keys(chooseCategory).map((key) => { return <p className="inputErrors">{chooseCategory[key]}</p> })} */}
                          </div>
                        </div>
                      </div>
                      <div className="form-group">
                        <label for="exampleInputdec">NFT Name</label>
                        <TextValidator
                          fullWidth
                          type="text"
                          name="nftName"
                          value={allFormData.formData.nftName}
                          onChange={handleChange}
                          placeholder="Enter The Name For Your NFT..."
                          className="input-fields"
                          variant="outlined"
                          validators={["required"]}
                          errorMessages={["NFT Name field is required"]}
                        />
                      </div>
                      <div className="form-group">
                        <label for="exampleInputdec">Description</label>
                        <TextValidator
                          fullWidth
                          type="text"
                          name="description"
                          value={allFormData.formData.description}
                          onChange={handleChange}
                          placeholder="Enter Your Description..."
                          className="input-fields bg-white"
                          variant="outlined"
                          validators={["required"]}
                          errorMessages={["Description field is required"]}
                          multiline
                          rows={3}
                        />
                      </div>
                      <div className="form-group">
                        <div className="inner-drop">
                          <label for="exampleInputdec">Categories</label>
                          <div className="recently-add">
                            <div className=" drop-recent main-creatre-decent">
                              <button
                                className="button-discover-add"
                                type="button"
                                id="dropdownMenuButton "
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                              >
                                {dropDown}
                                <i class="pl-2 fas fa-chevron-down ml-auto"></i>
                              </button>
                              <div
                                className="dropdown-menu"
                                aria-labelledby="dropdownMenuButton"
                              >
                                {/* <select> */}

                                {Item.map((elem) => {
                                  return (
                                    <a
                                      className="dropdown-item"
                                      onClick={() => setDropDown(elem.itemList)}
                                    >
                                      {elem.itemList}
                                    </a>
                                  );
                                })}
                                {/* </select> */}
                              </div>
                              {Object.keys(chooseCategory).map((key) => {
                                return (
                                  <p className="inputErrors">
                                    {chooseCategory[key]}
                                  </p>
                                );
                              })}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="form-group  percentage-images">
                        <label for="exampleInputdec">Royalties</label>
                        <TextValidator
                          fullWidth
                          type="number"
                          min="0"
                          name="royalties"
                          // value={allFormData.formData.royalties}
                          value={
                            allFormData.formData.royalties &&
                            Math.max(0, allFormData.formData.royalties)
                          }
                          onChange={handleChange}
                          placeholder="Enter Your Royalties..."
                          className="input-fields"
                          variant="outlined"
                          validators={["required"]}
                          errorMessages={["Royalties Persentage is required"]}
                        />
                        <div className="mamam">
                          <i class="fas fa-percent"></i>
                        </div>
                      </div>

                      {/* <div className="switch">
                                                <span className="yoyo">Put on marketplace</span>
                                                <label className="switch">
                                                    <input type="checkbox" name="putOnMarketplace" checked={allFormData.formData.putOnMarketplace} onChange={handleChange} className="custom-control-input" id="customSwitch2" />
                                                    <span className="slider round"></span>

                                                </label>
                                            </div> */}
                      <ul className="list-inline ptb20">
                        <li className="list-inline-item">
                          <button
                            className="btn-common"
                            type="submit"
                            onClick={handleSubmit}
                          >
                            Create NFT
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-3 d-none d-sm-block d-md-block d-lg-block d-xl-block">
                <h5>Preview</h5>
                <div className="main-privew-div">
                  {fileUrl ? (
                    <img
                      src={fileUrl}
                      style={{ borderRadius: 20 }}
                      width="220px"
                      height="310px"
                    />
                  ) : (
                    <h6>Upload file to preview you NFT</h6>
                  )}
                </div>
              </div>
            </div>
          </ValidatorForm>
        </div>
      </section>
    </>
  );
};

export default Create;
