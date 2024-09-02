export const setLocalStorage = (list) => {
    localStorage.setItem('lista', JSON.stringify(list))
}

export const getLocalStorage = () => {
   const jsonLista = localStorage.getItem('lista')
   const lista = JSON.parse(jsonLista)
   return lista
}

export const deteleLocalStorage = () => {
    localStorage.removeItem('lista')
}