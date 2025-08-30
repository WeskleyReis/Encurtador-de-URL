import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function Redirecionar() {
    const { shortCode } = useParams<{ shortCode: string }>();

    useEffect(() => {
        async function fetchOriginal() {
            try {
                const res = await fetch(`http://localhost:8000/api/v1/encurtador/${shortCode}/`);
                if (!res.ok) throw new Error('Código inválido');
                const data = await res.json();
                window.location.href = data.link_original; // redireciona para a URL original
            } catch (err) {
                alert('Erro ao redirecionar');
            }
        }

        fetchOriginal();
    }, [shortCode]);

    return <p>Redirecionando...</p>;
}
