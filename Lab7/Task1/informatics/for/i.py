import math
a = int(input())
div = 0

for i in range(1, int(math.sqrt(a)) + 1):
    if a % i == 0:
        div += 1
        if i != a // i:
            div += 1

print(div)