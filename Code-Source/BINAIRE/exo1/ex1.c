#include <stdio.h>

char *gets(char*s);

int main() {
    int secret = 0;
    char buffer[32];

    printf("Entrez votre nom : ");
    gets(buffer); 

    if (secret != 0) {
        printf("Incroyable ! La variable secret a changé (Valeur: %d).\n", secret);
        printf("Flag : CTF{BUF_0VERFL0W_BASIC}\n");
    } else {
        printf("Secret est toujours %d. Le buffer contient: %s\n", secret, buffer);
        printf("Astuce : Essaye d'entrer plus de 32 caractères !\n");
    }
    return 0;
}
