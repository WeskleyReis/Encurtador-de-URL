export async function encurtadorUrl(body: { link_original: string, link_custom?: string }) {
	const response = await fetch('http://localhost:8000/api/v1/encurtador/', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(body)
	})

	if (!response.ok) throw new Error('Erro ao encurtar URL')

	return response.json()
}