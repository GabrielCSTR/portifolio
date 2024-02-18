import axios from 'axios';

export function useGithub() {
    
    async function getProjects(){
        return axios.get('https://api.github.com/users/GabrielCSTR/repos')
            .then(res => res.data)
            .catch(err => {
                console.log(err);
                return null;
            });
    }

    async function getProjectTags(project: string){
        return axios.get(`https://api.github.com/repos/GabrielCSTR/${project}/tags`)
            .then(res => res.data)
            .catch(err => {
                console.log(err);
                return null;
            });
    }

    return {
        getProjects,
        getProjectTags
    }
}
