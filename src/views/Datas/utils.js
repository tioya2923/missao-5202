// src/views/Datas/utils.js

export function createSlug(titulo) {
    return titulo.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
  }
  