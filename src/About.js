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
      <div className="d-flex justify-content-center mt-3">
        <ul className="text-start text-muted text-capitalize ps-4">
          <li>YT Thumbnail | Poster | Retouching</li>
          <li>Logo | YT Cover | Lyrical Video</li>
          <li>Business Card | Visiting Card</li>
          <li>Banner | Flyer | Flex Design</li>
          <li>Wedding Card | Invitation Card</li>
          <li>Advertising Post design | Bill book invoice</li>
          <li>Social Media Post Design</li>
          <p className="text-center text-dark fw-bold mt-2">
            All types of designing Available
          </p>
        </ul>
      </div>
    </div>
  );
};

export default About;
