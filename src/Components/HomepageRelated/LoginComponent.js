import { useState , useEffect } from "react"
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const LoginComponent = () => {

    const navigate = useNavigate();
    const [formData, setFormData] = useState({ name: '', email: '' });
    const dispatch = useDispatch()

    const [users,setUsers] = useState([])

    const handleSetUsername = (username) => {
      dispatch({
        type : "setusername" ,
        payload : username
      })
    }

    const handleLogIn = () => {
      dispatch({
        type : "setloggedin"
      })
    }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let flag=false;
    users.map((user) =>{
      if(user.name===formData.name){
        if(user.email===formData.email) {
          handleSetUsername(formData.name)
          flag=true;
        }else{
          console.log("check password");
        }
      }
    })
    if(flag) {
      handleLogIn()
      navigate('/homepage/main');
    }else{
      alert('not a user');
      navigate('/')
    }
  };

  const getUsers = async () => {
    const response = await fetch('https://techzonebackenddeploy-q6sk.onrender.com/api/getAllUsers', {
      method: 'GET',
    })
    const data = await response.json();
    console.log(data)
    setUsers(data);
  }

  useEffect(() => {
    getUsers();
  }, [])

  return (
    <div className="bg-gray-50 min-h-screen flex items-center justify-center">
      <div className="bg-cyan-100 flex rounded-2xl shadow-lg max-w-3xl  items-center">
        <img className="hidden md:block rounded-tl-2xl rounded-bl-2xl md:w-1/2" src="https://images.pexels.com/photos/5632388/pexels-photo-5632388.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
        <div className="md:w-1/2 px-8 md:px-16 bg-gray-50 rounded-xl mx-5 py-3">
          <h2 className="font-bold text-2xl text-[#020202] flex justify-center">Login</h2>
          <p className="text-xs mt-4 text-[#020202] flex justify-center">If you are already a member, easily log in</p>
          <form onSubmit={handleSubmit} method="post" className="flex flex-col gap-4">
            <input className="p-2 mt-8 rounded-xl border" type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" required />
            <div class="relative">
              <input className="p-2 rounded-xl border w-full" type="email" name="email" value={formData.email} onChange={handleChange} placeholder="email" required />
            </div>
            <button className="bg-[#002D74] rounded-xl text-white py-2 hover:scale-105 duration-10" type="submit">Login</button>
          </form>
          <div className="mt-5 text-xs border-b border-[#002D74] py-4 text-[#020202]">
            <a href="#">Forgot your password?</a>
          </div>

          <div className="mt-3 text-xs flex justify-between items-center text-[#020202]">
            <p>Don't have an account?</p>
            <button className="py-2 px-5 bg-blue-100 border rounded-xl hover:scale-110 duration-300" onClick={() => navigate('/register')}>Register</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginComponent