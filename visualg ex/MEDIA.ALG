Algoritmo "media"

Var
 nome: caracter
n1,n2:inteiro
soma: inteiro
media:real
Inicio
 escreval("digite o nome do aluno:")
      leia(nome)
escreval("digite a nota")
      leia(n1)
escreval("digite a segunda nota")
      leia (n2)
soma<-n1+n2
media<-soma/2
se media>= 7  entao
 escreval ("O aluno(a) tirou nota ",soma," e teve media ",media, " e foi aprovado")
senao
  escreval ("O aluno(a) tirou nota ",soma," e teve media ",media, " e foi reprovado")
fimse
Fimalgoritmo