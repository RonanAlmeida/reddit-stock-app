import React from "react";
import { Table, Icon } from "semantic-ui-react";

const TableExampleInverted = () => (
  <Table striped inverted collapsing>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Stock $</Table.HeaderCell>
        <Table.HeaderCell>Occourance #</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      <Table.Row>
        <Table.Cell>
         MEDV
        </Table.Cell>
        <Table.Cell>500</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>
         NUMI
        </Table.Cell>
        <Table.Cell>20</Table.Cell>

      </Table.Row>
      <Table.Row>
        <Table.Cell>
            NANO
        </Table.Cell>
        <Table.Cell>10</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>
            NANO
        </Table.Cell>
        <Table.Cell>10</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>
            NANO
        </Table.Cell>
        <Table.Cell>10</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>
            NANO
        </Table.Cell>
        <Table.Cell>10</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>
            NANO
        </Table.Cell>
        <Table.Cell>10</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>
            NANO
        </Table.Cell>
        <Table.Cell>10</Table.Cell>
      </Table.Row>
    </Table.Body>

  </Table>
);

export default TableExampleInverted;
