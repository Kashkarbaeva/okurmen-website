import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Pagination from "react-bootstrap/Pagination";

const worksData = [
  {
    id: 1,
    link: "https://www.google.com",
    image: require("../assets/hi.jpeg"),
    title: "Веб-Дизайн",
    subtitle: "",
  },
  {
    id: 2,
    link: "https://www.google.com",
    image: require("../assets/hi1.jpeg"),
    title: "Фотограф Кыз",
    subtitle: "",
  },
  {
    id: 3,
    link: "https://www.google.com",
    image: require("../assets/hi2.jpeg"),
    title: "Эсс алу",
    subtitle: "",
  },
  {
    id: 4,
    link: "https://www.google.com",
    image: require("../assets/hi3.jpeg"),
    title: "Колдоо",
    subtitle: "",
  },
  {
    id: 5,
    link: "https://www.google.com",
    image: require("../assets/hi4.jpeg"),
    title: "Салам айтуу",
    subtitle: "",
  },
  {
    id: 6,
    link: "https://www.google.com",
    image: require("../assets/hihi.jpeg"),
    title: "Окурмен сонун окуу",
    subtitle: "",
  },
];

let active = 4;
let items = [];
for (let number = 1; number <= 5; number++) {
  items.push(
    <Pagination.Item key={number} active={number === active}>
      {number}
    </Pagination.Item>
  );
}

function AppWorks() {
  return (
    <section id="works" className="block works-block">
      <Container>
        <div className="title-holder">
          <h2>Жактары</h2>
          <div className="subtitle">биздин кереметтүү жактары</div>
        </div>
        <Row className="portfoliolist">
          {worksData.map((works) => {
            return (
              <Col sm={4} key={works.id}>
                <div className="portfolio-wrapper">
                  <a href={works.link}>
                    <Image src={works.image} />
                    <div className="label text-center">
                      <h3>{works.title}</h3>
                      <p>{works.subtitle}</p>
                    </div>
                  </a>
                </div>
              </Col>
            );
          })}
        </Row>
        <Pagination>{items}</Pagination>
      </Container>
    </section>
  );
}

export default AppWorks;
