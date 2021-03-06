import React from 'react';
import moment from 'moment';

const projectSummary = ({project}) => {
  return (
    <div className="card z-depth-0 project-summary">
      <div className="card-content grey-text text-darken-3">
        <div className="card-title">{project.title}</div>
        <p>Posted by {project.authorFirstName} {project.authorLastName}</p>
        <div className="grey-text">{moment(project.createdAt.toDate()).calendar()}</div>
      </div>
    </div>
  )
}

export default projectSummary