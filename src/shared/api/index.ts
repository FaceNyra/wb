export const fetchGet = <T>(url: string): Promise<T> =>
    fetch(`http://localhost:8000${url}`).then(res => res.json())
  