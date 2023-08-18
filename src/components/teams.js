import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

const teamsData = [
  {
    id: 1,
    image: require('../assets/images/asas4.JPG'),
    fbLink: 'https://www.facebook.com',
    twitterLink: 'https://www.twitter.com',
    linkedinLink: 'https://www.linkedin.com',
    name: 'Мадумаров Санжар',
    designation: 'CEO',
    description: 'Бул биздин компаниянын директору Окурмен анын аты Мадумаров Санжар жана биз бул жерде окуп жатабыз it же англис тилинде бул жерде абдан сонун келисиздер!'
  },
  {
    id: 2,
    image: require('../assets/images/asas2.JPG'),
    fbLink: 'https://www.facebook.com',
    twitterLink: 'https://www.twitter.com',
    linkedinLink: 'https://www.linkedin.com',
    name: 'Мунарбек Мамлянов',
    designation: 'Manager',
    description: 'Мунарбек Мавлянов ал мыкаачы кадимки менеджер жана башкалар сыяктуу'
  },
  {
    id: 3,
    image: require('../assets/images/dad2.jpg'),
    fbLink: 'https://www.facebook.com',
    twitterLink: 'https://www.twitter.com',
    linkedinLink: 'https://www.linkedin.com',
    name: 'Кутманбеков Акунов',
    designation: 'UX Designer',
    description: 'Курманбек Акунов ал абдан тез жазат жакшы кантип бардык насаатчылар жана ал абдан акылдуу бир күнү мен дагы сайттарды түзүп сатам'
  },
  {
    id: 4,
    image: require('../assets/images/asas6.jpg'),
    fbLink: 'https://www.facebook.com',
    twitterLink: 'https://www.twitter.com',
    linkedinLink: 'https://www.linkedin.com',
    name: 'Белек Абдрашитов',
    designation: 'Developer',
    description: 'Белек Абдрашитов абдан сонун мугалим ал балдар жана чоңдор  Python сабак берет. Ооба мен сизге айткан жокмун кичинекейлер да үйрөнө алышат жана бул алардын программисттерге болгон кыялына чоң тажрыйба болот!'
  },
];

function AppTeams() {
  return (
    <section id="teams" className="block teams-block">
      <Container>
        <div className="title-holder">
          <h2>ОКУРМЕН КОМАНДАЛАРЫ</h2>
          <div className="subtitle">биздин адистер</div>
        </div>
        <Row>
          {teamsData.map((teams) => {
            return (
              <Col sm={3} key={teams.id}>
                <div className="image">
                  <Image src={teams.image} />
                  <div className="overlay">
                    <div className="socials">
                      <ul>
                        <li>
                          <a href={teams.fbLink}>
                            <i className="fab fa-facebook-f"></i>
                          </a>
                        </li>
                        <li>
                          <a href={teams.twitterLink}>
                            <i className="fab fa-twitter"></i>
                          </a>
                        </li>
                        <li>
                          <a href={teams.linkedinLink}>
                            <i className="fab fa-linkedin-in"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="content">
                    <h3>{teams.name}</h3>
                    <span className="designation"></span>
                    <p>{teams.description}</p>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
}

export default AppTeams;
