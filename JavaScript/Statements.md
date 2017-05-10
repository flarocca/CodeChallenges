## Find the loop

Write a code that detects loops in a linked list. (Assume that there are not repeated values in the list)

- Example Input:  1 -> 2 -> 3 -> 4 -> 5 -> 2

- Example Output: 1 -> 2 -> 3 -> 4 -> 5

```
Class Node {
  Int value	
  Node next
}
```


## Get the minimal difference

It's the annual Halloween party at your company, and for the special event of the night you want a scene where K employees dress up as soldiers and salute.
Nevertheless, you want to buy all the costumes in the same size, so you can do small changes for the different heights of the employees.
Therefore you need to select the K employees from the group of N such that the height difference between the tallest and shortest in the groups is minimized.
Write a function that given N, K, and the employee's height, outputs the minimum difference.

<table>
  <tbody>
    <tr>
      <th align="center">Input</th>
      <th align="right">Output</th>
    </tr>
    <tr>
      <td align="left">
        <ul>
          <li>N = 3</li>
          <li>K = 3</li>
          <li>Heights = [5, 2, 4]</li>
        </ul>
      </td>
      <td align="right">1</td>
    </tr>
  </tbody>
</table>


## Get Primes less than

Given a number N, write a function that prints all the primes smaller than or equal to N.

Input|Output
---|---
10|[2, 3, 5, 7]
20|[2, 3, 5, 7, 11, 13, 17, 19]
