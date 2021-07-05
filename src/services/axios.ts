import service from 'axios';

export const axios = service.create({
  baseURL: 'http://192.168.8.20:3333',
  headers: {
    'Content-Type': 'application/json'
  }
})