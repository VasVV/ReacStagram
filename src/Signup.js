import { useState, useContext } from 'react';
import FirebaseContext from './firebase';
import iphone from './iphone-with-profile.jpg';
import {Link, Redirect,  useHistory} from 'react-router-dom';

export default function Signup() {

    const doesUsernameExist = async(username) => {
        const result = await firebase;
    }


    const history = useHistory();
    const { firebase } = useContext(FirebaseContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [username, setUsername] = useState('');
    const [fullname, setFullname] = useState('');

    const [err, setErr] = useState('');
    const isInvalid = password == '' || email == '';
    

   

    const handleSignup = async (e) => {
        e.preventDefault();

        const doesUsernameExist = async(username) => {
            const result = await firebase.firestore().collection('users').where('username', '==', username).get();
            return result.docs.map(user => user.data().length > 0);
        }

        const usernameExists = await doesUsernameExist(username);
        if (!usernameExists.length > 0) {
            try {
                const createUser = await firebase.auth().createUserWithEmailAndPassword(email, password);
                await createUser.user.updateProfile({
                    displayName: username
                });

                await firebase.firestore().collection('users').add({
                    userId: createUser.user.uid,
                    username,
                    fullname,
                    email
                })
            } catch(err) {
                console.log(err);
            }
        } else {
            setErr('This username already exists, select another username')
        }
        // try {
        //     await firebase.auth().signInWithEmailAndPassword(email, password);
        //     history.push('/dashboard')
        // } catch (error) {
        //     setEmail('');
        //     setPassword('');
        //     setErr(error.message)
        // }

    };

    return (
        <div className='container '>
            <div>
                <img src={iphone} />
            </div>

            <div>
                <form onSubmit={handleSignup}>
                    {err && <p color='red'>{err}</p>}

                    Username: <input type='text' onChange = { ({target}) => setUsername(target.value)} />
                    Full name: <input type='text' onChange = { ({target}) => setFullname(target.value)} />
                    E-mail: <input type='email' onChange = { ({target}) => setEmail(target.value)} />
                    Password: <input type='password' onChange = { ({target}) => setPassword(target.value)} />
                    <button type='submit' disabled={isInvalid}>Login </button>
                </form>
            </div>
            <div>
                If you already have an account <Link to='/login' >you can log in here </Link>
            </div>
        Login
        </div>
    )
}