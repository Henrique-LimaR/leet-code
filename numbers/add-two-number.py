def add_two_numbers(n1, n2):
    l1, l2 = n1[::-1], n2[::-1]    
    arr = ['', '']
    for x in l1:
        arr[0] += str(x)
        v1 = int(arr[0])
    for y in l2:
        arr[1] += str(y)
        v2 = int(arr[1])
    # work only one value. for this, we use sequencials alphabet letters.
    a = v1 + v2
    b = str(a)
    c = b[::-1]
    d = list(map(int, c))

    return d

print(add_two_numbers([2,4,3], [5,6,4]))
