Algoritmo "numero_primo"

Var
 numero,i:inteiro
 primo:logico

Inicio
  escreval("digite um numero positivo maior que 1:")
  leia(numero)
  primo<- verdadeiro
  se numero<=1 entao
  primo<-falso
  fimse
  para i de 2 ate numero-1  faca
  se numero mod i =0 entao
  primo<-falso
  fimse
  fimpara
  se primo entao
  escreva (numero," � um numero primo.")
  senao
  escreva (numero," n�o � um numero primo.")
  fimse
  Fimalgoritmo