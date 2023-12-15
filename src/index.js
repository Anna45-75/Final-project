import React from "react"
import ReactDOM from "react-dom/client"
import "./css/main.css"
import "./css/login.css"
import App from "./app"
import Header from "./app"
import Usheader from "./components/usheader"

function UserGreeting(props) {
    return <Header />;
}

function GuestGreeting(props) {
    return <Usheader />;
}

export default function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) { return <UserGreeting />; } return <GuestGreeting />;
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<Greeting isLoggedIn={true} />);

root.render(<App />)