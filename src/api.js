const API = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';


export const authFetch = (path, token, opts = {}) => {
return fetch(API + path, {
...opts,
headers: {
'Content-Type': 'application/json',
...(opts.headers || {}),
...(token ? { Authorization: 'Bearer ' + token } : {})
}
}).then(r => r.json());
};


export default API;