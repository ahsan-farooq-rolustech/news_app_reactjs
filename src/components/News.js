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
            page:1
        }
    }

    async componentDidMount()
    {
        console.log('component mounted')
        let url = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=f01c755f4c4c4e879171f02343e03b20&pageSize=20"
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData)
        this.setState({ articles: parsedData.articles,totalResults:parsedData.totalResults})
    }

    handlePrevClick = async () =>
    {
        console.log("Previous");
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=f01c755f4c4c4e879171f02343e03b20&page=${this.state.page - 1}&pageSize=20`
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData)

        this.setState({
            page: this.state.page - 1,
            articles: parsedData.articles
        })
    }

    handleNextClick = async () =>
    {
        console.log("Next")
        if(!(this.state.page+1>Math.ceil(this.state.totalResults/20)))
        {
            let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=f01c755f4c4c4e879171f02343e03b20&page=${this.state.page + 1}&pageSize=20`
            let data = await fetch(url);
            let parsedData = await data.json()
            console.log(parsedData)
    
            this.setState({
                page: this.state.page + 1,
                articles: parsedData.articles
            })
        }

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
                                <NewsItems title={ element.title } description={ element.description } imageUrl={ element.urlToImage } newsUrl={ element.url } />
                            </div>
                        );
                    }) }
                </div>
                <div className='container d-flex justify-content-between'>
                    <button type="button" className="btn btn-dark mx-3" rel="noopener" onClick={ this.handlePrevClick } disabled={ this.state.page <= 1 }>&larr; Previous </button>
                    <button type="button" className="btn btn-dark mx-3" rel="noopener" onClick={ this.handleNextClick } >Next &rarr;</button>
                </div>
            </div>
        )
    }

}

export default News