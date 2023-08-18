import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from 'react-bootstrap/ListGroup';

const pricingData = [
    {
      id: 1,
      plan: 'Негизги',
      price: '£49',
      features: ['Зымдуу каркас', 'Визуалдык Дизайн', '5 бет', 'Акысыз Хостинг', 'Колдоо Жана Жардам', "Okurmen"],
      link: 'https://www.google.com'
    },
    {
      id: 2,
      plan: 'Премиум',
      price: '£149',
      features: ['Зымдуу каркас', 'Визуалдык Дизайн', '15 бет', 'Акысыз Хостинг', 'Колдоо Жана Жардам', "Okurmen"],
      link: 'https://www.facebook.com'
    },
    {
      id: 3,
      plan: 'Акыркы',
      price: '£349',
      features: ['Зымдуу каркас', 'Визуалдык Дизайн', 'Чексиз барактар', 'Акысыз Хостинг', 'Колдоо Жана Жардам', "Okurmen"],
      link: 'https://www.twitter.com'
    }
  ];

function AppPricing () {
    return (
        <section id="pricing" className="block pricing-block" >
            <Container fluid>
              <div className="title-holder">
                <h2>Баалар &amp; пландар</h2>
                <div className="subtitle">биздин бааны текшерүү &amp; пландар</div>
              </div>
              <Row>
                   {
                    pricingData.map((pricing) => {
                        return (
                            <Col sm={4} key={pricing.id}>
                                <div className="heading">
                                    <h3>{pricing.plan}</h3>
                                    <span className="price">{pricing.price}</span>
                                </div>
                                <div className="content">
                                    <ListGroup>
                                        {
                                        pricing.features.map((features, index) => {
                                            return (
                                                <ListGroup.Item key={index}>
                                                    {features}
                                                </ListGroup.Item>
                                            )
                                        })
                                        }
                                    </ListGroup>
                                </div>
                                <div className="btn-holder">
                                    <a href={pricing.link} className="btn btn-primary">
                                    Буйрук Азыр
                                    </a>
                                </div>
                            </Col>
                        );
                    })}
              </Row>
            </Container>
        </section>
    );
}

export default AppPricing;