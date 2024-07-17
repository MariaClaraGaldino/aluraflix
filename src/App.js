import React, { useEffect, useState } from "react";
import './App.css';
import Tmdb from "./API/Tmdb";
import Movie from "./componentes/Movie";
import Header from "./componentes/Header"
import FeaturedMovie from "./componentes/FeaturedMovie";


export default () => {

  const [movieList, setMovieList] = useState([]);
  const [featuredData, setfeaturedData] = useState(null);
  const [blackHeader, setblackHeader] = useState(false);

  useEffect(() => {
    const carregarTudo = async () => {
      //Pegando a lista total
      let list = await Tmdb.getHomeList();
      setMovieList(list);

      //Pegar o Feutured
      let originals = list.filter(i => i.slug === 'originals');
      let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1));
      let chosen = originals[0].items.results[randomChosen];
      let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv');
      setfeaturedData(chosenInfo);

    }

    carregarTudo()
  }, []);

  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 10) {
        setblackHeader(true)
      } else {
        setblackHeader(false)
      }
    }

    window.addEventListener('scroll', scrollListener);
    return () => {
      window.removeEventListener('scroll', scrollListener)
    }
  });

  return (
    <div className="page">

      <Header black={blackHeader} />

      {featuredData &&
        <FeaturedMovie item={featuredData} />
      }

      <section className="listas">
        {movieList.map((item, key) => (
          <Movie key={key} title={item.title} items={item.items} />
        ))}
      </section>


      <footer>
        <p>Desenvolvido por Maria Clara Galdino</p>
        <p>Dados pegos do site Themoviedb.org</p>
      </footer>

    </div>
  )
}
