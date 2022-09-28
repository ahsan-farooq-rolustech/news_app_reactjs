import React, { Component } from 'react'
import NewsItems from './NewsItems'
import PropTypes from 'prop-types'



class News extends Component
{

    constructor(props)
    {
        super(props)
        console.log('')
        this.state = {
            articles: [],
            loading: false,
        }
    }

    async componentDidMount(){
        console.log('component mounted')
        let url="https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=f01c755f4c4c4e879171f02343e03b20"
        let data= await fetch(url);
        let parsedData=await data.json()
        console.log(parsedData)
        this.setState({articles: parsedData.articles})
    }

    render()
    {
        return (
            <div className='container my-3'>
                <h1>News App</h1>
                <div className='row'>
                    { this.state.articles?.map((element) =>
                    {
                        return (
                            <div className='col-md-4' key={ element.url }>
                                <NewsItems  title={ element.title } description={ element.description} imageUrl={ element.urlToImage } newsUrl={element.url} />
                            </div>
                        );
                    }) }
                </div>
            </div>
        )
    }

}

export default News