import axios from 'axios';

const httpService = axios.create({
  baseURL: 'http://localhost:7777',
  headers: {
    'Content-Type': 'application/json'
  }
});

export default httpService;
