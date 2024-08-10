import React, { useEffect,useState } from 'react'
import NewsItem from './NewsItemF'
import Spinner from './SpinnerF';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";


const NewsF= (props)=>{


    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0);


    useEffect(() => {
        document.title = `${capitalizeFirstLetter(props.category)} - News`;
        updateNews();
        // eslint-disable-next-line
    }, []);


    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }


    const updateNews=async () =>{

        //Main
        props.setProgress(10);
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
        setLoading(true)
        let data = await fetch(url);
        props.setProgress(30);
        let parsedData = await data.json();
        props.setProgress(60);
        setArticles(parsedData.articles)
        setTotalResults(parsedData.totalResults)
        setLoading(false)
        // setPage(page+1)     
        props.setProgress(100);
    } 


    const fetchMoreData = async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
        setPage(page+1) 
        let data = await fetch(url);
        let parsedData = await data.json();
        // console.log(parsedData);
        setArticles(articles.concat(parsedData.articles))
        setTotalResults(parsedData.totalResults)
        console.log(totalResults);
    };

    
        return (
            <>
                <h2 className='text-center p-2' style={{margin:'10px 0' , marginTop:'60px'}}>News - Top {capitalizeFirstLetter(props.category)} HeadLines</h2>
                {loading && <Spinner isVisible='true' />}
                <InfiniteScroll
                    dataLength={articles.length}
                    next={fetchMoreData}
                    hasMore={articles.length !== totalResults}
                    loader={<Spinner/>}
                >
                    <div className='container'>
                        <div className='row'>
                            {!loading && articles.map((element) => {
                                return <div className='col-md-4' key={element.url}>
                                    <NewsItem title={element.title ? element.title.slice(0, 45) : ""} description={element.description ? element.description.slice(0, 88) : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                                </div>
                            })}
                        </div>
                    </div>

                </InfiniteScroll>
            </>
        )
    
}

NewsF.defaultProps = {
    country: 'in',
    pageSize: 10,
    category: 'general'
}

NewsF.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
}

export default NewsF
