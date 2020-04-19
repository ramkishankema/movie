import React from 'react';
import Movie from '../Movie/Movie';
import './style.css';

class Movies extends React.Component {
  getMovie = (name, likes, banner, hero) => {
    return <Movie name={name} likes={likes} banner={banner} hero={hero} />;
  };

  render() {
    return (
      <div className='movies-section'>
        {this.getMovie(
          'Yentha Vaadu Gani',
          '13M',
          'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSk_ExaSBGrNtjJvY9mW6Nyq49VX5NtjLymzVTuOi1GqvwV7mPE&usqp=CAU',
          'Ajith'
        )}
        {this.getMovie(
          'Maharshi',
          '123.0k',
          'https://i1.wp.com/www.socialnews.xyz/wp-content/uploads/2019/05/16/Mahesh-babu-s-Maharshi-Movie-second-week-HD-Posters-1.jpg?quality=90&zoom=1&ssl=1',
          'Mahesh Babu'
        )}
        {this.getMovie(
          'Avengers:Endgame',
          '1m',
          'https://img.timesnownews.com/story/1546625126-Avengers_Imax_Poster.jpg?d=600x450',
          'Tony Stark'
        )}

        {this.getMovie(
          'Jersey',
          '189.0k',
          'https://image3.mouthshut.com/images/imagesp/925972543s.jpg',
          'Nani'
        )}
      </div>
    );
  }
}

export default Movies;