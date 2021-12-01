import React from "react";

const Card = (props) => {
    const { title, description, urlToImage,url } = props.article;
    return (

        <div className="card-container" style={{cursor:"pointer"}} onClick={()=>window.location=url}>
            <div className="card-header">
                <h1>TopNews</h1>
                <img src="" alt="" />

            </div>

            <div className="image-container">
                <img src={urlToImage} alt='' />
            </div>

            <div className="card-title">
                <h3>{title}</h3>
            </div>

            <div className="card-body">
                <p>{description}</p>
            </div>
            
            </div>
    );
}

export default Card;
