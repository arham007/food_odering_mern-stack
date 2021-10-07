import { FormControl, InputLabel, NativeSelect, FormHelperText, TextField, TextareaAutosize, Typography, Select } from '@material-ui/core';
import React, { useContext, useEffect, useState } from 'react';
import { Upload } from 'antd';
import ImgCrop from 'antd-img-crop';
import AddAPhotoOutlinedIcon from '@material-ui/icons/AddAPhotoOutlined';


import { makeStyles } from '@material-ui/core/styles';
import { Modal, Space } from 'antd';

import CheckCircleOutlineOutlinedIcon from '@material-ui/icons/CheckCircleOutlineOutlined';

const useStyles = makeStyles((theme) => ({
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',

    },
    setting: {
        color:"green",
        textAlign:"center",
        
    }
}));


 
const AddNewProduct=()=>{   
    return (
       

         

            
         
            <div style={{ display: "flex", justifyContent: "center" }}>
                <div style={{ maxWidth: "600px", maxHeight: "100%", border: "1px solid rgba(0,47,52,.2)", borderRadius: "5px", padding: "5px 30px" }}>
                    <div><h6 style={{ fontWeight: "bolder", textTransform: "capitalize", marginTop: "5px", color: "#002f34" }}>Choose a Category</h6></div>
                    <div >


                        <FormControl className="w-75 text-center">
                            <InputLabel htmlFor="age-native-helper">Category</InputLabel>
                            <NativeSelect name="category" >
                                <option aria-label="None" value="" />
                                <option value="Mobile">Mobile Phone</option>
                                <option value="Vehicles">Vehicles</option>
                                <option value="Bikes">Bikes</option>
                                <option value="Electronics & Home Appliances ">Electronics & Home Appliances</option>
                                <option value="Animals">Animals</option>
                                <option value="Property For Rent">Property For Rent</option>
                                <option value="Property For Sale">Property For Sale</option>
                                <option value="Jobs">Jobs</option>
                                <option value="Fashion & Beauty">Fashion & Beauty</option>
                                <option value="Kids">Kids</option>

                            </NativeSelect>
                            <FormHelperText>SELECTED CATEGORY</FormHelperText>
                        </FormControl>

                        <TextField required id="standard-required"  label="Ad title " fullWidth name="title"  />
                        <TextareaAutosize className="w-100 mt-4" rowsMin={3}  aria-label="empty textarea" placeholder="Detail" name="detail"  />
                    </div>
                    <hr />
                    <div><h6 style={{ fontWeight: "bolder", textTransform: "capitalize", color: "#002f34" }}>SET A PRICE</h6></div>
                    <TextField required id="standard-required" label="Price " type="number" fullWidth name="price"   />

                    <hr className="mt-4" />
                    <div><h6 style={{ fontWeight: "bolder", color: "#002f34", textTransform: "capitalize" }}>UPLOAD A PHOTO</h6></div>
                    <Upload
            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
            listType="picture-card"
            // filelist={filelist}
            // onChange={onChange}
            // onPreview={onPreview}
            
        >
            <div style={{display:"inline-flex",flexDirection:"column",border:"2px solid gray",justifyContent:"center"}}>

         <div><AddAPhotoOutlinedIcon style={{fontSize:"20px",color:"#002f34",textAlign:"center"}} /> </div><div style={{textTransform:"capitalize",color:"#002f34"}}>add photo</div>
            </div>
        </Upload>
                    <hr />

                 
                    </div>

                   


                    


                    </div> 
                    
       
            
    )
}

export default AddNewProduct;