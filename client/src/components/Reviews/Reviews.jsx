import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaStar } from "react-icons/fa";
import { getReview, postReviews } from "../../store/actions/index.js";
import './reviewStyle.css';

const colors = {
  orange: "#FFBA5A",
  grey: "#a9a9a9"
};

const style = {
  container: {
    display: "flex",
    flexDirection: "clumn",
    alignItems: "center",
  },
  textarea:{
    botder: "px solid #a9a9a9",
    borderRadius: 5,
    width: 300,
    margin: "20px 0",
    minHeight: 100,
    padding: 10
  },
  button:{
    botder: "px solid #a9a9a9",
    borderRadius: 5,
    width: 300,
    padding: 10
  }

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
    <div className="container_all" style={style.container}>
      <h2>Rating Star</h2>
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
      <textarea onChange={(e)=> handleCambio(e)}
        placeholder="whats your feedback"
        style={style.textarea}
        value={input}
        
      />
      <button style={style.button} onClick={handleSubmit}>Submit</button>
      <hr />
      <div className="container_review">
        {
          reviews.map(e => {
            return (
              <div key={e._id}>
                <p>{e.star} stars</p>
                <FaStar
                  key={e}
                  size={10}
                  style={{
                    marginRight: 10,
                  }}
                  color={colors.orange}
                />
                <p>{e.comment}</p>
                <hr />
              </div>
            )
          })
        }
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