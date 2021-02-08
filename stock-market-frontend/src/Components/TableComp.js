import React from "react";
import { Table, Icon } from "semantic-ui-react";

const TableExampleInverted = () => (
  <Table striped inverted>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Result</Table.HeaderCell>
        <Table.HeaderCell>Classification</Table.HeaderCell>
        <Table.HeaderCell>Post</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      <Table.Row>
        <Table.Cell>
          <Icon color="green" size="big" name="caret up" /> 
        </Table.Cell>
        <Table.Cell>Buy</Table.Cell>
        <Table.Cell>
          Some more digging into $FIRE. Looks like the shorts have been at it
          for a while. Explains the huge volume
        </Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>
          <Icon color="red" size="big" name="caret down" />
        </Table.Cell>
        <Table.Cell>Sell</Table.Cell>
        <Table.Cell>Zachs has BB price target of $2 USD now</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>
          <Icon color="green" size="big" name="caret up" />
        </Table.Cell>
        <Table.Cell>Buy</Table.Cell>
        <Table.Cell> $FIRE From $2.4k to $82k in about 2 months.</Table.Cell>
      </Table.Row>
    </Table.Body>

    <Table.Footer>
      <Table.Row>
        <Table.HeaderCell>
          {" "}
          <Icon color="red" size="big" name="caret down" />
        </Table.HeaderCell>
        <Table.HeaderCell>Sell</Table.HeaderCell>
        <Table.HeaderCell>
      MSFT and APPL are down MemeStocks have gone too far
        </Table.HeaderCell>
      </Table.Row>
      <Table.Row>
        <Table.HeaderCell>
          {" "}
          <Icon color="red" size="big" name="caret down" />
        </Table.HeaderCell>
        <Table.HeaderCell>Sell</Table.HeaderCell>
        <Table.HeaderCell>
        FIRE.WT - Why I choose warrants up $1 CDN today and there are 10 posts about FIRE
        </Table.HeaderCell>
        
      </Table.Row>
      <Table.Row>
        <Table.Cell>
          <Icon color="green" size="big" name="caret up" />
        </Table.Cell>
        <Table.Cell>Buy</Table.Cell>
        <Table.Cell>GBLT.V GBLTF Profitable Penny Stoc</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>
          <Icon color="green" size="big" name="caret up" />
        </Table.Cell>
        <Table.Cell>Buy</Table.Cell>
        <Table.Cell>Penny Stocks are SOARING BUY BUY BUY</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>
          <Icon color="green" size="big" name="caret up" />
        </Table.Cell>
        <Table.Cell>Buy</Table.Cell>
        <Table.Cell>High Tide ($HITI) Discussions for Week of Feb 8th</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.HeaderCell>
          {" "}
          <Icon color="red" size="big" name="caret down" />
        </Table.HeaderCell>
        <Table.HeaderCell>Sell</Table.HeaderCell>
        <Table.HeaderCell>
        European Metals ($ERPNF) - Speculating
        </Table.HeaderCell>
        
      </Table.Row>
      
    </Table.Footer>
  </Table>
);

export default TableExampleInverted;
