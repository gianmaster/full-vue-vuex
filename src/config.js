export const apiDomain = 'http://localhost:8000/';
export const urlLogin = `${apiDomain}oauth/token`;
export const urlUser = `${apiDomain}api/user`;
export const urlUserList = `${apiDomain}api/v1/user-list`;
export const urlUserConversation = `${apiDomain}api/v1/`;

export const getHeader = function(){
    const tokenData = JSON.parse(window.localStorage.getItem('authUser'));
    const headers = {
        'Accept': 'application/json',
        'Authorization': 'Bearer ' + tokenData.access_token
    };
    return headers;
}
