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
import Subreddits from "../Components/Subreddits";
import TableComp from "../Components/TableComp";
import TableStockPicks from "../Components/TableStockPicks";

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

      <Subreddits />

      <Header as="h3" inverted content="" textAlign="center" style={style.h3} />

    
    
      <Segment
        inverted
        color="blue"
        style={{ margin: "40em 0em 0em", padding: "0.5em 0em" }}
        vertical
        
      >
        <Container textAlign="center" >
          {/* <Divider inverted section /> */}
          {/* <Image src="/logo.png" centered size="mini" /> */}
          <List horizontal inverted divided link size="small" >
            <List.Item
 
            >
              Powered by the Reddit API (Praw)
            </List.Item>
            <List.Item as="a" target="_blank" href="https://ronan.tech/">
              Built with React and Flask
            </List.Item>
 
            <List.Item as="a" target="_blank" href="https://ronan.tech/">
             Designed and Developed by Ronan Almeida
            </List.Item>
          </List>
        </Container>
      </Segment>
    </div>
  );
}
export default HomePage;
