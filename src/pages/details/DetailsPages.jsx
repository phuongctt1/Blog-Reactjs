import React, { useState } from "react"
import "./details.css"
import "../../components/header/header.css"
import img from "../../assets/images/b5.jpg"
import { BsPencilSquare } from "react-icons/bs"
import { AiOutlineDelete } from "react-icons/ai"
import { useParams } from "react-router-dom"
import { useEffect } from "react"
import { blog } from "../../assets/data/data"

export const DetailsPages = () => {
  const { id } = useParams()
  const [blogs, setBlogs] = useState(null)

  useEffect(() => {
    let blogs = blog.find((blogs) => blogs.id === parseInt(id))
    if (blogs) {
      setBlogs(blogs)
    }
  }, [])

  return (
    <>
      {blogs ? (
        <section className='singlePage'>
          <div className='container'>
            <div className='left'>
              <img src={blogs.cover} alt='' />
            </div>
            <div className='right'>
              <div className='buttons'>
                <button className='button'>
                  <BsPencilSquare />
                </button>
                <button className='button'>
                  <AiOutlineDelete />
                </button>
              </div>
              <h1>click home ...ホームをクリック...</h1>
              <p>{blogs.desc}</p>
              <p>" Blog is a simple yet very effective blogging platform for new bloggers. With a user-friendly interface and flexible features, Code Blog makes creating and managing blogs easy.
                        You can manage your posts, categories and tags with just a few simple taps.
                        With the above significant features and advantages, Blog is definitely a great blogging platform for new bloggers. I hope through this article you will find a useful tool to share and communicate with your friends."</p>
              <p>Author: Cao Thi Thu Phuong</p>
            </div>
          </div>
        </section>
      ) : null}
    </>
  )
}
