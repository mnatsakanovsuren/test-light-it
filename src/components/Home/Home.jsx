import React from 'react';

const Home = () => {
  return (
    <section className="home">
      <div className="container">
        <div className="home__title-wrap">
          <h1 className="home__title">Welcome</h1>
          <h3 className="home__subtitle">to test task for Light IT</h3>
        </div>
        <div className="home__content">
          <p className="home__text">by <a href="https://www.linkedin.com/in/suren-mnatsakanov/">Mnatsakanov Suren</a></p>
        </div>
      </div>
    </section>
  );
};

export default Home;