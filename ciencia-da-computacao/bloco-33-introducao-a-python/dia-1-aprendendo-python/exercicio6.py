def get_triangle_type(s1, s2, s3):
    if s1 + s2 < s3 or s1 + s3 < s2 or s2 + s3 < s1:
        return "Não é triângulo"

    if s1 == s2 == s3:
        return "Triângulo Equilátero"

    if s1 == s2 or s1 == s3 or s2 == s3:
        return "Triângulo Isósceles"

    return "Triângulo Escaleno"


print(get_triangle_type(3, 4, 10))
print(get_triangle_type(10, 10, 10))
print(get_triangle_type(10, 10, 15))
print(get_triangle_type(10, 15, 20))
