import axios from 'axios';


const getAll = async () => {
  const config = {
    method: 'get',
    url: 'https://mycelia.azure-api.net/id/productimages?mode=complete',
    headers: { 
      'Auth': 'fa48e535eaa44ef49f37557751eeffd4',
      'Content-Type': 'application-json'
    }
  };
  try {
    const { data } = await axios(config)
    return data
  } catch (error) {
      console.log(error)
  }
}

const getById = async (id, topK) => {
  const config = {
    method: 'get',
    url: `https://mycelia.azure-api.net/similar/id/productimages?id=${id}&top_k=${topK}`,
    headers: { 
      'Auth': 'fa48e535eaa44ef49f37557751eeffd4',
      'Content-Type': 'application/json'
    }
  };
  try {
    const { data } = await axios(config)
    return data.similarity[0].results
  } catch (error) {
    console.log(error)
  }
}

export {
  getAll,
  getById
}
