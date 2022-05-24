import "./App.css";
import borr from "./imgs/borrowed.png";
import available from "./imgs/available.png";
import lent from "./imgs/lent.png";
import Image from "react-bootstrap/Image";
import { useState } from "react";
import { useEthers } from "@usedapp/core";
import { Button, Container, Row, Col, Card } from "react-bootstrap";

function Core({ page }) {
  const { account, chainId } = useEthers();
  const [clickCount, setClickCount] = useState(0);

  const incrementClick = () => {
    setClickCount(clickCount + 1);
  };

  return (
    <>
      {page == "dash" && (
        <>
          <Card
            style={{
              backgroundColor: "#0A123E",
              margin: "3em",
              borderRadius: "1em",
              color: "white",
            }}
          >
            <Card.Body>
              <Image style={{ padding: "1em" }} src={borr} />
            </Card.Body>
          </Card>
          <Card
            style={{
              backgroundColor: "#0A123E",
              margin: "3em",
              borderRadius: "1em",
              color: "white",
            }}
          >
            <Card.Body>
              <Image style={{ padding: "1em" }} src={lent} />
            </Card.Body>
          </Card>
        </>
      )}
      {page == "market" && (
        <>
          <Card
            style={{
              backgroundColor: "#0A123E",
              margin: "3em",
              borderRadius: "1em",
              color: "white",
            }}
          >
            <Card.Body>
              <Image style={{ padding: "1em" }} src={available} />
            </Card.Body>
          </Card>
        </>
      )}
    </>
  );
}

export default Core;
