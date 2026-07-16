function Badge({ points, isVerified=False}) {
  return (
    <div>
      <p>Points: {points}</p>
      {isVerified && <span>✅ Verified</span>}
    </div>
  );
}

export default Badge;