const About = () => {
  return (
    <div
      data-aos="fade-up"
      data-aos-easing="ease"
      data-aos-duration="700"
      id="about"
      className="my-5 text-dark"
      data-aos-delay="300"
    >
      <h1 className="about_h1 px-2 mt-5 mx-auto">Services</h1>
      <div
        className="d-flex align-items-center flex-column"
        style={{ margin: "0rem 0" }}
      >
        <h1 className="text-start">I Make...</h1>
        <ul className="text-start">
          <li>YT Thumbnail | Poster | Retouching</li>
          <li>Logo | YT Cover | Lyrical Video</li>
          <li>Business card | Banner</li>
          <li>Wedding Card | Invitation Card</li>
        </ul>
      </div>
    </div>
  );
};

export default About;