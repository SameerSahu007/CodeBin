import { Link, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

export default function Paste() {
  let { pasteId } = useParams();
  const url:string = import.meta.env.VITE_CODE_ROUTE_URL + pasteId
  console.log(url)

  function handleCopy() {
    navigator.clipboard.writeText(url);
    toast.success('🦄 LINK COPIED!', {
      position: "top-center",
      autoClose: 200,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  }

  return (
    <div className='flex items-center justify-center h-screen font-firacode bg-[#292626]'>
      <div className='flex flex-col items-center'>
        <p className="mb-4 text-white text-xl">{url}</p>
        <div>
        <button className='p-2 bg-blue-600 text-white hover:bg-blue-700 rounded-xl mx-2 w-30'>
        <Link to={url}>
           Open
           </Link>
          </button>
          <button className='p-2 bg-blue-600 text-white hover:bg-blue-700 rounded-xl w-30'
          onClick={handleCopy}>
            Copy Link
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

