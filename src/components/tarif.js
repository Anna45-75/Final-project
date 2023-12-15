import React from "react"
import Images from "./im"
import card1 from "../images/ikon4.png"
import card2 from "../images/ikon5.png"
import card3 from "../images/ikon6.png"

function Cards() {
    return (
        <div className="main">
            <div className="images-backround"></div>
            <div className="padd">
                <h2>
                    наши тарифы
                </h2>
                <ul className="card__tarif-block">
                    <li className="card__tarif">
                        <div className="card__tarif-active-top">
                            <span className="card__strong">Beginner</span>
                            <p>Для небольшого исследования
                            </p>
                            <div className="card__img" ><Images image={card1} /></div>
                        </div>
                        <div className="card__middle--first">
                            <div className="card_bottom"><a href="">Текущий тариф</a>
                            </div>
                            <span className="card_bottom--price">799</span>
                            <span className="card_bottom--price1">1200</span>
                            <p>или 150 ₽/мес. при рассрочке на 24 мес.</p>
                            <div className="card_bottom--tarif--first">
                                <strong>В тариф входит:</strong>
                                <ul>
                                    <li>Безлимитная история запросов</li>
                                    <li>Безопасная сделка</li>
                                    <li>Поддержка 24/7</li>
                                </ul>
                            </div>
                        </div>
                        <div className="card_middle--bottom">
                            <a href="">Перейти в личный кабинет</a>
                        </div>
                    </li>
                    <li className="card__tarif">
                        <div className="card__tarif-pro-top">
                            <span className="card__strong">Pro</span>
                            <p>Для HR и фрилансеров
                            </p>
                            <div className="card__img" ><Images image={card2} /></div>
                        </div>
                        <div className="card__middle">
                            <span className="card_bottom--price">1299</span>
                            <span className="card_bottom--price1">2600</span>
                            <p>или 279 ₽/мес. при рассрочке на 24 мес.</p>
                            <div className="card_bottom--tarif--first">
                                <strong>В тариф входит:</strong>
                                <ul>
                                    <li>Все пункты тарифа Beginner</li>
                                    <li>Экспорт истории</li>
                                    <li>Рекомендации по приоритетам</li>
                                </ul>
                            </div>
                        </div>
                        <div className="card_middle--bottom_pro">
                            <a href="">Подробнее</a>
                        </div>
                    </li>
                    <li className="card__tarif">
                        <div className="card__tarif-active-bus">
                            <span className="card__strong">Business</span>
                            <p>Для корпоративных клиентов
                            </p>
                            <div className="card__img" ><Images image={card3} /></div>
                        </div>
                        <div className="card__middle">
                            <span className="card_bottom--price">2379</span>
                            <span className="card_bottom--price1">3700</span>
                            <div className="card_bottom--tarif">
                                <strong>В тариф входит:</strong>
                                <ul>
                                    <li>Все пункты тарифа Pro</li>
                                    <li>Безлимитное количество запросов</li>
                                    <li>Приоритетная поддержка</li>
                                </ul>
                            </div>
                        </div>
                        <div className="card_middle--bottom_pro">
                            <a href="">Подробнее</a>
                        </div>
                    </li>
                </ul>
            </div>
        </div>

    )
}

export default Cards

