import React from "react"
import Images from "./im"
import carous1 from "../images/ikon1.png"
import carous2 from "../images/ikon2.png"
import carous3 from "../images/ikon3.png"

function Carousel() {
    return (
        <div className="main">
            <div className="padd"></div>
            <h2>почему именно мы</h2>
            <div id="carouselExampleControls" className="carousel slide d-none d-md-block" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="row">
                            <div className="col d-block w-100">
                                <div className="card">
                                    <Images image={carous1} />
                                    <p> Высокая и оперативная скорость обработки заявки</p>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card">
                                    <Images image={carous2} />
                                    <p>Огромная комплексная база данных, обеспечивающая объективный ответ на запрос</p>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card">
                                    <Images image={carous3} />
                                    <p>Защита конфеденциальных сведений, не подлежащих разглашению по федеральному
                                        законодательству</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="row">
                            <div className="col d-block w-100">
                                <div className="card">
                                    <Images image={carous1} />
                                    <p> Высокая и оперативная скорость обработки заявки</p>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card">
                                    <Images image={carous2} />
                                    <p>Огромная комплексная база данных, обеспечивающая объективный ответ на запрос</p>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card">
                                    <Images image={carous3} />
                                    <p>Защита конфеденциальных сведений, не подлежащих разглашению по федеральному
                                        законодательству</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"
                        data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"><i className="fa fa-angle-left"
                            aria-hidden="true"></i>
                        </span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"
                        data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>

            <div id="carouselExampleControls" className="carousel slide d-md-none" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="card d-block w-100">
                            <Images image={carous1} />
                            <p> Высокая и оперативная скорость обработки заявки</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="card d-block w-100">
                            <Images image={carous2} />
                            <p>Огромная комплексная база данных, обеспечивающая объективный ответ на запрос</p>
                        </div>
                    </div>

                    <div className="carousel-item">
                        <div className="card d-block w-100">
                            <Images image={carous3} />
                            <p>Защита конфеденциальных сведений, не подлежащих разглашению по федеральному
                                законодательству</p>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"
                        data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"><i className="fa fa-angle-left"
                            aria-hidden="true"></i>
                        </span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"
                        data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </div>

    )
}

export default Carousel

