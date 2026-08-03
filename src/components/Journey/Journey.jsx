import "./Journey.css";
import { journey } from "../../data/journey";
import Layout from "../Layout/Layout";

function Journey() {
    return (
        <section className="journey" id="journey">
            <Layout>

                    <div className="journey-heading">

                        <span>THE ROAD SO FAR</span>

                        <h2>
                            Every project taught me something.
                            <br />
                            Every mistake made me better.
                        </h2>

                    </div>

                    <div className="timeline">

                        {journey.map((item, index) => (

                            <div className="timeline-item" key={index}>

                                <div className="timeline-content">

                                    {item.year && (
                                        <p className="timeline-year">
                                            {item.year}
                                        </p>
                                    )}

                                    <h3>{item.title}</h3>

                                    <p>{item.description}</p>

                                    <p className="timeline-tech">
                                        {item.stack.join(" • ")}
                                    </p>

                                </div>

                            </div>

                        ))}

                    </div>
                
            </Layout>

        </section>
    );
}

export default Journey;