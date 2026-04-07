#include <stdio.h>
#include <stdlib.h>

char *gets(char *s);

void win() {
    printf("Bravo ! Voici ton flag chiffré (Clé: 'KEY') : M1Dc{T1q_S0v_E1u}\n");
}

void vuln() {
    char buffer[16];
    printf("Dis moi quelque chose d'intelligent : ");
    gets(buffer);
}

int main() {
    vuln();
    return 0;
}
