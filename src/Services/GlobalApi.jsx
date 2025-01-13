
const key="aaf8d29ffeb04bebb69e0912eb3841e0"
const axiosCreate=axios.axiosCreate({
    baseURL:'https://api.rawg.io/api/genres'
})

const getGenreList=axiosCreate.get('/genres?key='+key);

export default{
    getGenreList
}