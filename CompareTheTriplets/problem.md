# Compare the Triplets

> **Nivel de dificultad:** 🟢 Easy · **Máxima puntuación:** 10 · **Fuente:** [HackerRank](https://www.hackerrank.com/challenges/compare-the-triplets/problem)

| Metadato | Detalle |
| :-------- | :------ |
| **Plataforma** | HackerRank |
| **Categoría** | Algorithms |
| **Subdominio** | Warmup |
| **Tipo de problema** | Implementación / Recorrido de arreglos |
| **Dificultad** | Easy (Fácil) |
| **Máxima puntuación** | 10 |
| **Temas** | Arrays, Comparison, Basic I/O, Counting |
| **Idiomas permitidos** | C, C++, Java, JavaScript, Python, Ruby, Go, Kotlin, Swift, PHP, Scala, Rust |
| **Enlace** | https://www.hackerrank.com/challenges/compare-the-triplets/problem |

---

## Descripción

Alice y Bob crearon cada uno un problema para HackerRank. Un revisor califica los dos desafíos, otorgando puntos en una escala del 1 al 100 para tres categorías:

1. Claridad del problema
2. Originalidad
3. Dificultad

La calificación para el desafío de Alice es el triplete `a = (a[0], a[1], a[2])` y la calificación para el desafío de Bob es el triplete `b = (b[0], b[1], b[2])`.

La tarea es calcular sus puntos de comparación evaluando cada categoría:

- Si `a[i] > b[i]`, entonces Alice recibe 1 punto.
- Si `a[i] < b[i]`, entonces Bob recibe 1 punto.
- Si `a[i] == b[i]`, entonces ninguna persona recibe puntos.

---

## Ejemplo

| Triplete | Valores |
| :------: | :-----: |
| `a`      | `[1, 2, 3]` |
| `b`      | `[3, 2, 1]` |

**Resultados:**

- Para el elemento `0`, Bob recibe un punto porque `a[0] < b[0]`.
- Para los elementos iguales `a[1]` y `b[1]`, no se ganan puntos.
- Finalmente, para el elemento `2`, `a[2] > b[2]`, por lo que Alice recibe un punto.

El arreglo de retorno es `[1, 1]`, con la puntuación de Alice primero y la de Bob en segundo lugar.

---

## Descripción de la Función

Completa la función `compareTriplets` con los siguientes parámetros:

| Parámetro | Tipo | Descripción |
| :-------- | :--- | :---------- |
| `a`       | `int[3]` | La calificación del desafío de Alice |
| `b`       | `int[3]` | La calificación del desafío de Bob |

**Retorna:**

| Tipo | Descripción |
| :--- | :---------- |
| `int[2]` | El primer elemento es la puntuación de Alice y el segundo es la puntuación de Bob |

---

## Formato de Entrada

- La primera línea contiene 3 enteros separados por espacios, `a[0]`, `a[1]` y `a[2]`, los respectivos valores en el triplete `a`.
- La segunda línea contiene 3 enteros separados por espacios, `b[0]`, `b[1]` y `b[2]`, los respectivos valores en el triplete `b`.

### Restricciones

- `1 ≤ a[i] ≤ 100`
- `1 ≤ b[i] ≤ 100`

### Formato de Salida

Imprime dos enteros separados por un espacio: la puntuación total de Alice y la puntuación total de Bob.

---

## Enunciado Original

> Alice and Bob each created one problem for HackerRank. A reviewer rates the two challenges, awarding points on a scale from 1 to 100 for three categories: problem clarity, originality, and difficulty.
>
> The rating for Alice's challenge is the triplet `a = (a[0], a[1], a[2])`, and the rating for Bob's challenge is the triplet `b = (b[0], b[1], b[2])`.
>
> The task is to find their comparison points by comparing `a[0]` with `b[0]`, `a[1]` with `b[1]`, and `a[2]` with `b[2]`.
>
> - If `a[i] > b[i]`, then Alice is awarded 1 point.
> - If `a[i] < b[i]`, then Bob is awarded 1 point.
> - If `a[i] == b[i]`, then neither person receives a point.
>
> Comparison points is the total points a person earned.
>
> Given `a` and `b`, determine their respective comparison points.

---

## Ejemplos de Casos de Prueba

### Sample Input 0

```text
5 6 7
3 6 10
```

### Sample Output 0

```text
1 1
```

### Explicación 0

- `a[0] > b[0]` → `5 > 3` → Alice recibe 1 punto.
- `a[1] == b[1]` → `6 == 6` → nadie recibe puntos.
- `a[2] < b[2]` → `7 < 10` → Bob recibe 1 punto.

Resultado final: `[1, 1]`.

### Sample Input 1

```text
17 28 30
99 16 8
```

### Sample Output 1

```text
2 1
```

### Explicación 1

- `17 < 99` → Bob +1
- `28 > 16` → Alice +1
- `30 > 8` → Alice +1

Resultado final: `[2, 1]`.

---

## Tabla Resumen de Casos

| # | `a` | `b` | Salida | Explicación |
| :-: | :-- | :-- | :----- | :---------- |
| 0 | `5 6 7` | `3 6 10` | `1 1` | Alice gana la categoría 0, Bob la categoría 2 |
| 1 | `17 28 30` | `99 16 8` | `2 1` | Alice gana 2 categorías y Bob 1 |

---

## Enfoque Sugerido

1. Inicializar dos contadores, `alice = 0` y `bob = 0`.
2. Recorrer los índices `i = 0..2`.
3. Comparar `a[i]` con `b[i]` y sumar el punto correspondiente.
4. Retornar `[alice, bob]`.

### Complejidad

| Métrica | Valor |
| :------- | :----- |
| **Tiempo** | `O(1)` — siempre se comparan exactamente 3 elementos |
| **Espacio** | `O(1)` — solo dos contadores |

---

## Conceptos Clave

- Recorrido e iteración de arreglos
- Comparación de elementos
- Conteo de puntuaciones
- Entrada/salida básica

---

> Enlace del problema: **https://www.hackerrank.com/challenges/compare-the-triplets/problem**
