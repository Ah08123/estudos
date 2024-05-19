Algoritmo "calcular populaçao"
Var
populacao_a, populacao_b: real
taxa_a,taxa_b: real
anos:inteiro
Inicio
populacao_a <-90000
taxa_a <- 3
populacao_b <-300000
taxa_b <- 1.2
anos <-0
  enquanto populacao_a <= populacao_b faca
    populacao_a <- populacao_a +(populacao_a * taxa_a/100)
   populacao_b <- populacao_b +(populacao_b * taxa_b/100)
    anos <- anos + 1
  fimenquanto
 escreval ("Sao necessarios",anos," anos para que a populacao a ultrapasse b.")
Fimalgoritmo