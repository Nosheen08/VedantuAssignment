import React from 'react';
import axios from 'axios';
import Project from './Project';

class RightPanel extends React.Component{
    constructor(props)
    {
        super(props);
        this.state = {
            projects:[]
        }
    }

    componentDidMount(){
        axios.get("https://api.github.com/users/supreetsingh247/repos")
        .then((response) => {
            console.log(response.data);
            this.setState({projects: response.data})
        })
        .catch((error) => console.log("Error occured" + error))
        //this.props.user_details
    }

    render(){
        const projects = this.state.projects;
        console.log(projects);
       const all_project =   projects.map((project)=>{
            return (<Project key={project.id} project={project}/>)
        })
        return (
            <div className="project_container">
                {all_project}
                </div>
        )
    }
} 
export default RightPanel;