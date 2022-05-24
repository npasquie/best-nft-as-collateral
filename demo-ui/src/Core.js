import "./App.css";
import bayc from "./imgs/bayc.png";
import abi from "./abi";
import borrbayc from "./imgs/borrbayc.png";
import borr from "./imgs/borrowed.png";
import available from "./imgs/available.png";
import lent from "./imgs/lent.png";
import Image from "react-bootstrap/Image";
import { useState } from "react";
import { useEthers, useContractFunction } from "@usedapp/core";
import { Button, Container, Row, Col, Card, Alert } from "react-bootstrap";
import { ethers } from "ethers";

function Core({ page }) {
  const { account, chainId } = useEthers();
  const [clickCount, setClickCount] = useState(0);
  const interf = new ethers.utils.Interface(abi);
  const contract = new ethers.Contract(
    "0x019f45c81f2F0DAea6b890e82A50ba0119621Cee",
    interf
  );
  const borrow = useContractFunction(contract, "borrow");

  const incrementClick = () => {
    setClickCount(clickCount + 1);
  };

  return (
    <>
      {borrow.state.status == "PendingSignature" && (
        <>
          <Alert
            style={{
              color: "white",
            }}
            variant="info"
          >
            <br />
            Waiting for wallet confirmation ...
            <br />
            <br />
          </Alert>
        </>
      )}
      {borrow.state.status == "Mining" && (
        <>
          <Alert
            style={{
              color: "white",
            }}
            variant="info"
          >
            <br /> Waiting for the transaction to be included ...
            <br />
            <br />
          </Alert>
        </>
      )}
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
          {clickCount == 0 && (
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
                  <Image
                    style={{ padding: "1em" }}
                    src={available}
                    onClick={() => {
                      incrementClick();
                    }}
                  />
                </Card.Body>
              </Card>
            </>
          )}
          {clickCount == 1 && (
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
                  <Image
                    style={{ padding: "1em" }}
                    src={bayc}
                    onClick={() => {
                      incrementClick();
                    }}
                  />
                </Card.Body>
              </Card>
            </>
          )}
          {clickCount == 2 && borrow.state.status == "None" && (
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
                  <Image
                    style={{ padding: "1em" }}
                    src={borrbayc}
                    onClick={() => {
                      borrow.send(
                        "0x91516016578D47eC0E9b87Fe1419eDddE0B8d96C",
                        1
                      );
                    }}
                  />
                </Card.Body>
              </Card>
            </>
          )}
          {borrow.state.status == "Success" && (
            <Card
              style={{
                backgroundColor: "#0A123E",
                margin: "3em",
                borderRadius: "1em",
                color: "white",
              }}
            >
              <Card.Body>
                <br />
                Borrowed successfully !<br />
                <br />
              </Card.Body>
            </Card>
          )}
        </>
      )}
    </>
  );
}

export default Core;
