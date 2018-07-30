import React from 'react'
import {Link} from 'react-router-dom'
import {Image} from 'semantic-ui-react'

/**
 * COMPONENT
 */
export const SingleUser = props => {
  const {firstName, lastName, id, email} = props.user

  return (
    <div className="card">
      <div className="content">
        <div className="header">
          {firstName} {lastName}
        </div>
        <div className="meta">{email}</div>
      </div>
      <div className="extra content">
        <Link to={`/admin/${id}`}>
          <button>Details</button>
        </Link>
      </div>
    </div>
  )
}
