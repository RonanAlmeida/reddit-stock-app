import React, { useState, useEffect } from "react";
import {
  Divider,
  Icon,
  Button,
  Grid,
  Dropdown,
  Container,
  Header,
} from "semantic-ui-react";
import PieChart from "./PieChart";
import TableComp from "./TableComp";
import TableStockPicks from "./TableStockPicks";

const redditOptions = [
  {
    key: "CanadaPennyStocks",
    text: "r/CanadaPennyStocks",
    value: "CanadaPennyStocks",
    content: "r/CanadaPennyStocks",
  },
  {
    key: "BayStreetBets",
    text: "r/BayStreetBets",
    value: "BayStreetBets",
    content: "r/BayStreetBets",
  },
  {
    key: "PennyStocks",
    text: "r/PennyStocks",
    value: "Pennystocks",
    content: "r/PennyStocks",
  },
];

function Subreddit() {
  const [ticks, setTicks] = useState([]);
  const [choice, setSub] = useState("");
  const [arrkeys, setKeys] = useState([]);


  function Sub_active(val) {
    if (Object.keys(ticks).length > 1) {
      console.log(val.length);
      return (
        <div>
          <Header as="h1" textAlign="center" inverted sub>
            Sentiment Analysis
          </Header>
          <Header></Header>
          <Header
            as="h2"
            inverted
            style={{
              textAlign: "center",
            }}
            textAlign="center"
          >
            <Icon name="angle double up" inverted color="green"></Icon>
            Top Stock Picks
          </Header>

          <Container>
          </Container>

          <Header
            as="h1"
            // content=""
            // style={style.h3}
            textAlign="center"
          />
          <Grid container columns={2} stackable>
            <Grid.Column>
            <TableStockPicks tableStockPicks={ticks}></TableStockPicks>
            </Grid.Column>
            <Grid.Column>
            <PieChart pieChart={arrkeys}></PieChart>
            </Grid.Column>
          </Grid>
          <Header
            as="h2"
            inverted
            style={{
              margin: "3em 0em 0em",
              marginBottom: "1em",
            }}
            textAlign="center"
          >
            <Icon name="file word" inverted color="blue"></Icon>
            Subreddit Submissions Analysis
          </Header>
          <Container>
            <TableComp></TableComp>
          </Container>
        </div>
      );
    } else {
      console.log(val);

      return <div></div>;
    }
  }

  //   useEffect(() => {
  //     fetch("/get_stock").then((response) =>
  //       response.json().then((data) => {
  //         // setTicks(data)
  //         // console.log(data)
  //         setTicks(data.tickers);
  //       })
  //     );
  //   }, []);
  //   console.log(ticks);

  return (
    <div>
      <Grid>
        <Grid.Column textAlign="center">
          <Button.Group color="orange">
            <Dropdown
              button
              className="icon"
              labeled
              // icon="reddit square "
              icon="caret down"
              options={redditOptions}
              placeholder="Select One a Subreddit"
              value={choice}
              onChange={(e, data) => {
                console.log(data.value);
                setSub(data.value);
              }}
              //   onChange={(e,data)=> {
              //   console.log(e)
              //   console.log(data)
              //   }}
            />
          </Button.Group>

          <Button.Group style={{ margin: "35px" }}>
            <Button
              onClick={() => {
                const sub_name = { choice };
                const requestOptions = {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify(sub_name),
                };
                fetch("/get_stocks", requestOptions)
                  .then((response) => response.json())
                  .then((data) => {
                    console.log(data);
                    console.log(data["tickers"][0]);
                    setTicks(data["tickers"][0]);
                    setKeys(data['tickers'][2])

                  });
              }}
              color="blue"
              tickers={ticks}
            >
              <Icon name="check" /> Generate Report
            </Button>
          </Button.Group>
        </Grid.Column>
      </Grid>
      <Divider horizontal>
        {" "}
        <Header as="h2">
          <Icon
            style={{
              textAlign: "center",
            }}
            name="caret down"
            inverted
          ></Icon>
        </Header>
      </Divider>

      <Sub_active val={ticks}></Sub_active>
    </div>
  );
}

export default Subreddit;
