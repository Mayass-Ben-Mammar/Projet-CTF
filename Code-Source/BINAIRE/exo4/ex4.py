import random
import time
import base64
import sys

def run_challenge():
    obfuscated_flag = "Q1RGe1NDUklQVElOR19IQUNLU30="
    flag_text = base64.b64decode(obfuscated_flag).decode()
    binary_flag = ''.join(format(ord(i), '08b') for i in flag_text)

    print("--- DÉFI DE RAPIDITÉ : LES CALCULS FOUS ---")
    print("Règle : Tu as 5 questions. Tu as 10 secondes pour répondre à chacune.")
    print("Si tu es trop lent, le serveur ferme la connexion !\n")

    for i in range(5):
        n1 = random.randint(10, 99)
        n2 = random.randint(10, 99)
        op = random.choice(['+', '-', '*'])
        calcul = f"{n1} {op} {n2}"
        
        print(f"Question {i+1}: Combien fait {calcul} ?")
        sys.stdout.flush()

        start_time = time.time()

        try:
            user_input = input("Ta réponse : ")
            end_time = time.time()

            if end_time - start_time > 10:
                print("\n[!] TROP LENT ! Le temps est écoulé.")
                return

            correct_answer = eval(calcul)
            if int(user_input) != correct_answer:
                print(f"\n[!] MAUVAISE RÉPONSE ! La réponse était {correct_answer}.")
                return

            print("Correct !\n")

        except ValueError:
            print("\n[!] ERREUR : Tu dois entrer un nombre entier.")
            return
        except Exception:
            print("\n[!] Une erreur est survenue.")
            return

    print("="*40)
    print("FÉLICITATIONS ! Tu as été plus rapide que la machine.")
    print("Voici ton flag (format binaire) :")
    print(binary_flag)
    print("="*40)
    print("\nIndice : Utilise CyberChef pour retrouver le texte original !")

if __name__ == "__main__":
    run_challenge()
