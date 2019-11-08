import axios from 'axios';


const baseUrl = "http://localhost:3001/users/";

const allUsers = () => 
    axios
        .get(baseUrl)
        .then(response => response.data)
        .catch()

const getUser = (id) => 
    axios
        .get(`${baseUrl}${id}`)
        .then(response => response.data)
        .catch(err => {throw new Error(err)})


const create = (user) => 
    axios  
        .post(baseUrl, user)
        .then(response => response.data)
        .catch(err => {throw new Error(err)})


const update = (id, user) => 
    axios  
        .put(`${baseUrl}${id}`, user)
        .then(response => response.data)
        .catch(err => {throw new Error(err)})

const remove = (id) => 
    axios
        .delete(`${baseUrl}${id}`)
        .then(response => console.log(response))
        .catch(err => {throw new Error(err)})


export default {
    allUsers,
    getUser,
    create,
    remove,
    update
}