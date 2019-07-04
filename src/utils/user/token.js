import store from '../../store'

  export function getToken(arg){
	   // 进行token相关逻辑判断
	  	switch(arg){
	  		case 'just':
	  		return store.state.user.token;
	  		 
	  		case 'login':
	  		const token=localStorage.getItem('token');
	  		store.state.user.token=token;
	  		return token;

	  		default:
	  		return ''; 

	  	}
		 
		
   }
	 
