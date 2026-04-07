#include <stdio.h>
#include <string.h>

int main() {
    char input[20];
    unsigned char secret[] = {0x44, 0x53, 0x41, 0x7c, 0x5f, 0x48, 0x55, 0x58, 0x56, 0x4e, 0x5a, 0x42, 0x46, 0x54, 0x5e, 0x7a};
    
    printf("Entrez le mot de passe : ");
    scanf("%19s", input);

    for(int i = 0; i < 16; i++) {
        if ((input[i] ^ 0x07) != secret[i]) {
            printf("Faux\n");
            return 1;
        }
    }
    printf("Bien joué, tu as le flag\n");
    return 0;
}
