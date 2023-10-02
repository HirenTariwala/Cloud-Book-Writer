export async function loginUser(payload: any) {
    const response = await fetch('/login', {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: {
            "Content-Type": "application/json"
        }
    })
    return await response.json()
}
