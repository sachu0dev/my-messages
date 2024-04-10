const Card = ({ item }) => {
  return (
    <div className="w-[35vw] h-[30vh] flex  p-4  border-2 flex-col">
      <h1 className="text-2xl font-bold">{item.name}</h1>
      <h2 className="text-lg mb-4">{item.email}</h2>
      <p className="w-[30vw]">{item.message}</p>
    </div>
  );
};

export default Card;
