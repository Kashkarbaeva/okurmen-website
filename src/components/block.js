import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

const blogData = [
  {
    id: 1,
    image: require("../assets/images/c1.jpeg"),
    time: "2016-жылдын 15-ноябры",
    title: "Кофе Сүйүүчүлөр",
    description:
      "Лорем ипсум долор сит Амет, консекттур адиписинг элит. Дезерунт, аспериорс кибусдам эум куод кум нессиунт.",
    link: "https://www.google.com",
  },
  {
    id: 2,
    image: require("../assets/images/c2.jpeg"),
    time: "2016-жылдын 10-ноябры",
    title: "УИ дизайны боюнча кеңештер",
    description:
      "Лорем ипсум долор сит Амет, консекттур адиписинг элит. Дезерунт, аспериорс кибусдам эум куод кум нессиунт.",
    link: "https://www.facebook.com",
  },
  {
    id: 3,
    image: require("../assets/images/blog3.jpg"),
    time: "07 Ноябрь 2016 жыл",
    title: "Сулуу Күн",
    description:
      "Лорем ипсум долор сит Амет, консекттур адиписинг элит. Дезерунт, аспериорс кибусдам эум куод кум нессиунт.",
    link: "https://www.twitter.com",
  },
];

function AppBlock() {
  return (
    <section id="blog" className="block blog-block">
      <Container fluid>
        <div className="title-holder">
          <h2>Блогдон акыркы</h2>
          <div className="subtitle">акыркы жаңылыктарыбызды блогдон алыңыз</div>
        </div>
        <Row>
          {blogData.map((blog) => {
            return (
              <Col sm={4} key={blog.id}>
                <div className="holder">
                  <Card style={{ width: "18rem" }}>
                    <Card.Img variant="top" src={blog.image} />
                    <Card.Body>
                        <time>{blog.time}</time>
                      <Card.Title>{blog.title}</Card.Title>
                      <Card.Text>{blog.description}</Card.Text>
                      <a href={blog.link} className="btn btn-primary">
                      Көбүрөөк Окуу <i className="fas fa-chevron-right">
                        </i>
                      </a>
                    </Card.Body>
                  </Card>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
}

export default AppBlock;
