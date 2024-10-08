import Link from "next/link"

function Blog(){

    let blog = [
        {"id": 1,
    "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    "price": 109.95,
  },
{
    "id": 2,
    "title": "Mens Casual Premium Slim Fit T-Shirts ",
    "price": 22.3,
},
{ "id": 3,
    "title": "Mens Cotton Jacket",
    "price": 55.99,}
    ]

    return(
        <div className="container mx-auto text-center p-20">

        <h1 className="font-blod text-5xl">All Blogs</h1>
        {blog.map((data)=> ( 
        <Link  key={data.id} href={`/blog/${data.title}`}>
        <h1 className="border border-blue-600 p-2 px-3 my-1">
            {data.title}</h1>
         </Link>
        ))}
        </div>
    )
}
export default Blog