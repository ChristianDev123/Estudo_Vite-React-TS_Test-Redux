import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addData, formData } from '../../features/form';
import { useAppDispatch } from '../../hooks/redux';



export default function Home(){
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const [data, setData] = useState<formData>({name:"",age:""});


    function handleSubmit(e:React.FormEvent<HTMLFormElement>){
        e.preventDefault();
        dispatch(addData(data));
        navigate("/contacts");
    }

    return(
        <div>
            <p>Esta é a minha tela!</p>
            <form onSubmit={(e)=>handleSubmit(e)}>
                <div>
                    <label htmlFor="name">Nome: </label>
                    <input id="name" type="text" onChange={(e)=>{
                        setData({...data, name:e.target.value});
                    }} />
                </div>
                <div>
                    <label htmlFor="age">Idade: </label>
                    <input id="age" type="text" onChange={(e)=>{
                        setData({...data, age:e.target.value});
                    }} />
                </div>
                <div>
                    <input type="submit" value="Enviar"/>
                </div>
            </form>

            <input type="button" value="Contatos" onClick={()=>{
                return navigate("/contacts");
            }} />
        </div>
    );
}