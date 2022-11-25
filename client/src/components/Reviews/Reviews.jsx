import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaStar } from "react-icons/fa";
import { getReview, postReviews } from "../../store/actions/index.js";
import './reviewStyle.css';

const colors = {
  orange: "#FFBA5A",
  grey: "#a9a9a9"
};

const imgLink = 'https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png';
const style = {
  // textarea:{
  //   botder: "px solid #a9a9a9",
  //   borderRadius: 5,
  //   width: 300,
  //   margin: "20px 0",
  //   minHeight: 100,
  //   padding: 10
  // },
  
}



export default function Review(){ //por props recibe el nombre del producto para filtrar y mostrar solo ese review
  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getReview());
  },[dispatch])
  
  const stars = Array(5).fill(0); 
  const reviews = useSelector(state => state.reviews);
  console.log(reviews)
  
  

  
  
  const [currentValue, setCurrentValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);
  const [input, setInput] = useState('');



  const handleClick = value => {
    setCurrentValue(value)
  };

  const handleMouseOver = value => {
    setHoverValue(value);
  };

  const handleMouseLeave = () => {
    setHoverValue(undefined);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Se envio el feedback del cliente");
    const dataPost = {star: currentValue, comment:input}
    dispatch(postReviews(dataPost));
    setInput('');
  }
  const handleCambio = (e) => {
    e.preventDefault();
    setInput(e.target.value);
  }

  return(
    <div className="container_all" >
      <div className="container_content">
        <p>Rating stars: {currentValue}</p>
        <div style={style.stars}>
          {stars.map((_, index) =>{
            return(
              <FaStar 
              key={index}
                size={24}
                style={{
                  marginRight: 10,
                  cursor: "pointer",
                }}
                color={(hoverValue || currentValue) > index ? colors.orange : colors.grey}
                onClick={() => handleClick(index + 1)}
                onMouseOver={() => handleMouseOver(index + 1)}
                onMouseLeave={handleMouseLeave}
              />
              )
            })}
        </div>
        <input onChange={(e)=> handleCambio(e)}
          placeholder="whats your feedback"
          
          className="text_box"
          value={input} 
        />
        <button className="button_submit" onClick={handleSubmit}>Submit</button>
        <hr />
        <div className="container_review">
          {
            reviews.map(e => {
              return (
                <div key={e._id}>
                  <div className="container_image">
                    <img className="image_user" src={imgLink} alt="image user"/>

                  </div>
                  <FaStar
                    key={e}
                    size={10}
                    style={{
                      marginRight: 10,
                      display: "inline-block"
                    }}
                    color={colors.orange}
                    />
                  <p className="star_user">{e.star} stars</p>
                  <p className="comentario">{e.comment}</p>
                  <hr />
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}


{/* <p>{e.star} stars</p>
<FaStar
  key={e}
  size={10}
  style={{
    marginRight: 10,
  }}
  color={colors.orange}
/> */}