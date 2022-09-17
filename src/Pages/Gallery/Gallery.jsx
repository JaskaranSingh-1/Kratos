import Header from "../../Components/Header"
import HeaderImage from "../../images/header_bg_3.jpg"
import "./Gallery.css"


const Gallery = () => {

  const galleryLength = 12;
  const images = []

  for(let i = 1; i <= galleryLength; i++){
    images.push(require(`../../images/gallery${i}.jpg`))
  }


  return (
    <>
      <Header title="Our Story" image={HeaderImage}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis voluptatem, iusto in dolorum saepe veniam magnam reprehenderit rem ratione quo?
      </Header>

      <section className="gallery">
        <div className="container gallery__container">
          {
            images.map((image, index) => {
              return <article key={index}>
                <img src={image} alt={`Gallery ${index}`} />
              </article>
            })
          }
        </div>
      </section>
    </>
  )
}

export default Gallery