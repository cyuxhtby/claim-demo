import { ConnectWallet } from "@thirdweb-dev/react";
import "./styles/Home.css";

export default function Home() {
  const buttonStyle = {
    backgroundColor: "#292999", // Change this to the color you want for the button
    border: "none",
    color: "white", // Change this to the color you want for the text
    padding: "15px 32px", // Change this to adjust the padding around the text
    textAlign: "center",
    textDecoration: "none",
    display: "inline-block",
    fontSize: "16px", // Change this to adjust the size of the text
    margin: "4px 2px",
    cursor: "pointer",
  };

  return (
    <div className="container">
      <main className="main">
        <h1 className="title">
          Welcome to <a href="https://thirdweb.com/">ToL</a>!
        </h1>

        <p className="description">
          Free mint to show your interest!
        </p>

        <div className="connect">
          <ConnectWallet dropdownPosition={{ side: 'bottom', align: 'center'}} style={buttonStyle} />
        </div>
      </main>
    </div>
  );
}
