#include <stdio.h>
#include <limits.h>

int main() {
    int solde = 1000;
    int prix_flag = 2000;
    int quantite_achetée;

    printf("Bienvenue dans mon magasin\n");
    printf("Ton solde actuel : %d crédits.\n", solde);
    printf("Le flag secret coûte %d crédits.\n", prix_flag);
    printf("Combien d'objets veux-tu acheter avant le flag ? (max %d)\n", INT_MAX / 100);

    scanf("%d", &quantite_achetée);

    int cout_total = quantite_achetée * 100;

    printf("Coût de tes objets : %d crédits.\n", cout_total);

    solde = solde - cout_total; 
    printf("Nouveau solde : %d crédits.\n", solde);

    if (solde >= prix_flag) {
        printf("Bien joué ! Ton solde a explosé. Le flag est :\n");
        printf("FWI{LQW_RY3UFLOZ}\n");
    } else {
        printf("Solde insuffisant (%d/2000). Réessaie.\n", solde);
    }

    return 0;
}
