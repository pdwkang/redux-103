export default function (state = null, action){
	switch(action.type){
		case 'GET_MOVIE':
			// console.log(action.payload)
			return (action.payload)
			break;
		case 'SOMETHING_ELSE_THIS_SHOULD_NEVER_RUN':
			console.log('should not be able to see this')
	}
	return state
}