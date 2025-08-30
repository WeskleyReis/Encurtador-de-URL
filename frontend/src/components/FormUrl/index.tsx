import { useState } from 'react';
import { encurtadorUrl } from '../../services/api.ts';

export default function FormUrl() {
    const [url, setUrl] = useState('');
    const [custom, setCustom] = useState('');
    const [resultado, setResultado] = useState<string>('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!url.trim()) {
            alert('Informe a URL original!');
            return;
        }

        const body: any = { link_original: url.trim() };
        if (custom.trim()) {
            body.link_custom = custom.trim();
        }

        try {
            const data = await encurtadorUrl(body);

            // Usa o custom do backend (gerado ou enviado pelo usuário)
            const finalCustom = data.link_custom;
            const baseUrl = window.location.origin;
            const linkEnc = `${baseUrl}/${finalCustom}`;
            setResultado(linkEnc);
        } catch (err: any) {
            alert(err.message);
        }
    };

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Cole sua URL aqui"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Custom (opcional)"
                    value={custom}
                    onChange={(e) => setCustom(e.target.value)}
                />
                <button type="submit">Encurtar</button>
            </form>

            {resultado && (
                <p className="resultado">
                    URL encurtada: <a href={resultado} target="_blank">{resultado}</a>
                </p>
            )}
        </div>
    );
}
