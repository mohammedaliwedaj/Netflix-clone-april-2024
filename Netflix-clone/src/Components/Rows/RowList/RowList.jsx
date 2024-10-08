import React from "react";
import Row from "../Row/Row";
import requests from "../../../Utils/requests";

const RowList = () => {
  return (
    <>
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow={true}
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRatedMovies} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Animation Movies" fetchUrl={requests.fetchAnimationMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Thriller Movies" fetchUrl={requests.fetchThrillerMovies} />
      <Row title="Adventure Movies" fetchUrl={requests.fetchAdventureMovies} />
      <Row title="Family Movies" fetchUrl={requests.fetchFamilyMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
      <Row title="History Movies" fetchUrl={requests.fetchHistoryMovies} />
      <Row title="Drama Movies" fetchUrl={requests.fetchDramaMovies} />
      <Row title="Science Fiction" fetchUrl={requests.fetchScienceFiction} />
      <Row title="TV Shows" fetchUrl={requests.fetchDocumentaries} />
    </>
  );
};

export default RowList;
