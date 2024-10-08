import Link from "next/link"
export default function Dashboard() {
  return (
    <div>
    <h1 className="flex justify-center">welcome to Dashboard</h1>
    <Link className="p-2 text-center m-3 font-serif
            text-lg hover:bg-blue-200 bg-blue-400" href={"/dashboard/profile"}>
           Profile </Link>
            <Link className="p-2 text-center  bg-blue-400 font-serif
            text-lg hover:bg-blue-200" href={"/dashboard/settings"}>
           Settings </Link>
    </div>
  )
}
