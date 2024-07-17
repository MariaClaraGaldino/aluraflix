import React from "react";
import './FeaturedMovie.css'

export default ({ item }) => {

    let firstDate = new Date(item.first_air_date);
    let genres = [];
    for(let i in item.genres) {
        genres.push( item.genres[i].name);
    }

    return (
        <section className="featured" style={{
            backgroundSize: 'couver',
            backgroundPosition: 'center',
            backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
        }}>
            <div className="featured--vertical">
                <div className="featured--horizontal">
                    <div className="featured--name">{item.original_name}</div>
                    <div className="featured--info">
                        <div className="featured--points">{item.vote_average.toFixed(1)} pontos</div>
                        <div className="featured--year">{firstDate.getFullYear()}</div>
                        <div className="featured--seasons">{item.number_of_seasons} temporada{item.number_of_seasons !== 1 ? 's' : ''}</div>
                    </div>
                    <div className="featured--descricao">{item.overview}</div>
                    <div className="featured--buttons">
                        <a  className="btn-assitir" href={`/watch/${item.id}`}> ► Assistir</a>
                        <a  className="btn-list" href={`/list/add/${item.id}`}> + Minha lista</a>
                    </div>
                    <div className="featured--genres"><strong>Gêneros: </strong> {genres.join(', ')}</div>

                </div>
            </div>
        </section>
    )
}