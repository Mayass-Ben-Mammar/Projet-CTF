def check():
    correct = "}REVESRE{FTC"
    user = input("Flag ? ")
    if user[::-1] == correct:
        print("Gagné !")
