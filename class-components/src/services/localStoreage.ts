export function readLocalStorage() {
  const result = localStorage.getItem('api-call-string');
  console.log('result = ', result);
  return result;
}

export function writeLocalStorage(callString: string) {
  localStorage.setItem('api-call-string', callString);
}
