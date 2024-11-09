import React from "react";
import logoipsum1 from "../assets/logoipsum-1.svg";
import logoipsum2 from "../assets/logoipsum-2.svg";
import logoipsum3 from "../assets/logoipsum-3.svg";
import logoipsum4 from "../assets/logoipsum-4.svg";
import logoipsum5 from "../assets/logoipsum-5.svg";
import logoipsum6 from "../assets/logoipsum-6.svg";

const Section02 = () => {
  return (
    <section id='section-02'>
      <div id='s02-a'>
        <div className='clients'>
          <img src={logoipsum1} alt="Client's Logo" />
          <img src={logoipsum2} alt="Client's Logo" />
          <img src={logoipsum3} alt="Client's Logo" />
          <img src={logoipsum4} alt="Client's Logo" />
          <img src={logoipsum5} alt="Client's Logo" />
          <img src={logoipsum6} alt="Client's Logo" />
        </div>
        <div id='s02-b'>
          <h2>App Features</h2>
          <p className='fs-l'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin volutpat mollis egestas. Nam luctus facilisis ultrices. Pellentesque volutpat ligula est. Mattis fermentum, at nec lacus.</p>
          <div id='s02-features'>
            <div className='features features__payments'>
              <h5>Easy Payments</h5>
              <p>Id mollis consectetur congue egestas egestas suspendisse blandit justo.</p>
            </div>
            <div className='features features__security'>
              <h5>Data Security</h5>
              <p>Augue pulvinar justo, fermentum fames aliquam accumsan vestibulum non.</p>
            </div>
            <div className='features features__statistics'>
              <h5>Cost Statistics</h5>
              <p>Mattis urna ultricies non amet, purus in auctor non. Odio vulputate ac nibh.</p>
            </div>
            <div className='features features__support'>
              <h5>Support 24/7</h5>
              <p>A elementum, imperdiet enim, pretium etiam facilisi in aenean quam mauris.</p>
            </div>
            <div className='features features__cashback'>
              <h5>Regular Cashback</h5>
              <p>Sit facilisis dolor arcu, fermentum vestibulum arcu elementum imperdiet eleifend.</p>
            </div>
            <div className='features features__standards'>
              <h5>Top Standards</h5>
              <p>Faucibus cursus maecenas lorem cursus nibh. Sociis sit risus id. Sit facilisis dolor arcu.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section02;
