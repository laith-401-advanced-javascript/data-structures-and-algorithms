
# LEFT JOINs

# Whiteboeard 

# Feature Tasks  : 

Write a function that LEFT JOINs two hashmaps into a single data structure.
The first parameter is a hashmap that has word strings as keys, and a synonym of the key as values.
The second parameter is a hashmap that has word strings as keys, and antonyms of the key as values.
Combine the key and corresponding values (if they exist) into a new data structure according to LEFT JOIN logic.
LEFT JOIN means all the values in the first hashmap are returned, and if values exist in the “right” hashmap, they are appended to the result row. If no values exist in the right hashmap, then some flavor of NULL should be appended to the result row.
The returned data structure that holds the results is up to you. It doesn’t need to exactly match the output below, so long as it achieves the LEFT JOIN logic.
Avoid utilizing any of the library methods available to your language.


## Algorithm 
 - create a function that take a two hash parameter 
 - create  array to store the result 
 - looping throgh kys of the obj 
 - adding the key and the value to a new array 
 - check if the second hash has the same key if yes add the value to the array if not add null


## Approach & Efficiency
this Challenge take from me 50 min to do tha


   ### - input ----> 2 hash table
   ###  - output ----> array 

## Big O:

- **Time** O(n2)  >> 
- **space** O(n) >> 


## Action Link 

[ Action Link]

(https://github.com/laith-401-advanced-javascript/data-structures-and-algorithms/actions/runs/250446381)


