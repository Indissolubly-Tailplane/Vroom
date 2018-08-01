/* We need...
  - Car name
  - Image
  - Info
  - Quantity
  - Edit
  - Remove
*/

import React from 'react'
import {Header, Image, Table, Icon} from 'semantic-ui-react'

const OrderItem = props => {
  console.log('orderItem: ', props)
  const numberWithCommas = x => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  }

  const getTotal = () => {
    let total = 0
    props.order.cars.map(car => {
      total += car.price
    })
    return total
  }

  let total = getTotal()

  return (
    <center>
      <Table compact id="carTable">
        <Table.Header>
          <Table.Row textAlign="left">
            <Table.HeaderCell>
              Order Reference #{props.order.id}
            </Table.HeaderCell>
            <Table.HeaderCell width={2}>Year</Table.HeaderCell>
            <Table.HeaderCell width={2}>Color</Table.HeaderCell>
            <Table.HeaderCell width={3}>Price</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {props.order.cars.map(car => (
            <Table.Row key={car.id} textAlign="left">
              <Table.Cell>
                <Header as="h4" image>
                  <Image src={car.image} rounded size="mini" id="tableImage" />
                  <Header.Content>
                    {car.make}
                    <Header.Subheader>{car.model}</Header.Subheader>
                  </Header.Content>
                </Header>
              </Table.Cell>
              <Table.Cell>{car.year}</Table.Cell>
              <Table.Cell>{car.color}</Table.Cell>
              <Table.Cell>${numberWithCommas(car.price)}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
        <Table.Footer>
          <Table.Row textAlign="left" width="100%">
            {props.order.shipped === true ? (
              <Table.HeaderCell>
                Status: Order Has Been Shipped
                <Icon name="checkmark" />
              </Table.HeaderCell>
            ) : (
              <Table.HeaderCell>
                Status: Order Will Be Shipped Shortly
              </Table.HeaderCell>
            )}
            <Table.HeaderCell />
            <Table.HeaderCell>Total Price:</Table.HeaderCell>
            <Table.HeaderCell>${numberWithCommas(total)}</Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
    </center>
  )
}

export default OrderItem
