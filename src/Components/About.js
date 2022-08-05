import React from "react";
import "../App.css";
function About() {
  const products = [
    {
      sno:1,
      id: "recZkNf2kwmdBcqd0",
      name: "accent chair",
      image:
        "https://dl.airtable.com/.attachmentThumbnails/e8bc3791196535af65f40e36993b9e1f/438bd160",
    },
    {
      sno:2,
      id: "recEHmzvupvT8ZONH",
      name: "albany sectional",

      image:
        "https://dl.airtable.com/.attachmentThumbnails/0be1af59cf889899b5c9abb1e4db38a4/d631ac52",
    },
    {
      sno:3,
      id: "rec5NBwZ5zCD9nfF0",
      name: "albany table",

      image:
        "https://dl.airtable.com/.attachmentThumbnails/7478483f40a2f56662a87b304bd4e104/707d397f",
    },
    {
      sno:4,
      id: "recd1jIVIEChmiwhe",
      name: "armchair",

      image:
        "https://dl.airtable.com/.attachmentThumbnails/530c07c5ade5acd9934c8dd334458b86/cf91397f",
    },
    {
      sno:5,
      id: "recoM2MyHJGHLVi5l",
      name: "bar stool",
      image:
        "https://dl.airtable.com/.attachmentThumbnails/a6119fabf7256049cc0e8dbcdf536c9c/b0153f66",
    },
    {
      sno:6,
      id: "recoM2MyHJGHLVi5l",
      name: "bar stool",
      image:
        "https://dl.airtable.com/.attachmentThumbnails/a6119fabf7256049cc0e8dbcdf536c9c/b0153f66",
    },
    {
      sno:7,
      id: "recoM2MyHJGHLVi5l",
      name: "bar stool",
      image:
        "https://dl.airtable.com/.attachmentThumbnails/a6119fabf7256049cc0e8dbcdf536c9c/b0153f66",
    },
    {
      sno:8,
      id: "recoM2MyHJGHLVi5l",
      name: "bar stool",
      image:
        "https://dl.airtable.com/.attachmentThumbnails/a6119fabf7256049cc0e8dbcdf536c9c/b0153f66",
    },
    {
      sno:9,
      id: "recoM2MyHJGHLVi5l",
      name: "bar stool",
      image:
        "https://dl.airtable.com/.attachmentThumbnails/a6119fabf7256049cc0e8dbcdf536c9c/b0153f66",
    },
    {
      sno:10,
      id: "recoM2MyHJGHLVi5l",
      name: "bar stool",
      image:
        "https://dl.airtable.com/.attachmentThumbnails/a6119fabf7256049cc0e8dbcdf536c9c/b0153f66",
    },
    
  ];
  // console.log(products[0].id);
  return (
    <div className="aboutCards">
      {products.map((item) => (
        // <p>{item.name}</p>
        <div className="card amit " key={item.sno}>
          <img
            className="card-img-top"
            src={item.image}
            alt="Card image"
            // style={{width:"100%"}}
          />
          <div className="card-body">
            <h4 className="card-title">{item.name}</h4>
            <p className="card-text">
              Some example text some example text. John Doe is an architect and
              engineer
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default About;
