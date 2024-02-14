import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './NewsItem.css'

export class NewsItem extends Component {
  static propTypes = {

  }

  render() {
    let {title,description,imageUrl,newsUrl,publishedAt,author}=this.props;
    return (
        <div className="card">
        {imageUrl && <img src={imageUrl} className="card-img-top" alt="News" />}
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p><p className='time'>by {!author?'Unknown':author} on {new Date(publishedAt).toGMTString()}</p>
          <a href={newsUrl} className="btn btn-primary readmore">
            Read More
          </a>
        </div>
      </div>
    )
  }
}


export default NewsItem
