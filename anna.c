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
    	    printf("%d � igual a %d\n",numero1 ,numero2);
    	if (numero1!=numero2)
    	    printf("%d � diferente do %d\n",numero1,numero2);
    	if (numero1<numero2)
    	    printf("%d � menor do que %d\n",numero1,numero2);
    	if (numero1>numero2)
    	    printf("%d � maior que %d\n",numero1,numero2);
    getch();

}  
    
