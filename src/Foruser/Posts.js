import React from 'react'
import './Posts.css'
import flowerImg from '../Assets/flower.jpg'
import likeButton from '../Assets/likeIcon.png'
export const Posts = () => {
  return (
    <div>
      <div className='post'>
        <div className="postWrapper">
          <div className="postTop">
            <div className="postTopLeft">
              <img className="postProfileImg" src={flowerImg}/>
              <span className='postUsername'>Nibha Bharati</span>
              <span className="postDate">22/02/2024</span>
            </div>
          </div>
          <div className="postCenter">
          <span className="postText">This is my description</span>
          <img className="postImg" src={flowerImg} alt="" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img className="likeIcon" src={likeButton} onClick="" alt="" />
            <span className="postLikeCounter">12 people like it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">5 comments</span>
          </div>
        </div>
        </div>
      </div>
      <div className='post'>
        <div className="postWrapper">
          <div className="postTop">
            <div className="postTopLeft">
              <img className="postProfileImg" src={flowerImg}/>
              <span className='postUsername'>Nibha Bharati</span>
              <span className="postDate">22/02/2024</span>
            </div>
          </div>
          <div className="postCenter">
          <span className="postText">This is my description</span>
          <img className="postImg" src={flowerImg} alt="" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img className="likeIcon" src={likeButton} onClick="" alt="" />
            <span className="postLikeCounter">12 people like it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">5 comments</span>
          </div>
        </div>
        </div>
      </div>
      <div className='post'>
        <div className="postWrapper">
          <div className="postTop">
            <div className="postTopLeft">
              <img className="postProfileImg" src={flowerImg}/>
              <span className='postUsername'>Nibha Bharati</span>
              <span className="postDate">22/02/2024</span>
            </div>
          </div>
          <div className="postCenter">
          <span className="postText">This is my description</span>
          <img className="postImg" src={flowerImg} alt="" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img className="likeIcon" src={likeButton} onClick="" alt="" />
            <span className="postLikeCounter">12 people like it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">5 comments</span>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}
