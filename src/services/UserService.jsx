export const login = creds =>
{
//return axios.post(loginUrl tec)
return new Promise((resolve,reject) =>
{
    const {username,password} = creds
    if(username === 'happy' && password === 'happy6')
    {
        const user ={
            username,
            token:'123abdef1234'
            //redirect to taskmanager
        }
        localStorage.setItem('user' ,JSON.stringify(user))
        resolve(user)
    }else{
        reject(
            {
                msg :' Invalid credentials'
            }
        )
    }
})


}
export const logout = () =>
{
    localStorage.removeItem('user')
}
export const checkUser = () =>
{
    return JSON.parse(localStorage.getItem('user'))
}