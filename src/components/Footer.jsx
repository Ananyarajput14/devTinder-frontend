const Footer = () => {
  return (
    <footer className="footer footer-center bg-base-200 text-neutral-content p-4   ">
      <aside>
        <svg
          width="50"
          height="50"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          fillRule="evenodd"
          clipRule="evenodd"
          className="inline-block fill-current"
        >
          <path d="M12 2c-3.5 5.5-7 8-7 12 0 3.866 3.134 7 7 7s7-3.134 7-7c0-4-3.5-6.5-7-12zm0 17c-2.209 0-4-1.791-4-4 0-1.389.707-2.651 1.793-3.454.648.857 1.813 1.454 3.207 1.454 1.564 0 2.743-1.245 2.993-2.654.642 1.029 1.007 2.264 1.007 3.654 0 2.209-1.791 4-4 4z" />
        </svg>
        <p className="font-bold">
          DevTinder
          <br />
          Connecting Developers and Collaborate 
        </p>
        <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
      </aside>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <a
            href="https://x.com/akshad_999"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/akshadsantoshjaiswal"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.336-.026-3.06-1.865-3.06-1.865 0-2.152 1.458-2.152 2.965v5.699h-3v-10h2.879v1.365h.042c.401-.759 1.379-1.56 2.839-1.56 3.038 0 3.597 2 3.597 4.604v5.591z" />
            </svg>
          </a>
          <a
            href="https://github.com/akshadjaiswal"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M12 0c-6.627 0-12 5.373-12 12 0 5.304 3.438 9.8 8.207 11.385.6.111.793-.261.793-.577 0-.285-.011-1.04-.016-2.04-3.338.724-4.042-1.609-4.042-1.609-.546-1.387-1.333-1.757-1.333-1.757-1.091-.745.083-.729.083-.729 1.205.085 1.84 1.237 1.84 1.237 1.07 1.835 2.807 1.305 3.492.998.108-.776.42-1.305.763-1.605-2.665-.305-5.466-1.332-5.466-5.93 0-1.31.469-2.38 1.235-3.221-.123-.304-.535-1.527.117-3.182 0 0 1.007-.322 3.3 1.23.957-.267 1.983-.4 3.003-.404 1.02.004 2.047.137 3.003.404 2.293-1.552 3.298-1.23 3.298-1.23.653 1.655.241 2.878.118 3.182.767.841 1.234 1.911 1.234 3.221 0 4.608-2.805 5.625-5.476 5.922.432.372.816 1.102.816 2.222 0 1.606-.014 2.896-.014 3.293 0 .319.191.694.799.576 4.766-1.588 8.202-6.081 8.202-11.382 0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;