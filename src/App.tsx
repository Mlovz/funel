import Logo from "./assets/photo_2024-06-03_10-06-00 1@2x.png";
import Image1 from "./assets/DALL1.webp";
import Image2 from "./assets/DALL2.webp";
import Books from "./assets/Books.webp";
import Movies from "./assets/Movies.webp";
import Online from "./assets/Online.webp";
import Community from "./assets/Community.webp";
import { Header } from "./Header/Header";
import { useState } from "react";

function App() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("EMAIL", email);

    setIsLoading(true);
    try {
      await fetch(
        "https://gmail.us22.list-manage.com/subscribe/post?u=eb87cdceb23489f638a0f2a9f&id=4b3d73387d",
        {
          method: "POST",
          body: formData,
          mode: "no-cors", // Mailchimp не требует CORS
        }
      );
      setIsLoading(false);
      setEmail("");
      setStatus("success");
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <div className="overlay">
      <Header />
      {isLoading && (
        <div className="spinner-overlay">
          <div className="spinner"></div>
        </div>
      )}

      <main>
        <section className="main">
          <div className="container main-wrap">
            <img src={Logo} alt="" />

            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="">Email address</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                />
              </div>
              <button type="submit">Subscribe</button>
              {status === "success" && (
                <p style={{ color: "green", fontSize: 24 }}>
                  Thanks for subscribing!
                </p>
              )}
              {status === "error" && (
                <p style={{ color: "#000", fontSize: 24 }}>
                  An error occurred, please try again.
                </p>
              )}
            </form>
          </div>
        </section>

        <section className="courses" id="courses">
          <div className="container courses-wrap">
            <div className="courses-top">
              <h2>Language Courses</h2>
              <p>
                Unlock access to comprehensive courses for multiple languages,
                catering to all proficiency levels from absolute beginners to
                native speakers. Achieve your language goals with our tailored
                programs.
              </p>
            </div>

            <div className="courses-body">
              <div className="courses-item">
                <img src={Image1} alt="" />
                <h2> Language Courses</h2>
                <p>
                  Unlock access to comprehensive courses for multiple languages,
                  catering to all proficiency levels from absolute beginners to
                  native speakers. Achieve your language goals with our tailored
                  programs.
                </p>
              </div>
              <div className="courses-item">
                <img src={Image2} alt="" />
                <h2>Vocabulary Expansion.</h2>
                <p>
                  Enhance your vocabulary using our extensive lists or create
                  personalized vocabulary sets to suit your learning needs.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="resources" id="resources">
          <div className="container resources-wrap">
            <div className="resources-top">
              <h2>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos,
                unde.
              </h2>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Voluptatem, similique molestias. Repellat, est quo! Ea, eaque
                nesciunt aspernatur repudiandae quia corporis officiis quam
                provident
              </p>
            </div>
            <div className="resources-body">
              <div className="resources-body-item">
                <div className="card">
                  <img src={Movies} alt="Online Course" />
                  <div className="card-content">
                    <span>01</span>
                    <h2>Movies and Videos</h2>
                    <p>
                      Enjoy your favorite shows and videos with subtitles in
                      your target language to boost comprehension and language
                      skills.
                    </p>
                  </div>
                </div>
              </div>
              <div className="resources-body-item">
                <div className="card">
                  <img src={Books} alt="Online Course" />
                  <div className="card-content">
                    <span>02</span>
                    <h2>Books and Audiosbooks</h2>
                    <p>
                      Delve into our vast library of captivating stories and
                      literature to deepen your understanding and appreciation
                      of your target language.
                    </p>
                  </div>
                </div>
              </div>
              <div className="resources-body-item">
                <div className="card">
                  <img src={Online} alt="Online Course" />
                  <div className="card-content">
                    <span>03</span>
                    <h2>Online Tutoring</h2>
                    <p>
                      Find qualified teachers for personalized lessons or become
                      a tutor to share your expertise and earn money.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="community">
          <div className="container community-wrap">
            <div className="community-left">
              <h2>Community Connection</h2>
              <p>
                Join a vibrant community of fellow language learners and
                polyglots. Collaborate, share experiences, and support each
                other on your language learning journey.
              </p>

              {/* <button>Submit</button> */}
            </div>

            <img src={Community} alt="" />
          </div>
        </section>
      </main>

      {/* <div className="container main">
        <img src={Logo} alt="" />
        <form className='form'>
            <h1>
              <span>A</span>
              <span>c</span>
              <span>q</span>
              <span>u</span>
              <span>i</span>
              <span>r</span>
              <span>e</span>
            </h1>
            <input type="text" placeholder="Email Address" />
            <button>Submit</button>
        </form>
      </div> */}
      {/* <div className="container section">
        <h2>Language Courses</h2>

        <div className='row'>
          <img src="https://www.teacheracademy.eu/wp-content/uploads/2019/02/LANG.1.HACK_.jpg" alt="" />
          <p>Unlock access to comprehensive courses for multiple languages, catering to all proficiency levels from absolute beginners to native speakers. Achieve your language goals with our tailored programs.</p>
        </div>
      </div>
      <div className="container section">
        <h2>Vocabulary Expansion</h2>

        <div className='row'>
          <p>Enhance your vocabulary using our extensive lists or create personalized vocabulary sets to suit your learning needs.</p>
          <img src="https://www.wikihow.com/images/thumb/6/65/Expand-Your-Vocabulary-Step-2-Version-4.jpg/v4-460px-Expand-Your-Vocabulary-Step-2-Version-4.jpg" alt="" />
        </div>
      </div>
      <div className="container section">
        <h2>Movies and Videos</h2>

        <div className='row'>
          <img src="https://dailyorange.com/resize/800/wp-content/uploads/2022/09/06210133/screentimeilloa5_dailyorangefileillustration-01.png" alt="" />
          <p>Enjoy your favorite shows and videos with subtitles in your target language to boost comprehension and language skills.</p>
        </div>
      </div>
      <div className="container section">
        <h2>Books and Audiosbooks</h2>

        <div className='row'>
          <p>Delve into our vast library of captivating stories and literature to deepen your understanding and appreciation of your target language.</p>
          <img src="https://www.publishersweekly.com/images/data/ARTICLE_PHOTO/photo/000/085/85585-1.JPG" alt="" />

        </div>
      </div>
      <div className="container section">
        <h2>Community Connection</h2>

        <div className='row'>
          <img src="https://isb.org/wp-content/uploads/2018/10/community-connection.jpg" alt="" />
          <p>Join a vibrant community of fellow language learners and polyglots. Collaborate, share experiences, and support each other on your language learning journey</p>
        </div>
      </div>
      <div className="container section">
        <h2>Online Tutoring</h2>

        <div className='row'>
          <p>Unlock access to comprehensive courses for multiple languages, catering to all proficiency levels from absolute beginners to native speakers. Achieve your language goals with our tailored programs.</p>
          <img src="https://media.privateequityinternational.com/uploads/2020/04/GettyImages-520409700-Converted.jpg" alt="" />
        </div>
      </div> */}
    </div>
  );
}

export default App;
