const data = { name: "surya", age: "25" };

export const Destructure = () => {
  const { name, age } = data;
  return (
    <>
      <h1>
        My Name {name} and Age {age}
      </h1>
    </>
  );
};
