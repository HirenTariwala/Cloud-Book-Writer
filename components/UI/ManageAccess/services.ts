export async function getUsers() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users`, {
    method: "GET",
  });
  return await response.json();
}

export async function updateUserPermission(payload: any) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/users/${payload.id}`,
    {
      method: "PATCH",
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return await response.json();
}
