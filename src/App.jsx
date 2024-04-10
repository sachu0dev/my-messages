import { useEffect, useState } from "react";
import Card from "./component/Card";

function App() {
  const [data, setData] = useState([]);

  async function getData() {
    const res = await fetch("https://simple-contact-seven.vercel.app/messages");
    const data = await res.json();
    setData(data);
    console.log(data);
  }
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <div className="flex p-12 items-center flex-col min-h-screen">
        <h1 className="text-3xl font-bold mb-12">messages</h1>
        <div className="flex flex-wrap justify-center items-center gap-6">
          {data.map((item) => {
            return <Card key={item._id} item={item} />;
          })}
        </div>
      </div>
    </>
  );
}

export default App;
