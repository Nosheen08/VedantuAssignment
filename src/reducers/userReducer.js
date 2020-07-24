import { bindActionCreators } from "redux"

const user_details = {

}

const userReducer = (state=user_details, action) =>{
    switch(action.type){
        case 'user_details': {
            return action.payload
        }

        default: return state;
		
		
    }
}

export default userReducer;