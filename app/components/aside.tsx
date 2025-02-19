import { Pencil, Trash2, Plus } from "lucide-react";
function Aside() {
    return (
        <div className="flex flex-col  bg-blue-100 w-[150px] sm:w-60 min-h-[calc(100vh-6rem)] gap-6 p-2 pt-4 sm:p-4 sm:text-2xl">
<h1 className= "flex justify-center items-center text-slate-700 text-center font-bold rounded-full bg-blue-400 w-[80px] sm:w-32 ">Projects:</h1>

<div className="flex gap-6 sm:gap-20 justify-between items-center">
<p>Mock</p>
    <div className="flex gap-4">
    <Pencil size={24} className="text-blue-500 hover:cursor-pointer hover:text-blue-600" />
    <Trash2 size={24} className="text-red-500 hover:cursor-pointer hover:text-red-600" />
    </div>
</div>
<div className="flex  justify-between items-center">
<h1 className="text-slate-700 text-center font-bold rounded-full bg-blue-400 w-[110px] sm:w-40">New project</h1>
<Plus size={24} className="text-blue-500 hover:cursor-pointer hover:text-blue-600" />
</div>
</div>
    )}

export default Aside
