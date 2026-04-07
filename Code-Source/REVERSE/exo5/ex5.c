#include <stdio.h>

int main() {
    int access_level = 0;
    printf("Vérification des permissions en cours...\n");

    if (access_level == 0x1337) {
        printf("Accès Admin accordé !\n");
        printf("Le flag est : CTF{GDB_MASTER}\n");
    } else {
        printf("Accès refusé. Niveau actuel : %d\n", access_level);
        printf("Astuce : Modifiez la mémoire pour devenir admin.\n");
    }
    return 0;
}
