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
        className="d-flex justify-content-center"
      >
        <ul className="text-start text-muted text-capitalize">          
          <li>YT Thumbnail | Poster | Retouching</li>
          <li>Logo | YT Cover | Lyrical Video</li>
          <li>Business card | Visiting card</li>
          <li>Wedding Card | Invitation Card</li>
          <li>advertising post design | bill book invoice</li>
          <li>social media post design</li>
          <p className="text-center">All types of designing Available...</p>
        </ul>
      </div>
    </div>
  );
};

export default About;
