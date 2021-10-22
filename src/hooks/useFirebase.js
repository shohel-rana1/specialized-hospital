import { useEffect, useState } from "react"
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile, GithubAuthProvider } from "firebase/auth";
import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
    const auth = getAuth();
    const [user, setUser] = useState({});
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [error, seterror] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repassword, setRepassword] = useState('');
    const [isLoading, setIsLoding] = useState(true);

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    //Sign In with google
    const signInWithGoogle = () => {
        return signInWithPopup(auth, googleProvider);
    };

    //Sign in with github
    const signInWithGithub = () => {
        return signInWithPopup(auth, githubProvider);
    };

    //Email and Password login
    const handleEmalAndPassLogin = () => {
        return signInWithEmailAndPassword(auth, email, password);
    };

    //logout 
    const logout = () => {
        setIsLoding(true);
        signOut(auth)
            .then(() => {
                setUser({});
            })
            .catch(error => {
                console.log(error.message);
            })
            .finally(() => setIsLoding(false));
    };

    //user auth state observer
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
            setIsLoding(false);
        });
    });


    const getEmail = event => {
        setEmail(event.target.value);
    };

    const getPassword = event => {
        setPassword(event.target.value);
    };

    const getRePassword = event => {
        setRepassword(event.target.value);
    };

    const handleNameChanged = event => {
        setName(event.target.value);
    };

    const handlePhoneChanged = event => {
        setPhone(event.target.value);
    };


    //Handle registrationn
    const handleRegistration = event => {
        event.preventDefault();

        if (password.length < 6) {
            seterror('Password must be at least 6 characters')
            return;
        };
        if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
            seterror('Password must contain two uppercase')
            return;
        };
        if (password !== repassword) {
            seterror("Password Doesn't Match");
            return;
        };

        //create user
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                seterror('');
                console.log(user);
                setUserName();
            })
            .catch(error => {
                seterror(error.message);
            });
    };

    //set username
    const setUserName = () => {
        updateProfile(auth.currentUser, { displayName: name, PhoneNumber: phone, })
            .then(result => {

            })
            .catch(error => {
                console.log('username', error.message);
            })
    };

    return {
        user,
        name,
        error,
        isLoading,
        seterror,
        logout,
        signInWithGithub,
        signInWithGoogle,
        setUserName,
        getEmail,
        getPassword,
        getRePassword,
        handleRegistration,
        handleNameChanged,
        handlePhoneChanged,
        handleEmalAndPassLogin

    }
}

export default useFirebase;