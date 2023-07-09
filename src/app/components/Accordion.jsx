import { Accordion } from "react-bootstrap";
import { Icon1, Icon2, Icon3, Icon4, ArrowDown } from './icons'

function FlushExample({data}) {
    const icons = [<Icon1 key={1} />, <Icon2 key={2} />, <Icon3 key={3} />, <Icon4 key={4} />]

    return (
        <section className="accordion-body">
            <Accordion defaultActiveKey="0" flush>
                {data?.data.map((item, idx) => {
                    return <Accordion.Item eventKey={idx} id={"factor" + idx} key={item.title}>
                        <Accordion.Header>
                            <div className="items d-flex align-items-center">
                                {icons[idx]}
                                <div className="content d-flex flex-column align-items-start justify-content-start">
                                    <span className="caption1">
                                        {item.title}
                                    </span>
                                    <span className="caption2">
                                        {item.description}
                                    </span>
                                </div>
                            </div>
                        </Accordion.Header>
                        <Accordion.Body>
                            <div className="detail-box">
                                <ol className="">
                                    {
                                        item?.items.map((row, idx) =>{
                                            return <li className="" key={idx}>
                                                <p className="detail">
                                                    <strong className="text-bold caption">
                                                        {row.title} {" : "} 
                                                    </strong>

                                                    {row.description}
                                                </p>
                                            </li>
                                        })
                                    }
                                </ol>
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                })}
            </Accordion>
        </section>

    );
}

export default FlushExample;