import { Select } from "antd";

export default function Filter() {
  return (
    <div className="w-full flex justify-center my-8">
      <input
        type="text"
        placeholder="Search for a city..."
        className="w-1/2 p-4 rounded-lg shadow-sm focus:outline-none focus:ring-2 bg-secondary"
      />
      <Select/>
    </div>
  );
}