import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchUserData} from './actions';

import './style.css';
import {CardLists} from '../../components/CardList';
import {SpinnerLoader} from '../../components/SpinnerLoader';

class UserPage extends Component{

  componentDidMount(){
    this.props.fetchUserData(this.props.match.params.userId);
  }
  render(){
    const {userData, isDataLoading} = this.props;
    if(isDataLoading){
      return <SpinnerLoader/>;
    }
    console.log(userData);
    return(
      <div className="user-page">
        <div className="">
          <button className="btn btn-info" onClick={this.props.history.goBack} >Go Back</button>
        </div>
        <div className="user-profile">Here will be author's information</div>
        <h2>Recent photos</h2>
        <CardLists photos={userData.photos.photo} />
      </div>
    )
  }
}

const mapStateToProps = (state) =>{
  return{
    userData: state.fetchUserData.data,
    isDataLoading: state.fetchUserData.isDataLoading
  }
};

const mapDispatchToProps = (dispatch) =>({
  fetchUserData: (id) => dispatch(fetchUserData(id)),
  dispatch
});

export default connect(mapStateToProps, mapDispatchToProps)(UserPage);