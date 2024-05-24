import React from 'react'
import ReactPlayer from 'react-player'
function Blog() {
  return (
    <>

  <header>
    <h2 className="h2 article-title">Blog</h2>
  </header>
  <section className="blog-posts">
    <ul className="blog-posts-list">


       {/* BLOG POST ITEM */}
      <li className="blog-post-item">
        <a href="#">
          <figure className="blog-banner-box">
            <img
              src={Blog6}
              alt="Design digest #79"
              loading="lazy"
            />
          </figure>
          <div className="blog-content">
            <div className="blog-meta">
              <p className="blog-category">Design</p>
              <span className="dot" />
              <time dateTime="2022-02-23">Fab 23, 2022</time>
            </div>
            <h3 className="h3 blog-item-title">Design digest #79</h3>
            <p className="blog-text">
              Optio cumque nihil impedit uo minus quod maxime placeat, velit
              esse cillum.
            </p>
          </div>
          
        </a>
      </li>
 
    </ul>
  </section>
      </>
  )
}

export default Blog