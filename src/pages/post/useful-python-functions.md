---
layout: ../../layouts/post.astro
title: Useful Python Functions
description: Python functions that can help you write less code which is also readable.
dateFormatted: March 15th, 2020
---

![Useful Python Functions](/assets/images/posts/python-banner.jpg)
I am going to be discussing two useful functions in [Python](https://python.org/) `enumerate()` and `zip()`.

## enumerate()

Suppose we have a list and we want to keep track of both the iterable and the count of the iterable. To perform this task Python comes with a built-in function called `enumerate()`.

Let's understand this better with the help of an example:

```python
>>> some_values = [2,7,4,3,2]
>>> list(enumerate(some_values))
[(0, 2), (1, 7), (2, 4), (3, 3), (4, 2)]
```

Consider a list with some values. When we perform `enumerate()` on this list. We get tuples of the form (counter, value).

Now by default the counter starts at 0 unless we specify otherwise.

```python
>>> some_values = [2,7,4,3,2]
>>> list(enumerate(some_values, 1))
[(1, 2), (2, 7), (3, 4), (4, 3), (5, 2)]
```

Here is another example where we set the start counter to 1. This is helpful in cases where we want to visualize the index of an element in a list with 1 instead of a 0. Also, we can choose the start counter to be any integer not only 1.

## zip()

Consider two tuples, one consisting of names of people and the other their respective ages.

```python
name = ("John", "Charles", "Mike")
age = (21, 43, 35)
```

Now, what the `zip()` function does is that it takes in 'n' number of iterables and then for each of the passed iterables it pairs the first items, then second items until it finds the last item in the iterable.

```python
>>> list(zip(name,age))
[('John', 21), ('Charles', 43), ('Mike', 35)]
```

The `zip()` function is also useful when dealing with matrices. With the help of this function we can find the transpose of a matrix very easily.

```python
>>> matrix = [[1,2,3],[4,5,6],[7,8,9]]
>>> list(zip(*matrix))
[(1, 4, 7), (2, 5, 8), (3, 6, 9)]
```

Yes, creating transpose of a matrix is that easy!
