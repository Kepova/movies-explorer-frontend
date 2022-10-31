import { useEffect } from 'react';
import { getUser } from '../utils/MainApi';

function useLoggedIn() {

    useEffect(() => {
        getUser()
            .then((userData) => {
                console.log(userData)
                if (userData) {
                    return true;
                }
                return false;
            })
            .catch(err => {
                console.log(err);
                return false;
            });
    },[]);

};


export default useLoggedIn;