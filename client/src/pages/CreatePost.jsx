import { Button, FileInput, Select, TextInput } from "flowbite-react";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

export default function CreatePost() {
  const [file, setFile] = useState(null);
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();

  const handleUploadImage = () => {
    console.log("handleUploadImage");
  };

  const handleSubmit = async (e) => {
    console.log(handleSubmit);
    e.preventDefault();
  };
  
  return (
    <div className="p-3 max-w-3xl mx-auto min-h-screen">
      <h1 className="text-center text-3xl my-7 font-semibold">Create a Post</h1>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-4 sm:flex-row justify-between">
          <TextInput
            type="text"
            placeholder="Title"
            required
            id="title"
            className="flex-1"
            onChange={() => setFormData({ ...FormData, title: e.target.value })}
          />
          <Select
            onChange={(e) =>
              setFormData({ ...formData, category: e.target.value })
            }
          >
            <option value="uncategorized">Select a category</option>
            <option value="javascript">JavaScript</option>
            <option value="reactjs">React.js</option>
            <option value="nextjs">Next.js</option>
          </Select>
        </div>
        <div className="flex gap-4 items-center justify-between border-4 border-teal-500 border-dotted p-3">
          <FileInput
            type="file"
            accept="image/*"
            onChange={(e) => setFile(e.target.files[0])}
          />
          <Button
            type="button"
            gradientDuoTone="purpleToBlue"
            size="sm"
            outline
            onClick={handleUploadImage}
            // disabled={imageUploadProgress}
          >
            Upload Image
          </Button>
        </div>
        <img
          src=''
          alt="uploaded image"
          className="w-full h-72 object-cover" 
        />
        <Button
          type="submit"
          gradientDuoTone="purpleToPink"
        >
          Publish
        </Button>
      </form>
    </div>
  );
}
