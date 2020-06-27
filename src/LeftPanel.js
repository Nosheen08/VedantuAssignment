import React from 'react';
import {connect} from 'react-redux';
import fetchUser from './actions';
import axios from 'axios';

class LeftPanel extends React.Component{

    constructor(props)
    {
        super(props);
        this.state={
            user_details: {}
        }
    }

    componentDidMount(){
        axios.get("https://api.github.com/users/supreetsingh247")
        .then((response) => {
            console.log(response.data);
            this.setState({user_details: response.data})
        })
        .catch((error) => console.log("Error occured" + error))
        //this.props.user_details
    }
    render(){
        const user_details = this.state.user_details;
        console.log(user_details);
        return (<div className="left_panel">
                    <img src={user_details.avatar_url} className="image_"/>
                    <div style={{padding:"10px"}}>
                        <div style={{fontWeight: "bold"}}>{user_details.name}</div>
                        <div>{user_details.login}</div>
                    </div>
                    <div>{user_details.bio}</div>
                    <div>
                        <span>{user_details.followers} Followers</span>
                         <span>{user_details.following} Following</span>
                    </div>
                    <div>
                         {user_details.company}
                    </div>



        </div>);
    }



}

const mapStateToProps = (state) =>{
    return {user_details: state.user_details}
}

const mapDispatchToProps = (dispatch) =>{
    return {fetchUserDetails : dispatch(fetchUser)}
} 
export default connect(mapStateToProps, mapDispatchToProps)(LeftPanel);