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

import CardRight from "../Components/CardRight";
import CardLeft from "../Components/CardLeft";
import CardLose from "../Components/CardLose";
import CardWin from "../Components/CardWin";

function GamePage() {
  return (
    <div>
      <Container>
        <Grid celled="internally" columns={2}>
          <Grid.Row>
            <Grid.Column>
              <CardLeft
                img="https://i.scdn.co/image/d9a875c37277c35b94c60c00d2cd256db098505d"
                name="The Weeknd"
                items={[
                  ["contemporary r&b", "black"],
                  ["pop", "black"],
                  ["canadian pop", "black"],
                ]}
              />
            </Grid.Column>

            <Grid.Column>
              <CardRight
                img="https://i.scdn.co/image/a37efbc7fd3f5f5df81b48ce9c6de53820b239c1"
                name="Taylor Swift"
                items={[
                  ["mumble rap", "black"],
                  ["hiphop", "black"],
                  ["rock", "black"],
                ]}
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </div>
  );

}
export default GamePage;