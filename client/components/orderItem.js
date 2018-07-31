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

const OrderItem = props => {
  console.log('orderItem: ', props)
  const numberWithCommas = x => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  }
  return (
    <center>
      <Table compact id="carTable">
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>
              Order Reference #{props.order.id}
            </Table.HeaderCell>
            <Table.HeaderCell width={3}>Price</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {props.order.cars.map(car => (
            <Table.Row key={car.id}>
              <Table.Cell>
                <Header as="h4" image>
                  <Image src={car.image} rounded size="mini" id="tableImage" />
                  <Header.Content>
                    {car.make}
                    <Header.Subheader>{car.model}</Header.Subheader>
                  </Header.Content>
                </Header>
              </Table.Cell>
              <Table.Cell>${numberWithCommas(car.price)}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
        <Table.Footer>
          <Table.Row textAlign="center">
            {props.order.shipped === true ? (
              <Table.HeaderCell>Order Has Been Shipped</Table.HeaderCell>
            ) : (
              <Table.HeaderCell>Order Will Be Shipped Shortly</Table.HeaderCell>
            )}
            <Table.HeaderCell />
          </Table.Row>
        </Table.Footer>
      </Table>
    </center>
    // <Table celled>
    //   <Table.Header>
    //     <Table.Row textAlign="center">
    //       <Table.HeaderCell>Past Orders</Table.HeaderCell>
    //       <Table.HeaderCell>Car Model</Table.HeaderCell>
    //       <Table.HeaderCell>Past Orders</Table.HeaderCell>
    //       <Table.HeaderCell>Shipped</Table.HeaderCell>
    //     </Table.Row>
    //   </Table.Header>

    //   <Table.Body>
    //     <Table.Row textAlign="center">
    //       <Table.Cell>
    //         <Header as="h4" image>
    //           {props.order.cars.map(car => (
    //             <div>
    //               <Table.Row textAlign="center">
    //                 <Image
    //                   key={car.id}
    //                   src={car.image}
    //                   rounded
    //                   height="100px"
    //                   width="100px"
    //                 />
    //               </Table.Row>
    //               <Table.Cell>
    //                 <Table.Cell>
    //                   {car.make}, {car.model}
    //                 </Table.Cell>
    //               </Table.Cell>
    //             </div>
    //           ))}
    //         </Header>
    //       </Table.Cell>
    //       <Table.Cell>ORDER: #{props.order.id}</Table.Cell>
    //       <Table.Cell>{props.order.shipped.toString()}</Table.Cell>
    //     </Table.Row>
    //   </Table.Body>
    // </Table>
  )
}

export default OrderItem
