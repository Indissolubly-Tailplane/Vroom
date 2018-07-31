import React from 'react'
import {Link} from 'react-router-dom'
import {Grid, Image, Icon, Label, Menu, Table, Button} from 'semantic-ui-react'

/**
 * COMPONENT
 */
export const SingleUser = props => {
  const {firstName, lastName, id, email} = props.user

  return (
    <Table celled padded>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Name</Table.HeaderCell>
          <Table.HeaderCell>E-mail</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        <Table.Row>
          <Table.Cell>
            {firstName} {lastName}
          </Table.Cell>
          <Table.Cell>{email}</Table.Cell>
        </Table.Row>
      </Table.Body>

      <Table.Footer fullWidth>
        <Table.Row>
          <Table.HeaderCell colSpan="4">
            <Link to={`/admin/${id}`}>
              <Button size="small" color="blue">
                Details
              </Button>
            </Link>
          </Table.HeaderCell>
        </Table.Row>
      </Table.Footer>
    </Table>
  )
}
