import React from "react"
import Header from "./components/header"
import Middle from "./components/middle"
import Carousel from "./components/carousel"
import Cards from "./components/tarif"
import Footer from "./components/footer"
import Greeting from "./index"

class App extends React.Component {
    render() {
        return (
            <div className="all__main">
                <Greeting />
                <Middle />
                <Carousel />
                <Cards />
                <Footer />
            </div>
        )
    }
}


export default App