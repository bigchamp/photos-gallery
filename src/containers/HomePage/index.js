import React, {Component} from 'react';
import {connect} from 'react-redux';
import {CardLists} from "../../components/CardList";
import {fetchData} from './actions';
import './style.css';

import {SpinnerLoader} from '../../components/SpinnerLoader';
import {NothingFound} from '../../components/NothingFound';

class HomePage extends Component{
  constructor(props){
    super(props);
    this.state = {
      message:'not at bottom',
      per_page: 12,
      searchText: ''
    };
    this.handleScroll = this.handleScroll.bind(this);
    this.onHandleChange = this.onHandleChange.bind(this);
    this.onHandleSumbit = this.onHandleSumbit.bind(this);
  }

  componentWillMount(){
    this.props.fetchData(this.state.per_page, this.state.searchText);
  }
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }
  handleScroll() {
    const windowHeight = "innerHeight" in window ? window.innerHeight : document.documentElement.offsetHeight;
    const body = document.body;
    const html = document.documentElement;
    const docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight,  html.scrollHeight, html.offsetHeight);
    const windowBottom = windowHeight + window.pageYOffset;
    if (windowBottom >= docHeight) {
      this.setState({
        message:'bottom reached',
        per_page: this.state.per_page + 12
      });
      this.props.fetchData(this.state.per_page);
    } else {
      this.setState({
        message:'not at bottom'
      });
    }
  }
  onHandleChange(e){
    this.setState({
      searchText: e.target.value
    });
  }
  onHandleSumbit(e){
    e.preventDefault();
    this.props.fetchData(this.state.per_page, this.state.searchText);
  }

  render(){
    const {data, isDataLoading} = this.props;
    if(isDataLoading){
      return <SpinnerLoader/>;
    }
    return(
      <div className="container">
        <div className="home-page">
          <form onSubmit={this.onHandleSumbit}>
            <input type="text" className="form-control" onChange={this.onHandleChange} value={this.state.searchText}/>
            <input type="submit" value="submit" />
          </form>
          {(data.photos.photo.length === 0) ? <NothingFound/> : <CardLists photos={data.photos.photo}/>}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) =>{
  return {
    data: state.fetchPhotos.list,
    isDataLoading: state.fetchPhotos.isLoading
  }
};

const mapDispatchToProps = (dispatch) =>({
  fetchData : (per_page, searchText) => dispatch(fetchData(per_page, searchText)),
  dispatch
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);