import React from 'react'
import {Header, Image, Table, Icon} from 'semantic-ui-react'

const AdminOrderItem = props => {
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

  const handleSubmit = (id, data) => {
    props.updateOrder(id, data)
  }

  return (
    <center>
      <Table compact id="carTable">
        <Table.Header>
          <Table.Row textAlign="left">
            <Table.HeaderCell>
              Order Reference #{props.order.id} - Purchased by{' '}
              {props.order.email}
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
                Status: Order Has Not Been Shipped
              </Table.HeaderCell>
            )}
            <Table.HeaderCell>
              {props.order.shipped === false ? (
                <button
                  className="ui blue button"
                  type="button"
                  onClick={() =>
                    handleSubmit(props.order.id, !props.order.shipped)
                  }
                >
                  Ship Order
                </button>
              ) : (
                <button
                  className="ui blue button"
                  type="button"
                  onClick={() =>
                    handleSubmit(props.order.id, !props.order.shipped)
                  }
                >
                  Cancel Shipping
                </button>
              )}
            </Table.HeaderCell>
            <Table.HeaderCell>Total Price:</Table.HeaderCell>
            <Table.HeaderCell>${numberWithCommas(total)}</Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
    </center>
  )
}

export default AdminOrderItem
