import React from 'react';
import Moment from 'react-moment';
import {Link} from 'react-router-dom';
import './style.css'

export default function CardItem({index, photo: {title, farm, secret, server, id, ownername, owner, dateupload, tags}}) {
  return (
        <div className="col-3" key={index}>
          <div className="card">
            <img className="card-img-top" src={`https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`} />
            <div className="card-body">
              <h4 className="card-title"><Link to={`users/${owner}`}>{ownername}</Link></h4>
              <Moment unix format="YYYY-MM-DD">{dateupload}</Moment>
              <p className="card-text">{title}</p>
              <p className="card-text" style={{'font-weight': '300'}}>Tags: {tags}</p>
            </div>
          </div>
        </div>
    )
}