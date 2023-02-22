import { BsFillPersonFill } from "react-icons/bs";
import { AiFillMail } from "react-icons/ai";
import { useState ,useRef } from "react";
import emailjs from '@emailjs/browser';
import { ToastContainer,toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function Form() {
  const form = useRef();
  const [errors, setErrors] = useState({});

  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',

  });


  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormState(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const errors = {};
    if (!formState.name) {
      errors.name = 'Please enter your name.';
    }
    if (!formState.email) {
      errors.email = 'Please enter your email address.';
    }
    if (!formState.message) {
      errors.message = 'Please enter a message.';
    }
    
    // If there are errors, set them in state and return early
    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      toast.error('🦄 Too Bad Need Fill Up All fields!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
      return;
    }

    

    emailjs.sendForm('service_970qz3p', 'template_a8470n9', form.current, 'qTj7p4_ukRXTE_tGf')
    .then((result) => {
        console.log(result.text);
        console.log("message sent");
    }, (error) => {
        console.log(error.text);
    });

    toast.success('🦄 Wow so easy!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      });

    console.log(formState);



     // Do something with the form data
  };
  return (
<>

<ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="colored"
/>
 <form ref={form} className="mt-[10px]" onSubmit={handleSubmit}>

 <div className={`relative flex items-center mb-4 px-2 mx-2 ${errors.name?'text-[#a09494]': 'text-[#942727]'}`}>
  
  <div className="absolute pointer-events-none pl-3 text-[#999]"><BsFillPersonFill/></div>
  <input type="text" name="name" placeholder={errors.name?errors.name:`Name`} className={`font-sans static sm:w-60 w-50 md:w-80 lg:w-100 font-medium  ${errors.name?'placeholder-red-500 border border-[#902222] ': 'placeholder-[#999] border border-none'} text-[16px] pl-9 rounded-r-[30px] rounded-l-[20px] ring-1 ring-[#e0d4e4] p-3 focus:outline-none hover:bg-slate-300  shadow-sm`} onChange={handleInputChange} />

  </div>

  <div className="relative flex items-center mb-4 px-2 mx-2">
  <div className="absolute pointer-events-none pl-3 text-[#999]"><AiFillMail/></div>
  <input type="email" name="email" placeholder={errors.email?errors.email:`Email`}  className={`font-sans static sm:w-60  w-50 md:w-80 lg:w-100 font-medium ${errors.email?'placeholder-red-500 border border-[#902222] ': 'placeholder-[#999] border border-none'}  text-[16px] pl-9 rounded-r-[30px] rounded-l-[20px] ring-1 ring-[#e0d4e4] p-3 focus:outline-none  hover:bg-slate-300 shadow-sm`} onChange={handleInputChange} />

  </div>

  <div className="relative flex items-center px-2 mx-2">
  <textarea rows="6" name="message" placeholder={errors.message?errors.message:`Message`} className={`font-sans static sm:w-60 w-50 md:w-80 lg:w-100 font-medium ${errors.message?'placeholder-red-500 border border-[#902222] ': 'placeholder-[#999]border border-none'}  text-[16px] pl-9 rounded-r-[30px] rounded-l-[20px] ring-1 ring-[#e0d4e4] p-3 focus:outline-none  hover:bg-slate-300 shadow-sm`} onChange={handleInputChange} />
  </div>


  <div className="relative flex items-center px-2 mx-2">
  <button type="Submit"  className="font-sans bg-[#a541db] hover:bg-[#b270d6] static sm:w-60 w-full md:w-80 lg:w-100 font-medium text-white text-[16px]  rounded-r-[30px] rounded-l-[20px] ring-1 ring-[#e0d4e4] p-3 focus:outline-none  shadow-sm text-center mt-7">Send</button>
  </div>
  
</form>
    </>
  );
}
