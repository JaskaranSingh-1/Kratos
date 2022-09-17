import Header from "../../Components/Header"
import HeaderImage from "../../images/header_bg_1.jpg"
import StoryImage from "../../images/about1.jpg"
import VisionImage from "../../images/about2.jpg"
import MissionImage from "../../images/about3.jpg"
import "./About.css"

const About = () => {
  return (
    <>
      <Header title="About Us" image={HeaderImage}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex cum ullam eligendi quis pariatur, unde perspiciatis architecto libero velit labore.
      </Header>

      <section className="about__story">
        <div className="container about__story-container">
          <div className="about__section-image">
            <img src={StoryImage} alt="Our Story"/>
          </div>
          <div className="about__section-content">
            <h1>Our Story</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed harum illo, iste, dignissimos, error tempore qui quod totam eligendi quasi autem animi? In quia accusantium exercitationem et quis nesciunt porro distinctio dignissimos ea ut? Animi est asperiores excepturi corporis vero.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem harum id a tenetur eligendi, dolorum ullam ab vero sunt esse dolore aspernatur fugit animi voluptatum expedita aliquid minus nisi non.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate dolore voluptatibus facilis at excepturi labore numquam officia placeat adipisci porro.</p>
          </div>
        </div>
      </section>

      <section className="about__vision">
        <div className="container about__vision-container">
          <div className="about__section-content">
            <h1>Our Vision</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed harum illo, iste, dignissimos, error tempore qui quod totam eligendi quasi autem animi? In quia accusantium exercitationem et quis nesciunt porro distinctio dignissimos ea ut? Animi est asperiores excepturi corporis vero.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem harum id a tenetur eligendi, dolorum ullam ab vero sunt esse dolore aspernatur fugit animi voluptatum expedita aliquid minus nisi non.</p>
          </div>
          <div className="about__section-image">
            <img src={VisionImage} alt="Our Vision"/>
          </div>
        </div>
      </section>

      <section className="about__mission">
        <div className="container about__mission-container">
          <div className="about__section-image">
            <img src={MissionImage} alt="Our Mission"/>
          </div>
          <div className="about__section-content">
            <h1>Our Mission</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed harum illo, iste, dignissimos, error tempore qui quod totam eligendi quasi autem animi? In quia accusantium exercitationem et quis nesciunt porro distinctio dignissimos ea ut? Animi est asperiores excepturi corporis vero.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem harum id a tenetur eligendi, dolorum ullam ab vero sunt esse dolore aspernatur fugit animi voluptatum expedita aliquid minus nisi non.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate dolore voluptatibus facilis at excepturi labore numquam officia placeat adipisci porro.</p>
          </div>
        </div>
      </section>

    </>
  )
}

export default About