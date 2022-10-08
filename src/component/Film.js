import React from "react";
class Film extends React.Component {
  render() {
    return (
      <li>
        <div>
          <b>Title:</b> {this.props.title}
        </div>
        <div>
          <b>Description:</b> {this.props.description}
        </div>
        <div>
          <b>PosterURL:</b> {this.props.posterURL}
        </div>
        <div>
          <b>Rating:</b> {this.props.rating}
        </div><br/>
      </li>
      
    );
  }
}
export default Film;