import React from "react";

const Section01 = () => {
  return (
    <section id='section-01'>
      <div className='s01'>
        <h1>Manage All Your Money in One App</h1>
        <p className='fs-l'>
          We offer you a new generation of the mobile banking. <br />
          Save, spend & manage money in your pocket.
        </p>
        <div id='download'>
          <a href='' className='app app__appstore'>
            Download on the AppStore
          </a>
          <a href='' className='app app__googleplay'>
            Get it on Google Play
          </a>
        </div>
        <a href='' className='link__discover_more'>
          Discover more
        </a>
      </div>
    </section>
  );
};

export default Section01;
