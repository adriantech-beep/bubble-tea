import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateName } from "../user/userSlice";
import { useNavigate } from "react-router-dom";
import Button from "../ui/Button";

function CreateUser() {
  const [username, setUsername] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    if (!username) return;
    dispatch(updateName(username));
    navigate("/menu");
  }
  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <input
        value={username}
        placeholder="Enter your name to order"
        onChange={(e) => setUsername(e.target.value)}
        className="rounded-full border border-violet-400 px-4 py-2 text-sm font-monsterrat-regular transition-all duration-300 text-violet-800 bg-violet-100 focus:outline-none focus:ring focus:ring-violet-800"
      />
      {username !== "" && <Button type="primary">Start ordering</Button>}
    </form>
  );
}

export default CreateUser;
