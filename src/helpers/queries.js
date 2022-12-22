const url = "https://restcountries.com/v2/all"



export const listarPaises =async()=>{
  try {
    const respuesta = await fetch(url)
    const dato = await respuesta.json()
    return dato
  } catch (error) {
    console.log(error)
    return false
  }
}



