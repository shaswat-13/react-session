function CounterDisplay({ value }) {
  // ❌ This is wrong — never do this
  value = value + 1;

  return <p>Value: {value}</p>;
}

export default CounterDisplay;