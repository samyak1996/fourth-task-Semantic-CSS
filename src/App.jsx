import "./App.css";

function App() {
  return (
    <>
      <header>
        <h1>Introduction to Front End Development</h1>
      </header>

      <nav className="Navigation">
        <ul>
          <li className="firstList">
            <a href="https://www.google.com/">Google</a>
          </li>
          <li className="secondList">
            <a href="https://www.facebook.com/">Facebook</a>
          </li>
        </ul>
      </nav>

      <aside>
        <h3 className="sports"> Sports Update</h3>
        <article>
          <h4>
            <a href="https://www.espn.com/">
              Click here for the Latest sport news
            </a>
          </h4>
        </article>
      </aside>

      <main>
        <section>
          <article>
            <h3> Start Learning HTML.</h3>
            <p>
              The HyperText Markup Language or HTML is the standard markup
              language for documents designed to be displayed in a web browser.
              It defines the meaning and structure of web content. It is often
              assisted by technologies such as Cascading Style Sheets and
              scripting languages such as JavaScript.
            </p>
          </article>
        </section>

        <section>
          <article>
            <h3>Start Learning Javascript</h3>
            <p>
              JavaScript, often abbreviated as JS, is a programming language
              that is one of the core technologies of the World Wide Web,
              alongside HTML and CSS. As of 2023, 98.7% of websites use
              JavaScript on the client side for webpage behavior, often
              incorporating third-party libraries.
            </p>
          </article>
        </section>

        <section>
          <article>
            <h3>Start learning React</h3>
            <p>
              React is a free and open-source front-end JavaScript library for
              building user interfaces based on components. It is maintained by
              Meta and a community of individual developers and companies. React
              can be used to develop single-page, mobile, or server-rendered
              applications with frameworks like Next.js
            </p>
          </article>
        </section>
      </main>

      <footer>
        <h2>
          For more infomation. Please subscribe.
          <br />
          <div>
            <a href="https://www.w3schools.com/howto/howto_blog_become_frontenddev.asp">
              Click Here!!
            </a>
          </div>
        </h2>
      </footer>
    </>
  );
}

export default App;
