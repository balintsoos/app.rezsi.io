const getFilename = (response) => {
  const header = response.headers.get('Content-Disposition');

  const result = header.split(';')[1].trim().split('=')[1];
  return result.replace(/"/g, '');
};

export default getFilename;
