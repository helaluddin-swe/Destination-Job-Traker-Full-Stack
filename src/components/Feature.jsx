
import { featuresData } from "../utils/data";



const Feature = () => {
  return (
    <div className="ml-4 mr-4 md:mr-20 md:ml-20 mx-auto bg-gray-400 px-4 ">
      <h2 className="text-center font-light text-2xl md:text-3xl mb-4">
        Focus on What Matters: Our Core Features
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 ">
        {featuresData.map((item) => (
          <div
            key={item.id}
            className="h-40 w-full md:w-70 border rounded-2xl bg-gray-100 hover:bg-gray-200 cursor-pointer px-4 py-3 grow"
          >
            <div className="flex gap-4 mb-4 items-center">
              <item.icon className={item.color} />
              <p className="font-bold">{item.title}</p>
            </div>
            <p className="text-md">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feature;
