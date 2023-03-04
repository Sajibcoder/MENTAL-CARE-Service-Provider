import React from "react";
import vg from "../img/tik.jpg";
import img from "../img/doc1.jpg";
import img1 from "../img/doc2.avif";
import img2 from "../img/doc3.jpg";
import img3 from "../img/doc4.webp";

const Home = () => {
  return (
    <>
      <div className="home" id="home">
        <main>
          <h1>MENTAL CARE</h1>
          <p>Depression Is Temporary, Hope Is Permanent. So choose Life, Protect Your Mental Health</p>
        </main>
      </div>

      <div className="home2">
        <img src={vg} alt="Graphics" />

        <div>
          <p>
            Things not to say to someone with mental illness: ignore it. Forget about it. Fight it. You are better than this. Just because no one else can heal or do your inner work for you, doesn't mean you can, should, or need to do it.
            </p>
            <p>
                                                - Mental Care With you
            </p>
        </div>
      </div>

      <div className="home3" id="about">
        <div>
          <h1>About Us</h1>
          <p>
          Mental Care has professionals who diagnose mental health conditions and provide treatment. Most have at least a master's degree or more-advanced education, training and credentials. Our mental health professionals can provide psychological assessments and therapy; however, cannot generally prescribe medications (although some states will allow it). On your first visit, our counselor will want to get to know you and why you called him or her. The counselor will want to know-- what you think the problem is, about your life, what you do, where you live, with whom you live. It is also common to be asked about your family and friends. This information helps the professional to assess your situation and develop a plan for treatment. If you don’t feel comfortable with the professional after the first, or even several visits, talk about your feelings at your next meeting; don’t be afraid to contact another counselor. Feeling comfortable with the professional you choose is very important to the success of your treatment.
          </p>
        </div>
      </div>

      <div className="home4" id="counselor">
        <div>
          <h1>Our Counselor</h1>

          <article>
            <div>
              <img src={img} alt="" />
              <p>Dr. Amiya Paul</p>
            </div>

            <div>
              <img src={img1} alt="" />
              <p>Dr. Kritika Singh</p>
            </div>

            <div>
              <img src={img2} alt="" />
              <p>Dr. Abhishek Nayek</p>
            </div>

            <div>
              <img src={img3} alt="" />
              <p>Dr. Prathuma Karthik</p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default Home;
