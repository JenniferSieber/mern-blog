import { Button, TextInput } from "flowbite-react";
import { useDispatch, useSelector } from "react-redux";

export default function DashProfileComponent() {
  const currentUser = useSelector((state) => state.user);
  const dispatch = useDispatch();

  console.log(
    `currentUser Profile: ${currentUser.currentUser.profilePicture}`,
    currentUser
  );

  const handleSubmit = () => {
    console.log("handleSubmit");
  };

  const handleImageChange = async () => {
    console.log("Async handle image change - ");
  };
  const handleChange = async () => {
    console.log("Async handleChange on TextInputs");
  };
  return (
    <div className="max-w-lg mx-auto p-3 w-full">
      <h1 className="my-7 text-center font-semibold text-3xl">Profile</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="w-32 h-32 self-center cursor-pointer shadow-md overflow-hidden rounded-full">
          <img
            src={currentUser.currentUser.profilePicture}
            alt="user"
            className="rounded-full w-full h-full object-cover border-8 border-[lightgray]"
          />
        </div>
        <TextInput
          type="text"
          id="username"
          placeholder="username"
          defaultValue={currentUser.currentUser.username}
          onChange={handleChange}
        />
        <TextInput
          type="email"
          id="email"
          placeholder="email"
          defaultValue={currentUser.currentUser.email}
          onChange={handleChange}
        />
        <TextInput
          type="password"
          id="password"
          placeholder="password"
          onChange={handleChange}
        />
        <Button type="submit" gradientDuoTone="purpleToBlue" outline>
          Update
        </Button>
      </form>
      <div className="text-red-500 flex justify-between mt-5">
        <span className="cursor-pointer">Delete Account</span>
      </div>
    </div>
  );
}
