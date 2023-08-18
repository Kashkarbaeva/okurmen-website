import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import ProgressBar from "react-bootstrap/ProgressBar";

import img1 from "../assets/images/img1.jpg";

function AppAbout() {
  const html = 80;
  const responsive = 95;
  const photoshop = 60;

  return (
    <section id="about" className="block about-block">
      <Container>
        <div className="title-holder">
          <h2>Биз жөнүндө</h2>
          <div className="subtitle">жөнүндө көбүрөөк билүү</div>
        </div>
        <Row>
          <Col sm={6}>
            <Image src={img1} />
          </Col>
          <Col sm={6}>
            <p>
            Aлбетте, сиз программист болуп калышы мүмкүн, дизайнер, жана башка ар кандай кесип, дагы бул жерде ар кандай курактагы, жана бул плюс + .
            </p>
            <p>
            Окурмен чегүүчү компаниялардын менеджерлери студенттерди колдошот жана бизде менторлор болот булар жаңы келгендерге да үйрөнүүгө жардам бергендер тамеки тартуучу компаниялар студенттерди жана менеджерлерди адамдар менен таанышуу үчүн алып чыгышат бизди ким көрөтгөн .
            </p>
            <div className="cc">
              <h4>HTML / CSS / JavaScript</h4>
              <ProgressBar now={html} label={`${html}%`} />
            </div>
            <div className="progress-block">
              <h4>Жооп берүүчү</h4>
              <ProgressBar now={responsive} label={`${responsive}%`} />
            </div>
            <div className="progress-block">
              <h4>Фотошоп</h4>
              <ProgressBar now={photoshop} label={`${photoshop}%`} />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default AppAbout;
