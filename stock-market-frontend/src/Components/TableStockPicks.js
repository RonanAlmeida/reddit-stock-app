import React from "react";
import { Table, Icon } from "semantic-ui-react";

export const TableStockPicks = ({ tableStockPicks }) => {
  return (
    <Table striped inverted collapsing>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Stock $</Table.HeaderCell>
          <Table.HeaderCell>Occourance %</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {
        tableStockPicks.map((ticks) => {
          console.log(ticks.ticker)
          return (
            <Table.Row key={ticks.ticker}>
              <Table.Cell>${ticks.ticker}</Table.Cell>
              <Table.Cell>{ticks.Count}%</Table.Cell>
            </Table.Row>
          );
        })
        }
      </Table.Body>
    </Table>
  );
};

export default TableStockPicks