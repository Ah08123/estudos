#include <stdio.h>

int main() {
    int a, count;
    float nota, maior, menor, media = 0;

    printf("Digite o numero de alunos: ");
    scanf("%d", &a);

    if (a <= 0) {
        printf("Numero de alunos invalido.");
        return 1;
    }

    printf("\n");

    for (count = 1; count <= a; count++) {
        printf("Digite a nota do aluno %d: ", count);
        scanf("%f", &nota);

        if (nota < 0 || nota > 10) {
            printf("Nota invalida. As notas devem estar entre 0 e 10.\n");
            count--; 
            continue; 
        }

        if (count == 1) {
            maior = nota;
            menor = nota;
        } else {
            if (maior < nota)
                maior = nota;
            if (menor > nota)
                menor = nota;
        }

        media += nota;
    }

    printf("\nA media das notas foi de: %.1f\n", media / a);
    printf("A maior nota foi: %.1f\n", maior);
    printf("A menor nota foi: %.1f\n", menor);

    return 0;
}
