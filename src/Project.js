import React from 'react';

class Project extends React.Component{
    constructor(props)
    {
        super(props)
    }

    render(){
        const project = this.props.project;

        return(
            <div className="project_section">
             <div style={{color: "#0366d6"}}>{project.name}</div>
            <div>{project.description}</div>
             <div>Updated on {project.updated_at} </div>
             </div>
        )
    }
}

export default Project;