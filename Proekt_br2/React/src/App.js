import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import pic1 from "./images/slika3.png";
import pic2 from "./images/nature.png";
import pic3 from "./images/nature2.png";
import heart from "./images/heart.png";
import instagram from "./images/instagram.png";
import komentar from "./images/comment.png";

export default function App() {
  const [likesCount1, setLikesNumber1] = useState(185);
  const [likesCount2, setLikesNumber2] = useState(122);
  const [likesCount3, setLikesNumber3] = useState(197);

  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  const [comment1, setComment1] = useState("");
  const [comments1, setComments1] = useState([]);

  const [comment2, setComment2] = useState("");
  const [comments2, setComments2] = useState([]);


  const onClickHandler = () => {
    setComments((comments) => [...comments, comment]);
  };

  const onChangeHandler = (e) => {
    setComment(e.target.value);
  };

  const onClickHandler1 = () => {
    setComments1((comments1) => [...comments1, comment1]);
  };

  const onChangeHandler1 = (e) => {
    setComment1(e.target.value);
  };

  const onClickHandler2 = () => {
    setComments2((comments2) => [...comments2, comment2]);
  };

  const onChangeHandler2 = (e) => {
    setComment2(e.target.value);
  };

 
  return (
    <div>
      <br></br>
      <h1><img style={{width: 30, height: 30} } src={instagram} alt = "slika"/>Instagram</h1> <br></br>
      <img style={{width: 250, height: 300} } src={pic1} alt = "slika"/>
      <img style={{width: 30, height: 30}} src={heart} alt = "heart" 
      onClick={() => setLikesNumber1(likesCount1 + 1)}/>
      <img  style={{width: 30, height: 30}} src = {komentar} alt = "komentar"/>
      <h4>Total likes: {likesCount1}</h4> <br></br>

      <div>
        {comments.map((text) =>(
          <div className="comment-container">{text}</div>  
        ))}
        <div>
          <textarea
          value={comment}
          onChange = {onChangeHandler}></textarea> <br></br>
          <button onClick={onClickHandler}>Post</button>
        </div>

      </div>

    <br></br>

      <img style={{width: 500, height: 250} } src={pic2} alt = "nature"/>
      <img style={{width: 30, height: 30}} src={heart} alt = "heart" 
      onClick={() => setLikesNumber2(likesCount2 + 1)}/>
      <img  style={{width: 30, height: 30}} src = {komentar} alt = "komentar"/>
      <h4>Total likes: {likesCount2}</h4> <br></br>

      <div>
        {comments1.map((text) =>(
          <div className="comment-container">{text}</div>  
        ))}
        <div>
          <textarea
          value1={comment1}
          onChange = {onChangeHandler1}></textarea> <br></br>
          <button onClick={onClickHandler1}>Post</button>
        </div>

      </div>
      <br></br>

      <img style={{width: 500, height: 250} } src={pic3} alt = "nature"/>
      <img style={{width: 30, height: 30}} src={heart} alt = "heart" 
      onClick={() => setLikesNumber3(likesCount3 + 1)}/>
      <img  style={{width: 30, height: 30}} src = {komentar} alt = "komentar"/>
      <h4>Total likes: {likesCount3}</h4><br></br>

      <div>
        {comments2.map((text) =>(
          <div className="comment-container">{text}</div>  
        ))}
        <div>
          <textarea
          value2={comment2}
          onChange = {onChangeHandler2}></textarea> <br></br>
          <button onClick={onClickHandler2}>Post</button>
        </div>

      </div>
      <br></br>

    </div>
  );

}

