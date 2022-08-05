import React from 'react'
import { Link } from 'react-router-dom';
import './SearchPage.css'
import { useStateValue } from './StateProvider'
import useGoogleSearch from './useGoogleSearch';
import Search from './Search';
import SearchIcon from "@material-ui/icons/Search";
import DescriptionIcon from "@material-ui/icons/Description";
import ImageIcon from "@material-ui/icons/Image";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import RoomIcon from "@material-ui/icons/Room";
import MoreVertIcon from "@material-ui/icons/MoreVert";

function SearchPage() {
    const [{term="tesla"}, dispatch] = useStateValue();
    const {data} = useGoogleSearch(term);

    // https://developers.google.com/custom-search/v1/introduction#identify_your_application_to_google_with_api_key
    // https://programmablesearchengine.google.com/controlpanel/create

    console.log('searchpage data >>', data);
    return (
    <div className='searchPage'>
        <div className='searchPage_header'>
            <Link to="/">
                <img
                    className='searchPage_logo'
                    src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
                    alt=""
                />
            </Link>
            {/* <h1>{term}</h1> */}
            <div className='searchPage_headerBody'>
                <Search hideButtons />

                <div className="searchPage_options">
                    <div className="searchPage_optionLeft">
                        <div className="searchPage_option">
                            <SearchIcon />
                            <Link to="/all">all</Link>
                        </div>
                        <div className="searchPage_option">
                            <DescriptionIcon />
                            <Link to="/news">news</Link>
                        </div>
                        <div className="searchPage_option">
                            <ImageIcon />
                            <Link to="/image">image</Link>
                        </div>
                        <div className="searchPage_option">
                            <LocalOfferIcon />
                            <Link to="/shopping">shopping</Link>
                        </div>
                        <div className="searchPage_option">
                            <RoomIcon />
                            <Link to="/map">map</Link>
                        </div>
                        <div className="searchPage_option">
                            <MoreVertIcon />
                            <Link to="/more">more</Link>
                        </div>
                    </div>

                    <div className="searchPage_optionRight">
                        <div className="searchPage_option">
                            <Link to="/setting">setting</Link>
                        </div>
                        <div className="searchPage_option">
                            <Link to="/tools">tools</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        {term && (
            <div className='searchPage_results'>
                <p
                className='searchPage_resultCount'>
                    about {data?.searchInformation.formattedTotalResults} results ({data?.searchInformation.formattedSearchTime} seconds) for {term}
                </p>

                {data?.items.map(item => (
                    <div className="searchPage_result">
                        <a href={item.link}>{item.displayLink}</a>
                        <a className='searchPage_resultTitle' href={item.link}><h2>{item.title}</h2></a>
                        <p className='searchPage_resultSnippet'>{item.snippet}</p>
                    </div>
                ))}
            </div>
        )}

    </div>
    )
}

export default SearchPage