const About = () => {
  return (
    <div id="about" className="my-5">
      <div
        data-aos="fade"
        data-aos-easing="ease"
        data-aos-duration="700"
        data-aos-delay="300"
      >
        <h1 className="about_h1 mx-auto">Services</h1>
        <div className="d-flex justify-content-center mt-4">
          <ul
            style={{ color: "rgba(255,255,255,.5)" }}
            className="text-start text-capitalize"
          >
            <li>YT Thumbnail | Poster | Retouching</li>
            <li>Logo | YT Cover | Lyrical Video</li>
            <li>Business Card | Visiting Card</li>
            <li>Banner | Flyer | Flex Design</li>
            <li>Wedding Card | Invitation Card</li>
            <li>Advertising Post design | Bill book invoice</li>
            <li>Social Media Post Design</li>
            <p
              style={{ marginLeft: -22 }}
              className="text-center fw-bold mt-2 mb-0"
            >
              All types of designing Available
            </p>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
