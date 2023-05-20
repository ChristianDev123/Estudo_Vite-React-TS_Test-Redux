import { useAppSelector } from '../../hooks/redux';

export default function ContactPage(){
    const selector = useAppSelector((state)=>state.form);

    return (
        <div>
            Esta é a página de contato!
            <p>Seu nome é {selector.name}</p>
            <p>Sua Idade é {selector.age} anos</p>
        </div>
    );
}