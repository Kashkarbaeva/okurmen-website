import Carousel from "react-bootstrap/Carousel";

let heroData = [
  {
    id: 1,
    image: require("../assets/images/img-hero1.jpg"),
    title: "Вебсайтыңыз үчүн мыкты дизайн",
    description:"Негизги учак болгон биздин компанияга кызыгууңуз үчүн рахмат. Абдулла эч нерсе айткан жок. Натыйжада, Долорестин  иши ал жоголгон учурда токтогон эмес. Мага эмнени жактырбаганыңды айт, Мен сени жек көрбөйм!",
    link: "https://www.google.com",
  },
  {
    id: 2,
    image: require("../assets/images/img-hero2.jpg"),
    title: "Келечектеги Финансылык Планыңызды Баштаңыз",
    description:"Негизги учак болгон биздин компанияга кызыгууңуз үчүн рахмат. Абдулла эч нерсе айткан жок. Натыйжада, Долорестин  иши ал жоголгон учурда токтогон эмес. Мага эмнени жактырбаганыңды айт, Мен сени жек көрбөйм!",
    link: "https://www.facebook.com",
  },
  {
    id: 3,
    image: require("../assets/images/img-hero3.jpg"),
    title: "Айырмачылыктан ырахат алыңыз",
    description:"Негизги учак болгон биздин компанияга кызыгууңуз үчүн рахмат. Абдулла эч нерсе айткан жок. Натыйжада, Долорестин  иши ал жоголгон учурда токтогон эмес. Мага эмнени жактырбаганыңды айт, Мен сени жек көрбөйм!",
    link: "https://www.twitter.com",
  },
];

function AppHero() {
  return (
    <section id="home" className="hero-block">
      <Carousel>
        {heroData.map((hero) => {
          return (
            <Carousel.Item key={hero.id}>
              <img src={hero.image} alt={"slide" + hero.id} />
              <Carousel.Caption>
                <h3>{hero.title}</h3>
                <p>{hero.description}</p>
                <a className="btn btn-primary" href={hero.link}>
                Көбүрөөк Билүү
                </a>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </section>
  );
}

export default AppHero;