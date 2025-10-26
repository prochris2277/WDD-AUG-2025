import { TestimonialCard } from "./components/TestimonialCard";

function App() {
  const userTestimonies = [
    {
      name: "Promise",
      testimony: "This is awesome"
    },
    {
      name: "Favour",
      testimony: "This is amazing"
    },
     {
      name: "Samuel",
      testimony: "Cool stuff"
    },
    {
      name: "Samuel",
      testimony: "Cool stuff"
    },
    {
      name: "Samuel",
      testimony: "Cool stuff"
    },
    {
      name: "Samuel",
      testimony: "Cool stuff"
    },
  ]

  return (
    <div className="App">
      <h1>What our users are saying</h1>
      <div className="flex w-full gap-6 justify-between p-8">
        {userTestimonies.map((userTestimony, index) => (
          <TestimonialCard key={index} name={userTestimony.name} testimony={userTestimony.testimony}/>
        ))}
      </div>
    </div>
  );
}

export default App;