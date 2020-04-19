import React from 'react';
import './styles.css'

class Movie extends React.Component {
  render() {
    return (
      <div className='movie-card'>
        <img src={this.props.banner} alt='Movie Album' />
        <label>
          {this.props.likes} {this.props.name} {this.props.hero}
        </label>
      </div>
    );
  }
}

export default Movie;