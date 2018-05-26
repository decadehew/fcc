const headers = {
    'Accept': 'application/json',
}

const api = "https://fcctop100.herokuapp.com/api/fccusers/top";
export const getAll = (id) => 
    fetch(`${api}/${id}`, { headers })
        .then(res => res.json())

