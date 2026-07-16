function Wheel() {
  return <span>🛞</span>;
}

function Car() {
  return (
    <div>
      <span>🚗</span>
      <Wheel />
      <Wheel />
      <Wheel />
      <Wheel />
    </div>
  );
}

export default Car;