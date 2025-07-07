import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useGoogleSheetMutation } from "@/hooks/useGoogleSheetMutation";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

export const LoginPage = () => {
  const [form, setForm] = useState({ username: "", password: "" });
  const { mutate, loading } = useGoogleSheetMutation();
  const navigate = useNavigate();
  const handleLogin = async () => {
    try {
      const res = await mutate({
        method: "POST",
        type: "login",
        payload: form,
      });
      if (res.apiKey) {
        localStorage.setItem("apiKey", res.apiKey);
        navigate("/haryle");
      } else {
        alert("Invalid credentials");
      }
    } catch (error) {
      console.log(error);
    }
  };
  if (localStorage.getItem("apiKey") != null)
    return <Navigate to={"/haryle"} />;
  return (
    <div className="flex justify-center items-center  h-full min-h-screen">
      <div className="max-w-[400px] bg-yellow-50 p-10 flex flex-col space-y-2 rounded-3xl ">
        <h2 className="text-center text-xl font-bold">Đăng nhập</h2>
        <Input
          placeholder="Username"
          onChange={(e) => setForm({ ...form, username: e.target.value })}
        />
        <Input
          type="password"
          placeholder="Password"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />
        <Button className="cursor-pointer" onClick={handleLogin}>
          {loading ? "Loading" : "Login"}
        </Button>
      </div>
    </div>
  );
};
