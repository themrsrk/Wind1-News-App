import React, { Component } from 'react'
import PropTypes from 'prop-types';
import NewsItem from './NewsItem'
import Loading from './Loading';
import Navbar from './Navbar';
import InfiniteScroll from 'react-infinite-scroll-component';

export class News extends Component {
  
    
    static defaultProps = {
        country: "in",
        category: "general",
      
    }
    static propTypes = {
        country: PropTypes.string,
        category: PropTypes.string,
        // kpropTypes.string
        // key : PropTypes.string,
    }
    constructor() {
        super();
        this.state = {
            articles: [],
            loading : false,
            totalResults: 0,
            page: 1
            // update: ""
            
        }
    }

        async componentDidMount(props)  {
        this.props.setprogress(10)
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=bb1d4e1cbe704857ababb47733567466`
        let data = await fetch(url);
        let parsedData = await data.json();
        this.props.setprogress(50)
        this.setState({ articles: parsedData.articles })
        this.setState({totalResults: parsedData.totalResults})
        this.props.setprogress(75);

    //     if (this.props.category){
    //         this.setState({update:true})
    this.props.setprogress(100)
    //     }

    }
    
    fetchMoreData = async () => {  
        this.setState({page: this.state.page + 1})
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=d093053d72bc40248998159804e0e67d&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        let data = await fetch(url);
        let parsedData = await data.json()
        this.setState({
            articles: this.state.articles.concat(parsedData.articles),
            totalResults: parsedData.totalResults
        })
      };
    
    render() {

        const capitalizeFirstLetter = (string)=> {
            return string.charAt(0).toUpperCase() + string.slice(1);
          }
        //   const pathname = window.location.pathname;
        //   console.log(window.location)
        return (
            <>

            <Navbar title="Wind1 News" />
                <h2 className="text-center" style={{margin:"35px 0px"}}>Wind1 News - Top Headlines from {capitalizeFirstLetter(this.props.category)}</h2>
                {/* {this.state.loading && <Loading/>} */}
                <InfiniteScroll
                 dataLength={this.state.articles.length}
                 next={this.fetchMoreData}
                 hasMore={this.state.articles.length !== this.state.totalResults}
                 loader={<Loading/>}
                >
                    <div className="container">
                        <div className="container">
                <div className="row news">
                    {
                        
                        !this.state.loading&&this.state.articles.map((element, key) => {
                            return <div className="col-md-4" key={key} >
                                <NewsItem title={element.title.slice(0, 50)} description={!element.description ? element.title : element.description.slice(0, 100)} image={!element.urlToImage ? "https://image.shutterstock.com/image-vector/breaking-news-background-world-global-260nw-719766118.jpg" : element.urlToImage} url={element.url} date={element.publishedAt} author={element.author} source={element.source.name}/>
                            </div>
                        }
                        )
                    }
                </div>
                </div>
                </div>
                </InfiniteScroll>
              
            </>

        )
    }
}

export default News
