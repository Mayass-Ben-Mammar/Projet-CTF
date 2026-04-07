#include <stdio.h>

int main() {
    char hidden_flag[] = "Q1RGe1BSSU5URl9MRUFLfQ==";
    char buffer[100];
    printf("Dis moi un secret : ");
    scanf("%99s", buffer);
    printf(buffer);
    printf("\n");
    return 0;
}
