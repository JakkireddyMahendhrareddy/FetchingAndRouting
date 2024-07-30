import {Link} from 'react-router-dom'

import './index.css'

const BlogItem = props => {
  const {blogDetails} = props
  const {title, author, imageUrl, avatarUrl, id} = blogDetails
  console.log(blogDetails)

  return (
    <li className="l">
      <Link to={`/blogs/${id}`} className="header-container">
        <div className="logo-and-title-container">
          <img alt="wave" className="first" src={imageUrl} />
        </div>
        <div>
          <h1 className="title">{title}</h1>
          <img alt="wave" className="logo" src={avatarUrl} />
          <h1 className="title">{author}</h1>
        </div>
      </Link>
    </li>
  )
}

export default BlogItem
