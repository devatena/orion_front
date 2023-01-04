
export default{
    async address(cep: string){
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then(res => res.json());
        return response;
      },
}