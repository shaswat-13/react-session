import { useState } from "react";

function ProfileForm() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);

  return (
    <div>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Your name"
      />
      <input
        type="number"
        value={age}
        onChange={(e) => setAge(Number(e.target.value))}
        placeholder="Your age"
      />
      <p>{name}, {age} years old</p>
    </div>
  );
}

export default ProfileForm;