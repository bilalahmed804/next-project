import Link from "next/link";

export default function DashboardLayout({ children }) {
    return (<section className="min-h-screen flex">
        <div className="w-1/4 border-r-2 border-r-purple-500">
            <Link className="p-2 text-center w-full block bg-slate-200 font-serif
            text-lg hover:bg-slate-300" href={"/dashboard/profile"}>
           Profile </Link>
            <Link className="p-2 text-center w-full block bg-slate-200 font-serif
            text-lg hover:bg-slate-300" href={"/dashboard/settings"}>
           Settings </Link>
        </div>

        <div className="w-2/3 bg-slate-300">{children}</div>
        </section>)
  }