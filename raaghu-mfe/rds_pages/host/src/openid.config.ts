const openidConfig = {
    issuer: sessionStorage.getItem("REACT_APP_API_URL") || '',
    clientId : 'raaghu',
    scope: 'offline_access address email roles profile phone BookStore ',
    grant_type:'password'
}
export default openidConfig