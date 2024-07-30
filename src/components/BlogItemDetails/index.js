// Write your JS code here

// Write your JS code here

import {Component} from 'react'

import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import './index.css'

class BlogItemDetails extends Component {
  state = {blogItemData: [], isLoading: true}

  componentDidMount() {
    this.getBlogsItemData()
  }

  getBlogsItemData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    console.log(id)

    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const data = await response.json()
    console.log(data)

    const updatedData = {
      title: data.title,
      imageUrl: data.image_url,
      avatarUrl: data.avatar_url,
      author: data.author,
      topic: data.topic,
      content: data.content,
    }

    this.setState({blogItemData: updatedData, isLoading: false})
  }

  renderData = () => {
    const {blogItemData} = this.state
    const {title, imageUrl, avatarUrl, author, topic, content} = blogItemData

    return (
      <div className="id-details">
        <h1>{title}</h1>
        <img src={imageUrl} alt="img" className="id-img" />
        <img src={avatarUrl} alt="img" className="id-img" />
        <h1>{author}</h1>
        <h1>{topic}</h1>
        <h1 className="matter">{content}</h1>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state

    return (
      <div className="blogList-container">
        {isLoading ? (
          <div className="loader">
            <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
          </div>
        ) : (
          this.renderData()
        )}
      </div>
    )
  }
}
export default BlogItemDetails
