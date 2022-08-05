import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import Stack from "@mui/material/Stack";
import {
  Grid,
  FormControl,
  TextField,
  Button as _Button,
  Box,
  MenuItem,
  FormControlLabel,
  Checkbox,
} from "@material-ui/core";
import { imageDataRequest } from "../http/requests";
import { FaEuroSign } from "react-icons/fa";
const ImageUpload = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [formDataValue, setFormDataValue] = useState({
    description: "",
    price: "",
    category: "",
  });

  // useEffect(() => {
  //   if (selectedImage) {
  //     setImageUrl(URL.createObjectURL(selectedImage));
  //   }
  // }, [selectedImage]);

  const handleInputChange = (event) => {
    setFormDataValue((prevProps) => ({
      ...prevProps,
      [event.target.name]: event.target.value,
    }));
  };

  const  handleImageSelection = (e)=>{

const files = Array.from(e.target.files);
setSelectedImage([]);

files.forEach((file) => {
  console.log("file", file)
  setSelectedImage((old)=> [...old, file])

});

  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("description", formDataValue.description);
    // formData.set("imageData", selectedImage);
    formData.set("price", formDataValue.price);
    formData.set("category", formDataValue.category);
    selectedImage.forEach((image) => {
      console.log("image", image)
      formData.append("imageData", image);
    });


    imageDataRequest(formData)
    console.log(event.target.value);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>
          <FaEuroSign />
          Create NFT
        </h2>

        <input
          accept="image/*"
          type="file"
          name="imageData"
          id="select-image"
          style={{ display: "none" }}
          onChange={handleImageSelection}
          multiple
        />
 
        {console.log("selectedImage",selectedImage)}
        <label htmlFor="select-image">
          <Button variant="contained" color="primary" component="span">
            Upload Image
          </Button>
        </label>
        {/* {imageUrl && selectedImage && (
          <Box mt={2} textAlign="center">
            <div>Image Preview:</div>
            <img src={imageUrl} height="100px" />
          </Box>
        )} */}

        <Box mt={2} textAlign="center">
          <TextField
            fullWidth
            label="Description"
            id="fullWidth"
            name="description"
            value={formDataValue.description}
            onChange={handleInputChange}
          />
        
        </Box>
            {console.log("formDataValue.price",formDataValue.description)}
        <br />

        <Box mt={2} textAlign="center">
          <TextField
            fullWidth
            name="price"
            label="Price"
            id="fullWidth"
            value={formDataValue.price}
            onChange={handleInputChange}
          />
        </Box>
        {console.log("formDataValue.price",formDataValue.price)}
        <br />

        <Box mt={2} textAlign="center">
          <TextField
            fullWidth
            label="Category"
            id="fullWidth"
            name="category"
            value={formDataValue.category}
            onChange={handleInputChange}
          />
          {console.log('test',formDataValue.category)}
        </Box>
        <br />

        <Stack direction="row" spacing={2}>
          <button type="sumbit">Submit</button>
          <button>Cancel</button>
        </Stack>
      </form>
      <br />
    </>
  );
};

export default ImageUpload;
