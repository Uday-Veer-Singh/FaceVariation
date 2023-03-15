## FaceVariation

<a href="https://uday-2997.github.io/FaceVariation/" target=_blank>Click here</a>

The FaceVariation project is a simple and small-scaled use of `HTML`, `CSS`, `JavaScript`. Here, every click on face will change face expression
and there are total three face expressions.

### keyframes and transform in CSS

The `@keyframes` `CSS` at-rule controls the intermediate steps in a `CSS` animation sequence by defining styles for keyframes (or waypoints) along the animation sequence.
This gives more control over the intermediate steps of the animation sequence than transitions.

```css
/* syntax for keyframes */

@keyframes slidein {
  from {
    transform: translateX(0%);
  }

  to {
    transform: translateX(100%);
  }
}
```

The transform `CSS` property lets you `rotate`, `scale`, `skew`, or `translate` an element. It modifies the coordinate space of the ``CSS`
visual formatting model.

```css
/* syntax for tranform */

transform: matrix(1, 2, 3, 4, 5, 6);
transform: translate(120px, 50%);
transform: scale(2, 0.5);
transform: rotate(0.5turn);
transform: skew(30deg, 20deg);
transform: scale(0.5) translate(-100%, -100%);
```

```css
/* Example used in project */

@keyframes oom {
  0% {
    transform: scale(14.95);
  }
  75% {
    transform: scale(15.75);
  }
  100% {
    transform: scale(14.95);
  }
}
```

### function(), Math.random and if-else in JavaScript

`Functions` are one of the fundamental building blocks in `JavaScript`. A `function` in `JavaScript` is similar to a procedure—a set of statements that performs a task or calculates a value, but for a procedure to qualify as a function, it should take some input and return an output where there is some obvious relationship between the input and the output. To use a function,
you must define it somewhere in the scope from which you wish to call it.
The statement `return` specifies the value returned by the function:

```javascript
// Syntax for function()

function square(number) {
  return number * number;
}
```

The `Math.random()` static method returns a floating-point, pseudo-random number that's greater than or equal to 0 and less than 1, with approximately uniform distribution over that range — which you can then scale to your desired range. The implementation selects the initial seed to the random number generation algorithm; it cannot be chosen or reset by the user.

```javascript
// Syntax for Math.random()

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
```

The `if...else` statement executes a statement if a specified condition is `truthy`. If the condition is falsy, another statement in the optional `else` clause will be executed.

```javascript
// Syntax for if-else()

function testNum(a) {
  let result;
  if (a > 0) {
    result = "positive";
  } else {
    result = "NOT positive";
  }
  return result;
}
```

```javascript
/* Example used in project */

function moody(seed) {
  const low = document.getElementById("sad");
  const mid = document.getElementById("silent");
  const high = document.getElementById("smile");
  const num = ~~(Math.random() * 2) ? true : false;
  if (seed === 1) {
    low.style.display = "none";
    if (num) {
      mid.style.display = "block";
    } else {
      high.style.display = "block";
    }
  }
  if (seed === 2) {
    mid.style.display = "none";
    if (num) {
      high.style.display = "block";
    } else {
      low.style.display = "block";
    }
  }
  if (seed === 3) {
    high.style.display = "none";
    if (num) {
      low.style.display = "block";
    } else {
      mid.style.display = "block";
    }
  }
}
```

### References

- [mdn web docs](https://developer.mozilla.org/en-US/docs/Web)
- [codepen](https://codepen.io/trending)
