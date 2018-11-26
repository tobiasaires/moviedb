import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)

    const movies = [
      {id: 0, imgSrc: 'http://br.web.img2.acsta.net/c_215_290/pictures/18/02/27/19/16/0695165.jpg' , title: 'filme 1', overview: 'filme 1 overview'},
      {id: 1, imgSrc: 'http://br.web.img2.acsta.net/c_215_290/pictures/18/04/12/20/25/5720930.jpg', title: 'filme 2', overview: 'filme 2 overview'},
    ]

    let moviesRows =[]
    movies.forEach((movie) =>{
      const movieRow = <table key={movie.id}>
        <tbody>
          <tr>
            <td>
              <img width='120px' src={movie.imgSrc} alt="poster"></img>
            </td>
            <td>
              <h2>{movie.title}</h2>
              <p>{movie.overview}</p>
            </td>
          </tr>
        </tbody>
      </table>

      moviesRows.push(movieRow)
    })

    this.state = {rows: moviesRows}
  }


  render() {
    return (
      <div>
        <table className='titleBar'>
          <tbody>
            <tr>
              <td>
                <img width="50px" src="green_logo.svg" alt="movie-db-logo"></img>
              </td>
              <td width='8px'></td>
              <td>
                <h1>MoviesDB Search</h1>
              </td>
            </tr>
          </tbody>
        </table>

        <input className="inputSearch" placeholder='Enter the search name'></input>
        {this.state.rows}
      </div>
    );
  }
}

export default App;
