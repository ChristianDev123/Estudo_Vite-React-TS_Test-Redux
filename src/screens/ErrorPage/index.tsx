import { useRouteError } from 'react-router-dom'

export default function ErrorPage(){
    const error = useRouteError();
    console.log(error);
    return(
        <div>
            Esta página não existe!
        </div>
    );
}