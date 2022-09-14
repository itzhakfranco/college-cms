import axios from 'axios';

export const httpService = axios.create({
  baseURL: 'http://localhost:7777',
  headers: {
    'Content-Type': 'application/json'
  }
});

export const mapArrayToHash = (array) => {
    return array.reduce((map, obj) => {
        map[obj.id] = obj.name;
        return map;
    }, {});
};