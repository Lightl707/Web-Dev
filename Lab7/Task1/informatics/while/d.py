a, bln = int(input()), True

while a > 1:
    if a % 2 != 0:
        bln = False
        break
    else:
        a //= 2

print('YES') if bln is True else print('NO')
