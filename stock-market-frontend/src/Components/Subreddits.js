import React, { useState, useEffect } from "react";
import { Icon, Button, Grid, Dropdown } from "semantic-ui-react";

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
    key: "CanadianInvestor",
    text: "r/CanadianInvestor",
    value: "CanadianInvestor",
    content: "r/CanadianInvestor",
  },
];
function Subreddit() {
  const [ticks, setTicks] = useState([]);
  const [choice, setSub] = useState("");

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
                const sub_name = {choice}
                const requestOptions = {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify(sub_name),
                };
                fetch("/get_stocks", requestOptions)
                  .then((response) => response.json())
                  .then((data) => {
                      console.log(data)
                    console.log(data['tickers'][0]);
                    setTicks(data['tickers'][0])
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
    </div>
  );
}

export default Subreddit;
