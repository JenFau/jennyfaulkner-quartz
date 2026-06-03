---
publish: true
created: 2026-05-03T15:55:49.270Z
modified: 2026-05-03T15:55:49.270Z
---

This note has an emphasis on how **lists, dictionaries, loops, booleans, and conditionals** combine in practical code.

## 1. Lists – storing ordered collections

A **list** is an ordered sequence of items.

### Syntax

```python
friends = ["Tommy", "Isabel", "Daniel"]
```

### Key points

- Square brackets: `[]`
- Items separated by commas
- Ordered and indexed starting at **0**

```python
friends[0]   # "Tommy"
friends[1]   # "Isabel"
friends[2]   # "Daniel"
```

### Common operations

```python
friends.append("Otto")   # add item
friends.remove("Tommy")  # remove item
len(friends)             # number of items
```

## 2. Dictionaries – storing labelled data

A **dictionary** stores data as **key–value pairs**.

### Syntax

```python
person = {
    "age": 28,
    "favourite_colour": "red"
}
```

### Key points

- Curly brackets: `{}`
- Format: `"key": value`
- Access by key, not position

```python
person["age"]   # 28
```

### Add or update

```python
person["city"] = "London"
```

## 3. Booleans – true or false values

A **boolean** is either:

```python
True
False
```

Used for:

- Comparisons
- Decision making

### Examples

```python
5 > 3        # True
10 == 7      # False
```

### Store in variables

```python
is_raining = True
```

## 4. Comparisons – creating booleans

Comparison operators:

- `>` greater than
- `<` less than
- `>=` greater than or equal
- `<=` less than or equal
- equal
- `!=` not equal

Example:

```python
age = 28
age > 18     # True
age == 18    # False
```

## 5. Conditionals – making decisions

An **if statement** runs code only when a condition is true.

### Syntax

```python
if condition:
    do_something()
```

### Example

```python
time_to_complete = 3

if time_to_complete <= 5:
    print("Do it now")
```

### With an alternative

```python
if time_to_complete <= 5:
    print("Do it now")
else:
    print("Do it later")
```

Key rules:

- Colon after the condition
- Indented code block underneath (commonly 4 spaces)

## 6. Loops – repeating actions

A **for loop** repeats code for each item in a list.

### Syntax

```python
for item in list_name:
    do_something(item)
```

### Example

```python
tasks = ["Email boss", "Write report", "Buy milk"]

for task in tasks:
    print(task)
```

## 7. Combining everything – the standard pattern

A common structure is a **list of dictionaries**, processed by a **loop**, filtered by an **if** condition that evaluates to a **boolean**, with results stored in another list.

### Step 1 – store tasks as a list of dictionaries

```python
tasks = [
    {"name": "Email boss", "time": 3},
    {"name": "Write report", "time": 60},
    {"name": "Buy milk", "time": 5}
]
```

### Step 2 – create an empty list for later tasks

```python
tasks_for_later = []
```

### Step 3 – loop through tasks

```python
for task in tasks:
    print(task["name"])
```

### Step 4 – conditional inside the loop

```python
for task in tasks:
    if task["time"] <= 5:
        print("Do now:", task["name"])
    else:
        tasks_for_later.append(task)
```

### Step 5 – inspect the result

```python
print(tasks_for_later)
```

## Mental model

This nesting is the main conceptual shift:

- A **list** contains many items
- Each item may be a **dictionary** with labelled fields
- A **for loop** iterates across the list
- A **comparison** produces a **boolean**
- An **if/else** uses the boolean to choose an action
- Optional: results can be **collected** into a new list

## One-page syntax reference

### List

```python
items = ["a", "b", "c"]
items[0]
items.append("d")
len(items)
```

### Dictionary

```python
person = {"age": 28}
person["age"]
person["city"] = "London"
```

### Boolean and comparisons

```python
True
False
5 > 3
10 <= 10
"vegan" == "vegan"
"vegetarian" != "vegan"
```

### Conditional

```python
if condition:
    do_this()
else:
    do_that()
```

### Loop

```python
for item in items:
    print(item)
```

### Combined pattern

```python
later = []

for item in items:
    if condition:
        action
    else:
        later.append(item)
```

## Common pitfalls

### Bracket types

- Lists use `[]`
- Dictionaries use `{}` when defining
- Both lists and dictionaries use `[]` when accessing items:
  - list index: `friends[0]`
  - dictionary key: `person["age"]`

### Indentation matters

Wrong:

```python
if x > 5:
print("Hi")
```

Correct:

```python
if x > 5:
    print("Hi")
```

### Assignment vs comparison

```python
x = 5      # assign
x == 5     # compare
```
