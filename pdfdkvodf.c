#include <stdio.h>
int maior,menor,num1,num2;
main()
{
	printf("entre com o primeiro numero:");
	 scanf("%d",&num1);
	 menor=num1;
	 maior=num1;
	 printf("entre com o segundo numero:");
	 scanf("%d",&num2);
	 if(maior<num2)
	  maior=num2;
	 if(menor>num2)
	 menor=num2;
	printf("\nmenor numero:%d",menor);
	printf("\nmaior numero:%d",maior);
getch();
return 0;	 
}
