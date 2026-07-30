function isValidParentheses(str) {
  let stack = [];
  const map = {
    ")": "(",
    "]": "[",
    "}": "{",
  };

  for (let ch of str) {
    if (map[ch]) {
      const top = stack.pop();
      if (top != map[ch]) return false;
    } else {
      stack.push(ch);
    }
  }
  return stack.length === 0;
}

console.log(isValidParentheses("[()]"));
// We walk through the string one character at a time.

// If we see an opening bracket, we push it into a stack — like stacking plates.

// When we see a closing bracket, we check:

// “Does this closing bracket match the last opening bracket on the stack?”

// If yes → we pop it (remove it)

// If no → the string is invalid.

// At the end:

// If the stack is empty → everything opened was properly closed → valid.

// If anything is left → some bracket never got matched → invalid.

// One-line summary

// “Use a stack. Push openings, pop when matching closings appear. If everything matches and stack becomes empty → parentheses are valid.”

// 🧠 2. Why keys have double quotes " ) ] } "?

// Because JavaScript object keys:

// must be valid identifiers if unquoted

// ) ] } are not valid identifiers

// So we must write:

// ")": "("

// Double quotes are required to use symbols as keys.
