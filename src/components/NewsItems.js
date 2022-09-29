import React from 'react'
import PropTypes from 'prop-types'
const NewsItems=(props)=>
{
    let { title, description, imageUrl,newsUrl } = props
    return (
        <div className='my-4'>
                <div className="card" style={ { width: "18rem" } }>
                    <img src={ imageUrl===null?"https://www.vskills.in/certification/blog/wp-content/uploads/2015/01/structure-of-a-news-report.jpg":imageUrl } className="card-img-top" alt="Card image" />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p >{description}</p>
                        <a href={newsUrl} target="_blank" className="btn btn-sm btn-primary">Read More</a>
                    </div>
                </div>
        </div>
    );
}

NewsItems.propTypes={
    title:PropTypes.string,
     description:PropTypes.string, 
     imageUrl:PropTypes.string,
     newsUrl:PropTypes.string
}

export default NewsItems