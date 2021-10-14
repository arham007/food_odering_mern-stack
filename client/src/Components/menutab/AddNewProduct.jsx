import { FormControl, InputLabel, NativeSelect, FormHelperText, TextField, TextareaAutosize, Typography, Select } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

const AddNewProduct = () => {
    let [name, setName] = useState("")
    let [price, setPrice] = useState("")
    let [category, setCategory] = useState("")
    let [image, setImage] = useState("")
    let [desc, setDesc] = useState("")
    let [url, setUrl] = useState("")
    let [open, setOpen] = useState(false)
    let[succ,setSucc]=useState(false)
    // console.log(name,price,desc,url)

    useEffect(() => {
        fetch("http://localhost:4000/admin/addproducts", {
            method: "Post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: name,
                image: url,
                type: category,
                desc: desc,
                disable: "false",
                price: price
            })
        })
            .then(res => res.json())
            .then(res => {
                setOpen(false)

                setName("")
                setCategory("")
                setPrice("")
                setImage("")
                setDesc("")
                setSucc(true)
                window.location.reload()

                setTimeout(()=>{
                    setSucc(false)
                },4000)
            })
            .catch(err => console.log(err))
    }, [url])

    const handleChange = () => {
        const data = new FormData()
        data.append("file", image)
        data.append("upload_preset", "adminedit")
        data.append("cloud_name", "arham333")

        fetch("	https://api.cloudinary.com/v1_1/arham333/image/upload", {
            method: "Post",
            body: data
        })
            .then(res => res.json())
            .then(res => {

                setUrl(res.url)
            })
            .catch(err => console.log(err))
    }



    return (

        <div style={{ display: "flex", justifyContent: "center" }}>
            <div style={{ width: "70%", maxHeight: "100%", border: "1px solid rgba(0,47,52,.2)", borderRadius: "5px", padding: "5px 30px" }}>
                <div><h6 style={{ fontWeight: "bolder", textTransform: "capitalize", marginTop: "5px", color: "#002f34", fontSize: "14px" }}>Choose a Category</h6></div>
                <div >




                    <input value={name} placeholder="Ad title" onChange={(e) => setName(e.target.value)} required id="standard-required" label="Ad title " fullWidth name="title" style={{ width: "100%", border: "none", borderBottom: "2px solid gray", margin: "20px 0", padding: "10px", fontSize: "14px" }} />
                    <hr />
                    <FormControl className="w-75 text-center" value={category} onChange={(e) => setCategory(e.target.value)}  >
                        <InputLabel htmlFor="age-native-helper" style={{ fontSize: "18px" }}>Category</InputLabel>
                        <NativeSelect name="category" style={{ fontSize: "14px" }} >
                            <option aria-label="None" value="" />
                            <option value="fastfood">Fast Food</option>
                            <option value="BBQ">BBQ</option>
                            <option value="pizza">Pizza</option>
                            <option value="beverage">Beverage</option>
                            <option value="extra">Extra</option>


                        </NativeSelect>
                        <FormHelperText style={{ fontSize: "12px" }}>SELECTED CATEGORY</FormHelperText>
                    </FormControl>
                    <hr />
                    <TextareaAutosize value={desc} onChange={(e) => setDesc(e.target.value)} className="w-100 mt-4" style={{ fontSize: "14px", padding: "10px" }} rowsMin={3} aria-label="empty textarea" placeholder="Detail" name="detail" />
                </div>
                <hr />
                <div><h6 style={{ fontWeight: "bolder", textTransform: "capitalize", color: "#002f34", fontSize: "14px" }}>SET A PRICE</h6></div>
                <input onChange={(e) => setPrice(e.target.value)} placeholder="Price" style={{ fontSize: "14px", width: "100%", border: "none", borderBottom: "2px solid gray", padding: "10px", fontSize: "14px" }} value={price} required id="standard-required" label="Price " type="number" fullWidth name="price" />

                <hr className="mt-4" />
                <div><h6 style={{ fontWeight: "bolder", color: "#002f34", textTransform: "capitalize", fontSize: "14px" }}>UPLOAD A PHOTO</h6></div>
                {/* <hr /> */}

                <div style={{ margin: "15px 0px" }}>

                    <input onChange={(e) => setImage(e.target.files[0])} class="form-control form-control-lg" id="formFileLg" type="file" />
                </div>
                <div onClick={handleChange} style={{ margin: '15px 0px', marginTop: "20px" }}>
                    <button onClick={() => setOpen(true)} style={{ padding: "14px ", width: "30%", backgroundColor: "#FE5F1E", outline: "none", border: "none", fontSize: "14px", color: "#fff" }}>Submit</button>
                </div>
                {
                    open ? <div className="text-center mb-2 mt-2"> <CircularProgress /> </div> : <div />
                }


                
               {
                   succ ? 
                   <Stack>
                   <Alert severity="success" style={{fontSize:"14px"}} >Product Added Successfully!</Alert>
               </Stack>
               :
               <div />
               }

            </div>







        </div>



    )
}

export default AddNewProduct;