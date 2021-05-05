import { useState, useContext } from 'react';
import FirebaseContext from './firebase';
import iphone from './iphone-with-profile.jpg';
import {Link, Redirect,  useHistory} from 'react-router-dom';

export default function Login() {
    const history = useHistory();
    const { firebase } = useContext(FirebaseContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [err, setErr] = useState('');
    const isInvalid = password == '' || email == '';
    

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await firebase.auth().signInWithEmailAndPassword(email, password);
            history.push('/dashboard')
        } catch (error) {
            setEmail('');
            setPassword('');
            setErr(error.message)
        }

    };

    return (
        <div className='container '>
            <div>
                <img src={iphone} />
            </div>

            <div>
                <form onSubmit={handleLogin}>
                    {err && <p color='red'>Check your username and password and try again</p>}
                    E-mail: <input type='email' onChange = { ({target}) => setEmail(target.value)} />
                    Password: <input type='password' onChange = { ({target}) => setPassword(target.value)} />
                    <button type='submit' disabled={isInvalid}>Login </button>
                </form>
            </div>
            <div>
                If you don't have an account <Link to='/signup' >you can register here </Link>
            </div>
        Login
        </div>
    )
}