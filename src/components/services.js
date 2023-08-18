import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const servicesData = [
  {
    id: 1,
    icon: "fas fa-clone",
    title: "Жооптуу Дизайн",
    description:
      "Негизги учак болгон биздин компанияга кызыгууңуз үчүн рахмат. Жок! Бул жерде Лорел Лига чемпионаты башталат, анда бизде Лига чемпиондугу бар.",
  },
  {
    id: 2,
    icon: "fas fa-snowflake",
    title: "Чыгармачыл Дизайн",
    description:
      "Негизги учак болгон биздин компанияга кызыгууңуз үчүн рахмат. Жок! Бул жерде Лорел Лига чемпионаты башталат, анда бизде Лига чемпиондугу бар.",
  },
  {
    id: 3,
    icon: "fas fa-plug",
    title: "СЕО оптималдаштырылган",
    description:
      "Негизги учак болгон биздин компанияга кызыгууңуз үчүн рахмат. Жок! Бул жерде Лорел Лига чемпионаты башталат, анда бизде Лига чемпиондугу бар.",
  },
  {
    id: 4,
    icon: "fas fa-desktop",
    title: "Торчо Даяр",
    description:
      "Негизги учак болгон биздин компанияга кызыгууңуз үчүн рахмат. Жок! Бул жерде Лорел Лига чемпионаты башталат, анда бизде Лига чемпиондугу бар.",
  },
  {
    id: 5,
    icon: "fas fa-trophy",
    title: "Браузердин Шайкештиги",
    description:
      "Негизги учак болгон биздин компанияга кызыгууңуз үчүн рахмат. Жок! Бул жерде Лорел Лига чемпионаты башталат, анда бизде Лига чемпиондугу бар.",
  },
  {
    id: 6,
    icon: "fas fa-life-ring",
    title: "Кардарларды Колдоо",
    description:
      "Негизги учак болгон биздин компанияга кызыгууңуз үчүн рахмат. Жок! Бул жерде Лорел Лига чемпионаты башталат, анда бизде Лига чемпиондугу бар.",
  },
];

function AppServices() {
  return (
    <section id="services" className="block  services-block">
      <Container>
        <div className="title-holder">
          <h2>БИЗДИН КЫЗМАТТАР</h2>
          <div className="subtitle">биз көрсөткөн кызматтар</div>
        </div>
        <Row>
          {servicesData.map((services) => {
            return (
              <Col sm={4} className="holder" key={services.id}>
                <div className="icon">
                  <i className={services.icon}></i>
                </div>
                <h3>{services.title}</h3>
                <p>{services.description}</p>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
}

export default AppServices;
