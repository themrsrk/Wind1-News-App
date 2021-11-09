import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let { title, description, url, image, date, author,source } = this.props;

        return (

            <div className="my-3">
                <div className="container" >
                <span className="badge badge-primary start-94%" style={{backgroundColor:"red", zIndex:"1", marginRight:"500px"}} >{source}</span>

                    <div className="card">
                        
                        <img src={!image ? "https://image.shutterstock.com/image-vector/breaking-news-background-planet-260nw-667420906.jpg" : image} className="card-img-top" alt={!image ? "https://image.shutterstock.com/image-vector/breaking-news-background-planet-260nw-667420906.jpg" : image} />
                        <div className="card-body">                  
                            <h5 className="card-title">{title + "..."} </h5>
                            <p className="card-text">{description}...</p>
                            <p className="card-text"><small className="text-danger">By {author ? author : "Anonymous"} on {new Date(date).toGMTString()}</small></p>
                            <a href={url} rel="noreferrer" target="_blank" className="btn btn-sm btn-danger" style={{backgroundColor:"#ff0000"}}>Read More</a>
                        </div>
                    </div>
                </div>
                <div />
            </div>


        )
    }
}

export default NewsItem

