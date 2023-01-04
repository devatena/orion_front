import Api from './Api'
import router from '@/router';

export default {

    async login(form: any) {
        return Api.post('/login', form);
    },

    async logout() {
        try {
            const response = await Api.get('/logout', {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem('token')
                }
            }).then(res => {
                localStorage.removeItem('token');
                router.push('/login');
            })
        } catch (error) {
            console.log(error);
        }
    },

    // async auth(){
    //    const response  = await Api.get('/user', {
    //         headers: {
    //             'Content-Type': 'application/json',
    //             'Authorization': 'Bearer ' + localStorage.getItem('token')
    //         }
    //     })
    //     return response.data
        // try{
        // const response = await Api.get('user', { 
        //     headers: {
        //       'Content-Type': 'application/json',
        //       'Authorization': 'Bearer ' + localStorage.getItem('token')
        //     }
        //   }).then(res => {
        //     return res;
        //   })

        // }catch(error:any){
        //         // if(error.response.status === 401){
        //         //     router.replace('/login')                            
        //         // }
        //         return false;
        //   }
    // },
    async get() {
        const response = await Api.get('/user', {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            }
        })
        return response.data
    },

}