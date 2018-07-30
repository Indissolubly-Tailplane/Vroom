/* We need...
  - Car name
  - Image
  - Info
  - Quantity
  - Edit
  - Remove
*/

import React from 'react'
import {Header, Image, Table} from 'semantic-ui-react'

const OrderItem = () => {
  return (
    <Table celled>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Past Orders</Table.HeaderCell>
          <Table.HeaderCell>Shipped</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        <Table.Row>
          <Table.Cell>
            <Header as="h4" image>
              <Image
                src="https://abrilexame.files.wordpress.com/2018/03/ferrari_488.jpg"
                rounded
                id="tableImage"
              />
              <Header.Content>
                Order Id: #1
                <Header.Subheader>Ferrari</Header.Subheader>
                <Header.Subheader>Price: $300,000</Header.Subheader>
              </Header.Content>
            </Header>
          </Table.Cell>
          <Table.Cell>True</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  )
}

export default OrderItem
