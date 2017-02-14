export default function (state = [], action){
	switch(action.type){
		case 'GET_WEATHER':
			return (action.payload)
		case 'SOMETHING_ELSE_THIS_SHOULD_NEVER_RUN':
			// console.log('should not be able to see this')
			return {pointlessPropertyName: 'should not be able to see this'}
	}
	return state;
}