import { auth } from "../provider/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

export namespace StorageUser {

    export const GetUserJwt = async (): Promise<void> => {
        const [user, loading, error] = useAuthState(auth);
        console.log(user);
    }
}