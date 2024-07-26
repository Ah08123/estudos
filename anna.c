#include <stdio.h>
int numero1,numero2;
main()
{
	printf ("digite dois numeros que lhe direi suas diferencas ou semelhancas.\n");
	printf("digite o primeiro numero:");
	scanf("%d",&numero1);
	printf("digite o segundo numero:");
	scanf("%d",&numero2);

    
	
    	if (numero1==numero2)
    	    printf("%d é igual a %d\n",numero1 ,numero2);
    	if (numero1!=numero2)
    	    printf("%d é diferente do %d\n",numero1,numero2);
    	if (numero1<numero2)
    	    printf("%d é menor do que %d\n",numero1,numero2);
    	if (numero1>numero2)
    	    printf("%d é maior que %d\n",numero1,numero2);
    getch();

}  
    
