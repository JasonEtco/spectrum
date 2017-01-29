import * as firebase from 'firebase';

export const login = (email, password) => (dispatch) => {
	firebase.auth().signInWithEmailAndPassword(email, password).then(function(res){
    dispatch({
    	type: 'LOGGED_IN',
    	uid: res.uid
    })
  }, function(err){
  	dispatch({
  		type: 'LOGIN_SIGNUP_ERROR',
  		message: err.message
  	})
  	console.log(err)
  });
}

export const setUser = () => (dispatch) => {
	firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      dispatch({
				type: 'SET_USER',
				user
			})
    } else {
      console.log('not a user')
    }
  });
}