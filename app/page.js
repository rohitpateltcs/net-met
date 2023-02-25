import CardItems from "@/components/CardItems";

//https://my-json-server.typicode.com/dmitrijt9/book-api-mock/books

const getProjectBuild = async () => {
  const res = await fetch(
    `https://my-json-server.typicode.com/dmitrijt9/book-api-mock/books`
  );

  const books = await res.json();
  console.log(books);
  return books;
};

const HomePage = async () => {
  const data = await getProjectBuild();

  return (
    <div className="">
      <div className="bg-red-500 ">
        <img
          src="https://m.media-amazon.com/images/I/61Ly9zlsGxL._SX1500_.jpg"
          alt=""
          className="w-full h-40 lg:h-52 xl:h-60"
        />
      </div>
      <div>
        <h1>Project Build</h1>
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {data.map((project) => (
            <CardItems id={project.id} img={project.cover_image} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
