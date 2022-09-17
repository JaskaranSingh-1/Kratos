import SectionHead from "./SectionHead"
import Card from "../UI/Card"
import Image from "../images/values.jpg"
import { GiCutDiamond } from "react-icons/gi"
import { values } from "../data"


const Values = () => {
  return (
    <section className="values">
        <div className="container values__container">
            <div className="values__Left">
                <div className="values__image">
                    <img src={Image} alt="Values"/>
                </div>
            </div>
            <div className="values__right">
                <SectionHead icon={<GiCutDiamond/>} title="Values" />
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt in debitis optio ducimus sed quia?</p>
                <div className="values__wrapper">
                    {
                        values.map(({ id, icon, title, desc }) => {
                            return <Card className="values__value" key={id}>
                                <span>{icon}</span>
                                <h4>{title}</h4>
                                <small>{desc}</small>
                            </Card>
                        })
                    }
                </div>
            </div>
        </div>
    </section>
  )
}

export default Values