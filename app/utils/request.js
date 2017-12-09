import 'whatwg-fetch';
import getFilename from 'utils/getFilename';

function parseJSON(response) {
  if (response.status === 204 || response.status === 205) {
    return null;
  }
  return response.json();
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  const error = new Error(response.statusText);

  return response.json()
    .then((json) => {
      error.response = json;
    })
    .finally(() => {
      throw error;
    });
}


const getBlob = (type) => (response) => {
  response.blob().then((blob) => showFile(response, blob, type));
};

function showFile(response, blob, type) {
  // https://blog.jayway.com/2017/07/13/open-pdf-downloaded-api-javascript/
  // It is necessary to create a new blob object with mime-type explicitly set
  // otherwise only Chrome works like it should
  const newBlob = new Blob([blob], { type });

  // IE doesn't allow using a blob object directly as link href
  // instead it is necessary to use msSaveOrOpenBlob
  if (window.navigator && window.navigator.msSaveOrOpenBlob) {
    window.navigator.msSaveOrOpenBlob(newBlob);
    return;
  }

  // For other browsers:
  // Create a link pointing to the ObjectURL containing the blob.
  const data = window.URL.createObjectURL(newBlob);
  const filename = getFilename(response);
  const link = document.createElement('a');

  link.href = data;
  link.download = filename;
  link.click();

  setTimeout(() => {
    // For Firefox it is necessary to delay revoking the ObjectURL
    window.URL.revokeObjectURL(data);
  }, 100);
}

export default function request(url, options) {
  if (options.headers.Accept !== 'application/json') {
    return fetch(url, options)
      .then(checkStatus)
      .then(getBlob(options.headers.Accept));
  }

  return fetch(url, options)
    .then(checkStatus)
    .then(parseJSON);
}
