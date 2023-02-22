
import Form from "./components/form";
import Image from "./components/mail.png"


function App() {
  return (
    <main className='box-border flex items-center justify-center h-screen bg-blend-multiply bg-your-image bg-center bg-cover  overflow-y-hidden overflow-x-hidden '>


 
    <div  className="bg-[#f7f7f6] container w-[1000px] h-[500px]  mx-auto rounded-[32px] shadow-inner ... drop-shadow-2xl flex">
    
      <div className="w-1/2 p-5 hidden md:flex rounded-[32px] bg-gradient-to-r  via-[#e6daed] from-[#cc77e6f8] ...">

        <div className="justify-center">
        <img className="mt-12 object-center w-30 h-30 ..." src={Image}  alt={Image}/>
        </div>

          
      </div>
        
      <div className="w-1/2 p-3 sm:mx-auto">

      <div className="flex relative justify-center items-center ">
      <h1 className=" font-sans text-lg font-bold mt-[20px] flex pr-[320px] mb-2 animate-pulse">GET IN TOUCH</h1>
      </div>
 
      <div className="flex justify-center sm:mx-auto ">
        
      <Form/>

      </div>
        
      
        </div>

    </div>
    
    
        </main>
  );
}

export default App;
