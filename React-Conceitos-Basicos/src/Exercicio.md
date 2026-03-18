#Parte 1: Adicionando um contador de cliques no botão "curtir"

Adicione um contador visual no botão "curtir" do componente 'Post', para exibir o número de cliques. O contador será uma simples variável local, incrementada a cada clique do botão. Sempre que o botão curtir for cliado, incremente essa variável e exiba uma mensagem em um alert com o número total de vezes que o botão foi clicado. Não é necessário atualizar a interface do usuário com o contador, apenas exibir o alert.

#Parte 2: Refatorando o componente Home

Refatorar (melhorar) o componente Home para utilizar um componente 'PostList', passando os posts de Home via props para PostList. Esse componente deve ser responsável por renderizar a lista de posts.