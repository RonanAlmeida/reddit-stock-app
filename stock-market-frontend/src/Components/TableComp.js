import React from "react";
import { Table, Icon } from "semantic-ui-react";

const TableExampleInverted = () => (
  <Table striped inverted>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Result</Table.HeaderCell>
        <Table.HeaderCell>User</Table.HeaderCell>
        <Table.HeaderCell>Comment</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      <Table.Row>
        <Table.Cell>
          <Icon color="green" size="big" name="caret up" />
        </Table.Cell>
        <Table.Cell>mrPersonX</Table.Cell>
        <Table.Cell>None</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>
          <Icon color="red" size="big" name="caret down" />
        </Table.Cell>
        <Table.Cell>Approved</Table.Cell>
        <Table.Cell>
          Type "help", "copyright", "credits" or "license" for more information.
        </Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>
          <Icon color="green" size="big" name="caret up" />
        </Table.Cell>
        <Table.Cell>Denied</Table.Cell>
        <Table.Cell>SyntaxError: 'return' outside function</Table.Cell>
      </Table.Row>
    </Table.Body>

    <Table.Footer>
      <Table.Row>
        <Table.HeaderCell>
          {" "}
          <Icon color="red" size="big" name="caret down" />
        </Table.HeaderCell>
        <Table.HeaderCell>2 Approved</Table.HeaderCell>
        <Table.HeaderCell >Type "help", "copyright", "credits" or "license" for more information.</Table.HeaderCell>
      </Table.Row>
    </Table.Footer>
  </Table>
);

export default TableExampleInverted;
