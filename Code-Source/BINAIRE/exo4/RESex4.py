from pwn import *
import re

io = process(['python3', 'challenge_scripting.py'])

io.recvuntil(b"chacune.\n\n")

for i in range(5):
    question = io.recvuntil(b"?").decode()
    match = re.search(r'(\d+)\s*([\+\-\*])\s*(\d+)', question)
    
    if match:
        n1, op, n2 = match.group(1), match.group(2), match.group(3)
        res = eval(f"{n1}{op}{n2}")
        
        io.recvuntil(b"Ta réponse : ")
        io.sendline(str(res).encode())
        io.recvline()

io.recvuntil(b"binaire) :\n")
flag_bin = io.recvline().decode().strip()
print(f"Flag binaire : {flag_bin}")

io.close()
