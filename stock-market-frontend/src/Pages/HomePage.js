import React from "react";
import {
  Button,
  Card,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Segment,
  Sidebar,
  Visibility,
} from "semantic-ui-react";
import TableComp from "../Components/TableComp";

function HomePage() {
  const style = {
    h1: {
      marginTop: "1.5em",
      marginBottom: "0em",
      fontSize: "2.5em",
    },
    h2: {
      margin: "3em 0em 0em",
      marginBottom: "1em",
    },
    h2Custom: {
      margin: "3em 0em 0em",
      marginBottom: "0.5em",
    },
    h3: {
      marginTop: "0em",
      padding: "2em 0em",
      marginBottom: "0em",
    },
    hn: {
      fontSize: "1.5em",
    },
    last: {
      marginBottom: "300px",
    },
  };
  const redditIcon = {
    color: {
      color: "#FFFF",
      // backgroundColor:"#FFFF"
    },
  };
  return (
    <div>
      <Header as="h1" inverted style={style.h1} textAlign="center">
        <Icon size="big" inverted color="blue" name="reddit square" />
        Reddit Market Analysis
      </Header>
      <Header.Subheader style={{ color: "#A9A9A9	", textAlign: "center" }}>
        {/* Created by Ronan Almeida */}
      </Header.Subheader>

      {/* <Divider /> */}

      {/* <Header
        as="h2"
        inverted
        content="Select The Most Popular Artist By Popularity"
        style={style.h2}
        textAlign="center"
      />
      <Header /> */}

      <Header as="h2" inverted style={style.h2} textAlign="center">
        Choose a Subreddit to Analyze
      </Header>

      <Grid>
        <Grid.Column textAlign="center">
          <Button.Group style={{ textAlign: "center" }}>
            <Button inverted color="blue">
              <Icon name="list" />
              /r/CanadaPennyStocks
            </Button>
            <Button inverted color="blue">
              <Icon name="list" />
              /r/BayStreetBets
            </Button>
            <Button inverted color="blue">
              <Icon name="list" />
              /r/CanadianInvestor
            </Button>
          </Button.Group>
        </Grid.Column>
      </Grid>

      <Grid>
        <Grid.Column textAlign="center">
          <Button.Group style={{ textAlign: "center" }}>
            {/* <Button   color="red" >Generate Report</Button> */}
            <Button color="google plus">
              <Icon name="chart bar" /> Generate Report
            </Button>
          </Button.Group>
        </Grid.Column>
      </Grid>


      <Header as="h3" inverted content="" textAlign="center" style={style.h3} />

      <Divider horizontal>
        {" "}
        <Header as="h2">
          <Icon
            style={{
              // marginTop: "5em",
              textAlign: "center",
              // position: "absolute",
              // left: "0",
              // bottom: "0"
            }}
            name="chart pie"
            inverted
            color="blue"
          ></Icon>
        </Header>
      </Divider>
      <Header as="h1" textAlign="center" inverted sub>
        Sentiment Analysis

      </Header>
      <Header></Header>

      <Container>
        <TableComp></TableComp>
      </Container>

      <Segment
        inverted
        color="blue"
        style={{ margin: "5em 0em 0em", padding: "0.5em 0em" }}
        vertical
      >
        <Container textAlign="center">
          {/* <Divider inverted section /> */}
          {/* <Image src="/logo.png" centered size="mini" /> */}
          <List horizontal inverted divided link size="small">
            <List.Item
              as="a"
              target="_blank"
              href="https://developer.spotify.com/documentation/web-api/"
            >
              Powered by the Spotify Web API
            </List.Item>
            <List.Item as="a" target="_blank" href="https://ronan.tech/">
              Designed and Developed by Ronan Almeida ©
            </List.Item>
            <List.Item
              as="a"
              target="_blank"
              href="mailto: ronan.almeida@queensu.ca"
            >
              Email
            </List.Item>

            <List.Item as="a" target="_blank" href="https://ronan.tech/">
              Portfolio Site
            </List.Item>
          </List>
        </Container>
      </Segment>
    </div>
  );
}
export default HomePage;
